import "./Equipo.css" //Importar estilos
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

//Componente de Equipo
const Equipo = (props) => {
    
    //Destructuracion
    const {titulo,id, colorPrimario, colorSecundario} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const backgroundEquipo = {
        backgroundColor:hexToRgba(colorPrimario,0.6)
    }

    const estiloTitulo = {
        borderColor:colorPrimario
    }

    return <>

        {
            colaboradores.length > 0 &&
            <section className="equipo" style={backgroundEquipo}>
                <input 
                    className="input-color"
                    type='color'
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value,id)
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
          
                    {
                        colaboradores.map( (colaborador,index) => <Colaborador 
                            key={index} 
                            datos={colaborador} 
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }

                </div>
            </section>
        }
    
    </>
    
   
}

export default Equipo