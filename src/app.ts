import express from "express";
import userRouter from "./routers/user.js";

const app = express();

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(4000, () => {
  console.log(`Server is working on http://localhost:${4000}`);
});
