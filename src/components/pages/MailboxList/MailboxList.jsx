import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router'

function MailboxList() {
    const [mails, setMails] = useState([])

    async function getAllMails() {
        try {
            const allMails = await axios.get(import.meta.env.VITE_API_BASE_URL)
            console.log('API response:', allMails.data)
            if (Array.isArray(allMails.data)) {
                setMails(allMails.data) // direct array
            } else {
                console.error('API did not return an array:', allMails.data)
                setMails([])
            }
        } catch (error) {
            console.error('Error fetching mails:', error)
            setMails([])
        }
    }

    useEffect(() => {
        try {
            getAllMails()
        } catch (error) {
            console.error('Error in useEffect:', error)
        }
    }, [])

    return (
        <div>
            <h1>Mailbox List</h1>
            {(() => {
                try {
                    if (Array.isArray(mails)) {
                        return mails.map(oneMail => (
                            <div key={oneMail._id}>
                                <p>Boxholder: {oneMail.owner}</p>
                                <p>Box Size: {oneMail.size || "None"}</p>
                                <Link to={`/mailboxes/${oneMail._id}`}>See Mail Details</Link>
                            </div>
                        ))
                    } else {
                        return <p>No mails available.</p>
                    }
                } catch (error) {
                    console.error('Error rendering mails:', error)
                    return <p>Error displaying mails.</p>
                }
            })()}
        </div>
    )
}

export default MailboxList
