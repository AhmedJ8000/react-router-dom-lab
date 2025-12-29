import React from 'react'
import Homepage from './components/pages/Homepage'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router'
import MailboxDetails from './components/pages/MailboxDetails/MailboxDetails'
import MailboxList from './components/pages/MailboxList/MailboxList'

function App() {
  return (
    <main>
      <h1>Post Office</h1>
      <NavBar/>
      <Routes>
        <Route path='/mailboxes/:id' element={<MailboxDetails/>}/>
        <Route path='/mailboxes' element={<MailboxList/>} />
        <Route path='/' element={<Homepage/>} />
      </Routes>
      </main>
  )
}

export default App