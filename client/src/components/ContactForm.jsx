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

  const changeHandler = (e) => {
    if (e.target.name === "number"){
      console.log(e.target)
      if (e.target.value.length() < 3) {
        setContact((prevState) => ({...prevState,
          [e.target.name]: e.target.value
          }));
      } else {
        let dashedNumber = [e.target.value.slice(0,2), "-", e.target.value.slice(2)].join()
        setContact((prevState) => ({...prevState,
          [e.target.name]: dashedNumber
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
          <label htmlFor="firstName">First Name</label>
          <input placeholder='First Name'type="text" id="firstName" name="firstName" value={contact.firstName} onChange ={e => changeHandler(e)}/>
        </div>
        <div className='input-container'>
          <label htmlFor="lastName">Last Name</label>
          <input placeholder='Last Name'type="text" id="lastName" name="lastName" value={contact.lastName} onChange ={e => changeHandler(e)}/>
        </div>
        <div className='input-container'>
          <label htmlFor="email">Email</label>
          <input placeholder='example@email.com'type="text" id="email" name="email" value={contact.email} onChange ={e => changeHandler(e)}/>
        </div>
        <div className='input-container'>
          <label htmlFor="number">Number</label>
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