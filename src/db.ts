import 'dotenv/config';
import mongoose from 'mongoose';
const db = mongoose.createConnection(process.env.MONGO_URL);
export default db;