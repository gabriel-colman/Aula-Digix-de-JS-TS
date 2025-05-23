import React from "react";

function Soma({ numero1, numero2 }) {
    const resultado = numero1 + numero2;

    return (
        <p> A soma de {numero1} e {numero2} é igual {resultado} </p>
    );
}

export default Soma;