# 🎵 Spotify Clone

### A Full-Stack Music Streaming Platform Built with the MERN Stack

A modern, Spotify-inspired music streaming web application built to explore **full-stack development, authentication, email verification, protected routes, REST APIs, database integration, and responsive UI development**.

> ⚠️ This project is created for educational purposes and is **not affiliated with Spotify AB**.

---

## ✨ Features

### 🔐 Authentication & Security

- 👤 User and Artist registration
- 📧 Email verification using OTP (One-Time Password)
- 🔑 Secure login and logout system
- 🍪 JWT authentication using HTTP-only cookies
- 🛡️ Protected routes
- 🔒 Role-based authentication for Users and Artists
- 🔄 Persistent authentication across page refreshes
- 🔐 Password hashing using bcrypt

### 🎧 Music Streaming

- 🎵 Browse available music tracks
- ▶️ Stream tracks directly from the application
- 🖼️ Display track artwork
- 👨‍🎤 Artist information
- 📱 Responsive music interface

### 🎨 UI / UX

- 🌑 Spotify-inspired dark interface
- 📱 Fully responsive design
- ⚡ Fast Vite development environment
- 💀 Loading states and skeleton screens
- ❌ Error handling
- 🔔 Toast notifications
- 🧭 Client-side routing

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| ⚛️ React | User interface |
| ⚡ Vite | Development and build tool |
| 🎨 Tailwind CSS | Styling |
| 🔀 React Router | Client-side routing |
| 📡 Axios | API requests |
| 🔔 React Toastify | Notifications |

### Backend

| Technology | Purpose |
|---|---|
| 🟢 Node.js | JavaScript runtime |
| 🚂 Express.js | Backend framework |
| 🍃 MongoDB | NoSQL database |
| 🧩 Mongoose | MongoDB ODM |
| 🔐 JWT | Authentication |
| 🔒 bcrypt | Password hashing |
| 🍪 cookie-parser | Cookie handling |
| 📧 Nodemailer | Email delivery |
| 🔢 OTP | Email verification |

### Deployment

- ▲ **Vercel** — Frontend hosting
- 🚀 **Render** — Backend hosting
- 🍃 **MongoDB Atlas** — Cloud database

---

## 🏗️ Project Architecture

```text
                  ┌──────────────────┐
                  │     Browser      │
                  │   React + Vite   │
                  └────────┬─────────┘
                           │
                           │ HTTP / Axios
                           ▼
                  ┌──────────────────┐
                  │   Express API    │
                  │     Node.js      │
                  └────────┬─────────┘
                           │
                  ┌────────▼─────────┐
                  │ Authentication   │
                  │  JWT + Cookies   │
                  └────────┬─────────┘
                           │
                  ┌────────▼─────────┐
                  │     MongoDB      │
                  │  MongoDB Atlas   │
                  └──────────────────┘

                           │
                  ┌────────▼─────────┐
                  │  Email Service   │
                  │    Nodemailer    │
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

## 🔐 Authentication Flow

The application uses **JWT-based authentication with HTTP-only cookies** and email OTP verification during registration.

### Registration & Email Verification

```text
User
 │
 ▼
Register
 │
 ▼
Validate User Details
 │
 ▼
Create User Account
 │
 ▼
Generate OTP
 │
 ▼
Hash and Store OTP
 │
 ▼
Send OTP via Email
 │
 ▼
User Enters OTP
 │
 ▼
Verify OTP
 │
 ├── Invalid OTP ──► Reject Verification
 │
 └── Valid OTP ────► Verify Email
```

### Login Flow

```text
User
 │
 ▼
Login
 │
 ▼
Validate Credentials
 │
 ▼
bcrypt Password Verification
 │
 ▼
Generate JWT
 │
 ▼
Set HTTP-Only Cookie
 │
 ▼
Authenticated User
```

### Why HTTP-only Cookies?

The JWT is stored inside an **HTTP-only cookie**, which prevents client-side JavaScript from directly accessing the token.

The frontend sends authenticated requests using Axios:

```js
import axios from "axios";

export const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});
```

---

## 🛡️ Protected Routes

Users cannot access the main music application without authentication.

```text
                Application
                     │
                     ▼
              Is user logged in?
                 /       \
               NO         YES
               │           │
               ▼           ▼
             Login      Music App
```

Authentication state is maintained through **React Context API** and verified with the backend `/api/auth/me` endpoint.

---

## 🔌 API Overview

### Authentication Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/verify-email` | Verify email using OTP |
| `POST` | `/api/auth/login` | Login user |
| `POST` | `/api/auth/logout` | Logout user |
| `GET` | `/api/auth/me` | Get authenticated user |

### Music Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/music` | Fetch available music tracks |

> API endpoints may change as the project continues to evolve.

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/SagarSingh01/your-repository.git

cd your-repository
```

> Replace `your-repository` with your actual GitHub repository name.

### 2️⃣ Setup Backend

```bash
cd Backend

npm install
```

Create a `.env` file inside the `Backend` directory:

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

# Email Configuration
GOOGLE_USER=your_email@gmail.com
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REFRESH_TOKEN=your_google_refresh_token
```

> The email configuration above is for a Gmail OAuth2 setup with Nodemailer. Add any other environment variables required by your backend.

#### ⚠️ Configure CORS for Local Development

In `Backend/src/app.js`, configure CORS to allow requests from your local frontend:

```js
import cors from "cors";

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);
```

> 🚀 **For production:** Configure the CORS origin to your deployed frontend URL:
>
> `https://musics-spotify.vercel.app`

Start the backend:

```bash
npm start
```

The backend will run at:

```text
http://localhost:3000
```

### 3️⃣ Setup Frontend

Open another terminal:

```bash
cd Frontend

npm install
```

Create a `.env` file inside the `Frontend` directory:

```env
VITE_API_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

Open the application:

```text
http://localhost:5173
```

---

## 🌐 Environment Variables

Configure the following environment variables before running the application.

### Backend (`Backend/.env`)

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key used to sign JWTs |
| `GOOGLE_USER` | Gmail account used to send verification emails |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `GOOGLE_REFRESH_TOKEN` | Google OAuth refresh token |

### Frontend (`Frontend/.env`)

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API base URL |

> **Security Note:** Never commit your `.env` files or expose your JWT secret, database credentials, OAuth credentials, or refresh token.

---

## 💡 What I Learned

Building this project helped me understand how a full-stack application works, from frontend interactions to backend processing and database operations.

### Frontend

- React component architecture
- React Router
- Context API
- Custom Hooks
- Axios and API integration
- Protected routes
- Authentication state management
- Form validation
- Loading and error states
- Responsive Tailwind CSS

### Backend

- REST API development
- Express middleware
- MVC-style architecture
- MongoDB and Mongoose
- Password hashing with bcrypt
- JWT authentication
- HTTP-only cookies
- Role-based authorization
- Email OTP generation and verification
- OTP hashing and validation
- Sending emails using Nodemailer and Gmail OAuth2
- CORS configuration
- Error handling

### Deployment

- Frontend deployment with Vercel
- Backend deployment with Render
- MongoDB Atlas configuration
- Production environment variables
- Frontend and backend communication in production

---

## 📈 Future Improvements

This project is still evolving. Planned improvements include:

- [ ] 🔍 Music search
- [ ] ❤️ Like / Unlike tracks
- [ ] 📚 Create and manage playlists
- [ ] 👨‍🎤 Artist dashboard
- [ ] ⬆️ Artist music uploads
- [ ] 🌐 Advanced music discovery

---

## 📚 Purpose of the Project

This project was built as a **learning-focused full-stack application** to understand how modern web applications handle:

```text
Frontend
   ↓
API Requests
   ↓
Authentication
   ↓
Email Verification
   ↓
Backend Logic
   ↓
Database
   ↓
Response
   ↓
Frontend UI
```

Rather than being just a UI clone, this project focuses on implementing the **full authentication and application architecture behind a music streaming platform**.

---

## 👨‍💻 Author

### Sagar Singh

**MERN Stack Developer | BCA Student**

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