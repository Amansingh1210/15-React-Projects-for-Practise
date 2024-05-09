import React, { useState, useRef, useEffect } from 'react'
import { links, socials } from './data'
import logo from './logo.svg'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [showLinks, setShowlinks] = useState(false);
    const linksContanierRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(()=>{
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if(showLinks){
            linksContanierRef.current.style.height = `${linksHeight}px`
        }
        else{
            linksContanierRef.current.style.height = '0px'
        }
    },[showLinks])
    return <nav>
        <div className='nav-center'>
            <div className='nav-header'>
                <img src={logo} alt='logo' />
                <button className='nav-toggle' onClick={() => setShowlinks(!showLinks)}>
                    <FaBars />
                </button>
            </div>
            <div className='links-container' ref={linksContanierRef} >
                <ul className='links' ref={linksRef}>
                    {links.map((link) => {
                        const { id, url, text } = link;
                        return <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                    })}

                </ul>
            </div>
            <ul className='social-icons'>
                {socials.map((social) => {
                    const { id, url, icon } = social;
                    return <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                })}

            </ul>
        </div>
    </nav>
}

export default Navbar