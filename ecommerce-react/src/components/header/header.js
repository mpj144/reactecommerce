import React from 'react'

import Menu from '../menu/Menu'

import './header.css'

import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom';



const Header = () => (
    <header className="app-header">

        <Link to="/">
            <img className="logo" src={logo} alt="logo" />
        </Link>

        <div>
            PROJETO FOCADO NO INTUITO DE CONSUMIR O BACK-END (CRUD)
        </div>

        <Menu />

    </header>
)

export default Header