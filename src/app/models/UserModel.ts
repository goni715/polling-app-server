import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";


const UserSchema = new Schema<IUser>({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
});



const UserModel = model<IUser>('users', UserSchema);
export default UserModel;