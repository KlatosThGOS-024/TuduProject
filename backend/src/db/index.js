import mongoose from "mongoose";

const connectionDB = async function () {
  try {
    console.log(process.env.MONGODB_URI);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(connectionInstance.connection.host);
  } catch (error) {
    throw new error("no");
  }
};
export default connectionDB;
// export const connectionInstance = mongoose.connect(
//   `${process.env.MONGODB_URI}/${DB_name}`
// );
