import './CampoTexto.css';

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`
    // let valor = ''

    const aoClicar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>  
            <input value={props.valor} onChange={aoClicar} required={props.obrigatorio} placeholder={placeholderModificada}/>  
        </div>
    )
}

export default CampoTexto;

//No JSX estamos usando uma nova propriedade que é as {}, basicamente essas {} fazem a mesma coisa que ${} no JavaScript comum, é basicamente isso.

//Outra coisa, o que é aquele 'props' ali como parâmetro? É um argumento do próprio React que recebe as propriedades que estão dentro do elemento, por isso utilizamos ali o props.label, pois o label recebe props.label, que definimos lá quando chamamos o CampoTexto em App.js

//Estamos fazendo com que o required só seja real se aplicarmos o "obrigatorio={true}" lá nos inputs, ou seja, se alguma coisa que tiver obrigatório tiver em branco, o formulário não será submetido