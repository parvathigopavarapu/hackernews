import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return <nav className='navbar bg-dark'>
        <ul className='nav'>
            <li className='nav-item li-display mr-3'>
                <Link to='/'><strong>Hacker News</strong></Link>
            </li>
            <li className='nav-item li-display mr-3'>
                <Link to='/newest'>New</Link>
            </li>
            <li className='nav-item li-display mr-3'>
                <Link to='/front'>Past</Link>
            </li>
            <li className='nav-item li-display mr-3'>
                <Link to='/newcomments'>Comments</Link>
            </li>
            <li className='nav-item li-display mr-3'>
                <Link to='/jobs'>Jobs</Link>
            </li>
        </ul>
    </nav>

}
export default Navbar;