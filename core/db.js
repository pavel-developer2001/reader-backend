import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
  }
);

export { sequelize };
