import {useState, useEffect} from 'react'

import './styles.css'
import List from "./List";
import Form from "./Form";

function Contacts() {

  const [contacts, setContacts] = useState([
   {
     fullname: 'Mehmet',
     phone_number: '23211'
   },{
    fullname: 'Mehmet',
    phone_number: '21251'
  },{
    fullname: 'Mert',
    phone_number: '25899'
  }
  ])

  useEffect(()=>{
 console.log(contacts);
  }, [contacts])
  
  
  return (
    <div id='container'>
        <List contacts={contacts}/>
        <Form addContacts = {setContacts} contacts ={contacts}/>
    </div>
  )
}

export default Contacts