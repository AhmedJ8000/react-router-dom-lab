import { Link } from 'react-router'

function NavBar() {
  return (
    <div>
        <Link to='/'>Homepage</Link>
        <Link to='/mailboxes'>Mailboxes</Link>
    </div>
  )
}

export default NavBar