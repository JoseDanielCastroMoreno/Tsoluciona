import React, { Component } from 'react';
import tsoluciona from '../imagenes/tsoluciona.jpeg'
import './Portada.css';


class Portada extends Component {
    render(){
        return(
        <div className="pos-f-t">
              <div className="d-flex justify-content-center bg-dark p-4">
                  <div>
                      <img className="img-logo" src= {tsoluciona} />
                  </div>
                
              </div>
        </div>
        );        
    }
}

export default Portada;