import dotenv from "dotenv";
try {
  dotenv.config({ path: "./.env" });
} catch (error) {
  console.log(error);
}
import connectionDB from "./db/index.js";
import app from "./app.js";

connectionDB()
  .then(() => {
    try {
      app.listen(process.env.PORT, (req, res) => {
        console.log("Server has been started on port", process.env.PORT);
      });
    } catch (error) {
      console.log(error);
    }
  })
  .catch((err) => {
    console.log(err);
  });
// import { connectionInstance } from "./db/index.js";
// import app from "./app.js";
// connectionInstance.then((res) => {
//   console.log(res);
// });
