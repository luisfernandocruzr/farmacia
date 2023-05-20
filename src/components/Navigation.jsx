import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <div className='nav'>
      <ul>
        <li>
          <Link to="/agregar">Agregar Bebidas</Link>
        </li>
        <li>
          <Link to="/editar">Agregar Medicamnetos</Link>
        </li>
        <li>
          <Link to="/productos"> Agregar Dulces</Link>
        </li>
      </ul>
      </div>
    </nav>

  );
}

export default Navigation;
