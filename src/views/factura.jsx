import React  from 'react'
import PropTypes from 'prop-types';
import { Factura } from '../models/factura.class'

const FacturaComponent = ({factura, remove}) => {
   
return (
    <tr>
        <td>
            <span className='ms-2'>{factura.numero}</span>
        </td>
        <td>
            <span className='align-midle'>{factura.cliente}</span>
        </td>
        <td className='align-midle'>
            <span>${factura.total}</span>
        </td>
        <td className="align-midle">
            <span>{factura.fecha}</span>
        </td>

        <td className='align-middle'>
            <i onClick={()=> remove(factura) } className='bi-trash task-action' style={{color: "tomato", fontWeight: "bold"}}></i>
        </td>
    </tr>
)
}

FacturaComponent.propTypes = {
    factura: PropTypes.instanceOf(Factura).isRequired,
    cobrada: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default FacturaComponent