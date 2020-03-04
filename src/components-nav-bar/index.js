import React, { Component } from 'react';

import './styles.css';

function Text() {
    return (
    <div className="tittle">
     <h1>Branko Cruz</h1>
    </div>
    );
}


 export default Text;

 function Navbar() {
    <nav className="navegacion">
        <ul className="menu">
                <li><a href="aca va el enlace de otra pagina">Inicio</a></li>
                <li><a href="">Nosotros</a></li>
                <li><a href="">Servicios</a>
                    <ul className="submenu">
                        <li><a href="">Servicio #1</a></li>
                        <li><a href="">Servicio #2</a></li>
                        <li><a href="">Servicio #3</a></li>
                    </ul>
                </li>
                <li><a href="">Contactos</a></li>

        </ul>    
    </nav>
    }
    
export default Navbar;