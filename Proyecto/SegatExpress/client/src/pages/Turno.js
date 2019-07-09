import React, { Component } from 'react';
import { Bar, Line, Pie, Polar } from 'react-chartjs-2';
import Peru from '../imagenes/peru.png';

import './Graph.css';
const CardStyle = {
    
    width: '',
    //backgroundColor: "4e4e4e",
}
class Turno extends Component {
    constructor() {
        super();

        this.state = {
            labels: [],
            labels1: []
        }
        this.MostrarTurno2018();
        this.MostrarTurno2019();
        this.asignarDatos();
    }
    asignarDatos() {

        //this.setState(charData.props.data = )
    }

    MostrarTurno2019() {
        setInterval(async () => {
            const res = await fetch("/api/turno2019");
            const data = await res.json();
            //const formatData = this.formatData(data);
            this.setState({ labels1: data })
        }, 1000)
    }

        
    MostrarTurno2018() {
        setInterval(async () => {
            const res = await fetch("/api/turno2018");
            const data = await res.json();
            //const formatData = this.formatData(data);
            this.setState({ labels: data })
        }, 1000)
    }

    render() {
        var label = this.state.labels.map((props, index) => {
            return props.Turno
        })
        var dataset = this.state.labels.map((props, index) => {
            return props.Cantidad
        })
        var color = this.state.labels.map((props ,index) =>{
            if (props.Turno === 'TURNO MAÑANA:TURNO 1'){
                return 'rgba(249, 17, 28, 0.6)'
            }else if(props.Turno === 'TURNO TARDE:TURNO 1'){
                return 'rgba110, 191, 255, 0.6)'
            }else if(props.Turno === 'TURNO MAÑANA:TURNO 2'){
                return 'rgba(4, 94, 251, 0.6)'
            }else if(props.Turno === 'TURNO TARDE:TURNO 2'){
                return 'rgba(6, 224, 118, 0.6)'
            }else{
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
                return props.Turno
            })
            var dataset1 = this.state.labels1.map((props, index) => {
                return props.Cantidad
            })
            var color1 = this.state.labels1.map((props ,index) =>{
                if (props.Turno === 'TURNO MAÑANA:TURNO 1'){
                    return 'rgba(249, 17, 28, 0.6)'
                }else if(props.Turno === 'TURNO TARDE:TURNO 1'){
                    return 'rgba110, 191, 255, 0.6)'
                }else if(props.Turno === 'TURNO MAÑANA:TURNO 2'){
                    return 'rgba(4, 94, 251, 0.6)'
                }else if(props.Turno === 'TURNO TARDE:TURNO 2'){
                    return 'rgba(6, 224, 118, 0.6)'
                }else{
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
        
        return (  
        
            <div key={1} className="chart">
                
                <h1 className="sombras mt-10">TURNOS POR AÑOS</h1>
                <div>
                
                  
                    </div>
                  <div className="wrapper">
                      
           
                <div className="mb-4" style={CardStyle}>
                <div>
                <div>
                        <h3 >DATOS QUE SE OBTUVO EN EL 2018</h3>
                    </div>

                        </div>

                    <Line data={data}    

                        width={400}
                        height={400}
                        options={{
                            title: {
                                display: true,
                                text: 'VALORES ASIGNADOS FILTRADOS POR TURNO',
                                fontSize: 25
                            },
                            
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                        
                                        
                                    }
                                }]
                            }
                        }}
                    />
                    
                </div>
                <div className="mb-4" style={CardStyle}>
                
                <div>
                        <h3>DATOS QUE SE OBTUVO EN EL 2019</h3>
                    </div>
                    <Line data={data1}
                    
                        width={400}
                        height={400}
                        options={{
                            title: {
                                display: true,
                                text: 'VALORES ASIGNADOS FILTRADOS POR TURNO',
                                fontSize: 25
                            },
                            
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                       
                                        
                                    }
                                }]
                            }
                        }}
                    />
            </div>
            <div className="mb-4" style={CardStyle}>
                
                <div>
                        <h3>DATOS QUE SE OBTUVO EN EL 2018</h3>
                    </div>
                    <Bar data={data}
                    
                        width={400}
                        height={400}
                        options={{
                            title: {
                                display: true,
                                text: 'VALORES ASIGNADOS FILTRADOS POR TURNO',
                                fontSize: 25
                            },
                            
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                       
                                        
                                    }
                                }]
                            }
                        }}
                    />
            </div>
            <div className="mb-4" style={CardStyle}>
                
                <div>
                        <h3>DATOS QUE SE OBTUVO EN EL 2019</h3>
                    </div>
                    <Bar data={data1}
                    
                        width={400}
                        height={400}
                        options={{
                            title: {
                                display: true,
                                text: 'VALORES ASIGNADOS FILTRADOS POR TURNO',
                                fontSize: 25
                            },
                            
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                       
                                        
                                    }
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

export default Turno;
