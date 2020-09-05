import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // https://medium.com/collabcode/roteamento-no-react-com-os-poderes-do-react-router-v4-fbc191b9937d

import Menu from './views/components/Menu';
import Home from './views/pages/Home/';

import ClienteGerenciar from './views/pages/ClienteGerenciar';
import ClienteEditar from './views/pages/ClienteEditar';

import Sobre from './views/pages/Sobre/';
import Pagina404 from './views/pages/Pagina404/';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" exact={true} component={Home} />

          <Route path="/clientesGerenciar" component={ClienteGerenciar} />
          <Route path="/clientesEditar" component={ClienteEditar} />

          <Route path="/sobre" component={Sobre} />
          <Route path='*' component={Pagina404} />
        </Switch>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
