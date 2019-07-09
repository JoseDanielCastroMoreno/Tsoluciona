import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'react-vertical-timeline-component/style.min.css';
import './Graph.css';
import './Graficos/lineaT.css'
import Fondo from '../imagenes/fondo.jpg';
const CardStyle = {
    width: '',
    backgroundColor: "4e4e4e",
}
class LUsuarios extends Component {
    constructor() {
        super();

        this.state = {
            labels: [],
            labels1: [],
            labels2: [],
            labels3: [],
            labels4: [],
            labels5: [],
            labels6: []

        }
        this.MostrarUsuarios201809();
        this.MostrarUsuarios201810();
        this.MostrarUsuarios201811();
        this.MostrarUsuarios201812();
        this.MostrarUsuarios201901();
        this.MostrarUsuarios201902();
        this.MostrarUsuarios201903();
        this.asignarDatos();
    }
    asignarDatos() {

        //this.setState(charData.props.data = )
    }
    MostrarUsuarios201809() {
        setInterval(async () => {
            const res = await fetch("/api/usuarios201809");
            const data = await res.json();
            //const formatData = this.formatData(data);
            this.setState({ labels: data })
        }, 1000)
    }
    MostrarUsuarios201810() {
        setInterval(async () => {
            const res = await fetch("/api/usuarios201810");
            const data = await res.json();
            //const formatData = this.formatData(data);
            this.setState({ labels1: data })
        }, 1000)
    }
    MostrarUsuarios201811() {
        setInterval(async () => {
            const res = await fetch("/api/usuarios201811");
            const data = await res.json();
            //const formatData = this.formatData(data);
            this.setState({ labels2: data })
        }, 1000)
    }
    MostrarUsuarios201812() {
        setInterval(async () => {
            const res = await fetch("/api/usuarios201812");
            const data = await res.json();
            //const formatData = this.formatData(data);
            this.setState({ labels3: data })
        }, 1000)
    }
    MostrarUsuarios201901() {
        setInterval(async () => {
            const res = await fetch("/api/usuarios201901");
            const data = await res.json();
            //const formatData = this.formatData(data);
            this.setState({ labels4: data })
        }, 1000)
    }
    MostrarUsuarios201902() {
        setInterval(async () => {
            const res = await fetch("/api/usuarios201902");
            const data = await res.json();
            //const formatData = this.formatData(data);
            this.setState({ labels5: data })
        }, 1000)
    }
    MostrarUsuarios201903() {
        setInterval(async () => {
            const res = await fetch("/api/usuarios201903");
            const data = await res.json();
            //const formatData = this.formatData(data);
            this.setState({ labels6: data })
        }, 1000)
    }
    render() {
        var label = this.state.labels.map((props, index) => {
            return props.Nombres2018
        })
        var dataset = this.state.labels.map((props, index) => {
            return props.Total2018
        })
       
        

        var label1 = this.state.labels1.map((props, index) => {
            return props.Nombres2018
        })
        var dataset1 = this.state.labels1.map((props, index) => {
            return props.Total2018
        })
       
       
        var label2 = this.state.labels2.map((props, index) => {
            return props.Nombres2018
        })
        var dataset2 = this.state.labels2.map((props, index) => {
            return props.Total2018
        })
        
        
        var label3 = this.state.labels3.map((props, index) => {
            return props.Nombres2018
        })
        var dataset3 = this.state.labels3.map((props, index) => {
            return props.Total2018
        })
       
       
        var label4 = this.state.labels4.map((props, index) => {
            return props.Nombres2019
        })
        var dataset4 = this.state.labels4.map((props, index) => {
            return props.Total2019
        })
       
       
        var label5 = this.state.labels5.map((props, index) => {
            return props.Nombres2019
        })
        var dataset5 = this.state.labels5.map((props, index) => {
            return props.Total2019
        })
       
       
       
        var label6 = this.state.labels6.map((props, index) => {
            return props.Nombres2019
        })
        var dataset6 = this.state.labels6.map((props, index) => {
            return props.Total2019
        })
       
       
        return (
  
      
            <div>
              <h1 className="sombras">LINEA DE TIEMPO USUARIOS</h1>
      
      
              <VerticalTimeline className="backgroundfondo" >
      
                <VerticalTimelineElement
      
                  className="vertical-timeline-element--work backgroundfondo"
      
      
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      
                >
                  <h3 className="vertical-timeline-element-title">PERIODO 2018/09</h3>
                  <hr></hr>
                  <h4 className="vertical-timeline-element-subtitle"></h4>
                  <p className="parrafo">EL VALOR MAS ALTO DEL AÑO 2018 MES DE SEPTIEMBRE ES ES EL TIPO: <span className="cantidadtotal">{label[0]}</span>, YA QUE CUENTA CON UNA CANTIDAD DE: <span className="cantidadtotal">{dataset[0]}</span> PERSONAS QUE CUENTAN CON ESTE TIPO DE EDUCACIÓN
                               </p>
      
                </VerticalTimelineElement>
      
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
      
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      
                >
                  <h3 className="vertical-timeline-element-title">PERIODO 2018/10</h3>
                  <hr></hr>
                  <p className="parrafo">EL VALOR MAS ALTO DEL AÑO 2018 MES DE OCTUBRE ES ES EL TIPO: <span className="cantidadtotal">{label1[0]}</span>, YA QUE CUENTA CON UNA CANTIDAD DE: <span className="cantidadtotal">{dataset1[0]}</span> PERSONAS QUE CUENTAN CON ESTE TIPO DE EDUCACIÓN
                               </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
      
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      
                >
                   <h3 className="vertical-timeline-element-title">PERIODO 2018/11</h3>
                   <hr></hr>
                  <p className="parrafo">EL VALOR MAS ALTO DEL AÑO 2018 MES DE NOVIEMBRE ES ES EL TIPO: <span className="cantidadtotal">{label2[0]}</span>, YA QUE CUENTA CON UNA CANTIDAD DE: <span className="cantidadtotal">{dataset2[0]}</span> PERSONAS QUE CUENTAN CON ESTE TIPO DE EDUCACIÓN
                               </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
      
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      
                >
                   <h3 className="vertical-timeline-element-title">PERIODO 2018/12</h3>
                   <hr></hr>
                  <p className="parrafo">EL VALOR MAS ALTO DEL AÑO 2018 MES DE DICIEMBRE ES ES EL TIPO: <span className="cantidadtotal">{label3[0]}</span>, YA QUE CUENTA CON UNA CANTIDAD DE: <span className="cantidadtotal">{dataset3[0]}</span> PERSONAS QUE CUENTAN CON ESTE TIPO DE EDUCACIÓN
                               </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
      
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      
                >
               <h3 className="vertical-timeline-element-title">PERIODO 2019/01</h3>
               <hr></hr>
                <p className="parrafo">EL VALOR MAS ALTO DEL AÑO 2019 MES DE ENERO ES ES EL TIPO: <span className="cantidadtotal">{label4[0]}</span>, YA QUE CUENTA CON UNA CANTIDAD DE: <span className="cantidadtotal">{dataset4[0]}</span> PERSONAS QUE CUENTAN CON ESTE TIPO DE EDUCACIÓN
                               </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
      
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      
                >
                  <h3 className="vertical-timeline-element-title">PERIODO 2019/02</h3>
                  <hr></hr>
                <p className="parrafo">EL VALOR MAS ALTO DEL AÑO 2019 MES DE FEBRERO ES ES EL TIPO: <span className="cantidadtotal">{label5[0]}</span>, YA QUE CUENTA CON UNA CANTIDAD DE: <span className="cantidadtotal">{dataset5[0]}</span> PERSONAS QUE CUENTAN CON ESTE TIPO DE EDUCACIÓN
                               </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      
                >
                 <h3 className="vertical-timeline-element-title">PERIODO 2019/03</h3>
                 <hr></hr>
                  <p className="parrafo">EL VALOR MAS ALTO DEL AÑO 2019 MES DE MARZO ES ES EL TIPO: <span className="cantidadtotal">{label6[0]}</span>, YA QUE CUENTA CON UNA CANTIDAD DE: <span className="cantidadtotal">{dataset6[0]}</span> PERSONAS QUE CUENTAN CON ESTE TIPO DE EDUCACIÓN
                               </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          );
        }
      }
      
      export default LUsuarios;