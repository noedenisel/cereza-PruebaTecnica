import React , { useEffect } from 'react'
import PropTypes from 'prop-types';
import { Factura } from '../models/factura.class'

const FacturaComponent = ({factura, remove}) => {
   
//? cada modificacion que haya en factura se genera este uso
    useEffect(() => {
        console.log("Factura creada");
        return () => {
            console.log("La Factura va a desaparecer");
        };
    }, [factura]);


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
        <td className='align-middle'>
            <i onClick={()=> remove(factura) } className='bi-trash task-action' style={{color: "tomato", fontWeight: "bold"}}></i>
        </td>
    </tr>
)
}

FacturaComponent.propTypes = {
    facura: PropTypes.instanceOf(Factura).isRequired,
    cobrada: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default FacturaComponent