import React from "react";

function Header({ titulo }) {

    console.log(titulo);
    const edad = 18;

    let mensaje;
    if (edad >= 18) {
        mensaje = "Eres mayor de edad";
    } else {
        mensaje = "Eres menor de edad";
    }

    return (
        <>
            <h1 id="encabezado" className="encabezado">{titulo}</h1>
            <p>{mensaje}</p>
        </>)
}

export default Header;