import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';

import Header from './components/Header';

import './styles/global.css';

function App(){
    return (
      /*
       browserRouter inserido no app e nao no routes diretamente,
       para o header ter tambem acesso as rotas(Cart ou retornar a Home),
       e nao precisar reiniciar a pagina para alterar rota
      */
      <BrowserRouter>
        <Header />
        <Routes/>
      </BrowserRouter>
    );
  }




export default App;