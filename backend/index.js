import express from "express";
import cookieParser from "cookie-parser"
import "dotenv/config";
import connectWithDatabase from "./src/db/connection.js";
import userRouter from "./src/routes/user.route.js";
import tokenRouter from "./src/routes/token.route.js";
import profileRouter from "./src/routes/profile.route.js";
import problemRouter from "./src/routes/problem.route.js";

await connectWithDatabase();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.get('/test',(req,res)=>
{
    res.json('Hello world');
})
app.use("/api/v1/user", userRouter);
app.use("/api/v1/token", tokenRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/problems", problemRouter);

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server running at port ${process.env.PORT}`);
});