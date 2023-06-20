import React from 'react';
import styles from './navBar.module.css';

export default function NavBar() {
  return (
    <div className={`container-fluid ${styles.banner}`}>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <nav className="navbar navbar-expand-lg navbar-custom">
          </nav>
        </div>
      </div>
    </div>
  );
}
