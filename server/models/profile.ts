import * as mongoose from 'mongoose';

const profileSchema: any = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  birthdate: String,
  description: String,
  image: Date,
  updatedDate: Date,
});

export const profile: any = mongoose.model('Profile', profileSchema);
