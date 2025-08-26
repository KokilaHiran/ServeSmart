import * as express from "express";
import { Application, Express } from "express";
import { AppRouter } from "./routes/routes";
import { AppConfig } from "./config/app.config";
import { MongoLoader } from "./loader/mongo.loader";

const app: Application = express();

app.use(express.json());
app.use("/api", AppRouter.getInstance().router);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

const PORT = AppConfig.port;
const mongoLoader = new MongoLoader();
mongoLoader.connect();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
