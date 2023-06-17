import { BrowserRouter as Router, Route, Routes, Link,  } from "react-router-dom";

import Home from "./views/Home/home";
import NavBar from "./Components/navBar/navBar";

// import FacturaDetail from "./pages/facturasViews/facturasDetail"
import './App.css';
import CrearFactura from "./Components/crearFactura/crearFactura";

function App() {

  return (
    <Router>
      <div>
        <NavBar/>  
      </div>
      
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="crearFactura" element={<CrearFactura/>}/>
            {/* <Route path= "factura/:id" Component={ FacturaDetail }/> */}
            <Route path="/*" element={<Link to="https://cereza.io/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

