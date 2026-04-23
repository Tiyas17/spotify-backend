## 🎵 Music Streaming Backend API

A scalable backend system for a music streaming application supporting user and artist workflows, secure authentication, and efficient media handling.

## 🚀 Features
- 🔐 JWT-based Authentication (Register, Login, Logout)
- 🧑‍🎤 Role-Based Access Control (User & Artist)
- 🎵 Song Upload & Management (Artist only)
- 📀 Album Creation & Retrieval
- 📡 RESTful APIs for songs and albums
- ☁️ Cloud-based media storage integration
- 🧱 Scalable MVC architecture

## 🧠 Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Token
- File Upload: Multer
- Media Storage: ImageKit
  
## 🏗️ Architecture Overview

Follows MVC pattern with modular structure:

- controllers/
- models/
- routes/
- middlewares/
- services/

## 🔐 Authentication & Authorization
- Users authenticate via JWT tokens

## Token payload includes:

- { "userId": "..." & "role": "user | artist" }
- Middleware validates token and enforces access:
- Role	Permissions
- User	View songs, albums
- Artist	View songs, albums, Upload songs, create albums
  
## 📂 File Upload Flow
- Client → Multer → Buffer → ImageKit → URL → MongoDB
- Files parsed using Multer
- Uploaded to ImageKit
- URL stored in MongoDB instead of raw files

## 👉 Ensures scalability and reduced server load

## 📡 API Endpoints
- 🎵 Songs
- GET /songs → Fetch all songs
- POST /songs → Upload song (Artist only)

## 📀 Albums
- GET /albums → Fetch all albums
- GET /albums/:id → Fetch album by ID
- POST /albums → Create album (Artist only)

## ⚙️ Setup & Installation
# Clone the repository
- git clone https://github.com/Tiyas17/spotify-backend.git

# Navigate to project
cd spotify-backend

# Install dependencies
npm install

# Run server
- npm run dev
  
🔑 Environment Variables
## Create a .env file:

- PORT=3000
- MONGO_URI=your_mongo_connection
- JWT_SECRET=your_secret_key
- IMAGEKIT_PRIVATE_KEY=your_key

## 📌 Key Design Decisions
- Used JWT for stateless authentication
- Implemented middleware-based RBAC for clean authorization
- Stored media externally via ImageKit to avoid server overload
- Followed MVC for maintainability and scalability

## 📈 Future Improvements
- 🎧 Streaming optimization (chunked streaming)
- ❤️ Like / Playlist system
- 🔍 Search & recommendation system
- 📊 Analytics for artists
