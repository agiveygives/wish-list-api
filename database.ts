import { Sequelize,  } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config();

type EnvVarsType = {
  DB_NAME: string,
  DB_HOST: string,
  DB_PASSWORD: string,
  DB_USER: string
};

const { DB_NAME, DB_HOST, DB_PASSWORD, DB_USER } = process.env as EnvVarsType

const sequelizeConnection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres'
})

export default sequelizeConnection;
