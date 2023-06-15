import React , {useState, useEffect}from 'react';
import { Factura } from '../../models/factura.class';
import FacturaComponent from '../pure/factura';



const TaskListComponent = () => {
    const defaultFactura1 = new Factura ("001", "Noelia Lombardo", "100")
    const defaultFactura2 = new Factura ("002", "Nahir Lombardo", "200")
    const defaultFactura3 = new Factura ("003", "Alan Lombardo", "300")
    
    
    return (
       <div>

       </div>
    );
};


export default TaskListComponent;

