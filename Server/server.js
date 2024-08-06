
//use as template for initial setup for server file
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import clientRouter from './routes/clients.routes.js';
import loginRouter from './routes/logins.routes.js';

const app = express();

//MIDDLEWARE
app.use(express.json(), cors());
app.use('/api', clientRouter);
app.use('/api', loginRouter);

//ACCESS THE ENV VARIABLES
dotenv.config();
const PORT = process.env.PORT;

//Fuction to access the remote DB
const DB_NAME = 'CritesCustomTile';  //CHANGE DB NAME PER PROJECT
dbConnect(DB_NAME);



app.listen(PORT, () =>
    console.log(`AHOY CAPTAIN WE ARE ON PORT ${PORT} ready to AHOY`)
);

