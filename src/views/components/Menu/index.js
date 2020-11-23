import React from "react"

import { Link } from 'react-router-dom'

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titulo: 'Home'
    }
  }

  componentDidMount() {

  }

  onChangeTitulo = event =>{
    console.log(event.target.text)
  }

  render() {
    return (
      <header>
        <nav class="navbar  navbar-fixed-top navbar-default">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle uarr collapsed" data-toggle="collapse"
                data-target="#navbar-collapse-uarr">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="./index.html" title="">
                <img src="./assets/images/mashuptemplate.svg" class="navbar-logo-img" alt="" />
              </a>
              <div class="navbar-header">
                <h3>{this.state.titulo}</h3>
              </div>
            </div>
            <div class="collapse navbar-collapse" id="navbar-collapse-uarr">
              <ul class="nav navbar-nav navbar-right">
                <li><Link onClick={e => this.setState({ titulo: e.target.text })} to="/">Home</Link></li>
                <li><Link onClick={e => this.setState({ titulo: e.target.text })} to="/clientes">Clientes</Link></li>
                <li><a href="./pricing.html" title=""> Pricing </a></li>
                <li><a href="./contact.html" title="">Contact</a></li>
                <li><a href="./components.html" title="">Components</a></li>
                <li>
                  <p>
                    <a href="./download.html" class="btn btn-primary navbar-btn" title="">Download</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Menu