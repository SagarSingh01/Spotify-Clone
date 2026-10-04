# 🎵 Spotify Clone

### A Full-Stack Music Streaming Platform Built with the MERN Stack

A modern, Spotify-inspired music streaming web application built to explore **full-stack development, authentication, protected routes, REST APIs, database integration, and responsive UI development**.

[![Live Demo](https://img.shields.io/badge/Live_Demo-musics--spotify.vercel.app-1DB954?style=for-the-badge&logo=vercel&logoColor=white)](https://musics-spotify.vercel.app)

> ⚠️ This project is created for educational purposes and is **not affiliated with Spotify AB**.

---

## ✨ Features

### 🔐 Authentication

* 👤 User & Artist registration
* 🔑 Secure login/logout system
* 🍪 JWT authentication using HTTP-only cookies
* 🛡️ Protected routes
* 🔒 Role-based authentication for Users and Artists
* 🔄 Persistent authentication across page refreshes

### 🎧 Music

* 🎵 Browse available music
* ▶️ Stream songs directly from the application
* 🖼️ Display song artwork
* 👨‍🎤 Artist information
* 📱 Responsive music interface

### 🎨 UI / UX

* 🌑 Spotify-inspired dark interface
* 📱 Fully responsive design
* ⚡ Fast Vite development environment
* 💀 Loading states
* ❌ Error handling
* 🔔 Toast notifications
* 🧭 Client-side routing

---

## 🛠️ Tech Stack

### Frontend

| Technology        | Purpose                  |
| ----------------- | ------------------------ |
| ⚛️ React          | User interface           |
| ⚡ Vite            | Development & build tool |
| 🎨 Tailwind CSS   | Styling                  |
| 🔀 React Router   | Client-side routing      |
| 📡 Axios          | API requests             |
| 🔔 React Toastify | Notifications            |

### Backend

| Technology       | Purpose           |
| ---------------- | ----------------- |
| 🟢 Node.js       | Runtime           |
| 🚂 Express.js    | Backend framework |
| 🍃 MongoDB       | Database          |
| 🧩 Mongoose      | MongoDB ODM       |
| 🔐 JWT           | Authentication    |
| 🔒 bcrypt        | Password hashing  |
| 🍪 cookie-parser | Cookie handling   |

### Deployment

* ▲ **Vercel** — Frontend
* 🚀 **Render** — Backend
* 🍃 **MongoDB Atlas** — Database

---

## 🏗️ Project Architecture

```text
                    ┌──────────────────┐
                    │     Browser      │
                    │  React + Vite    │
                    └────────┬─────────┘
                             │
                             │ HTTP / Axios
                             ▼
                    ┌──────────────────┐
                    │   Express API    │
                    │    Node.js       │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │ Authentication   │
                    │ JWT + Cookies    │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │     MongoDB      │
                    │  MongoDB Atlas   │
                    └──────────────────┘
```

---

## 📁 Project Structure

```text
Spotify/
│
├── Backend/
│   ├── src/
│   │   ├── Controllers/
│   │   ├── db/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   │
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── Components/
│   │   ├── Context Api/
│   │   ├── Custom Hooks/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── vercel.json
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

# 🔐 Authentication Flow

The application uses **JWT-based authentication with HTTP-only cookies**.

```text
User
 │
 ▼
Register / Login
 │
 ▼
Express Authentication API
 │
 ├── Validate credentials
 │
 ├── bcrypt password verification
 │
 └── Generate JWT
 │
 ▼
HTTP-Only Cookie
 │
 ▼
Protected API Request
 │
 ▼
JWT Middleware
 │
 ├── Valid Token ──────► Allow Request
 │
 └── Invalid Token ────► Reject Request
```

### Why HTTP-only cookies?

The JWT is stored inside an **HTTP-only cookie**, which prevents client-side JavaScript from directly accessing the token.

The frontend sends authenticated requests using:

```js
axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});
```

---

# 🛡️ Protected Routes

Users cannot access the music application without authentication.

```text
                    Application
                         │
                         ▼
                  Is user logged in?
                    /           \
                  NO             YES
                  │               │
                  ▼               ▼
                Login          Music App
```

Authentication state is maintained through a React Context and verified with the backend `/api/auth/me` endpoint.

---

# 🔌 API Overview

### Authentication

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| `POST` | `/api/auth/register` | Register a new user    |
| `POST` | `/api/auth/login`    | Login user             |
| `POST` | `/api/auth/logout`   | Logout user            |
| `GET`  | `/api/auth/me`       | Get authenticated user |

### Music

| Method | Endpoint     | Description           |
| ------ | ------------ | --------------------- |
| `GET`  | `/api/music` | Fetch available music |

> API endpoints may change as the project continues to evolve.

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/SagarSingh01/your-repository.git

cd your-repository
```

---

## 2️⃣ Setup Backend

```bash
cd Backend

npm install
```

Create a `.env` file inside the `Backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### ⚠️ Configure CORS for local development

In `Backend/src/app.js`, set the CORS origin to your local frontend URL (`http://localhost:5173`) and enable credentials so the authentication cookie can be sent:

```js
import cors from "cors";

app.use(
    cors({
        origin: "http://localhost:5173", // Frontend URL
        credentials: true,
    })
);
```

> 🚀 **For production:** change the origin to your deployed frontend URL, e.g. `https://musics-spotify.vercel.app`.

Start the backend:

```bash
npm start
```

The backend will run on:

```text
http://localhost:3000
```

---

## 3️⃣ Setup Frontend

Open another terminal:

```bash
cd Frontend

npm install
```

Create:

```text
Frontend/.env
```

Add:

```env
VITE_API_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

# 🌐 Environment Variables

### Backend

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend

```env
VITE_API_URL=http://localhost:3000
```

> Never commit your `.env` files or expose your JWT secret and database credentials.

---

# 💡 What I Learned

Building this project helped me understand how a real full-stack application works from frontend to database.

### Frontend

* React component architecture
* React Router
* Context API
* Custom hooks
* Axios
* Protected routes
* Authentication state management
* Form validation
* Loading and error states
* Responsive Tailwind CSS

### Backend

* REST API development
* Express middleware
* MVC-style architecture
* MongoDB & Mongoose
* Password hashing with bcrypt
* JWT authentication
* HTTP-only cookies
* Role-based authorization
* CORS configuration
* Error handling

### Deployment

* Frontend deployment with Vercel
* Backend deployment with Render
* MongoDB Atlas configuration
* Production environment variables
* Frontend ↔ backend communication in production

---

# 📈 Future Improvements

This project is still evolving. Planned improvements include:

* [ ] 🔍 Music search
* [ ] ❤️ Like / unlike songs
* [ ] 📚 Create playlists
* [ ] 👨‍🎤 Artist dashboard
* [ ] ⬆️ Artist music upload
* [ ] 🌐 More advanced music discovery

---

# 📚 Purpose of the Project

This project was built as a **learning-focused full-stack application** to understand how modern web applications handle:

```text
Frontend
   ↓
API Requests
   ↓
Authentication
   ↓
Backend Logic
   ↓
Database
   ↓
Response
   ↓
Frontend UI
```

Rather than being just a UI clone, the project focuses on implementing the **full authentication and application architecture behind a music platform**.

---

# 👨‍💻 Author

### Sagar Singh

**MERN Stack Developer | BCA Student**

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=googlechrome&logoColor=white)](https://sagar-singh.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SagarSingh01)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sagar-singh001/)

---

## ⭐ Support

If you found this project interesting, consider giving the repository a ⭐ on GitHub!

---

<div align="center">

### 🎵 Built with React + Node.js + MongoDB

**Learn → Build → Deploy → Improve**

</div>

---

> **Disclaimer:** This project is an independent educational project inspired by the concept of modern music streaming platforms. It is not affiliated with, sponsored by, or endorsed by Spotify AB.