import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import { useState } from 'react';
import AgregarBebida from './components/AgregarBebida';
import ProductosAgregados from './components/ProductosAgregados';
import PharmacyComponent from './components/PharmacyComponent';

function App() {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  return (
    <Router>
      <div className='navi'>
        <h1>Farmacia</h1>
        <Navigation />
        <Switch>
          <Route path="/agregar">
            <AgregarBebida />
          </Route>
          <Route path="/editar">
            < PharmacyComponent onProductoAgregado={agregarProducto} />
          </Route>
          <Route path="/productos">
            <ProductosAgregados productos={productos} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
