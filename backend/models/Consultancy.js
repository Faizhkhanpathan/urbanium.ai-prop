import mongoose from 'mongoose';

const consultancySchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  company: { type: String, trim: true },
  interest: { type: String, required: true },
  details: { type: String, trim: true },
  status: { type: String, default: 'new' }
}, { timestamps: true });

export default mongoose.model('Consultancy', consultancySchema);
