import React from 'react'
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
                        <a>
                            Login
                        </a>
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