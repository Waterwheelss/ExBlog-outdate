import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar__logo-container">
                <Icon className="navbar__logo" />
            </div>
            <div className="navbar__list-container">
                <ul className="navbar__list">
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <a>
                            Sign Up
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar