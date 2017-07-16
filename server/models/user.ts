import * as mongoose from 'mongoose';

const userSchema: any = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
});

export const user: any = mongoose.model('User', userSchema);
