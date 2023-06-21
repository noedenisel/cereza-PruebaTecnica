// InvoiceList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InvoiceTable from '../../Components/invoiceTable/invoiceTable';
import styles from './invoiceList.module.css';

const InvoiceList = () => {
  const [facturas, setFacturas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [facturaGuardada, setFacturaGuardada] = useState(null);

  useEffect(() => {
    const storedFacturas = JSON.parse(localStorage.getItem('facturas')) || [];
    setFacturas(storedFacturas);
  }, []);

  useEffect(() => {
    if (facturaGuardada) {
      handleSaveFactura(facturaGuardada);
      setFacturaGuardada(null);
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [facturas, facturaGuardada]);

  const removeFactura = (factura) => {
    const updatedFacturas = facturas.filter((item) => item.numero !== factura.numero);
    setFacturas(updatedFacturas);
  };

  const handleSaveFactura = (factura) => {
    setFacturas((prevFacturas) => [...prevFacturas, factura]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h4>Listado de Facturas</h4>
            </div>
            <div
              className="card-body"
              data-mdb-perfect-scrollbar="true"
              style={{ position: 'relative', height: '400px' }}
            >
              {loading ? (
                <p className={styles.loading}>Cargando Facturas</p>
              ) : (
                <InvoiceTable facturas={facturas} removeFactura={removeFactura} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col text-center">
          <Link to="crearFactura">
            <button className={`btn btn-primary ${styles.btn11}`}>Crear Factura</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvoiceList;
