import React from "react";

// import axios from "axios";
const ContactCard = (props) => {
    const contact = props.contact

    const formatPhone = (number) => {
        let phone = number
        return `+${phone.slice(0, 1)} (${phone.slice(1,4)}) ${phone.slice(4,7)} - ${phone.slice(7, phone.length)}`
    }

    return ( contact?(
        <div>
            <div className="info-container">
                <p>Name: </p>
                <p>{contact.firstName + " " + contact.lastName}</p>
            </div>
            <div className="info-container">
                <p>Email: </p>
                <p>{contact.email}</p>
            </div>55
            <div>
                <div className="info-container">
                    <p>Number: </p>
                    <p>{formatPhone(contact.number)}</p>
                </div>
            </div>
        </div>
    ): <h1>Loading</h1>
    )
}

export default ContactCard;