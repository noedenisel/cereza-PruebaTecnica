// InvoiceTable.js
import React from 'react';
import FacturaComponent from '../../Components/facturacomponent/facturaComponent';

const InvoiceTable = ({ facturas, removeFactura }) => {
  if (facturas.length === 0) {
    return (
      <div>
        <h3>No hay facturas para mostrar</h3>
      </div>
    );
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nro Factura</th>
          <th scope="col">Cliente</th>
          <th scope="col">Total</th>
          <th scope="col">Fecha de Factura</th>
          <th scope="col">Ver Factura</th>
        </tr>
      </thead>
      <tbody>
        {facturas.map((factura, index) => (
          <FacturaComponent key={index} factura={factura} remove={removeFactura} />
        ))}
      </tbody>
    </table>
  );
};

export default InvoiceTable;

