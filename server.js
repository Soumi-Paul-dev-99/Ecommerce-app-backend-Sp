import express from "express";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();
import database from "./config/Db.js";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
const app = express();

app.use(cors());

database();

const Port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(morgan("dev"));

///routes
app.use("/api/v1/user", userRoutes);

app.get("/", (req, res) => {
  res.status(201).json({
    message: "welcome to ecommerce app",
  });
});

app.listen(Port, () => {
  console.log(
    `server running on the port http://localhost:${Port}`.bgCyan.black
  );
});
