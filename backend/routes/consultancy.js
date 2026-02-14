import express from 'express';
import Consultancy from '../models/Consultancy.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const consultancy = new Consultancy(req.body);
    await consultancy.save();
    res.json({ success: true, message: 'Saved to MongoDB!' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
