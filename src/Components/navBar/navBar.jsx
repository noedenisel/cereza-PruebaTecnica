import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navBar.module.css';

export default function NavBar() {
  return (
    <div className={`container-fluid ${styles.banner}`}>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/crearFactura" className="nav-link">Crear Factura</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
