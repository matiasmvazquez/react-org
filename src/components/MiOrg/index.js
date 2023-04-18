import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //cosnt [nombreVriable,funcionActualiza] = useState(valorInicial)
    const [mostrar, actualizarMostrar] = useState(true)

/*     const manejarClick = () => {
        console.log("Mostrar/Ocultar")
        actualizarMostrar(!mostrar)
    } */

    return <section className="orgSection">
        <h3 className="title">Mi Organizaión</h3>
        <img src="/img/add.png" alt="Add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg