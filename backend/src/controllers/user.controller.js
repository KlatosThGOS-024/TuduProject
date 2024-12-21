import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const generateAccessAndAccessToken = async function (user) {
  try {
    const foundUser = await User.findById(user._id);
    const resourceToken = await foundUser.generateResourceToken();
    const accessToken = await foundUser.generateAccessToken();
    foundUser.refreshToken = resourceToken;
    foundUser.accessToken = accessToken;
    await foundUser.save({ validateBeforeSave: false });
    return { resourceToken, accessToken };
  } catch (error) {
    throw new ApiError(400, "Error while generating token");
  }
};
const userRegister = asyncHandler(async (req, res) => {
  const { fullname, username, email, password } = req.body;

  console.log(req.files);
  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const userExist = await User.findOne({
    $or: [{ email }, { username }],
  });
  if (userExist) {
    throw new ApiError(409, "User already exist");
  }

  const avatarLocalPath = await req.files?.avatar[0]?.path;
  console.log(avatarLocalPath);
  let coverLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImg) &&
    req.files.coverImg.length > 0
  ) {
    coverLocalPath = req.files.coverImg[0].path;
  }

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }
  console.log(avatarLocalPath, coverLocalPath);
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverLocalPath);
  console.log(avatar);
  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  const user = await User.create({
    fullname,
    username,
    email,
    password,
    coverImg: coverImage?.url,
    avatar: avatar.url,
  });
  const createdUser = await User.findOne(user._id).select("-password ");
  if (!createdUser) {
    throw new ApiError(409, "Something went wrong while finding the user");
  }
  console.log("fddfdsfdsfdsfdsfdsfsdfsddsfsdfsdfsdfsdf");
  res.status(201).json(new ApiResponse(200, "User created successfully"));
});

const userLogin = asyncHandler(async (req, res) => {
  const { password, username } = req.body;
  // console.log(password, username);
  if (!username) {
    throw new ApiError(404, "Please provide all credentials");
  }
  const userExist = await User.findOne({
    $or: [{ username }],
  });
  if (!userExist) {
    console.log("hellohellohellohello");
    res.status(402).json(new ApiError(402, "Error not found!Unauthorized"));
    return;
  }
  // console.log(userExist);
  const isPasswordCorrect = await userExist.isPasswordValid(password);
  // console.log(isPasswordCorrect);
  if (isPasswordCorrect) {
    throw new ApiError(402, "Password is incorrect");
  }
  //  console.log(userExist);
  const { resourceToken, accessToken } =
    await generateAccessAndAccessToken(userExist);
  // console.log(resourceToken);
  const user = await User.findById(userExist._id);
  // user.select("-password -resourceToken");
  console.log("fggsfgsgsgdsgdsdsddffdsfsfs");

  res
    .status(200)
    .cookie("refreshToken", resourceToken, {
      httpOnly: true, // Prevents JavaScript access to the cookie
      secure: true, // Send the cookie only over HTTPS
      sameSite: "None", // Necessary for cross-site cookies
      maxAge: 3600000, // 1 hour
    })
    .cookie("accessToken", accessToken, {
      httpOnly: true, // Prevents JavaScript access to the cookie
      secure: true, // Send the cookie only over HTTPS
      sameSite: "None", // Necessary for cross-site cookies

      maxAge: 3600000, // 1 hour
    })
    .json(
      new ApiResponse(
        200,

        user,

        "UserFound Successfully"
      )
    );
  // , {
  //   httpOnly: true,
  //   secure: true,
  //   sameSite: "None",
  //   maxAge: 3600000,
  // }
});
const loginCheck = asyncHandler(async (req, res) => {
  const token = req.cookies?.accessToken;

  if (!token) {
    res.status(403).json(new ApiError(403, "token not found"));
  }

  const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  const user = await User.findById(decodeToken._id);

  if (!user) {
    res.status(403).json(new ApiError(403, "token not found"));
  }

  res.status(200).json(new ApiResponse(200, "Everythings Right"));
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1, // this removes the field from document
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const token =
    req.cookies?.refreshToken ||
    req.header("Authorization")?.replace("Bearer", "");
  if (!token) {
    throw new ApiError(400, "token not found");
  }
  const decodeToken = jwt.verify(token, process.env.REFRESH_TOEKN_SECRET);
  const user = await User.findById(decodeToken._id);
  if (!user) {
    throw new ApiError(400, "Error user not found");
  }
  console.log(user, token);
  if (user.refreshToken !== token) {
    throw new ApiError(
      401,
      "The Refresh Token and DecodedRefreshToken isn't correct"
    );
  }
  const { resourceToken, accessToken } =
    await generateAccessAndAccessToken(user);
  console.log({ resourceToken, accessToken });
});

// const updatePassword = asyncHandler(async (req, res) => {
//   const { newPassword, username, email } = req.body;

//   if ([email, username, newPassword].some((field) => field?.trim() === "")) {
//     throw new ApiError(400, "All fields are required");
//   }
//   const userExist = await User.findOne({
//     $or: [{ email }, { username }],
//   });
//   if (!userExist) {
//     throw new ApiError(400, "User not found");
//   }
//   const user = await User.findById(userExist._id);

//   const changedPassword = await user.changePassword(newPassword);

//   await User.updateOne(
//     { _id: user._id },
//     {
//       $set: { password: changedPassword },
//     }
//   );
//   const user2 = await User.findById(userExist._id);
//   res
//     .status(200)
//     .json(new ApiResponse(200, user2, "Password Updated Successfully"));
// });
// const updateUserInfo = asyncHandler(async (req, res) => {
//   const { email, fullname } = req.body;
// });
const updatePassword = asyncHandler(async (req, res) => {
  const { newPassword, confirmPassword, currentPassword } = req.body;

  if (
    newPassword.trim() === "" ||
    confirmPassword.trim() === "" ||
    currentPassword.trim() === ""
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // Find user by ID
  const user = await User.findById(req.user?._id);
  if (!user) {
    throw new ApiError(
      400,
      "User not present/login Please login to change the password"
    );
  }

  const isPasswordCorrect = await user.isPasswordValid(currentPassword);
  if (isPasswordCorrect) {
    throw new ApiError(403, "Current password is incorrect");
  }

  if (newPassword !== confirmPassword) {
    throw new ApiError(400, "New password and confirm password do not match");
  }
  console.log(user.password);
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  // Hash the new password and save it
  await User.findById(
    {
      _id: user._id,
    },
    {
      $set: { password: hashedPassword },
    }
  );

  await user.save({ validateBeforeSave: false });

  res
    .status(200)
    .json(new ApiResponse(200, {}, "Password updated successfully"));
});

const updateUserInfo = asyncHandler(async (req, res) => {
  const { fullname, email } = req.body;
  if (fullname.trim() === "" || email.trim() === "") {
    throw new ApiError(400, "All fields are required");
  }
  console.log(req.user.fullname);
  await User.findByIdAndUpdate(
    {
      _id: req.user._id,
    },
    { $set: { fullname } }
  );
  res
    .status(200)
    .json(
      new ApiResponse(200, req.user.fullname, "Fullname updated successfully")
    );
});

const updateAvatar = asyncHandler(async (req, res) => {
  const avatarLocalPath = await req.files?.avatar[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Provide all credentials");
  }
  const avatarUrl = await uploadOnCloudinary(avatarLocalPath);
  if (!avatarUrl) {
    throw new ApiError(400, "AvatarUrl not found");
  }
  const user = await User.findByIdAndUpdate(
    {
      _id: req.user._id,
    },
    {
      avatar: avatarUrl.url,
    },
    {
      new: true,
    }
  ).select("-password");
  res
    .status(200)
    .json(new ApiResponse(200, user, "Avatar updated Successfully"));
});
const updateCoverImg = asyncHandler(async (req, res) => {
  const coverImgLocalPath = await req.files?.coverImg[0]?.path;

  if (!coverImgLocalPath) {
    throw new ApiError(400, "Provide all credentials");
  }
  const coverImg = await uploadOnCloudinary(coverImgLocalPath);
  if (!coverImg) {
    throw new ApiError(400, "coverImg not found");
  }
  const user = await User.findByIdAndUpdate(
    {
      _id: req.user._id,
    },
    {
      coverImg: coverImg.url,
    },
    {
      new: true,
    }
  ).select("-password");
  res
    .status(200)
    .json(new ApiResponse(200, user, "Cover Image updated Successfully"));
});
const getCurrentUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById({
      _id: req.user?._id,
    }).select("-password -refreshToken");
    res.status(200).json(new ApiResponse(200, user, "User found successfully"));
  } catch (error) {
    throw new ApiError(404, "User is not logged in Unauthorized attempt");
  }
});
export {
  userRegister,
  userLogin,
  logoutUser,
  refreshAccessToken,
  updatePassword,
  updateUserInfo,
  updateAvatar,
  updateCoverImg,
  getCurrentUser,
  loginCheck,
};
//$2b$10$CZeIOKb1jkqNiS0l.FSR3OC3iBZVNRpC1NZoQPHL9sCO3pHdCYFxa;
//$2b$10$CZeIOKb1jkqNiS0l.FSR3OC3iBZVNRpC1NZoQPHL9sCO3pHdCYFxa
//$2b$10$CZeIOKb1jkqNiS0l.FSR3OC3iBZVNRpC1NZoQPHL9sCO3pHdCYFxa
// /$2b$10$bqnJiSyUZxaCbpNsRY4mkOnLR4/9pf/rWG1dG468JEUYPKRH7HAy
// /$2b$10$1gKfm8rV7oiI3eJQ0lrgh.xFNB7OjYWCM.G4HPI5CUwQhulgFuKWa
