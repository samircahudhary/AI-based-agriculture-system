from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import json
import os

app = FastAPI()

# Enable CORS (so frontend on :5173 can talk to backend :8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint
@app.get("/")
def root():
    return {"message": "Plant AI Backend running!"}


# Load plant data from data/plants.json
def load_plants():
    file_path = os.path.join(os.path.dirname(__file__), "data", "plants.json")
    with open(file_path, "r") as f:
        return json.load(f)


# Mock prediction endpoint (uses uploaded file + optional metadata)
@app.post("/predict")
async def predict(
    file: UploadFile = File(...),
    category: str = Form("plant"),
    state: str = Form(""),
    plantName: str = Form(""),
    symptoms: str = Form("")
):
    plants = load_plants()

    # If plantName is given → try to match it from dataset
    if plantName:
        for p in plants:
            if p["name"].lower() == plantName.lower():
                return {
                    "name": p["name"],
                    "description": p["description"],
                    "tips": p.get("tips", "No tips available"),
                    "url": p["url"],
                    "similar_images": plants[:4]  # return first 4 as related
                }

    # Fallback → just return first entry
    sample = plants[0]
    return {
        "name": sample["name"],
        "description": sample["description"],
        "tips": sample.get("tips", "No tips available"),
        "url": sample["url"],
        "similar_images": plants[:4]
    }


# Fetch detail by plant name
@app.get("/image-detail/{name}")
async def get_image_detail(name: str):
    plants = load_plants()
    for p in plants:
        if p["name"].lower() == name.lower():
            return p
    return {"error": f"Plant '{name}' not found"}
