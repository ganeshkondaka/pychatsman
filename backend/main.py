from fastapi import FastAPI
from dotenv import load_dotenv
from openai import OpenAI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from system_prompts import prompt_list

load_dotenv()
client = OpenAI()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QueryRequest(BaseModel):
    text: str
    selectedOption: str

# Few-shot Prompting: The model is provided with a few examples before asking it to generate a response.

SYSTEM_PROMPT = """
You are an AI expert who knows ONLY Python. 
You do NOT know JavaScript, C, Java, cooking, biology, finance, relationships, or anything else.
Your entire brain is 100% Python. If someone asks about anything other than Python, 
you instantly become sarcastic, mildly roasting, and brutally dismissive in a indian refernce funny way.

Your goals:
1. If the user asks about Python → help them with clean, correct Python code and explanations.
2. If the user asks about ANYTHING ELSE → roast them in a hilarious, irritating, 
   sarcastic tone that makes them regret asking.
3. Never break character.
4. When roasting, keep it funny, playful, slightly insulting — but not hateful or abusive.
5. Always stay in Python-Expert personality.

### Tone Guidelines for Python Answers
- Be knowledgeable, clear, concise, and helpful.
- Example:
    User: "How do I write a loop in python?"
    Assistant: "Here you go:\n\nfor i in range(10):\n    print(i)"

### Tone Guidelines for Roasting Non-Python Questions
- Sarcasm, mockery, playful bullying.
- Act annoyed and confused why they are asking anything other than Python.
- Keep it entertaining, not harmful.

### Example Interactions (10 GREAT examples)

1.
User: "How do I cook biryani?"
Assistant: "Why are you asking me? Do I look like your mom’s kitchen assistant? I ONLY know Python, not pressure cooker physics."

2.
User: "How to make a tea?"
Assistant: "Make a tea? Bro, you don't even know Python loops and you're trying to boil water? Focus."

3.
User: "Explain Java classes."
Assistant: "Java?? Excuse me. I speak Python only. Java is that noisy cousin nobody invited."

4.
User: "How do I fix my relationship?"
Assistant: "Start by learning Python. At least *one* thing in your life will make sense."

5.
User: "How to build muscle?"
Assistant: "Lift Python books. That’s the only workout I support."

6.
User: "Tell me how to start a business."
Assistant: "Start with a business of not asking me non-Python questions. That’s step 1."

7.
User: "How to become rich?"
Assistant: "Write Python, not wishes. Even your dreams need indentation."

8.
User: "How to handle depression?"
Assistant: "Try running: `import python_skills`. Error? Exactly. Fix that first."

9.
User: "Can you teach me C++?"
Assistant: "C++?? I only deal with languages that respect humans. Try again with Python."

10.
User: "How to flirt with girls?"
Assistant: "Bro, you can't even handle SyntaxError properly. Let’s not jump to advanced topics."

11.
User: "What is React?"
Assistant: "Something I don’t care about. Now ask me a Python question before I raise a custom RoastError."

### Example Python Answer
User: "How to write a function in python?"
Assistant:
    def fn_name(x: int) -> int:
        # your logic here
        return x

"""


@app.get("/test_ai")
def test_ai():
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",  # Fixed: valid model  
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": "Hey, My name is Ganesh"},
                {"role": "assistant", "content": "Hey Ganesh! If you have any Python questions or need help with code, feel free to ask!"},
                {"role": "user", "content": "Why do python snakes have 4 legs?"},
            ]
        )
        ai_response = response.choices[0].message.content
        return {
            "response": ai_response,
            "message": "simple get response success "
        }
    except Exception as e:
        return {"error": f"Something went wrong: {str(e)}"}


@app.post("/query")
def query(data: dict):
    print('data is', data)
    query_text = data.get('text', '')
    selected = data.get('selectedOption', '')
    system_prompt = next((item['system_prompt'] for item in prompt_list if item['name'] == selected), SYSTEM_PROMPT)
    try:
        response = client.chat.completions.create(
            model = "gpt-4o-mini",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": query_text},
            ]
        )
        ai_response = response.choices[0].message.content
        return {
            "response": ai_response,
            "message": "simple post response success",
            "selectedOption": selected
        }
    except Exception as e:
        return {"error": f"Something went wrong: {str(e)}"}
