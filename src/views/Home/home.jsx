import styles from "./Home.module.css"
import FacturaPage from '../facturasPage';

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1 className={styles.h1}>CEREZA SOFT </h1>
        <h2 className={styles.h2}>PRUEBA TECNICA</h2>
      </header>

      <FacturaPage></FacturaPage>
    </div>
  );
}

