import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { StatusCodes } from "http-status-codes";

import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/", router);

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "✅ Bike Service server is up and running smoothly!",
    status: "success",
    uptime: `${process.uptime().toFixed(2)} seconds`,
  });
});

app.use(globalErrorHandler);

// NOT FOUND API
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    status: StatusCodes.NOT_FOUND,
    message: "API NOT FOUND!",
  });
});

export default app;
