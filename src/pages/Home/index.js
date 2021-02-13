import React, { Component } from 'react';
import{ MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';

import nike from '../../assets/nike.jpg';

import './styles.css';

export default class Home extends Component {
    state = {
        products: [],

    }

    async componentDidMount(){
        const response = await api.get('products');

        this.setState({ products: response.data })
    }

    render(){
        const { products } = this.state;

        return(
            <ul className="productlist">
                {products.map(product => (
                    <li key={product.id}>
                    <img src={product.image} alt="Tênis"/>
                    <strong>{product.title}</strong>
                    <span>R$ {product.price}</span>
    
                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF"/> 3
                        </div>
    
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
                ) )}
                
            </ul>
        )
    }
}