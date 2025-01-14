import express from 'express';
import connectDb from '../config/dbconnect.js';
connectDb();
const app = express(); 


export default app;