import React, {useEffect, useState} from 'react'
import "./NavBar.css";
import avartar from "./avartar.png";


function NavBar() {

    const [show, handleShow] = useState(false);


    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100) handleShow(true)
            else handleShow(false)
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
             className="nav__logo"
             src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
             alt="Netflix Logo"/>
             <img
             className="nav__avatar"
             src={avartar}
             alt="Avatar"/>
        </div>
    )
}

export default NavBar
