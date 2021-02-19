import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import {connect} from 'react-redux';
import { formatPrice } from '../../util/format';

import './styles.css';


function Cart({products, total, dispatch}){
    //adicionar quantidade em produto
    function increment(product){
        dispatch({
            type: 'ADD_AMOUNT',
            product,
        });
    }

    //remover quantidade em produto
    function decrement(product){
        dispatch({
            type: 'REMOVE_AMOUNT',
            product,
        });
    }

    return(
        <div className="content">
            <table>
                <thead>
                    <tr>
                        <th/>
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                {products.length > 0 ? products.map(product => (
                    <tr key={product.id}>
                            <td>
                            <img src={product.image} alt="tenis"/>
                        </td>
                        <td>
                            <strong>{product.title}</strong>
                            <span>{product.priceFormatted}</span>
                        </td>
                        <td>
                            <div>
                                <button type="button" onClick={() => decrement(product)}>
                                    <MdRemoveCircleOutline size={20} color="#7159c1"/>
                                </button>
                                <input type="number" readOnly value={product.amount} />
                                <button type="button" onClick={() => increment(product)}>
                                    <MdAddCircleOutline size={20} color="#7159c1"/>
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>{product.subtotal}</strong>
                        </td>
                        <td>
                            {/* funçao onclick, onde quando apertar, ira pegar o id do componente,
                            procurar no redux e remove-lo
                            chegar no redux
                            -onclick, enviando type REMOVE_TO_CART, e o id para o redux cart,
                            no reducer remover o id enviado.                                
                            */}

                            <button type="button" onClick={() => dispatch({ type: 'REMOVE_TO_CART', id: product.id })}>
                                <MdDelete size={20} color="#7159c1" />
                            </button>
                        </td>
                    </tr>
                        )) : ''}

                 
                </tbody>
            </table>

            <footer>
                <button type="button">Finalizar pedido</button>

                <total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </total>
            </footer>
        </div>
    )
}

export default connect(state => ({
    //somar o subtotal de cada item do carrinho
    products: state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
    })),
    //somar o total de todos os itens do carrinho
    total: formatPrice(state.cart.reduce((total, product) =>{
        return total + product.price * product.amount;
    }, 0)),
}))(Cart);