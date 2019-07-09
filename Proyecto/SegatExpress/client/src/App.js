import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//Link, 
import './App.css';
import Card from './pages/Card';
import Educacion from './pages/Educacion';
import Graph from './pages/Graph';
import Graph2 from './pages/Graph2';
import Header from './pages/Header';
import Genero from './pages/Graficos/Genero';
import Turno from './pages/Turno';
import Usuarios from './pages/Usuarios';
import Spp from './pages/Spp';
//import Login from './pages/Login';
import Footer from './pages/Footer'
import LEducacion from './pages/LEducacion'
import LUsuarios from './pages/LUsuarios'
import NavContainer from './component/NavContainer'





class App extends Component {
  state = {
    login: false,
    nombres: ''
  }
  render() {
  
    return (
     <div className="App desactivado">
          <div className="app-container" id="wrapper">
          <div className="nav-child bg-secondary">
        
            <NavContainer />
          </div>
          <div className="app-child" >
         
           
              
            
            <Switch>
              <Route exact path='/' component={Card} />
              <Route default path='/Card' component={Card} />
              <Route path='/Educacion' component={Educacion} />
              <Route path='/Graph' component={Graph} />
              {//<Route path='/Graph2' component={Graph2}></Route>
              }
              <Route path='/Genero' component={Genero}></Route>
              <Route path='/Turno' component={Turno}></Route>
              <Route path='/Usuarios' component={Usuarios}></Route>
              <Route path='/Spp' component={Spp}></Route>           
              <Route path='/LEducacion' component={LEducacion}></Route>
              <Route path='/LUsuarios' component={LUsuarios}></Route>  
            </Switch>
          </div>
        </div>
        <Footer />
        
      </div>
      
      
    );
  }
}

export default App;