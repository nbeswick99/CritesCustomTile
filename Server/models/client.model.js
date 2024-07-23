import {model, Schema} from 'mongoose';

const ClientSchema = new Schema(
    {
        firstName: {
            type: String,
            required: [true, "First Name is required!"],
        },
        lastName: {
            type: String,
            required: [true, "Last Name is required!"],
        },
        email: {
            type: String,
            required: [true, "Email Name is required!"],
        },
        number: {
            type: String,
            required: [true, "Phone Number is required!"],
        }


    },
    { timestamps: true }
);

const Client = model("Client", ClientSchema)
export default Client;