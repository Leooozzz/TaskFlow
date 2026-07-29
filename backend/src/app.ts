import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import router from "./routes/app.routes";
import { globalErrorHandler } from "./middlewares/error.middleware";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: "cross-origin",
    },
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(process.cwd(), "public")));

app.use(globalErrorHandler);
app.use("/api", router);



export default app;
