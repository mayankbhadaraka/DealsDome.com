import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    let MongoUrl=`mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@cluster0.wg2pzby.mongodb.net/?retryWrites=true&w=majority`
    console.log(MongoUrl)
    const conn = await mongoose.connect(MongoUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDb;
