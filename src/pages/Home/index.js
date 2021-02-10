import React from 'react';
import{ MdAddShoppingCart } from 'react-icons/md';

import nike from '../../assets/nike.jpg';

import './styles.css';

export default function Home(){
    return(
        <ul className="productlist">
            <li>
                <img src={nike} alt="Tênis"/>
                <strong>Tenis muito bom</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF"/> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src={nike} alt="Tênis"/>
                <strong>Tenis muito bom</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF"/> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src={nike} alt="Tênis"/>
                <strong>Tenis muito bom</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF"/> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src={nike} alt="Tênis"/>
                <strong>Tenis muito bom</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF"/> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src={nike} alt="Tênis"/>
                <strong>Tenis muito bom</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF"/> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src={nike} alt="Tênis"/>
                <strong>Tenis muito bom</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF"/> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ul>
    )
}