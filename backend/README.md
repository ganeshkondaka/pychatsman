# Pychatsman

A simple FastAPI-based AI assistant that helps with Python coding questions using OpenAI's GPT model. It uses few-shot prompting to stay focused on Python topics and roasts users for non-Python queries.

## 1. About This Code

This is a simple FastAPI application that integrates with OpenAI's API to provide AI assistance for Python coding questions. It uses few-shot prompting to guide the AI's responses and includes basic error handling.

Key features:
- In-memory API integration (no persistent storage)
- RESTful endpoint for AI queries
- Automatic error handling for API issues

## 2. About FastAPI

FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints. It is built on top of Starlette for the web parts and Pydantic for the data parts.

Key benefits:
- Fast: Very high performance, on par with NodeJS and Go
- Fast to code: Increase development speed by 200-300%
- Fewer bugs: Reduce human-induced errors by 40%
- Intuitive: Great editor support with auto-completion
- Easy: Designed to be easy to use and learn
- Short: Minimize code duplication
- Robust: Get production-ready code with automatic interactive documentation

## 3. About Dependencies

This project uses the following main dependencies:

- **FastAPI**: The web framework for building the API
- **Uvicorn**: ASGI server for running the FastAPI application
- **OpenAI**: Client for interacting with OpenAI's API
- **python-dotenv**: For loading environment variables from a .env file

All dependencies are listed in `backend/requirements.txt` and can be installed with `pip install -r backend/requirements.txt`.

## 4. Setup and Run Locally

### Prerequisites
- Python 3.8 or higher
- pip (Python package installer)
- OpenAI API key

### Installation Steps

1. **Clone or navigate to the project directory**:
   ```
   cd mini_agent
   ```

2. **Create a virtual environment**:
   ```
   python -m venv venv
   ```

3. **Activate the virtual environment**:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`

4. **Install dependencies**:
   ```
   pip install -r backend/requirements.txt
   ```
   Alternatively, if starting fresh:
   ```
   pip install fastapi uvicorn openai python-dotenv
   ```

5. **(Optional) Generate requirements.txt** (if not present or to update with current packages):
   ```
   pip freeze > backend/requirements.txt
   ```
   This command captures all installed packages and their versions in the virtual environment.

6. **Run the application**:
   ```
   cd backend
   uvicorn main:app --reload
   ```
   **Note**: 
   - `main:app` tells Uvicorn to run the FastAPI app instance named `app` from the `main.py` file.
   - The `--reload` flag enables auto-reloading of the server when code changes are detected, which is useful during development.

7. **Access the application**:
   - API: http://127.0.0.1:8000
   - Interactive API documentation: http://127.0.0.1:8000/docs

## 5. Setup

1. **Get an OpenAI API key**: Sign up at [OpenAI](https://platform.openai.com/) and get your API key.

2. **Create a `.env` file** in the `backend/` folder:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

   **Security note**: Never commit `.env` to version control. Add it to `.gitignore`.

## 6. About Routes and Inputs

The application provides the following REST API endpoint:

### GET /test_ai
- **Description**: Test endpoint that calls OpenAI's API with a predefined conversation
- **Method**: GET
- **URL**: /test_ai
- **Input**: None (uses hardcoded messages)
- **Response**: JSON object with AI response or error
  ```json
  {
    "response": "AI's answer here",
    "message": "Got response from AI"
  }
  ```
  or
  ```json
  {
    "error": "Something went wrong: error details"
  }
  ```

### Example Usage with curl

```bash
# Test the AI endpoint
curl -X GET "http://127.0.0.1:8000/test_ai"
```

## 7. About Virtual Environments

A virtual environment in Python is an isolated environment that allows you to manage dependencies for different projects separately. It creates a folder containing a copy of the Python interpreter and libraries, ensuring that packages installed in one project don't interfere with others.

### Uses of Virtual Environments
- **Dependency Isolation**: Keep project-specific packages separate from system-wide installations.
- **Version Management**: Use different versions of packages for different projects without conflicts.
- **Reproducibility**: Ensure consistent environments across development, testing, and production.
- **Clean Uninstall**: Easily remove all project dependencies by deleting the venv folder.

### How to Create a Virtual Environment
1. Open your terminal/command prompt.
2. Navigate to your project directory.
3. Run: `python -m venv venv`
4. Activate it:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`
5. Install packages: `pip install package_name`
6. Deactivate when done: `deactivate`

## Notes

- This is a beginner-friendly example. For production, add authentication, rate limiting, and better error handling.
- Costs: OpenAI charges per token—monitor usage on your OpenAI dashboard.
- Data is not stored; each request is independent.
- If you get errors, check your API key, internet connection, and OpenAI account limits.</content>
