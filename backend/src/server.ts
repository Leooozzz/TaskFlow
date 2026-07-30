import "dotenv/config";

import app from "./app";
import { sequelize } from "./config/database";
import "./models/user.model";

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

start();