import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import consultancyRoutes from './routes/consultancy.js';
import contactRoutes from './routes/contact.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/consultancy', consultancyRoutes);
app.use('/api/contact', contactRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend: http://localhost:${PORT}`));
