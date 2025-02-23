import { Router } from "express";
import {
  userLogin,
  userRegister,
  logoutUser,
  refreshAccessToken,
  updatePassword,
  updateUserInfo,
  updateAvatar,
  updateCoverImg,
  getCurrentUser,
  longinCheck,
} from "../controllers/user.controller.js";

import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const userRouter = Router();
userRouter.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImg", maxCount: 1 },
  ]),

  userRegister
);

userRouter.route("/loginCheck").post(verifyJWT, longinCheck);
userRouter.route("/login").post(userLogin);
userRouter.route("/logout").post(verifyJWT, logoutUser);
userRouter.route("/refresh-token").post(refreshAccessToken);
userRouter.route("/update-password").post(verifyJWT, updatePassword);
userRouter.route("/update-user").post(verifyJWT, updateUserInfo);
userRouter
  .route("/update-avatar")
  .post(
    upload.fields([{ name: "avatar", maxCount: 1 }]),
    verifyJWT,
    updateAvatar
  );
userRouter
  .route("/update-coverImg")
  .post(
    upload.fields([{ name: "coverImg", maxCount: 1 }]),
    verifyJWT,
    updateCoverImg
  );
userRouter.route("/get-currentUser").get(verifyJWT, getCurrentUser);
export default userRouter;
