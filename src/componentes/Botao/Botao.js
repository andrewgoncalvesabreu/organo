import './Botao.css';

const Botao = (props) => {
    return (
        <button className='botao'>{props.children}</button>
    )
}

//Aqui estamos vendo uma funcionalidade nova no React, o "children", isso faz com que possamos colocar algo DENTRO DA TAG REACT lá quando chamamos o COMPONENTE, no caso estamos chamando o Botao lá em Formulario, funcionalidade bem útil.  

export default Botao;