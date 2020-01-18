import React, { useState } from 'react';
import Header from './Header'

//Componente: É um bloco de código com HTML, CSS e JS, a qual pode ser criado para reúso e não interfere na aplicação.

//Propriedade: Propriedades são atributos no React (title, style etc). |Exemplo "return <h1>{props.title}", "return (<Header title='Meu pau'></Header>)"|
//Conceito: Informações que um componente PAI passa para o componente filho.

//Estado: É uma informação mantida pelo componente. (Conceito de Imutabilidade)

//UseState: Uma função criada pelo React, uma função mantida pelo componente, lida e atualizada.
//props: São todas propriedades passadas para o primeiro parametro da Func.


function App() {
  const [counter, setCounter] = useState(0); //Desestruturando o que o useState retorna, pegar um objeto/array e dividir em variáveis.

  function IncrementCounter() {
    setCounter(counter + 10);
  }

  return (
    <>
      <h1>Contator: {counter}</h1>
      <button onClick={IncrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
