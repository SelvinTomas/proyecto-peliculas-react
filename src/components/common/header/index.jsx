import React from "react";
import './index.scss'
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <>
            <header className="header-container">
                <ul>
                    <li><Link>Inicio</Link></li>
                    <li><Link>Películas</Link></li>
                    <li><Link>Crear pelicula</Link></li>    
                </ul>
                <div className="search-container">
                    <input type="text" name="search" placeholder="Busca una pelicula" />
                    <button>Buscar</button>
                </div>
            </header>
        </>
    )
}

export default Header;