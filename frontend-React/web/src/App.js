import React, { useState } from 'react';
import Header from './Header'
import './stylesGlobal.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

//Componente: É um bloco de código com HTML, CSS e JS, a qual pode ser criado para reúso e não interfere na aplicação.

//Propriedade: Propriedades são atributos no React (title, style etc). |Exemplo "return <h1>{props.title}", "return (<Header title='Meu pau'></Header>)"|
//Conceito: Informações que um componente PAI passa para o componente filho.

//Estado: É uma informação mantida pelo componente. (Conceito de Imutabilidade)

//UseState: Uma função criada pelo React, uma função mantida pelo componente, lida e atualizada.
//props: São todas propriedades passadas para o primeiro parametro da Func.


function App() {

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="username_github" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="Latitude">Latitude</label>
              <input name="Latitude" id="Latitude" required />
            </div>

          </div>

          <div className="input-block">
            <label htmlFor="Longitude">Longitude</label>
            <input name="Longitude" id="Longitude" required />
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/50563095?s=400&u=3eb053e1d6a66c5e32117b4d485aee6dc55a9146&v=4" alt="José Vitor" />
              <div className="user-info">
                <strong>José Vitor</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Student of Information System at Católica Tocantins/2018,</p>
            <a href="https://github.com/diego3g">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/50563095?s=400&u=3eb053e1d6a66c5e32117b4d485aee6dc55a9146&v=4" alt="José Vitor" />
              <div className="user-info">
                <strong>José Vitor</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Student of Information System at Católica Tocantins/2018,</p>
            <a href="https://github.com/diego3g">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/50563095?s=400&u=3eb053e1d6a66c5e32117b4d485aee6dc55a9146&v=4" alt="José Vitor" />
              <div className="user-info">
                <strong>José Vitor</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Student of Information System at Católica Tocantins/2018,</p>
            <a href="https://github.com/diego3g">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/50563095?s=400&u=3eb053e1d6a66c5e32117b4d485aee6dc55a9146&v=4" alt="José Vitor" />
              <div className="user-info">
                <strong>José Vitor</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Student of Information System at Católica Tocantins/2018,</p>
            <a href="https://github.com/diego3g">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;

