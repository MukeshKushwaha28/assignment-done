import mongoose from 'mongoose';

const connectDB = async () => {
    const url = "mongodb://127.0.0.1:27017/school"
    // process.env.MONGO_URI
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
