import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {

    const {nombre,puesto,foto,equipo, fav, id} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={eliminarColaborador} />
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt="Harland"/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
        </div>
    </div>
}


export default Colaborador