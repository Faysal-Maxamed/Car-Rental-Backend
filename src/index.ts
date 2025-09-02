import express from "express"
import deotenv from "dotenv";
import cors from "cors";
import ConnectedDb from "./config/db.ts";
import UserRoutes from "./routes/UserRoute.ts"

deotenv.config();

const Port=3000;
const app =express();


ConnectedDb();
app.use(cors());
app.use(express.json());

app.use("/api",UserRoutes)
app.get('/',(req,res)=>{
    console.log("hellow world")
    res.send("hellow world")
})
app.listen(Port, () => {
  console.log(`🚀 Server running on http://localhost:${Port}`);
});