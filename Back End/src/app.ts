import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";

import { handleErros } from "./error";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", routes.user);
app.use("/products", routes.products);

app.use(handleErros);

export default app;
