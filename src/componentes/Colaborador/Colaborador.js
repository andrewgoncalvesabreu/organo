import {IoIosCloseCircle} from 'react-icons/io'
import './Colaborador.css';

const Colaborador = ({nome, cargo, imagem, CorDeFundo, OutraCorDeFundo}) => {
    const textoNoNome = `Olá, meu nome é ${nome},`
    const textoDoMain = `e meu main no League of Legends é ${cargo}.`

    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: CorDeFundo}}>
                <img src={imagem} alt={nome}></img>
            </div>

            <div className='rodape'>
                <h4 style={{color: CorDeFundo}}>{textoNoNome}</h4>
                <h5 style={{color: OutraCorDeFundo}}>{textoDoMain}</h5>
            </div>
        </div>
    )
}

export default Colaborador;
