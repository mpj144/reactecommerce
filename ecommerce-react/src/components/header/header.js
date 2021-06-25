import React from 'react'

import Menu from '../Menu/Menu'

import './header.css'

import logo from '../../assets/logo.png'



const Header = () => (
    <header className="app-header">

        <img src={logo} alt="logo" />

        <Menu />

    </header>
)

export default Header