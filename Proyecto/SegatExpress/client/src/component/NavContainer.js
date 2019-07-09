import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavContainer.css';
import Portada from '../pages/Portada';
import Usuario from '../imagenes/usuario.png';
import Login from '../pages/Login';


class NavContainer extends Component {
    

  state = {
    dropVisible: false
  }
  dropdown = () => {
    if (this.state.dropVisible === false) {
      this.setState({
        dropVisible: true
      })
    }
    else{
      this.setState({
        dropVisible: false
      })
    }
  }

  render() {
    const {nombres} = this.props; 
    return (
    
         
            <div className="App-header">

            <img src={Usuario} className="img"></img>
            <a className="bienvenido">BIENVENIDO</a>
            <a className="bienvenido">{nombres} </a>

      
      
        <Link to={'./Card'}>
          <Portada />
        </Link>
        <div class="list-group">
          <Link to={'./Card'}>
            <a href="#" className="list-group-item list-group-item-action active">
              <i className="fa fa-home"></i> PAGINA INICIO
            </a>
          </Link>
          <Link to={'./Genero'}>
            <a href="#" className="list-group-item list-group-item-action bg-secondary text-white">
              <i className="fa fa-bar-chart"></i> ASIGNADOS POR GENERO
            </a>
          </Link>
          <Link to={'./Graph'}>
            <a href="#" className="list-group-item list-group-item-action bg-secondary text-white">
              <i className="fa fa-pie-chart"></i> ASIGNADOS POR DEPARTAMENTO
            </a>
          </Link>
          {// <Link to={'./Graph2'}>
            //<a href="#" class="list-group-item list-group-item-action bg-secondary text-white">
            //  <i class="fa fa-line-chart"></i> ASIGNADOS EN PRIMAX
            //</a>
            //</Link>
          }
          <Link to={'./Educacion'}>
            <a href="#" className="list-group-item list-group-item-action bg-secondary text-white">
              <i className="fa fa-bar-chart"></i> ASIGNADOS POR EDUCACION
            </a>
          </Link>
          <Link to={'./Turno'}>
            <a href="#" className="list-group-item list-group-item-action bg-secondary text-white">
              <i className="fa fa-bar-chart"></i> TURNOS DE PERSONAS ASIGNADAS
            </a>
          </Link>
          <Link to={'./Usuarios'}>
            <a href="#" className="list-group-item list-group-item-action bg-secondary text-white">
              <i className="fa fa-bar-chart"></i> TOTAL DE ASIGNADOS POR USUARIOS
            </a>
          </Link>
          <Link to={'./Spp'}>
            <a href="#" className="list-group-item list-group-item-action bg-secondary text-white">
              <i className="fa fa-bar-chart"></i> TOTAL DE PERSONAS ASEGURADAS
            </a>
          </Link>
          <div className="dropdown-option">
            <button onClick={this.dropdown} className="dropdown-btn bg-secondary border-right"> <i className="fa fa-bar-chart"></i>LINEA DE TIEMPO
              <i className="fa fa-caret-down"></i>
            </button>
            {
              this.state.dropVisible === true &&
              <div className="dropdown-container">
                <Link to={'./LEducacion'}>
                  <a href="#" className="list-group-item list-group-item-action bg-secondary text-white">
                    <i className="fa fa-bar-chart"></i> LINEA DE TIEMPO EDUCACION
                </a>
                </Link>
                <Link to={'./LUsuarios'}>
                  <a href="#" className="list-group-item list-group-item-action bg-secondary text-white">
                    <i className="fa fa-bar-chart"></i> LINEA DE TIEMPO USUARIOS
                </a>
                </Link>
                <Link to={'./Spp'}>
                  <a href="#" className="list-group-item list-group-item-action bg-secondary text-white">
                    <i className="fa fa-bar-chart"></i> 
                </a>
                </Link>
              </div>
            }
          </div>

        </div>
     
      <login />
      </div>
     
      
      
      

    );
  }
}

export default NavContainer;