import express from "express";
import { router } from "./router";

const app = express();
app.use(express.json());

const port = 3333;

app.use(router);

app.listen(port, () => {
  console.log("Application is runnig on port " + port);
});
