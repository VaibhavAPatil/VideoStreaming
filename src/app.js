import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//app.use() is used for configuration and middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
// url encoding⬇️
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// Asset Management public folder⬇️
app.use(express.static("public"));
app.use(cookieParser());



// Routes import
import userRouter from "./routes/user.routes.js";

// Routes Declaration
app.use("/api/v1/users", userRouter)

export { app };
