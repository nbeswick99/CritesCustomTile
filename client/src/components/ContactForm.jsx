import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom' 

import '../css/ContactForm.css'

const ContactForm = () => {
  const [contact, setContact] = useState({
    firstName: "", 
    lastName: "",
    email: "",
    number: "",
  });

  const Navigate = useNavigate();

  const dashNumber = (cleanPhone) => {
    if (cleanPhone.length <= 3) {
      return cleanPhone
    } else {
      return `${cleanPhone.slice(0,3)}-${cleanPhone.slice(3, cleanPhone.length)}`
    }
  }

  const changeHandler = (e) => {
    if (e.target.name == "number" ){
      let cleanPhone = e.target.value.replace(/[^\d]/g, '');
      let maxChar = 7
      if (cleanPhone.length <= maxChar) {
        setContact((prevState) => ({...prevState,
          [e.target.name]: dashNumber(cleanPhone)
        }));
      }      
    } else {
      setContact((prevState) => ({...prevState,
        [e.target.name]: e.target.value
      }));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newContact = contact
    newContact.number = "+1812" + contact.number
    axios.post("http://localhost:8000/api/listings", newContact)
    .then((res) => {
      console.log(res.data)
      setContact({
        firstName: "", 
        lastName: "",
        email: "",
        number: ""
        })
      Navigate("/");
    })
    .catch((err) => {
      {
        setCreateErr(err.response.data.errors)
      }
    })
  }

  return (
    <div className='contact-form-container'>
      <h1>Contact</h1>
      <form onSubmit={e => submitHandler(e)} className='form'>
        <div className='input-container'>
          <label htmlFor="firstName">First Name:</label>
          <input placeholder='First Name'type="text" id="firstName" name="firstName" value={contact.firstName} onChange ={e => changeHandler(e)}/>
        </div>
        <div className='input-container'>
          <label htmlFor="lastName">Last Name:</label>
          <input placeholder='Last Name'type="text" id="lastName" name="lastName" value={contact.lastName} onChange ={e => changeHandler(e)}/>
        </div>
        <div className='input-container'>
          <label htmlFor="email">Email:</label>
          <input placeholder='example@email.com'type="text" id="email" name="email" value={contact.email} onChange ={e => changeHandler(e)}/>
        </div>
        <div className='input-container'>
          <label htmlFor="number">Number:</label>
          <div className='number-container'>
            <span>+1 (812) </span>
            <input placeholder=' ###-####'type="text" id="number" name="number" value={contact.number} onChange ={e => changeHandler(e)}/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm