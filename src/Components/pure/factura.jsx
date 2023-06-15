import React , { useEffect } from 'react'
import PropTypes from 'prop-types';
import { Factura } from '../../models/factura.class'

const FacturaComponent = ({factura, cobrada, remove}) => {
   
//? cada modificacion que haya en factura se genera este uso
    useEffect(() => {
        console.log("Factura creada");
        return () => {
            console.log("La Factura va a desaparecer");
        };
    }, [factura]);

function facturaCobradaIcon(){
    if (factura.cobrada) {
        return ((<i onClick={()=> cobrada(factura)} className='bi-toggle-on factura-action' style={{color: "green"}}></i>))
    } else {
        return ((<i onClick={()=> cobrada(factura)} className='bi-toggle-off factura-action' style={{color: "grey"}}></i>))
    }
}

const facturaCobrada = {
    color: "gray",
    textDecoration: "line-through"   
}

const facturaPending = {
    fontWeight: "bold",
    color: "tomato"
}

return (
    <tr className='fw-normal' style={factura.cobrada ? facturaCobrada : facturaPending }>
        <td>
            <span className='ms-2'>{factura.numero}</span>
        </td>
        <td>
            <span className='ms-2'>{factura.cliente}</span>
        </td>
        <td className='align-midle'>
            <span>${factura.total}</span>
        </td>
        <td className='align-middle'>
                {facturaCobradaIcon()}
               
                <i onClick={()=> remove(factura) } className='bi-trash factura-action' style={{color: "tomato", fontWeight: "bold"}}></i>
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