import React from "react";
import axios from "axios";
// css imports
import '../css/ContactCard.css'

const ContactCard = (props) => {
    const {contact, deleteOne} = props;

    const formatPhone = (number) => {
        let phone = number
        console.log(phone)
        return `+${phone.slice(0, 1)} (${phone.slice(1,4)}) ${phone.slice(4,7)} - ${phone.slice(7, phone.length)}`
    }

    


    return ( contact?(
        <div className="contact-card">
            <div>
                <div className="info-container">
                    <p>Name: </p>
                    <p>{contact.firstName + " " + contact.lastName}</p>
                </div>
                <div className="info-container">
                    <p>Email: </p>
                    <p>{contact.email}</p>
                </div>
                <div>
                    <div className="info-container">
                        <p>Number: </p>
                        <p>{formatPhone(contact.number)}</p>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button className="delete-button" onClick={() => deleteOne(contact._id)}> Delete </button>
            </div>
        </div>
    ): <h1>Loading</h1>
    )
}

export default ContactCard;