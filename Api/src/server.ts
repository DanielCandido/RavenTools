import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
import "module-alias/register";
import cors from "cors";
import express from "express";
import router from "@src/router";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(4004, () => {
  console.log("server is running", `127.0.0.1:${4004}`);
});