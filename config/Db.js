import mongoose from "mongoose";
// import colors from "colors";

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE);
    console.log(
      `database connection successfull ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`database not connected ${error}`.bgRed.white);
  }
};
export default dbConnect;
