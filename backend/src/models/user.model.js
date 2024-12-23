import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    coverImg: {
      type: String,
    },
    email: {
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    fullname: {
      type: String,
      required: true,
      lowercase: true,
    },

    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    refreshToken: {
      type: String,
    },
    accessToken: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    stickyWallId: {
      type: Schema.Types.ObjectId,
      ref: "StickyWall",
    },
    todoId: {
      type: Schema.Types.ObjectId,
      ref: "Todo",
    },
  },
  {
    timestamps: true,
  }
);
userSchema.methods.changePassword = async function (password) {
  try {
    password = await bcrypt.hash(password, 10);

    return password;
  } catch (error) {
    console.error("error");
  }
};
userSchema.pre("save", function (next) {
  this.password = bcrypt.hash(this.password, 10);
  next();
});
userSchema.methods.isPasswordValid = function (password) {
  const compared = bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      fullname: this.fullname,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};
userSchema.methods.generateResourceToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOEKN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};
const User = mongoose.model("User", userSchema);
export default User;
