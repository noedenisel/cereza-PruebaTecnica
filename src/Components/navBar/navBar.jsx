import React from 'react'
import { Link } from 'react-router-dom';


import styles from "./navBar.module.css"

export default function NavBar() {
  return (
    <div className={`container-fluid ${styles.banner}`}>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <aside>
            <Link to="/">Home</Link>
            <Link to="">Crear Facturas</Link>
            <Link to="">Login</Link>
            
          </aside>
        </div>
      </div>
    </div>
  );
}

