import * as express from "express";
import { Application, Express } from "express";

const app: Application = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
