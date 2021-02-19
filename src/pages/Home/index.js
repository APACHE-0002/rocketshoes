import React, { Component } from 'react';
import {connect} from 'react-redux';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import{ MdAddShoppingCart } from 'react-icons/md';

import './styles.css';

class Home extends Component {
    state = {
        products: [],
    }

    async componentDidMount(){
        //primeira busca da api para ser enviada ao store
        const response = await api.get('products');

        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        this.setState({ products: data });
    }

    handleAddProduct = product => {
        /*
        toda vez que ocorrer um dispatch de qualquer aplicação,
        todos os reducers serao ativados
        */
        const { dispatch } = this.props;

        dispatch({
            type: 'ADD_TO_CART',
            product,
        });
    };


    render(){
        const { products } = this.state;
        //puxar direto do connect com class component
        const { amount } = this.props;

        return(
            <ul className="productlist">
                {products.map(product => (
                    <li key={product.id}>
                    <img src={product.image} alt="Tênis"/>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                    {/*
                    formatar diretamente dentro do render o formato do valor,
                    ira fazer com que sempre que altere qualquer estado como o de carrinho,
                    ira recarregar o render inteiro novamente,
                    a melhor momento para formatar o valor seria diretamente na chegada da api
                    na aplicação no componentdidmount,
                    que no caso carrega a pagina assim que inicia.
                    caso fosse colocar diretamente: <span>{formatPrice(product.price)}</span>
                    */}
    
                    <button type="button" onClick={() => this.handleAddProduct(product)}>
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF"/>{' '} {amount[product.id] || 0}
                        </div>
    
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
                ) )}
                
            </ul>
        )
    }
}


export default connect(state => ({
    // colocando quantidade em cada um dos produtos
    amount: state.cart.reduce((amount, product) => {
            amount[product.id] = product.amount;

        return amount;
    }, {}),
})
)(Home);