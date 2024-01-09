import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Time from './componentes/Time/Time';
import Rodape from './componentes/Rodape/Rodape';

function App() {

  const times = [
    {
      nome: 'Atirador',
      corPrimaria: '#3E58FF',
      corSecundaria: '#8FE9F5'
    },

    {
      nome: 'Suporte',
      corPrimaria: '#FF16AF',
      corSecundaria: '#F48BE2'
    },

    {
      nome: 'Top Lane',
      corPrimaria: '#4E342E',
      corSecundaria: '#7b665e'
    },

    {
      nome: 'Mid Lane',
      corPrimaria: '#F52F26',
      corSecundaria: 'rgb(252, 126, 126)'
    },

    {
      nome: 'Jungler',
      corPrimaria: '#06FF08',
      corSecundaria: '#A9F5A8'
    }
    // {
    //   nome: 'Mobile',
    //   corPrimaria: '#FEBA05',
    //   corSecundaria: '#FFF5D9'
    // },

    // {
    //   nome: 'Inovação e gestão',
    //   corPrimaria: '#FF8A29',
    //   corSecundaria: '#FFEEDF'
    
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => 
        <Time 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
      <Rodape />
    </div>
  );
}

export default App;
