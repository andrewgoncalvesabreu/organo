import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Time from './componentes/Time/Time';
import Rodape from './componentes/Rodape/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState( [
    {
      nome: 'Atirador',
      corPrimaria: '#3E58FF',
      corSecundaria: '#8FE9F5'
    },

    {
      nome: 'Suporte',
      corPrimaria: '#c50481',
      corSecundaria: '#ff70e7'
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
])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    
  }

  function deletarColaborador(prop) {
    console.log('oi: ', prop)
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome == nome) {
        time.corPrimaria = cor
      }
      return time
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
      times={times.map(time => time.nome)} 
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
      />
      {times.map(time => 
        <Time 
          mudarCor={mudarCorDoTime}
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />)}
      <Rodape />
    </div>
  );
}

export default App;
