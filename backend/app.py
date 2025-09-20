from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

# Enable CORS (allow frontend to connect)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # change to ["http://localhost:5173"] for safety
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load plant data
with open("plants.json") as f:
    plants_data = json.load(f)


@app.get("/")
def root():
    return {"message": "Plant AI Backend running!"}


@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    # For now: just return first plant (simulate AI)
    return {"prediction": plants_data[0]}  # always Tomato - Healthy


@app.get("/image-detail/{plant_id}")
def image_detail(plant_id: int):
    plant = next((p for p in plants_data if p["id"] == plant_id), None)
    if plant:
        return plant
    return {"error": "Plant not found"}
