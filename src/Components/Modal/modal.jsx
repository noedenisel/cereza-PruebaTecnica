import React from 'react';
import { format, isValid } from 'date-fns';
import Modal from 'react-modal';

const DetallesFacturaModal = ({ isOpen, onRequestClose, factura, handleItemChange, handleEliminarItem, guardarFactura }) => {
  const fechaCreacion = isValid(factura.fechaCreacion)
    ? format(factura.fechaCreacion, 'dd/MM/yyyy')
    : 'Fecha inválida';

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Detalles de la factura"
    >
      <h2>Detalles de la factura</h2>
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
              <td>
                <div>
                  <input
                    type="number"
                    name="cantidad"
                    value={item.cantidad}
                    onChange={(e) => handleItemChange(e, index)}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      handleItemChange(
                        { target: { name: 'cantidad', value: item.cantidad + 1 } },
                        index
                      )
                    }
                  >
                    <i className="bi bi-caret-up"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      handleItemChange(
                        { target: { name: 'cantidad', value: item.cantidad - 1 } },
                        index
                      )
                    }
                  >
                    <i className="bi bi-caret-down"></i>
                  </button>
                </div>
              </td>
              <td>{item.subtotal}</td>
              <td>
                <i
                  onClick={() => handleEliminarItem(index)}
                  className="bi bi-trash"
                  style={{
                    color: 'tomato',
                    cursor: 'pointer',
                  }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total:</td>
            <td>{factura.total}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>

      <button onClick={guardarFactura} className="btn btn-success">
        Confirmar
      </button>
      <button onClick={onRequestClose} className="btn btn-danger">
        Cancelar
      </button>
    </Modal>
  );
};

export default DetallesFacturaModal;
