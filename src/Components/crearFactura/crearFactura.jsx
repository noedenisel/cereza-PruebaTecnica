import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import DetallesFacturaModal from '../Modal/modal';


import 'bootstrap/dist/css/bootstrap.min.css';

const CrearFactura = () => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [productos, setProductos] = useState([]);

  const [factura, setFactura] = useState({
    cliente: '',
    items: [],
    total: 0,
    fechaCreacion: new Date(),
  });

  const [fecha, setFecha] = useState(new Date());

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.products);
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    if (e.target.name === 'fecha') {
      setFecha(new Date(e.target.value));
    } else {
      setFactura((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleItemChange = (e, index) => {
    const { name, value } = e.target;
    const items = [...factura.items];
    items[index][name] = value;

    const selectedProduct = productos.find(
      (producto) => producto.title === items[index].producto
    );
    const precio = selectedProduct ? selectedProduct.price : 0;

    items[index].precio = precio;

    const subtotal = items[index].cantidad * precio;
    items[index].subtotal = subtotal;

    const total = items.reduce((acc, item) => acc + item.subtotal, 0);

    setFactura((prevState) => ({
      ...prevState,
      items,
      total,
    }));
  };

  const handleAgregarItem = () => {
    const newItem = {
      producto: '',
      precio: 0,
      cantidad: 0,
      subtotal: 0,
    };

    setFactura((prevState) => ({
      ...prevState,
      items: [...prevState.items, newItem],
    }));
  };

  const handleEliminarItem = (index) => {
    const items = [...factura.items];
    items.splice(index, 1);

    const total = items.reduce((acc, item) => acc + item.subtotal, 0);

    setFactura((prevState) => ({
      ...prevState,
      items,
      total,
    }));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const guardarFactura = () => {
    const storedFacturas =
      JSON.parse(localStorage.getItem('facturas')) || [];
    const facturaToSave = {
      ...factura,
      numero: storedFacturas.length + 1,
      fecha: format(factura.fechaCreacion, 'dd/MM/yyyy'),
    };
    storedFacturas.push(facturaToSave);
    localStorage.setItem('facturas', JSON.stringify(storedFacturas));

    navigate('/', { state: { factura: facturaToSave } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openModal();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-90">
      <div className="card">
        <div className="card-header text-center">
          <h4>Crear Factura</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="cliente" className="form-label">
                Cliente:
              </label>
              <input
                type="text"
                id="cliente"
                name="cliente"
                value={factura.cliente}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fecha" className="form-label">
                Fecha:
              </label>
              <DatePicker
                id="fecha"
                name="fecha"
                selected={fecha}
                onChange={handleInputChange}
                dateFormat="dd/MM/yyyy"
                minDate={new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)}
                className="form-control"
              />
            </div>
            {factura.items.map((item, index) => (
              <div key={index} className="row">
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Producto:</label>
                    <select
                      name="producto"
                      value={item.producto}
                      onChange={(e) => handleItemChange(e, index)}
                      className="form-control"
                    >
                      <option value="">Seleccione un producto</option>
                      {productos.map((producto) => (
                        <option key={producto.id} value={producto.title}>
                          {producto.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Precio:</label>
                    <input
                      type="number"
                      name="precio"
                      value={item.precio}
                      readOnly
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Cantidad:</label>
                    <input
                      type="number"
                      name="cantidad"
                      value={item.cantidad}
                      onChange={(e) => handleItemChange(e, index)}
                      className="form-control"
                    />
                  </div>
                  <div>
                    <label className="form-label">Subtotal:</label>
                    <span>{item.subtotal}</span>
                    <i
                      onClick={() => handleEliminarItem(index)}
                      className="bi-trash task-action"
                      style={{
                        color: 'tomato',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginLeft: '0.5rem',
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            ))}

            <div className="mb-3">
              <button
                type="button"
                onClick={handleAgregarItem}
                className="btn btn-secondary"
              >
                Agregar Producto
              </button>
            </div>
            <div className="mb-3">
              <label className="form-label">Total:</label>
              <span>{factura.total}</span>
            </div>
            <div className="mb-3 col text-center">
              <button type="submit" className="btn btn-primary">
                Guardar Factura
              </button>
            </div>
          </div>
        </form>

        <DetallesFacturaModal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          factura={factura}
          handleItemChange={handleItemChange}
          handleEliminarItem={handleEliminarItem}
          guardarFactura={guardarFactura}
        />
      </div>
      </div>

  );
};

export default CrearFactura;
