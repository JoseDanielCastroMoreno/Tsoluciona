import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Bar, Line, Pie, Polar, HorizontalBar } from 'react-chartjs-2';
import { useReactTable } from 'react-table';
import Table from 'react-bootstrap/Table'
import './Graph.css';



const Root = "http://" + document.location.hostname;

// ESTILOS - COLORES PARA LAS CARDS SEGUN SU LLENADO
const CardStyle = {
    width: '26rem',
    //backgroundColor: "4e4e4e",
}
//var contador = 0;
class Card extends Component {
    constructor() {
        super();
        this.state = {
            labels: []
        }
        this.MostrarTabla();
        this.asignarDatos();
    }
    asignarDatos() {

    }


    async MostrarTabla() {
        const res = await fetch("/api/usuariosTotal");
        const data = await res.json();
        this.setState({ labels: data })
    }

    render() {
        var label = this.state.labels.map((props, index) => {
            return props.Nombres
        })
        var dataset = this.state.labels.map((props, index) => {
            return props.Total
        })
        var color = this.state.labels.map((props, index) => {
            if (props.Nombres === 'Practicante Lima') {
                return 'rgba(249, 17, 28, 0.6)'
            } else if (props.Nombres === 'Orlando Gonzalez') {
                return 'rgba(249, 130, 17, 0.6)'
            } else if (props.Nombres === 'Juan Carlos Enriquez Elias') {
                return 'rgba(4, 94, 251, 0.6)'
            } else if (props.Nombres === 'Martin Galvez') {
                return 'rgba(9, 164, 23, 0.6)'
            } else if (props.Nombres === 'Silvia Yacolca') {
                return 'rgba(11, 30, 29, 0.6)'
            } else if (props.Nombres === 'Estefany Centurion Eslava') {
                return 'rgba(25, 77, 51, 0.6)'
            } else if (props.Nombres === 'Bricsy Sobrino Morales') {
                return 'rgba(6, 224, 118, 0.6)'
            } else if (props.Nombres === 'Melissa Rojas Garcia') {
                return 'rgba(24, 75, 220, 0.6)'
            } else if (props.Nombres === 'Jose Patazca Lojas') {
                return 'rgba(83, 106, 187, 0.6)'
            } else if (props.Nombres === 'Naip Janrely Benito') {
                return 'rgba(164, 82, 18, 0.6)'
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
        let i = 0;




        return (
            <div key={1} className="chart">
                <h1 className="sombras mt-5">VALORES DE TOTALES DE ASIGNADOS POR USUARIOS</h1>
                <div>
                    <React.Fragment>
                        <h1 className="sombras">DATOS GENERALES DE LAS PERSONAS</h1>
                        <h2 className="sombras">TOP 10 DE LOS USUARIOS QUE CONSIGUIERON ASIGNAR PERSONAS EN EL 2019</h2>
                        <table className="table table-dark mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Trabajadores</th>
                                    <th scope="col">Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.labels.map((item, index) => (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.Nombres} </td>
                                        <td> {item.Total}</td>
                                    </tr>

                                ))
                                }
                            </tbody>
                        </table>
                    </React.Fragment>
                </div>
                <div >
                    <div>
                        <HorizontalBar data={data}
                            width={400}
                            height={400}
                            options={{
                                title: {
                                    display: true,
                                    text: 'VALORES ASIGNADOS FILTRADOS POR TIPO DE USUARIOS',
                                    fontSize: 40,
                                    
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
                    <div >
                        <Line data={data}
                            width={500}
                            height={500}
                            options={{
                                title: {
                                    display: true,
                                    text: 'VALORES ASIGNADOS FILTRADOS POR TIPO DE USUARIOS',
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
                    <div >


                        <Polar data={data}
                            width={400}
                            height={400}
                            options={{
                                title: {
                                    display: true,
                                    text: 'VALORES ASIGNADOS FILTRADOS POR TIPO DE USUARIOS',
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
                    <div >


                        <Bar data={data}
                            width={400}
                            height={400}
                            options={{
                                title: {
                                    display: true,
                                    text: 'VALORES ASIGNADOS FILTRADOS POR TIPO DE USUARIOS',
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
                    <div >


                        <Pie data={data}
                            width={400}
                            height={400}
                            options={{
                                title: {
                                    display: true,
                                    text: 'VALORES ASIGNADOS FILTRADOS POR TIPO DE USUARIOS',
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
        );

    }
}
export default Card;
