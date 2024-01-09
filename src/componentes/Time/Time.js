import Colaborador from '../Colaborador/Colaborador';
import './Time.css';

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} CorDeFundo={props.corPrimaria} OutraCorDeFundo={props.corSecundaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
            
        </section>
    )
}

export default Time;