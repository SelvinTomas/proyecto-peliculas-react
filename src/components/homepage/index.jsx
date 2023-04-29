import React from "react";
import './index.scss';
import { Link } from "react-router-dom";
import Logo from '../../assets/Azul-School-Logo-Oscuro.png'

const Homepage  = () => (
    <>
        <div className="welcome-container">
            <img src={Logo} alt="logotipo" />
            <p className="welcome-test">
                Bienvenido a la mejor plataforma de peliculas realizada con React
            </p>
            <button className="welcome-button"><Link to="/peliculas">Ver Películas</Link></button>
        </div>
    </>
); 
export default Homepage;