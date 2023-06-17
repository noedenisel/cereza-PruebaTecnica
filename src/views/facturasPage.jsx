import React, { useState, useEffect } from 'react';
import InvoiceList from './invoiceList/invoiceList';

const FacturaPage = () => {
  const [facturas, setFacturas] = useState([]);

  useEffect(() => {
    const storedFacturas = JSON.parse(localStorage.getItem('facturas')) || [];
    setFacturas(storedFacturas);
  }, []);

  return (
    <div>
      <InvoiceList facturas={facturas} />
    </div>
  );
};

export default FacturaPage;
