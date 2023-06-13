import { Link } from 'react-router-dom';
import styles from "./Home.module.css"

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1 className="h1">FACTURADOR PRUEBA TECNICA</h1>
      </header>

      <section class={`${styles.card} position-absolute start-50 translate-middle-x`}>
        <div className="cardBody"><h2 className="h2">Listado de Facturas</h2>
          <ul className="list-group" id="listadoFacturas">
            <li className="list-group-item">Factura 1 Factura 1 Factura 1Factura 1Factura 1</li>
            <li className="list-group-item">Factura 2</li>
            <li className="list-group-item">Factura 3</li>
          </ul>
        </div>
        <Link to="crearFactura" className="mt-4">
          <button className={`btn btn-primary position-absolute start-50 translate-middle-x ${styles.btn11}`}>Crear Factura</button>
        </Link>
      </section> 
    </div>
  );
}

