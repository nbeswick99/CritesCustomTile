import React, {useState, useEffect} from "react"
import axios from "axios"
import { useNavigate} from "react-router-dom"

import ContactCard from "../components/ContactCard"

const AdminHome = () => {
    const [contacts, setContacts] = useState();
    
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/clients")
            .then((res) => {
              setContacts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
      }, [])

    return (
       <div>
            <div>
                <h1>CritesCustomTile</h1>
                <button>Logout</button>
            </div>
            <div>
                <div>
                    <p>Home</p>
                </div>
                { contacts? (
                <div>
                    {contacts.map((eachContact, IDX) => {
                        return <ContactCard key={IDX} img={eachContact}/>
                    })}
                </div>     
                ): (<h1> You have no contact</h1>
                )}                    
                
            </div>
       </div>
    )
}

export default AdminHome