import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import "../STYLES/footer.css"
import { useLocation } from 'react-router-dom'

export default function Footer() {

    const location = useLocation();

    const { pathname } = location;

    const splitLocation = pathname.split("/")


    return (
        <div className="footer">
            
            <span>© 2022 ZooPer Trivia</span>
        {splitLocation[1] !== "home" ?
            <NavLink to="/administrador" disabled={splitLocation[1] === "home"} ><span> Acceder como Administrador </span></NavLink>
            :
    null}
        </div>
    )
}