const cookieParser = require('cookie-parser')
const express = require('express')
const authRoutes = require('./routes/auth.routes')
const musicRoutes = require('./routes/music.routes')
const cors = require('cors')

const app = express()

app.get("/", (req, res) => {
    res.send("Spotify Working Successfully")
})
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "https://musics-spotify.vercel.app",
    credentials: true
}))

app.use("/api/auth", authRoutes)
app.use("/api/music", musicRoutes)

module.exports = app