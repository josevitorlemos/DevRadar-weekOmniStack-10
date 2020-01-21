import React, { useState, useEffect } from 'react';
import api from './services/api';

import './stylesGlobal.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevFrom';

//Componente: É um bloco de código com HTML, CSS e JS, a qual pode ser criado para reúso e não interfere na aplicação.

//Propriedade: Propriedades são atributos no React (title, style etc). |Exemplo "return <h1>{props.title}", "return (<header title='Meu pau'></Header>)"|
//Conceito: Informações que um componente PAI passa para o componente filho.

//Estado: É uma informação mantida pelo componente. (Conceito de Imutabilidade)

//UseState: Uma função criada pelo React, uma funçãwo mantida pelo componente, lida e atualizada.
//props: São todas propriedades passadas para o primeiro parametro da Func.


function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const res = await api.get('/devs');

      setDevs(res.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const res = await api.post('/devs', data)

    setDevs([...devs, res.data]);
  }

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

