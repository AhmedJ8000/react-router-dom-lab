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

            {Array.isArray(mails) && mails.length > 0 ? (
                mails.map((oneMail, index) => (
                    <div key={oneMail._id}>
                        <Link to={`/mailboxes/${oneMail._id}`}>
                            <br />Mailbox {index + 1}
                        </Link>
                    </div>
                ))
            ) : (
                <p>No mailboxes available.</p>
            )}
        </div>
    )
}

export default MailboxList
