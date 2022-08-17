import React from 'react'

import "./NavBar.css"

import logo from "../../Media/flipa_white.png"

import { Link, NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
  return (
    <>
        <nav>
            <input type="checkbox" id="check"/>
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <Link to={"/"} class="enlace">
                <img src={logo} alt="flipa" class="logo"/>
            </Link>
            
            <ul class="ulnav">

                <li><Link to={"/"}>Inicio</Link></li>

                <li><Link to={"/contacto"}>Contactanos</Link> </li>

                <li className='menu'><NavLink to={"/"}>Categorias</NavLink>
                    <ul className='submenu'>
                        <li><Link to={"/category/categoria1"}>Categoria1</Link></li>
                        <li><Link to={"/category/categoria2"}>Categoria2</Link></li>
                    </ul>
                </li>
            </ul>
            <div className='cart-wid-nav'>
                <CartWidget/>
            </div>
        </nav>
    </>
  );
}

export default NavBar