import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import hashedPassword from "../utils/hashedPassword";


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
        select:0
    },
    profileImage: {
        type: String,
        default: null
    },
    bookMarkPolls: [
        {
            type: Schema.Types.ObjectId,
            ref: "Poll"
        }
    ]
}, {
    timestamps: true
});



//Hash Password before saving
UserSchema.pre("save", async function(next) {
    const user = this; //this means user
    
    // Only hash the password if it has been modified (or is new)
    if (!user.isModified("password")) return next();

    user.password= await hashedPassword(user.password);
    next()
})


const UserModel = model<IUser>('users', UserSchema);
export default UserModel;