import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/logo.svg';
import './styles.css';

function Header({ cartSize }){



    return(
        <header className="container">

            <Link to="/">
            <img src={logo} alt="rocketseat"/>
            </Link>

            <Link to="/cart">
            <div className="cart">
                <div>
                    <strong>Meu carrinho</strong>
                    {cartSize === 1 ? <span>{cartSize} item</span> : <span>{cartSize} itens</span>}
                    {/*
                    se cartSize = 0, itens
                    se cartSize = 1, item
                    se cartSize > 1, itens
                    */}
                    {/*<span>{cart.length} itens</span>*/}
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </div>
            </Link>

        </header>
    )
}

export default connect(state => ({
    cartSize: state.cart.length,
    
}))(Header);