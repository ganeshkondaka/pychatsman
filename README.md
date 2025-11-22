# Python AI Assistant 🤖

Hey there! This is a cool AI chatbot I built that only knows Python. Seriously, ask it about anything else and it'll roast you hard with some Indian-style sarcasm. Built with FastAPI and React.

## What's this all about?

So I made this AI that acts like your personal Python buddy. Unlike those generic AI chatbots that try to know everything, this one is laser-focused on Python only. Ask it about loops, functions, debugging, whatever - it'll help you out. But ask about cooking biryani or relationships? Oh boy, prepare for some hilarious roasting!

The personality is inspired by that sarcastic Indian uncle who only cares about one thing. Makes learning Python way more fun and memorable.

## Project Layout

```
mini_agent/
├── backend/               
│   ├── main.py               
│   ├── requirements.txt  
│   ├── .env                   
│   └── venv/             
├── frontend/              
│   ├── src/
│   │   ├── components/        
│   │   │   ├── Homebody.jsx   
│   │   │   ├── Navbar.jsx     
│   │   │   ├── Sidebar.jsx    
│   │   │   └── Footer.jsx   
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── App.jsx       
│   │   └── main.jsx      
│   ├── package.json           
│   └── vite.config.js    
└── README.md                 
```

## Tech Stack

### Backend
- **FastAPI** - Super fast Python web framework
- **OpenAI GPT-4** - The brain behind the Python expertise
- **Pydantic** - For data validation
- **CORS** - So frontend can talk to backend

### Frontend
- **React 19** - UI library with all the hooks
- **Vite** - Crazy fast dev server
- **Tailwind CSS** - For styling without the headache
- **Axios** - For making API calls
- **React Icons** - Cool icons

## Cool Features

- **Python-Only AI**: Won't answer anything else, promise
- **Sarcastic Roasts**: Hilarious responses for non-Python questions
- **Dark Theme**: Looks sleek and modern
- **Real-time Chat**: Instant responses

## Getting Started Locally

### What you need first

- Python 3.8 or newer
- Node.js 16+
- OpenAI API key (get one from OpenAI)

### Setting up the backend

1. **Go to backend folder:**
   ```bash
   cd backend
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   ```

3. **Activate it:**
   ```bash
   # On Windows
   venv\Scripts\activate
   
   # On Mac/Linux
   source venv/bin/activate
   ```

4. **Install the packages:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Add your API key:**
   Create a `.env` file in the backend folder:
   ```
   OPENAI_API_KEY=your_key_here
   ```

6. **Run the server:**
   ```bash
   uvicorn main:app --reload
   ```
   Backend runs on `http://127.0.0.1:8000`

### Setting up the frontend

1. **Go to frontend folder:**
   ```bash
   cd frontend
   ```

2. **Install packages:**
   ```bash
   npm install
   ```

3. **Start dev server:**
   ```bash
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

## How to Use

1. Start both servers (backend + frontend)
2. Open `http://localhost:5173` in your browser
3. Pick a model from the dropdown
4. Type your Python question
5. Hit Enter or submit
6. Enjoy the response!

### Example Conversations

**Python Question:**
```
You: How do I make a list comprehension?
AI: Here's the magic:

[x**2 for x in range(10)]
```

**Non-Python Question:**
```
You: How do I make coffee?
AI: Coffee? Bro, I only know Python. Go ask your coffee machine about syntax errors.
```

## API Stuff

### POST `/query`
Send a message to the AI.

**Send:**
```json
{
  "text": "How do I write a for loop?",
  "selectedOption": "pychatsman"
}
```

**Get back:**
```json
{
  "response": "for i in range(5):\n    print(i)",
  "message": "success",
  "selectedOption": "pychatsman"
}
```

### GET `/test_ai`
Test endpoint for the AI.

## Customization

### Change the AI personality
Edit the `SYSTEM_PROMPT` in `backend/main.py` to make it act differently.

### Style it up
Uses Tailwind CSS. Change classes in the React components to customize the look.

### Add more models
Add options to the `options` array in `Homebody.jsx` and update backend logic.

## Contributing

Feel free to contribute! Just:
1. Fork it
2. Make your changes
3. Submit a PR

## License

MIT License - do whatever you want with it.

## Thanks to

- OpenAI for GPT-4
- FastAPI team
- React/Vite folks
- Tailwind CSS

---
