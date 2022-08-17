import './App.css';

import { Routes, Route } from 'react-router-dom';

import NavBar from './Componentes/NavBar/NavBar';

import Home from './Paginas/Home/Home';
import Carrito from "./Paginas/Carrito/Carrito";
import ItemListContainer from './Paginas/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./Paginas/ItemDetailContainer/ItemDetailContainer";
import TerminarCompra from "./Paginas/TerminarCompra/TerminarCompra";

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/carrito' element={<Carrito/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/TerminarCompra' element={<TerminarCompra/>} />
      </Routes>

    </div>
  );
}

export default App;
