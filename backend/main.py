
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EnhanceRequest(BaseModel):
    section: str
    content: str

class ResumeData(BaseModel):
    name: str
    experience: str
    education: str
    skills: str
@app.post("/enhance")
async def enhance_resume(request: Request):
    data = await request.json()
    summary = data.get("summary", "")
    # You can use AI here later; this is just a dummy improvement
    enhanced = f"{summary} (enhanced by AI ✨)"
    return {"summary": enhanced}

@app.post("/save-resume")
async def save_resume(resume: ResumeData):
    with open("saved_resume.json", "w") as f:
        json.dump(resume.dict(), f)
    return {"status": "saved"}

