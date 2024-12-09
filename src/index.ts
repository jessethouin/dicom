import express, {Express, Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.json({success: true});
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

