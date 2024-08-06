import React, {useState, useEffect} from "react"
import axios from "axios"
import { useNavigate} from "react-router-dom"
//Components
import ContactCard from "../components/ContactCard"
//css import
import '../css/AdminHome.css' 
const AdminHome = () => {
    const [contacts, setContacts] = useState();
    
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/clients")
            .then((res) => {
              setContacts(res.data);
              console.log(res.data);
            })
            .catch((err) => {
                console.log(err); 
            })
      }, [])

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
                        return <ContactCard key={IDX} contact={eachContact}/>
                    })}
                </div>     
                ): (<h1> You have no contacts</h1>
                )}                                    
            </div>
       </div>
    )
}

export default AdminHome