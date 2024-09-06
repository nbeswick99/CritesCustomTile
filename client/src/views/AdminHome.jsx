import React, {useState, useEffect} from "react"
import axios from "axios"
import { useNavigate} from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useJwsContext } from "../hooks/useJwsContext.jsx"
//Components
import ContactCard from "../components/ContactCard"
//css import
import '../css/Admin.css' 

const AdminHome = () => {
    //state variables
    const {user } = useJwsContext();
    const [contacts, setContacts] = useState([
      {
        _id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "example@email.com",
        number: "18121234567"
      },
      {
        _id: 2,
        firstName: "Jane",
        lastName: "Doe",
        email: "example@email.com",
        number: "18121234567"
      }
    ]);
    const [deleteClient, setDeleteClient] = useState(null);
    const {logout} = useLogout();

    //make useNavigate easier to use 
    const navigate = useNavigate();

    // Delete to be passed to each contact, stored here so the we can 
    // update deleteClient variable for useEffect function

    const deleteOne = ((_id) => {
        axios.delete(`http://localHost:8000/api/clients/${_id}`)
        .then(res => {
          console.log(res.data)
          setDeleteClient(res.data);
        })
        .catch(err => console.log(err))
      })
    
    // deleteClient serves to cause this to reload, getting updated
    // contact list 
    useEffect(()=>{
      if (user) {
        axios.get("http://localhost:8000/api/clients", {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        })
            .then((res) => {
              setContacts(res.data);
              console.log(res.data);
            })
            .catch((err) => {
                console.log(err); 
            })
      }
      }, [deleteClient, user])

      const logoutHandler = () => {
        logout();
      }

    return (
       <div>
            <div className='admin-header'>
                <h1>CritesCustomTile</h1>
                <button className='logout-button' onClick={logoutHandler}>Logout</button>
            </div>
            <div className='admin-container'>
                <div className='admin-nav'>
                    <p>Home</p>
                </div>
                { contacts? (
                <div className='contacts'>
                    {contacts.map((eachContact, IDX) => {
                        return <ContactCard key={IDX} contact={eachContact} deleteOne = {deleteOne}/>
                    })}
                </div>     
                ): (<h1> You have no contacts</h1>
                )}                                    
            </div>
       </div>
    )
}

export default AdminHome