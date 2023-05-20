import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const AgregarBebida = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [nuevoMedicamento, setNuevoMedicamento] = useState({
    nombre: '',
    precio: ''
  });
  const [edicionMedicamento, setEdicionMedicamento] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNuevoMedicamento((prevMedicamento) => ({
      ...prevMedicamento,
      [name]: value
    }));
  };

  const agregarMedicamento = () => {
    setMedicamentos((prevMedicamentos) => [
      ...prevMedicamentos,
      nuevoMedicamento
    ]);
    setNuevoMedicamento({ nombre: '', precio: '' });
  };

  const editarMedicamento = (index) => {
    setEdicionMedicamento(index);
    setNuevoMedicamento(medicamentos[index]);
  };

  const guardarEdicion = () => {
    setMedicamentos((prevMedicamentos) => {
      const nuevosMedicamentos = [...prevMedicamentos];
      nuevosMedicamentos[edicionMedicamento] = nuevoMedicamento;
      return nuevosMedicamentos;
    });
    setEdicionMedicamento(null);
    setNuevoMedicamento({ nombre: '',  precio: '' });
  };

  const eliminarMedicamento = (index) => {
    setMedicamentos((prevMedicamentos) => {
      const nuevosMedicamentos = [...prevMedicamentos];
      nuevosMedicamentos.splice(index, 1);
      return nuevosMedicamentos;
    });
  };

  return (
    
    <div className='formu'>
          <div className='capa'></div>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>

            <Link to={`/agregar/`}></Link>

      <h2>Bebidas</h2>
      <table  className='tabla table-success table-striped'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {medicamentos.map((medicamento, index) => (
            <tr key={index}>
              <td>{medicamento.nombre}</td>
              <td>{medicamento.precio}</td>
              <td>
                {edicionMedicamento === index ? (
                  <button onClick={guardarEdicion}>Guardar</button>
                ) : (
                  <>
                    <button className='btn btn-outline-primary' onClick={() => editarMedicamento(index)}>
                      Editar
                    </button>
                    <button className='btn btn-outline-danger' onClick={() => eliminarMedicamento(index)}>
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Agregar Bebidas</h3>
      <form>
        <input
          type="text"
          name="nombre"
          value={nuevoMedicamento.nombre}
          onChange={handleChange}
          placeholder="Nombre"
        />
        
        <input
          type="text"
          name="precio"
          value={nuevoMedicamento.precio}
          onChange={handleChange}
          placeholder="Precio"
        />
        <button className='btnagregar btn-outline-success' type="button" onClick={agregarMedicamento}>
          Agregar
        </button>
      </form>
    </div>
  );
};

export default AgregarBebida;
