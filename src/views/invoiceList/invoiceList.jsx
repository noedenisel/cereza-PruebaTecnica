import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FacturaComponent from '../factura';
import styles from './invoiceList.module.css';

const InvoiceList = () => {
  const [facturas, setFacturas] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    console.log('Modificacion de facturas');
    
    const facturaGuardada = location.state?.factura;
    if (facturaGuardada) {
      handleSaveFactura(facturaGuardada);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      console.log('Desaparicion del componente');
    };
  }, [facturas, location]);

  const removeFactura = factura => {
    console.log('Eliminar esta Factura', factura);
    const updatedFacturas = facturas.filter(item => item.numero !== factura.numero);
    setFacturas(updatedFacturas);
  };

  const handleSaveFactura = factura => {
    setFacturas(prevFacturas => [...prevFacturas, factura]);
  };

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Nro Factura</th>
            <th scope="col">Cliente</th>
            <th scope="col">Total</th>
            <th scope="col">Actions</th>
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

  let facturasTable;
  if (facturas.length > 0) {
    facturasTable = <Table />;
  } else {
    facturasTable = (
      <div>
        <h3>No hay facturas para mostrar</h3>
      </div>
    );
  }

  const loadingStyle = {
    color: 'grey',
    fontSize: '30px',
    fontWeight: 'bold'
  };

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h4>Listado de Facturas</h4>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: 'relative', height: '400px' }}
          >
            {loading ? (
              <p style={loadingStyle}>Cargando Facturas</p>
            ) : (
              facturasTable
            )}
          </div>
        </div>
      </div>
      <div>
        <Link to="crearFactura" className="mt-4">
          <button className={`btn  position-absolute start-50 translate-middle-x ${styles.btn11}`}>
            Crear Factura
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InvoiceList;
