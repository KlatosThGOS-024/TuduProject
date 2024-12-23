import mongoose from "mongoose";

const connectionDB = async function () {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    return connectionInstance.connection.host;
  } catch (error) {
    throw new error("no");
  }
};
export default connectionDB;
// export const connectionInstance = mongoose.connect(
//   `${process.env.MONGODB_URI}/${DB_name}`
// );
