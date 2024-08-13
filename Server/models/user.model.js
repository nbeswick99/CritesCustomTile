import {model, Schema} from 'mongoose';

const UserSchema = new Schema(
    {
        username: {
            type: String, 
            required: [true, "Username is required!"],
        },
        password: {
            type: String, 
            required: [true, "Password is required!"],
        },
        name: {
            type: String,
            required: [true, "firstname is required!"]
        }
    },
    {timestamps: true}
);

const User = model("Login", LoginSchema)
export default User;