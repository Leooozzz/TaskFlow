import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import router from "./routes/app.routes";
import { globalErrorHandler } from "./middlewares/error.middleware";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { csrfProtection } from "./middlewares/csrf.middleware";

const app = express();

const FRONTENDAPIURL = process.env.FRONTEND_API_URL || "http://localhost:5173";

app.use(
  cors({
    origin: FRONTENDAPIURL,
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

app.use(csrfProtection);

app.use("/api", router);

app.use(globalErrorHandler);

export default app;
