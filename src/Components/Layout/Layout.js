/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import M from 'materialize-css';
import {Link} from 'react-router-dom';

export default class Layout extends Component {

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav')
      M.Sidenav.init(elems);
      
      var dropdowns = document.querySelectorAll('.dropdown-trigger');
      var dropdownsOptions = {
        coverTrigger: false
      };
      M.Dropdown.init(dropdowns, dropdownsOptions);
    })    
  }
  render() {
    return (
      <header>
        <nav className="blue darken-2" id="header" style={{paddingLeft: '10px'}}>
          <div className="nav-wrapper">

            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <a href="#" className="brand-logo" style={{fontFamily: 'Lobster'}}>Fondos App</a>
            
          </div>
          
        </nav>

        <ul id="slide-out" className="sidenav sidenav-fixed">
          <li>
            <a href="#!"><i className="material-icons">home</i>Dashboard</a>
          </li>
          <li>
            <Link to="/fondos"><i className="material-icons">account_balanced</i>Fondos</Link>
          </li>
          <li>
            <a href="#!"><i className="material-icons">trending_up</i>Rentabilidad</a>
          </li>
          <li>
            <a className="dropdown-trigger" href="#!" data-target="settings"><i className="material-icons">settings</i>Administración</a>
          </li>
          <ul id="settings" className="dropdown-content" style={{paddingLeft: "20px"}}>
            <li>
              <a href="#!"><i className="material-icons">account_balanced</i>Fondos</a>
              </li>
            <li>
              <a href="#!"><i className="material-icons">account_circle</i>Usuarios</a>
            </li>
            <li>
              <a href="#!"><i className="material-icons">build</i>Configuración</a>
            </li>
          </ul>
        </ul>
        
      </header>
    )
  }
}
