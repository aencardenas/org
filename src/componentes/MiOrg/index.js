import { useState } from "react"
import "./MiOrg.css"
const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //useState()

    //const [nombreVariable,funcionActualiza] = useState(valorInicial)
    console.log(props)
    const [mostrar,actualizarMostrar] = useState(true)

    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // } 

    return <section className="orgSection">
            <h3 className="titulo">Mi organizacion</h3>
            <img src="/img/add.png" alt="boton-add" onClick={props.cambiarMostrar}/>
        </section>
}

export default MiOrg