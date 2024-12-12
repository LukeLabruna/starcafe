import express from "express"
import "./database.js"
import cookieParser from "cookie-parser"
import passport from "passport"
import initializePassport from "./config/passport.config.js"
import productsRouter from "./routes/products.router.js"
import userRouter from "./routes/user.router.js"
import cors from "cors"
import authMiddleware from "./middleware/authMiddleware.js"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())
app.use(cors({credentials: true}))

initializePassport(); 

app.use(authMiddleware)
app.use("/api/products", productsRouter)
app.use("/api/user", userRouter)

export default app