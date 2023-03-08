import React from　'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <nav className='header-nav'>
            <ul className='header-navlist'>
                <li className='header-navitem'>
                    <Link to="/">HOME</Link>
                 </li>
                <li>
                    <Link to="/skills">SKILLS</Link>
                </li>
                <li>                      
                    <Link to="/question">QUESTION</Link>
                </li>
                <li>
                    <Link to="/spotify">SPOTIFY</Link>
                </li>
            </ul>
        </nav>
        
    </header>
  )
}

export default Header