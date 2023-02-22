import React from 'react';
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import './Footer.scss';

export function Footer() {
const { theme } = useContext(GlobalContext)
  
    return(
        <div>
            <div className="footer-container">
             <nav className={`nav-${theme}`}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Loterías</a></li>
                    <li><a href="#">Sobre nosotros</a></li>
                </ul>
            </nav>
            <nav className={`nav-${theme}`}>
                <ul>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Política de privacidad</a></li>
                    <li><a href="#">Política de cookies</a></li>
                </ul>
            </nav>
            <nav className={`nav-${theme}`}>
                <ul>
                    <li><a href="#">Condiciones de uso</a></li>
                    <li><a href="#">Aviso legal</a></li>
                    <li><a href="#">Condiciones de contratación</a></li>
                </ul>
            </nav>

            </div>
        </div>
    )
}