import React from 'react';

import InvoiceList from "../invoiceList/invoiceList"

import styles from './Home.module.css';


export default function Home() {
  return (
    <div className="container">
      <header>
        <h1 className={styles.h1}>CEREZA SOFT</h1>
        <h2 className={styles.h2}>PRUEBA TECNICA</h2>
      </header>
      <main>
        <div className={styles.invoiceListContainer}>
          <InvoiceList/>
        </div>
      </main>
    </div>
  );
}

