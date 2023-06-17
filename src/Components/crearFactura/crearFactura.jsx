import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CrearFactura = () => {
  const navigate = useNavigate();

  const [productos, setProductos] = useState([]);
  const [factura, setFactura] = useState({
    cliente: '',
    items: [],
    total: 0
  });

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProductos(data.products);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  const handleInputChange = e => {
    setFactura(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleItemChange = (e, index) => {
    const { name, value } = e.target;
    const items = [...factura.items];
    items[index][name] = value;

    const selectedProduct = productos.find(producto => producto.title === items[index].producto);
    const precio = selectedProduct ? selectedProduct.price : 0;

    items[index].precio = precio;

    const subtotal = items[index].cantidad * precio;
    items[index].subtotal = subtotal;

    const total = items.reduce((acc, item) => acc + item.subtotal, 0);

    setFactura(prevState => ({
      ...prevState,
      items,
      total
    }));
  };

  const handleAgregarItem = () => {
    const newItem = {
      producto: '',
      precio: 0,
      cantidad: 0,
      subtotal: 0
    };

    setFactura(prevState => ({
      ...prevState,
      items: [...prevState.items, newItem]
    }));
  };

  const handleEliminarItem = index => {
    const items = [...factura.items];
    items.splice(index, 1);

    const total = items.reduce((acc, item) => acc + item.subtotal, 0);

    setFactura(prevState => ({
      ...prevState,
      items,
      total
    }));
  };

  const guardarFactura = () => {
    const storedFacturas = JSON.parse(localStorage.getItem('facturas')) || [];
    const facturaToSave = {
      ...factura,
      numero: storedFacturas.length + 1
    };
    storedFacturas.push(facturaToSave);
    localStorage.setItem('facturas', JSON.stringify(storedFacturas));
    console.log('Factura guardada:', facturaToSave);

    navigate("/", { state: { factura: facturaToSave } });
  };

  const handleSubmit = e => {
    e.preventDefault();
    guardarFactura();

    setFactura({
      cliente: '',
      items: [],
      total: 0
    });
  };
  

  return (
    <div>
      <h2>Crear Factura</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cliente">Cliente:</label>
        <input
          type="text"
          id="cliente"
          name="cliente"
          value={factura.cliente}
          onChange={handleInputChange}
        />

        <h3>Productos:</h3>
        {factura.items.map((item, index) => (
          <div key={index}>
            <label>Producto:</label>
            <select
              name="producto"
              value={item.producto}
              onChange={e => handleItemChange(e, index)}
            >
              <option value="">Seleccione un producto</option>
              {productos.map(producto => (
                <option key={producto.id} value={producto.title}>
                  {producto.title}
                </option>
              ))}
            </select>

            <label>Precio:</label>
            <input
              type="number"
              name="precio"
              value={item.precio}
              readOnly
            />

            <label>Cantidad:</label>
            <input
              type="number"
              name="cantidad"
              value={item.cantidad}
              onChange={e => handleItemChange(e, index)}
            />

            <label>Subtotal:</label>
            <span>{item.subtotal}</span>

            <button type="button" onClick={() => handleEliminarItem(index)}>
              Eliminar
            </button>
          </div>
        ))}

        <button type="button" onClick={handleAgregarItem}>
          Agregar Producto
        </button>

        <label>Total:</label>
        <span>{factura.total}</span>

        <button type="submit">Guardar Factura</button>
      </form>
    </div>
  );
};

export default CrearFactura;
