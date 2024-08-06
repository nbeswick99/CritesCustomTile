import {model, Schema} from 'mongoose';

const LoginSchema = new Schema(
    {
        username: {
            type: String, 
            required: [true, "Username is required!"],
        },
        password: {
            type: String, 
            required: [true, "Password is required!"],
        },
        firstName: {
            type: String,
            required: [true, "firstname is required!"]
        }
    },
    {timestamps: true}
);

const Login = model("Login", LoginSchema)
export default Login;