import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'react-vertical-timeline-component/style.min.css';
import './Graph.css';

const CardStyle = {
  width: '',
  //backgroundColor: "4e4e4e",
}

class LEducacion extends Component {
  constructor() {
    super();

    this.state = {
      labels: [],
      labels1: [],
      labels2: [],
      labels3: [],
      labels4: [],
      labels5: [],
      labels6: [],
      color: "black"

    }
    this.MostrarEducacion201809();
    this.MostrarEducacion201810();
    this.MostrarEducacion201811();
    this.MostrarEducacion201812();
    this.MostrarEducacion201901();
    this.MostrarEducacion201902();
    this.MostrarEducacion201903();
    this.asignarDatos();
  }
  asignarDatos() {

    //this.setState(charData.props.data = )
  }
  MostrarEducacion201809() {
    setInterval(async () => {
      const res = await fetch("/api/educacion201809");
      const data = await res.json();
      //const formatData = this.formatData(data);
      this.setState({ labels: data })
    }, 1000)
  }
  MostrarEducacion201810() {
    setInterval(async () => {
      const res = await fetch("/api/educacion201810");
      const data = await res.json();
      //const formatData = this.formatData(data);
      this.setState({ labels1: data })
    }, 1000)
  }
  MostrarEducacion201811() {
    setInterval(async () => {
      const res = await fetch("/api/educacion201811");
      const data = await res.json();
      //const formatData = this.formatData(data);
      this.setState({ labels2: data })
    }, 1000)
  }
  MostrarEducacion201812() {
    setInterval(async () => {
      const res = await fetch("/api/educacion201812");
      const data = await res.json();
      //const formatData = this.formatData(data);
      this.setState({ labels3: data })
    }, 1000)
  }
  MostrarEducacion201901() {
    setInterval(async () => {
      const res = await fetch("/api/educacion201901");
      const data = await res.json();
      //const formatData = this.formatData(data);
      this.setState({ labels4: data })
    }, 1000)
  }
  MostrarEducacion201902() {
    setInterval(async () => {
      const res = await fetch("/api/educacion201902");
      const data = await res.json();
      //const formatData = this.formatData(data);
      this.setState({ labels5: data })
    }, 1000)
  }
  MostrarEducacion201903() {
    setInterval(async () => {
      const res = await fetch("/api/educacion201903");
      const data = await res.json();
      //const formatData = this.formatData(data);
      this.setState({ labels6: data })
    }, 1000)
  }

  render() {
    var label = this.state.labels.map((props, index) => {
      return props.Educacion2018
    })
    var dataset = this.state.labels.map((props, index) => {
      return props.Total2018
    })
    var color = this.state.labels.map((props, index) => {
      if (props.Educacion2018 === 'EDUCACION UNIVERSITARIA COMPLETA') {
        return 'rgba(249, 17, 28, 0.6)'
      } else if (props.Educacion2018 === 'EDUCACION TECNICA COMPLETA') {
        return 'rgba(4, 94, 251, 0.6)'
      } else if (props.Educacion2018 === 'EDUCACION TECNICA INCOMPLETA') {
        return 'rgba(9, 164, 23, 0.6)'
      } else if (props.Educacion2018 === 'EDUCACION UNIVERSITARIA INCOMPLETA') {
        return 'rgba(11, 30, 29, 0.6)'
      } else if (props.Educacion2018 === 'EDUCACION SECUNDARIA COMPLETA') {
        return 'rgba(24, 75, 220, 0.6)'
      } else {
        return 'rgba(11, 30, 29, 0.6)'
      }
    })
    var data = {
      labels: label,
      datasets: [{
        label: label,
        data: dataset,
        backgroundColor: color
      }]
    }
    var label1 = this.state.labels1.map((props, index) => {
      return props.Educacion2018
    })
    var dataset1 = this.state.labels1.map((props, index) => {
      return props.Total2018
    })
    var color1 = this.state.labels1.map((props, index) => {
      if (props.Educacion2018 === 'EDUCACION UNIVERSITARIA COMPLETA') {
        return 'rgba(249, 17, 28, 0.6)'
      } else if (props.Educacion2018 === 'EDUCACION TECNICA COMPLETA') {
        return 'rgba(4, 94, 251, 0.6)'
      } else if (props.Educacion2018 === 'EDUCACION TECNICA INCOMPLETA') {
        return 'rgba(9, 164, 23, 0.6)'
      } else if (props.Educacion2018 === 'EDUCACION UNIVERSITARIA INCOMPLETA') {
        return 'rgba(11, 30, 29, 0.6)'
      } else if (props.Educacion2018 === 'EDUCACION SECUNDARIA COMPLETA') {
        return 'rgba(24, 75, 220, 0.6)'
      } else {
        return 'rgba(11, 30, 29, 0.6)'
      }
    })
    var data1 = {
      labels: label1,
      datasets: [{
        label: label1,
        data: dataset1,
        backgroundColor: color1
      }]
    }
    var label2 = this.state.labels2.map((props, index) => {
      return props.Educacion2018
    })
    var dataset2 = this.state.labels2.map((props, index) => {
      return props.Total2018
    })
    var color2 = this.state.labels2.map((props, index) => {
      if (props.Educacion2018 === 'EDUCACION UNIVERSITARIA COMPLETA') {
        return 'rgba(249, 17, 28, 0.6)'
      } else if (props.Educacion2018 === 'EDUCACION TECNICA COMPLETA') {
        return 'rgba(4, 94, 251, 0.6)'
      } else if (props.Educacion2018 === 'EDUCACION TECNICA INCOMPLETA') {
        return 'rgba(9, 164, 23, 0.6)'
      } else if (props.Educacion2018 === 'EDUCACION UNIVERSITARIA INCOMPLETA') {
        return 'rgba(11, 30, 29, 0.6)'
      } else if (props.Educacion2018 === 'EDUCACION SECUNDARIA COMPLETA') {
        return 'rgba(24, 75, 220, 0.6)'
      } else {
        return 'rgba(11, 30, 29, 0.6)'
      }
    })
    var data2 = {
      labels: label2,
      datasets: [{
        label: label2,
        data: dataset2,
        backgroundColor: color2
      }]
    }
    var label3 = this.state.labels3.map((props, index) => {
      return props.Educacion2018
    })
    var dataset3 = this.state.labels3.map((props, index) => {
      return props.Total2018
    })
    var color3 = this.state.labels3.map((props, index) => {
      if (props.Educacion2018 === 'EDUCACION UNIVERSITARIA COMPLETA') {
        return 'rgba(249, 17, 28, 0.6)'
      } else if (props.Educacion2018 === 'EDUCACION TECNICA COMPLETA') {
        return 'rgba(4, 94, 251, 0.6)'
      } else if (props.Educacion2018 === 'EDUCACION TECNICA INCOMPLETA') {
        return 'rgba(9, 164, 23, 0.6)'
      } else if (props.Educacion2018 === 'EDUCACION UNIVERSITARIA INCOMPLETA') {
        return 'rgba(11, 30, 29, 0.6)'
      } else if (props.Educacion2018 === 'EDUCACION SECUNDARIA COMPLETA') {
        return 'rgba(24, 75, 220, 0.6)'
      } else {
        return 'rgba(11, 30, 29, 0.6)'
      }
    })
    var data3 = {
      labels: label3,
      datasets: [{
        label: label3,
        data: dataset3,
        backgroundColor: color3
      }]
    }
    var label4 = this.state.labels4.map((props, index) => {
      return props.Educacion2019
    })
    var dataset4 = this.state.labels4.map((props, index) => {
      return props.Total2019
    })
    var color4 = this.state.labels4.map((props, index) => {
      if (props.Educacion2019 === 'EDUCACION UNIVERSITARIA COMPLETA') {
        return 'rgba(249, 17, 28, 0.6)'
      } else if (props.Educacion2019 === 'EDUCACION TECNICA COMPLETA') {
        return 'rgba(4, 94, 251, 0.6)'
      } else if (props.Educacion2019 === 'EDUCACION TECNICA INCOMPLETA') {
        return 'rgba(9, 164, 23, 0.6)'
      } else if (props.Educacion2019 === 'EDUCACION UNIVERSITARIA INCOMPLETA') {
        return 'rgba(11, 30, 29, 0.6)'
      } else if (props.Educacion2019 === 'EDUCACION SECUNDARIA COMPLETA') {
        return 'rgba(24, 75, 220, 0.6)'
      } else {
        return 'rgba(11, 30, 29, 0.6)'
      }
    })
    var data4 = {
      labels: label4,
      datasets: [{
        label: label4,
        data: dataset4,
        backgroundColor: color4
      }]
    }
    var label5 = this.state.labels5.map((props, index) => {
      return props.Educacion2019
    })
    var dataset5 = this.state.labels5.map((props, index) => {
      return props.Total2019
    })
    var color5 = this.state.labels5.map((props, index) => {
      if (props.Educacion2019 === 'EDUCACION UNIVERSITARIA COMPLETA') {
        return 'rgba(249, 17, 28, 0.6)'
      } else if (props.Educacion2019 === 'EDUCACION TECNICA COMPLETA') {
        return 'rgba(4, 94, 251, 0.6)'
      } else if (props.Educacion2019 === 'EDUCACION TECNICA INCOMPLETA') {
        return 'rgba(9, 164, 23, 0.6)'
      } else if (props.Educacion2019 === 'EDUCACION UNIVERSITARIA INCOMPLETA') {
        return 'rgba(11, 30, 29, 0.6)'
      } else if (props.Educacion2019 === 'EDUCACION SECUNDARIA COMPLETA') {
        return 'rgba(24, 75, 220, 0.6)'
      } else {
        return 'rgba(11, 30, 29, 0.6)'
      }
    })
    var data5 = {
      labels: label5,
      datasets: [{
        label: label5,
        data: dataset5,
        backgroundColor: color5
      }]
    }
    var label6 = this.state.labels6.map((props, index) => {
      return props.Educacion2019
    })
    var dataset6 = this.state.labels6.map((props, index) => {
      return props.Total2019
    })
    var color6 = this.state.labels6.map((props, index) => {
      if (props.Educacion2019 === 'EDUCACION UNIVERSITARIA COMPLETA') {
        return 'rgba(249, 17, 28, 0.6)'
      } else if (props.Educacion2019 === 'EDUCACION TECNICA COMPLETA') {
        return 'rgba(4, 94, 251, 0.6)'
      } else if (props.Educacion2019 === 'EDUCACION TECNICA INCOMPLETA') {
        return 'rgba(9, 164, 23, 0.6)'
      } else if (props.Educacion2019 === 'EDUCACION UNIVERSITARIA INCOMPLETA') {
        return 'rgba(11, 30, 29, 0.6)'
      } else if (props.Educacion2019 === 'EDUCACION SECUNDARIA COMPLETA') {
        return 'rgba(24, 75, 220, 0.6)'
      } else {
        return 'rgba(11, 30, 29, 0.6)'
      }
    })
    var data6 = {
      labels: label6,
      datasets: [{
        label: label6,
        data: dataset6,
        backgroundColor: color6
      }]
    }


    return (
  
      
      <div>
        <h1 className="sombras">LINEA DE TIEMPO EDUCACIÓN</h1>


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


export default LEducacion;