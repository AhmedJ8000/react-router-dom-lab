import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useEffect } from 'react'
import { Spin } from 'antd';


function MailboxDetails() {
    const [mail, setMail] = useState()
    const {id} = useParams()

    async function getMail(){
        try{
        const foundMail = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
        setMail(foundMail.data)

        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getMail()
    },[])

    // 1. make a state for the mail
    // 2. make function to make axios call to server and set the state to the result
    // 3. call function in useEffect
    // 4. Show value in JSX
  return (
    <div>
        <h1>Mail Details</h1>

        {mail ? (<>
            <h2>Name: {mail.owner}</h2>
            <p>Course: {mail.size}</p>
        
        </>) :  <Spin />}
    </div>
  )
}

export default MailboxDetails