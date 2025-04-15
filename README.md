📌 Frontend README (frontend/README.md)

Movie Watchlist App - Frontend 🎬
This is the React frontend of the Movie Watchlist App, which allows users to search for movies, view trending movies, watch trailers, and save movies to their watchlist.

📜 Features

✅ Search for movies using the TMDb API
✅ View trending movies
✅ Add movies to your watchlist
✅ Remove movies from your watchlist
✅ Watch YouTube trailers for movies
✅ Fully responsive design

🛠 Tech Stack

React.js (Frontend UI)
Axios (API calls)
React Router (Navigation)
TMDb API (Movie Data)
CSS (Custom styling)
🚀 Getting Started

1️⃣ Clone the Repository
git clone https://github.com/coachonye/movie-watchlist.git
cd movie-watchlist/frontend
2️⃣ Install Dependencies
npm install
3️⃣ Set Up Environment Variables
Create a .env file inside frontend/
Add the following:
REACT_APP_TMDB_API_KEY=
4️⃣ Start the App
npm start
The app will run on http://localhost:3000/.


🛠 Future Enhancements

🚀 User authentication (login & save watchlist)
🚀 Improved UI with animations
🚀 Dark/light mode switch

👨‍💻 Author

Onye I


This project is open-source

📌 Backend README (backend/README.md)

Movie Watchlist API - Backend 🎬
This is the Node.js + Express backend for the Movie Watchlist App. It manages the watchlist, stores movies in MongoDB, and provides API endpoints for the frontend.

📜 Features

✅ Add movies to the watchlist
✅ Retrieve all saved movies
✅ Delete movies from the watchlist
✅ Connects to MongoDB for persistent storage
✅ Handles API requests securely

🛠 Tech Stack

Node.js (Backend server)
Express.js (API framework)
MongoDB (Database)
Mongoose (MongoDB ORM)
Cors (Cross-Origin requests)
Dotenv (Environment variables)
🚀 Getting Started

1️⃣ Clone the Repository
git clone https://github.com/coachonye/movie-watchlist.git
cd movie-watchlist/backend
2️⃣ Install Dependencies
npm install
3️⃣ Set Up Environment Variables
Create a .env file inside backend/
Add the following:
MONGO_URI=your_mongodb_connection_string
TMDB_API_KEY=your_tmdb_api_key
PORT=5001

4️⃣ Start the Server
nodemon server.js
The API will run on http://localhost:5001/.

📜 API Endpoints

📌 Add a Movie to Watchlist
POST /api/movies/add


📌 Get All Movies
GET /api/movies/

📌 Delete a Movie
DELETE /api/movies/:id

🛠 Future Enhancements

🚀 Add user authentication
🚀 Store watchlist per user
🚀 Improve API security
