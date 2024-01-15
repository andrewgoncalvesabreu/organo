import Colaborador from '../Colaborador/Colaborador';
import './Time.css';

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.nome)} value={props.corPrimaria} type='color' className='input-cor'></input>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => {
        
                return <Colaborador key={colaborador.nome} CorDeFundo={props.corPrimaria} OutraCorDeFundo={props.corSecundaria} nome={colaborador.nome} cargo={colaborador.cargo.toLowerCase()} imagem={colaborador.imagem}/>
            })}
            </div>
            
        </section>
    )
}

export default Time;