import cors from 'cors'
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import webRoutes from './routes/web';
import mobileRoutes from './routes/mobile'
import db from '../config/database'
import bodyParser from 'body-parser';

// Authentication to db
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error DB: => ', err));

// Initialization
const server = express();

// middlewares
server.use(bodyParser.json());
server.use(cors());
server.use(morgan('dev'));
server.use(json());
server.use(urlencoded({ extended: false }));

// routes
server.use('/api/v1/web', webRoutes);
server.use('/api/v1/mobile', mobileRoutes);

export default server;