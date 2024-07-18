import {model, Schema} from 'mongoose';

const ClientSchema = new Schema(
    {
        FirstName: {
            type: String,
            required: [true, "First Name is required!"],
        },
        LastName: {
            type: String,
            required: [true, "Last Name is required!"],
        },
        Email: {
            type: String,
            required: [true, "Email Name is required!"],
        },
        Number: {
            type: String,
            required: [true, "Phone Number is required!"],
        }


    },
    { timestamps: true }
);

const Client = model("Client", ClientSchema)
export default Client;