from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import asyncio
import random
import logging
from datetime import datetime

# ── Logging setup ─────────────────────────────────────────────────────────────
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s  %(levelname)s  %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger("gastro-care-chatbot")

# ── App ────────────────────────────────────────────────────────────────────────
app = FastAPI(
    title="Gastro Care Medical Chatbot — Dummy Backend",
    description="Dummy backend for Gastro Care AI. Returns mock gastroenterology responses.",
    version="1.0.0",
)

# ── CORS — allow Next.js dev server ───────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Tighten this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Schemas ────────────────────────────────────────────────────────────────────
class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str
    timestamp: str

# ── Gastro-specific mock responses ────────────────────────────────────────────
MOCK_RESPONSES: dict[str, str] = {
    "stomach pain": (
        "Stomach pain can result from various causes such as indigestion, gas, gastritis, or IBS. "
        "If the pain is severe, persistent, or accompanied by fever or vomiting, please consult a gastroenterologist promptly."
    ),
    "abdominal pain": (
        "Abdominal pain has many possible causes including gas, constipation, gastritis, or more serious conditions like appendicitis. "
        "Severe or persistent abdominal pain — especially with fever — warrants immediate medical attention."
    ),
    "nausea": (
        "Nausea is commonly caused by indigestion, viral infections, or food intolerance. "
        "Small, bland meals and staying hydrated can help. If nausea persists beyond 48 hours or is accompanied by severe vomiting, see a doctor."
    ),
    "vomiting": (
        "Vomiting can be triggered by infections, food poisoning, or digestive disorders. "
        "Stay hydrated with small sips of water or oral rehydration solution. Seek medical help if vomiting is persistent, bloody, or accompanied by severe pain."
    ),
    "diarrhea": (
        "Diarrhea is often caused by infections, food intolerances, or IBS. "
        "Staying well-hydrated is crucial. Avoid dairy and fatty foods temporarily. If diarrhea lasts more than 2 days or contains blood, consult a doctor."
    ),
    "constipation": (
        "Constipation is common and often relieved by increasing fiber intake, drinking more water, and regular physical activity. "
        "If constipation is chronic or accompanied by pain or blood, a gastroenterologist should evaluate it."
    ),
    "bloating": (
        "Bloating is usually caused by excess gas, food intolerances (like lactose or gluten), or IBS. "
        "Eating slowly, avoiding carbonated drinks, and identifying trigger foods can help."
    ),
    "heartburn": (
        "Heartburn is a burning sensation caused by stomach acid refluxing into the esophagus. "
        "Avoid spicy, fatty, or acidic foods, and don't lie down right after eating. Frequent heartburn may indicate GERD."
    ),
    "acid reflux": (
        "Acid reflux occurs when stomach acid flows back into the esophagus. "
        "Lifestyle changes like eating smaller meals, avoiding triggers, and elevating the head of your bed can help. "
        "If symptoms are frequent, medication or endoscopy may be recommended."
    ),
    "gerd": (
        "GERD (Gastroesophageal Reflux Disease) is a chronic form of acid reflux. "
        "It can cause heartburn, regurgitation, and long-term esophageal damage. "
        "Treatment includes dietary changes, antacids, and in some cases surgery. Please consult a gastroenterologist."
    ),
    "ibs": (
        "Irritable Bowel Syndrome (IBS) causes cramping, bloating, and alternating diarrhea and constipation. "
        "Management involves a low-FODMAP diet, stress reduction, and sometimes medication. "
        "A gastroenterologist can guide a tailored treatment plan."
    ),
    "ulcer": (
        "Peptic ulcers are sores in the stomach lining or small intestine, often caused by H. pylori infection or NSAID overuse. "
        "Symptoms include burning stomach pain, nausea, and bloating. Treatment typically involves antibiotics and acid-reducing medications."
    ),
    "gastritis": (
        "Gastritis is inflammation of the stomach lining, often caused by H. pylori, alcohol, or NSAIDs. "
        "Symptoms include upper abdominal pain, nausea, and sometimes vomiting. Avoiding irritants and prescribed medication usually helps."
    ),
    "crohn": (
        "Crohn's disease is a chronic inflammatory bowel disease affecting any part of the digestive tract. "
        "It causes abdominal pain, diarrhea, fatigue, and weight loss. It requires long-term management with medication and regular gastroenterology follow-ups."
    ),
    "colitis": (
        "Ulcerative colitis is a chronic condition causing inflammation and ulcers in the colon. "
        "Symptoms include bloody diarrhea, abdominal cramps, and urgency. It is managed with anti-inflammatory medications and regular monitoring."
    ),
    "gas": (
        "Excessive gas is often caused by swallowing air, eating gas-producing foods, or gut bacteria imbalance. "
        "Eating slowly and reducing carbonated drinks helps. Persistent gas with pain could indicate IBS or food intolerance."
    ),
    "indigestion": (
        "Indigestion causes discomfort or burning in the upper abdomen, often after eating. "
        "Eating smaller meals and avoiding fatty or spicy food can help. If symptoms persist, consult a doctor to rule out underlying conditions."
    ),
    "jaundice": (
        "Jaundice causes yellowing of the skin and eyes and indicates elevated bilirubin, often pointing to liver, gallbladder, or bile duct issues. "
        "⚠️ This requires prompt medical evaluation — please see a doctor as soon as possible."
    ),
    "gallstone": (
        "Gallstones can cause severe pain in the upper right abdomen, especially after fatty meals. "
        "Treatment ranges from watchful waiting to surgical removal (cholecystectomy). A gastroenterologist or surgeon can advise the best approach."
    ),
    "liver": (
        "Liver conditions range from fatty liver disease to hepatitis and cirrhosis. "
        "Common signs include fatigue, jaundice, and abdominal swelling. A liver function test and imaging are usually needed. "
        "Please consult a hepatologist or gastroenterologist."
    ),
    "blood in stool": (
        "⚠️ Blood in the stool is a serious symptom that should not be ignored. "
        "It can indicate hemorrhoids, IBD, or more serious conditions like colorectal cancer. "
        "Please consult a doctor promptly — a colonoscopy may be needed."
    ),
    "stool": (
        "Changes in stool color, consistency, or frequency can indicate digestive issues. "
        "Black or bloody stools require immediate medical attention. "
        "Other persistent changes should be discussed with a doctor."
    ),
    "colonoscopy": (
        "A colonoscopy examines the inner lining of the large intestine. "
        "It is recommended for colorectal cancer screening (usually from age 45), or to investigate rectal bleeding, chronic diarrhea, or abdominal pain."
    ),
    "endoscopy": (
        "An upper GI endoscopy examines the esophagus, stomach, and upper small intestine. "
        "It helps diagnose GERD, ulcers, gastritis, and celiac disease. Your doctor will guide you on preparation and what to expect."
    ),
}

FALLBACK_RESPONSES = [
    "I understand your concern. As a gastro-focused assistant, I can offer general digestive health information. For a proper diagnosis, please consult a gastroenterologist.",
    "That's a good question. For accurate advice tailored to your specific symptoms, I recommend speaking with a qualified gastroenterologist or your primary care physician.",
    "I'm here to help with general gastrointestinal health information. If your symptoms are severe, persistent, or worsening, please seek professional medical care promptly.",
    "Digestive health can be complex. While I can share general guidance, a gastroenterologist will be best equipped to evaluate your situation with the right tests and examination.",
]

def get_mock_reply(message: str) -> str:
    "Return a keyword-matched gastro response or a random fallback."
    lower = message.lower()
    for keyword, response in MOCK_RESPONSES.items():
        if keyword in lower:
            return response
    return random.choice(FALLBACK_RESPONSES)

# ── Routes ─────────────────────────────────────────────────────────────────────
@app.get("/")
async def root():
    return {"status": "ok", "message": "Gastro Care Medical Chatbot Dummy Backend is running."}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.utcnow().isoformat()}

@app.post("/chat", response_model=ChatResponse)
async def chat(payload: ChatRequest, request: Request):
    client_ip = request.client.host
    logger.info(f"Incoming message from {client_ip}: '{payload.message}'")
    
    # Simulate processing delay (1–2.5 seconds)
    delay = round(random.uniform(1.0, 2.5), 2)
    logger.info(f"Simulating {delay}s delay...")
    await asyncio.sleep(delay)

    reply = get_mock_reply(payload.message)
    timestamp = datetime.utcnow().isoformat()

    logger.info(f"Sending reply: '{reply[:80]}...'")
    
    return ChatResponse(reply=reply, timestamp=timestamp)
