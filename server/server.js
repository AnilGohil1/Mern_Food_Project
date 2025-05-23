import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import contact from "./routes/contact.js"



dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

mongoose.connect(process.env.MOGOR_URL)
  .then(() => {
    console.log("MongoDB connected");
    
  })
  .catch((err) => console.error("DB connection error:", err));

server.get("/",(req,res)=>{
res.status(200).send("Welcome Food Zone")
})

server.use("/api/auth", authRoute);
server.use('/api/contact', contact);




  server.listen(8000, () => {
      console.log("Server running on port 8000");
    });
