import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
function MailboxForm() {
    const [formData, setFormData] = useState({
        owner: '',
        size: ''
    })
  // 1. Create a form and add handleSubmit to form that prevents default
  // 2. create a state for formData that is an object
  // 3. for each input add the value as formData.something
  // 4. create handleChange for input values
    const navigate = useNavigate()
  async function handleSubmit(event){
    event.preventDefault()
    
    try{
    const createdMail = await axios.post(import.meta.env.VITE_API_BASE_URL,formData)
    navigate('/mailboxes')

    }
    catch(error){
        console.log(error)
    }
  }

  function handleChange(event){
    setFormData({...formData, [event.target.name] : event.target.value})
  }


  useEffect(()=>{ console.log(formData)},[formData])
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="owner">Owner:</label>
            <input onChange={handleChange} value={formData.owner} name='owner' id='owner' type="text" />

            <label htmlFor="size">Size:</label>
            <input onChange={handleChange} value={formData.size} name='size' id='size' type="text" />

            <button>Create Mailbox</button>
        </form>
    </div>
  )
}

export default MailboxForm