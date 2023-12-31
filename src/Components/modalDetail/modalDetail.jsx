import React from 'react';
import { format, isValid } from 'date-fns';
import Modal from 'react-modal';

const DetallesFacturaModal = ({ isOpen, onRequestClose, factura }) => {
  const fechaCreacion = isValid(factura.fechaCreacion) ? format(factura.fechaCreacion, 'dd/MM/yyyy') : 'Fecha inválida';

  const handleCloseModal = () => {
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Detalles de la factura">
      <button className="close-button btn btn-danger float-end" onClick={handleCloseModal}>
        X
      </button>
      <h2>Detalles de factura</h2>
      <p>Factura Nro.:  {factura.numero}</p>
      <p>Fecha: {fechaCreacion}</p>
      <p>Cliente: {factura.cliente}</p>

      <table className="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio por unidad</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {factura.items.map((item, index) => (
            <tr key={index}>
              <td>{item.producto}</td>
              <td>{item.precio}</td>
              <td>{item.cantidad}</td>
              <td>{item.subtotal}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3"><strong>Total:</strong></td>
            <td><strong>{factura.total}</strong></td>
          </tr>
        </tfoot>
      </table>
    </Modal>
  );
};

export default DetallesFacturaModal;
