import './Banner.css'

const Banner = () => {
    return (
        <header className='banner'>
            <img src="/imagens/banner.png" alt="Banner principal da página Organo"></img>
        </header>
    )
}

export default Banner;

//Lembrando que se você quiser usar a sintaxe padrão de função, também é possível, no caso essa = function Banner() {}, mas a sintaxe de uma função armazenada em uma const recebendo uma arrow function é cada vez mais utilizada, então é uma boa prática


//React é basicamente algo que junta os três pilares do front-end (HTML, CSS, JavaScript) e faz meio que uma harmonia entre eles, basicamente nós mesmos criamos as nossas tags, lembrar que, apesar de parecer muito com HTML, não é, e sim é JSX, então vejamos, meio que estou criando uma tag "Banner" aqui para ser utilizada depois