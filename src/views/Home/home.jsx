import React from 'react';

import InvoiceList from "../invoiceList/invoiceList"

import styles from './Home.module.css';


export default function Home() {
  return (
    <div >
      <header>
        <h1 className={styles.h1}>CEREZA SOFT</h1>
        <h2 className={styles.h2}>PRUEBA TECNICA</h2>
      </header>
      <main>
        <InvoiceList/>
      </main>
      <footer>
        
      </footer>
      
    </div>
  );
}

