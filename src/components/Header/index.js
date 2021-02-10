import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

import { MdShoppingBasket } from 'react-icons/md';
import './styles.css';

export default function Header(){
    return(
        <header className="container">

            <Link to="/">
            <img src={logo} alt="rocketseat"/>
            </Link>

            <Link to="/cart">
            <div className="cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>3 itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </div>
            </Link>

        </header>
    )
}