import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './views/components/Menu';
import Home from './views/pages/Home/';
import Sobre from './views/pages/Sobre/';
import Pagina404 from './views/pages/Pagina404/';
import Cliente from './views/pages/Cliente/';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Clientes" component={Cliente} />
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
