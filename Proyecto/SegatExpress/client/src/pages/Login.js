import React from 'react';
import LogoImage from '../imagenes/logo-ts.png';
import './login.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import App from '../App';
import { basename } from 'path';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom'
import Card from './Card';

class Login extends React.Component {
  constructor(props) {
    super(props)

  }
  state = {
    mail: '',
    password: '',
    nombres: '',
    existe: [],
    llave: 0
  }

  handleValidate = (event) => {
    event.preventDefault();
    const log = (async () => {
      const res = await fetch("/api/Login", {
        method: "POST",
        headers: {
          'Accept': 'application/jason',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          id: this.state.mail,
          password: this.state.password
        })
      });
      const data = await res.json();
      //const formatData = this.formatData(data);
      this.setState({ existe: data })
      console.log(this.state.existe)
      this.state.existe.map((props) => {
        this.setState({
          llave: props.existe,
          nombres: props.nombres })
        
      })
      if (this.state.llave === 1) {
        console.log('log in');
      } else {
        console.log('error')
      }
    })();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log('passowrd: ', this.state.password)
    console.log('mail ', this.state.mail)
  }

  userCall() {
    this.state.mail.map((props) => {
      return props.mail
    })
  }

  render() {
    if (this.state.llave === 1) {
      return <BrowserRouter>
        <App nombres={this.state.nombres} />
      </BrowserRouter>
    }
    return (
      <React.Fragment>
        <section className="login-layout">
          <div className="hero">
            <div className="hero-container">
              <div className="form-layout">
                <figure className="form-title">
                  <img src={LogoImage} alt="form-title" />
                  <h2>Sistema de Login</h2>
                </figure>
                <form className="form-content">
                  <input onChange={this.handleChange} value={this.state.email} name="mail" className="form-input" type="mail" placeholder="E-mail*" required />
                  <input onChange={this.handleChange} value={this.state.password} name="password" className="form-input" type="password" placeholder="Clave*" required />
                  <button onClick={this.handleValidate} className="form-input-submit" type="submit">Inicia Sesión</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Login;