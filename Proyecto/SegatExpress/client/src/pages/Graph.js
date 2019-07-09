import React, { Component } from 'react';
import { Bar, Line, Pie, Polar, Doughnut } from 'react-chartjs-2';
import Peru from '../imagenes/peru.png';

import './Graph.css';

const CardStyle = {
    width: '25rem',
    //backgroundColor: "4e4e4e",
}
class Graph extends Component {
    constructor() {
        super();

        this.state = {
            labels: [],
            labels1: []

        }
        this.mostrardepartamento();
        this.mostrardepartamento2();
        this.asignarDatos();
    }
    asignarDatos() {

        //this.setState(charData.props.data = )
    }
    
   
    
    mostrardepartamento() {
        setInterval(async () => {
            const res = await fetch("/api/departamento");
            const data = await res.json();
            //const formatData = this.formatData(data);
            this.setState({ labels: data })
        }, 1000)
    }
    
    mostrardepartamento2(){
        setInterval(async () =>{
            const res = await fetch("/api/departamento2");
            const data = await res.json();
            this.setState({labels1: data})
        }, 1000)
    }

    render() {
        var label = this.state.labels.map((props, index) => {
            return  props.Departamento
        })
        var dataset = this.state.labels.map((props, index) => {
            return  props.Total
        })
        var color = this.state.labels.map((props ,index) =>{
            if (props.Departamento === 'ANCASH'){
                return 'rgba(249, 17, 28, 0.6)'
            }else if(props.Departamento === 'LA LIBERTAD'){
                return 'rgba(249, 130, 17, 0.6)'
            }else if(props.Departamento === 'LIMA'){
                return 'rgba(4, 94, 251, 0.6)'  
            }else if(props.Departamento ==='ICA'){
                return 'rgba(9, 164, 23, 0.6)'
            }else if(props.Departamento === 'CAJAMARCA'){
                return 'rgba(11, 30, 29, 0.6)'  
            }else if(props.Departamento === 'CALLAO'){
                return 'rgba(25, 77, 51, 0.6)'  
            }else if(props.Departamento === 'JUNIN'){
                return 'rgba(6, 224, 118, 0.6)'
            }else if(props.Departamento === 'LORETO'){
                return 'rgba(24, 75, 220, 0.6)'
            }else if(props.Departamento === 'LAMBAYEQUE'){
                return 'rgba(83, 106, 187, 0.6)'
            }else if(props.Departamento === 'PIURA'){
                return 'rgba(164, 82, 18, 0.6)'
            }else{
                return 'rgba(11, 30, 29, 0.6)'
            }
        })
        var data = {
            labels:label,
            datasets: [{
                label: label,
                data: dataset,
                backgroundColor: color
            }]
        
        }
        var label1 = this.state.labels1.map((props, index) => {
            return  props.Departamentos
        })
        var dataset1 = this.state.labels1.map((props, index) => {
            return  props.Totales
        })
        var color1 = this.state.labels1.map((props ,index) =>{
            if (props.Departamentos === 'ANCASH'){
                return 'rgba(249, 17, 28, 0.6)'
            }else if(props.Departamentos === 'LA LIBERTAD'){
                return 'rgba(249, 130, 17, 0.6)'
            }else if(props.Departamentos === 'LIMA'){
                return 'rgba(4, 94, 251, 0.6)'  
            }else if(props.Departamentos ==='ICA'){
                return 'rgba(9, 164, 23, 0.6)'
            }else if(props.Departamentos === 'CAJAMARCA'){
                return 'rgba(11, 30, 29, 0.6)'  
            }else if(props.Departamentos === 'CALLAO'){
                return 'rgba(25, 77, 51, 0.6)'  
            }else if(props.Departamentos === 'JUNIN'){
                return 'rgba(6, 224, 118, 0.6)'
            }else if(props.Departamentos === 'LORETO'){
                return 'rgba(24, 75, 220, 0.6)'
            }else if(props.Departamentos === 'LAMBAYEQUE'){
                return 'rgba(83, 106, 187, 0.6)'
            }else if(props.Departamentos === 'PIURA'){
                return 'rgba(164, 82, 18, 0.6)'
            }else{
                return 'rgba(11, 30, 29, 0.6)'
            }
        })
        var data1 = {
            labels:label1,
            datasets: [{
                label: label1,
                data: dataset1,
                backgroundColor: color1            
            }]
        }


        return (
            <div key={1} className="chart">
             
                 <h1 className="sombras">TODAS NUESTRAS SEDES</h1>
           
                <img src={Peru} />
                <h2></h2>
                 <h3></h3>
                 <React.Fragment>
                 <h1 className="sombras">TABLA DE RESULTADOS 2019 DE LOS DEPARTAMENTOS</h1>
                 <p className="parrafo">Los Graficos muestran parte de la realidad de la empresa de como ha ido avanzando en relación de los datos tomados en tiempo real respecto a el las localidades del Perú</p>
                    <table className="table table-dark mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Localidades</th>
                            <th scope="col">Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.labels.map((item, index) => (
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{item.Departamento} </td>
                                <td> {item.Total}</td>
                            </tr>

                        ))
                        }
                    </tbody>
                </table>
                </React.Fragment>
               <React.Fragment>
            <div className="wrapper" >
            <div className=" mb-4" style={CardStyle}>
                <Pie data={data}
                    width={800}
                    height={800}
                    options={{
                        title: {
                            display: true,
                            text: 'ESTADO ACTUAL ',
                            fontSize: 25
                        },
                        scales:{
                            yAxes:[{
                                ticks:{
                                    beginAtZero:true
                                }
                            }]
                        }
                    }}
                />
                <h3></h3>
                
                </div>
                
                <div style={CardStyle}>
                    <Doughnut data={data}
                    width={400}
                    height={400}
                    options={{
                        title: {
                            display: true,
                            text: 'ESTADO ACTUAL',
                            fontSize: 25
                        },
                        scales:{
                            yAxes:[{
                                ticks:{
                                    beginAtZero:true
                                },
                                
                            }]
                        }
                    }}
                />
                </div>

            
                <div style={CardStyle}>
                    <Line data={data}
                    width={1000}
                    height={1000}
                    options={{
                        title: {
                            display: true,
                            text: 'ESTADO ACTUAL',
                            fontSize: 25
                        },
                        scales:{
                            yAxes:[{
                                ticks:{
                                    beginAtZero:true
                                },
                                
                            }]
                        }
                    }}
                />
                </div>
                <div style={CardStyle}>
                    <Bar data={data}
                    width={1000}
                    height={1000}
                    options={{
                        title: {
                            display: true,
                            text: 'ESTADO ACTUAL',
                            fontSize: 25
                        },
                        scales:{
                            yAxes:[{
                                ticks:{
                                    beginAtZero:true
                                },
                                
                            }]
                        }
                    }}
                />
                </div>
                </div>
                </React.Fragment>
                <h3>-----------------------------------------------------------------------------------------------------------------------</h3>
                <h1 className="sombras">TABLA DE RESULTADOS 2018 DE LOS DEPARTAMENTOS CON ASIGNACIÓN</h1>
                 <p className="parrafo">Los Graficos muestran parte de la realidad de la empresa de como ha ido avanzando en relación de los datos tomados en tiempo real respecto a el las localidades del Perú</p>
               
                <table className="table table-dark mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Localidades</th>
                            <th scope="col">Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.labels1.map((item, index) => (
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{item.Departamentos} </td>
                                <td> {item.Totales}</td>
                            </tr>

                        ))
                        }
                    </tbody>
                </table>
                <div className="wrapper" >
                <div style={CardStyle}>
                    <Polar data={data1}
                    width={800}
                    height={800}
                    options={{
                        title: {
                            display: true,
                            text: 'ESTADO AÑO 2018',
                            fontSize: 25
                        },
                        scales:{
                            yAxes:[{
                                ticks:{
                                    beginAtZero:true
                                },
                                
                            }]
                        }
                    }}
                />
               
                     </div>
                 
                <div style={CardStyle}>
                    <Bar data={data1}
                    width={800}
                    height={800}
                    options={{
                        title: {
                            display: true,
                            text: 'ESTADO AÑO 2018',
                            fontSize: 25
                        },
                        scales:{
                            yAxes:[{
                                ticks:{
                                    beginAtZero:true
                                },
                                
                            }]
                        }
                    }}
                />
                </div>
                <div style={CardStyle}>
                    <Doughnut data={data1}
                    width={800}
                    height={800}
                    options={{
                        title: {
                            display: true,
                            text: 'ESTADO AÑO 2018',
                            fontSize: 25
                        },
                        scales:{
                            yAxes:[{
                                ticks:{
                                    beginAtZero:true
                                },
                                
                            }]
                        }
                    }}
                />
               
                     </div>
                     
                <div style={CardStyle}>
                    <Line data={data1}
                    width={1000}
                    height={1000}
                    options={{
                        title: {
                            display: true,
                            text: 'ESTADO AÑO 2018',
                            fontSize: 25
                        },
                        scales:{
                            yAxes:[{
                                ticks:{
                                    beginAtZero:true
                                },
                                
                            }]
                        }
                    }}
                />
                </div>
                </div>
            </div>
            
        )
    }
}

export default Graph;
