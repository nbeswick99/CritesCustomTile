import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom' 

const ContactForm = () => {
  const [contact, setContact] = useState({
    firstName: "", 
    lastName: "",
    Email: "",
    Number: []
  });

  const Navigate = useNavigate();

  const changeHandler = (e) => {
    setProduct((prevState) => ({...prevState,
      [e.target.name]: e.target.value
      }))
    };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/listings", contact)
    
  };

  return (
    <div>
      <form action="">

      </form>
    </div>
  )
}

export default ContactForm