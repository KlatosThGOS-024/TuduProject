import cookieParser from "cookie-parser";
import express from "express";
import userRouter from "./routes/user.routes.js";

import todoRouter from "./routes/todo.routes.js";
const app = express();
const customCORS = (req, res, next) => {
  const allowedOrigin = "http://localhost:5173";

  const origin = req.headers.origin;

  // Check if the request origin starts with allowed origin
  if (origin && origin.startsWith(allowedOrigin)) {
    console.log(req.headers.origin);

    res.header("Access-Control-Allow-Origin", origin); // Allow specific origin
    res.header("Access-Control-Allow-Credentials", "true"); // Allow credentials
  }

  // Allow specific methods and headers if needed
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next(); // Proceed to the next middleware/route handler
};

// Use the custom CORS middleware
app.use(customCORS);

app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//UserRoute
app.use("/api/v1/users", userRouter);
app.use("/api/v1/todos", todoRouter);

export default app;
