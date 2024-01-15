import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://github.com/andrewgoncalvesabreu' target='_blank'>
                            <img src='/imagens/githubzinho.png' alt='GitHub'></img>
                        </a>
                    </li>

                    <li>
                        <a href='https://twitter.com/ysallys106' target='_blank'>
                            <img src='/imagens/twtr.png' alt='Twitter / X'></img>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.instagram.com/andreew_gnz/' target='_blank'>
                            <img src='/imagens/insta.png' alt='Instagram'></img>
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <img src='/imagens/logo.png' alt='Logo Organo'></img>
            </section>

            <section>
                <p>
                    Desenvolvido por Andrew
                </p>
            </section>
        </footer>        
    )
}

export default Rodape;