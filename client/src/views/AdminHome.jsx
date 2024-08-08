import React, {useState, useEffect} from "react"
import axios from "axios"
import { useNavigate} from "react-router-dom"
//Components
import ContactCard from "../components/ContactCard"
//css import
import '../css/AdminHome.css' 

const AdminHome = () => {
    //state variables
    const [contacts, setContacts] = useState();
    const [deleteClient, setDeleteClient] = useState(false);

    //make useNavigate easier to use 
    const navigate = useNavigate();

    // Delete to be passed to each contact, stored here so the we can 
    // update deleteClient variable for useEffect function

    const deleteOne = ((_id) => {
        axios.delete(`http://localHost:8000/api/clients/${_id}`)
        .then(res => {
          console.log(res.data)
          setDeleteClient(true);
        })
        .catch(err => console.log(err))
      })
    
    // deleteClient serves to cause this to reload, getting updated
    // contact list 
    useEffect(()=>{
        axios.get("http://localhost:8000/api/clients")
            .then((res) => {
              setContacts(res.data);
              console.log(res.data);
              if (deleteClient == true) {
                setDeleteClient(false);
              }
            })
            .catch((err) => {
                console.log(err); 
            })
      }, [deleteClient])

    return (
       <div>
            <div className='admin-header'>
                <h1>CritesCustomTile</h1>
                <button className='logout-button'>Logout</button>
            </div>
            <div className='admin-body'>
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