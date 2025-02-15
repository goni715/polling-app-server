import { model, Query, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import hashedPassword from "../utils/hashedPassword";

const UserSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      validate: {
        validator: function (value) {
          return /^([A-Z][a-zA-Z'.\-]*\s?)+$/.test(value);
        },
        message:
          "Full name must have each word capitalized and can only contain letters, spaces, apostrophes, hyphens, and dots.",
      },
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          // Regex to validate username
          // This example allows alphanumeric characters, underscores, and hyphens
          // Username must be between 3 and 20 characters long
          return /^[a-zA-Z0-9_-]{3,20}$/.test(v);
        },
        message: `Invalid username, Only alphameric characters, underscores and hypens are allowed. No space are permitted. 20 characters long`,
      },
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default: null,
    },
    bookMarkPolls: [
      {
        type: Schema.Types.ObjectId,
        ref: "Poll",
      },
    ],
  },
  {
    timestamps: true,
  }
);

//Hash Password before saving
UserSchema.pre("save", async function (next) {
  const user = this; //this means user

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  user.password = await hashedPassword(user.password);
  next();
});



const UserModel = model<IUser>("users", UserSchema);
export default UserModel;
