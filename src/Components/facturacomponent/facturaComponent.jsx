import React, { useState } from 'react';
import PropTypes from 'prop-types';


import { Factura } from '../../models/factura.class';
import DetallesFacturaModal from '../Modal/modal';

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
        <i onClick={() => remove(factura)} className="bi bi-trash task-action" style={{ color: 'tomato', fontWeight: 'bold' }}></i>
        <i onClick={openModal} className="bi bi-pencil"></i>
      </td>

      <DetallesFacturaModal isOpen={modalOpen} onRequestClose={closeModal} factura={factura} />
    </tr>
  );
};

FacturaComponent.propTypes = {
  factura: PropTypes.instanceOf(Factura).isRequired,
  remove: PropTypes.func.isRequired,
};

export default FacturaComponent;
