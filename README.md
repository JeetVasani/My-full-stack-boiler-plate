# Full Stack Boilerplate

A production-ready full stack boilerplate designed to accelerate development. It provides a structured setup for frontend and backend integration, along with authentication and scalable architecture.

---

## Features

- JWT-based authentication (login and signup)
- Modular backend structure
- REST API setup
- Frontend-backend integration
- Routing support
- Clean and scalable project structure
- Pre-configured development environment

---

## Tech Stack

### Frontend
- TypeScript  

### Backend
- FastAPI (Python)
- JWT Authentication
- REST APIs

### Database
- Postgre SQL (Others can be configured according to need)

---

## Project Structure

<pre>
My-full-stack-boiler-plate/
├── frontend/            # Frontend application
├── backend/             # FastAPI backend
├── routes/              # API route definitions
├── auth/                # Authentication logic (JWT)
├── config/              # Configuration files
└── scripts/             # Utility and setup scripts
</pre>


---

## Installation and Setup

### Clone Repository

```bash
git clone https://github.com/JeetVasani/My-full-stack-boiler-plate.git
cd My-full-stack-boiler-plate
```

## Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Authentication Flow

```bash
1. User signs up or logs in  
2. Server generates a JWT token  
3. Token is stored on the client  
4. Protected routes validate the token before granting access  
```
---

## Usage

This boilerplate can be used for:

- SaaS applications  
- Dashboards  
- AI-powered tools  
- Rapid prototyping  
