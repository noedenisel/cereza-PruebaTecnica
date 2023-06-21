import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Factura } from '../../models/factura.class';
import DetallesFacturaModal from '../Modal/modal';

const FacturaComponent = ({ factura, remove , guardarFactura}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [facturaModificada, setFacturaModificada] = useState(factura);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleItemChange = (e, index) => {
    const { name, value } = e.target;
    const updatedItems = [...facturaModificada.items];
    updatedItems[index][name] = value;

    const updatedFactura = { ...facturaModificada, items: updatedItems };
    setFacturaModificada(updatedFactura);
  };

  const handleEliminarItem = (index) => {
    const updatedItems = [...facturaModificada.items];
    updatedItems.splice(index, 1);

    const updatedFactura = { ...facturaModificada, items: updatedItems };
    setFacturaModificada(updatedFactura);
  };

  return (
    <tr>
      <td>
        <span className="ms-2">{facturaModificada.numero}</span>
      </td>
      <td>
        <span className="align-midle">{facturaModificada.cliente}</span>
      </td>
      <td className="align-midle">
        <span>${facturaModificada.total}</span>
      </td>
      <td className="align-midle">
        <span>{facturaModificada.fecha}</span>
      </td>
      <td className="align-middle">
        <i onClick={() => remove(facturaModificada)} className="bi bi-trash task-action" style={{ color: 'tomato', fontWeight: 'bold' }}></i>
        <i onClick={openModal} className="bi bi-pencil"></i>
      </td>

      <DetallesFacturaModal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          factura={facturaModificada}
          handleItemChange={handleItemChange}
          handleEliminarItem={handleEliminarItem}
          guardarFactura={guardarFactura}
        />
    </tr>
  );
};

FacturaComponent.propTypes = {
  factura: PropTypes.instanceOf(Factura).isRequired,
  remove: PropTypes.func.isRequired,
};

export default FacturaComponent;
