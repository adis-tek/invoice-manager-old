import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"

const app = express()

dotenv.config()

app.use(bodyParser.json({ limit: "32mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to the invoice manager API')
 })

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL)
 .then(() => app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))
 .catch(err => console.log(err.message))