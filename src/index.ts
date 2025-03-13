import express from "express";
import CFG from "./config/config";
import connectDb from "./db";
import cors from "cors";
import Routes from "./routes";
import bodyParser from "body-parser";
const app = express();
const post = CFG.Server?.port;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// routes
app.use("/api/v1", Routes);

connectDb();
app.listen(CFG.Server?.port, () => {
  console.log(`Server is running on port ${post}`);
});
