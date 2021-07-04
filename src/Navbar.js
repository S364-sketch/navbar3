
import React, { useState } from 'react'
import logo from './logo.jpg';
import MenuIcon from '@material-ui/icons/Menu';
import { links,social } from './Data';

const Navbar = () => {
    const [sidebar,setsidebar]=useState(false)
    const showbar=()=>{
        setsidebar(!sidebar);
    }

    return (
        <>
            <nav>
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} alt="" />
                        <button className='nav-toggle' onClick={showbar}>
                            <MenuIcon />
                        </button>
                        <div className={sidebar ? 'links-container' : 'show-container'} >
                            <ul className='links'>
                                {links.map((link) => {
                                    const { id, url, text } = link;
                                    return (
                                        <>
                                            <li key={id}>
                                                <a href={url}>{text}</a>
                                            </li>
                                        </>
                                    )
                                })}

                            </ul>
                        </div>
                        <ul className="social-icons">
                        {social.map((socialIcon)=>{
                            const {id,url,icon}=socialIcon;
                            return(
                                <>
                                <li key={id}>
                                    <a href={url}>{icon}</a>
                                </li>
                                </>
                            )
                        })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
