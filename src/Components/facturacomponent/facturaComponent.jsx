import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Detail from "../modalDetail/modalDetail"

import { Factura } from '../../models/factura.class'

const FacturaComponent = ({ factura, remove }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <tr>
      <td>
        <span className="ms-2">{factura.numero}</span>
      </td>
      <td>
        <span className="align-midle">{factura.cliente}</span>
      </td>
      <td className="align-midle">
        <span>${factura.total}</span>
      </td>
      <td className="align-midle">
        <span>{factura.fecha}</span>
      </td>
      <td className="align-middle">
        <i className="bi bi-info" onClick={openModal}></i>
      </td>
      {modalOpen && (
        <Detail
          isOpen={modalOpen}
          onRequestClose={closeModal}
          factura={factura}
          handleItemChange={() => {}}
          handleEliminarItem={() => {}}
          guardarFactura={() => {}}
        />
      )}

    </tr>
  );
};

FacturaComponent.propTypes = {
    factura: PropTypes.instanceOf(Factura).isRequired,
    cobrada: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default FacturaComponent
