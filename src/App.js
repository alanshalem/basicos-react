import React, { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo='Tienda Virtual' />
      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
