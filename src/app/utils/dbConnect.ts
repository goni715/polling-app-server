import mongoose from 'mongoose';

const dbConnect = async() => {
  await mongoose.connect(config.database_url)
}
