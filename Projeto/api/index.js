import express from "express"
import rt from "./routes/cadastro.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", rt)

app.listen(8800)