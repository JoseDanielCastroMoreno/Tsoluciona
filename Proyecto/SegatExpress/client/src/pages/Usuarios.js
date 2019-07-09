import React, { Component } from 'react';
import { Bar, Line, Pie, Polar, HorizontalBar } from 'react-chartjs-2';
import './Graph.css';
const CardStyle = {
    width: '',
    //backgroundColor: "4e4e4e",
}
class Usuarios extends Component {
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
        var color = this.state.labels.map((props, index) => {
            if (props.Nombres2018 === 'Practicante Lima') {
                return 'rgba(249, 17, 28, 0.6)'
            } else if (props.Nombres2018 === 'Orlando Gonzales') {
                return 'rgba(249, 130, 17, 0.6)'
            } else if (props.Nombres2018 === 'Juan Carlos Enriquez Elias') {
                return 'rgba(4, 94, 251, 0.6)'
            } else if (props.Nombres2018 === 'Martin Galvez') {
                return 'rgba(9, 164, 23, 0.6)'
            } else if (props.Nombres2018 === 'Silvia Yacolca') {
                return 'rgba(128, 0, 0, 0.6)'
            } else if (props.Nombres2018 === 'Estefany Centurion Eslava') {
                return 'rgba(25, 77, 51, 0.6)'
            } else if (props.Nombres2018 === 'Bricsy Sobrino Morales') {
                return 'rgba(6, 224, 118, 0.6)'
            } else if (props.Nombres2018 === 'Melissa Rojas Garcia') {
                return 'rgba(24, 75, 220, 0.6)'
            } else if (props.Nombres2018 === 'Jose Patazca Lojas') {
                return 'rgba(83, 106, 187, 0.6)'
            } else if (props.Nombres2018 === 'Naip Janrely Benito') {
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

        var label1 = this.state.labels1.map((props, index) => {
            return props.Nombres2018
        })
        var dataset1 = this.state.labels1.map((props, index) => {
            return props.Total2018
        })
        var color1 = this.state.labels1.map((props, index) => {
            if (props.Nombres2018 === 'Practicante Lima') {
                return 'rgba(249, 17, 28, 0.6)'
            } else if (props.Nombres2018 === 'Orlando Gonzales') {
                return 'rgba(249, 130, 17, 0.6)'
            } else if (props.Nombres2018 === 'Juan Carlos Enriquez Elias') {
                return 'rgba(4, 94, 251, 0.6)'
            } else if (props.Nombres2018 === 'Martin Galvez') {
                return 'rgba(9, 164, 23, 0.6)'
            } else if (props.Nombres2018 === 'Silvia Yacolca') {
                return 'rgba(128, 0, 0, 0.6)'
            } else if (props.Nombres2018 === 'Estefany Centurion Eslava') {
                return 'rgba(25, 77, 51, 0.6)'
            } else if (props.Nombres2018 === 'Bricsy Sobrino Morales') {
                return 'rgba(6, 224, 118, 0.6)'
            } else if (props.Nombres2018 === 'Melissa Rojas Garcia') {
                return 'rgba(24, 75, 220, 0.6)'
            } else if (props.Nombres2018 === 'Jose Patazca Lojas') {
                return 'rgba(83, 106, 187, 0.6)'
            } else if (props.Nombres2018 === 'Naip Janrely Benito') {
                return 'rgba(164, 82, 18, 0.6)'
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
            return props.Nombres2018
        })
        var dataset2 = this.state.labels2.map((props, index) => {
            return props.Total2018
        })
        var color2 = this.state.labels2.map((props, index) => {
            if (props.Nombres2018 === 'Practicante Lima') {
                return 'rgba(249, 17, 28, 0.6)'
            } else if (props.Nombres2018 === 'Orlando Gonzales') {
                return 'rgba(249, 130, 17, 0.6)'
            } else if (props.Nombres2018 === 'Juan Carlos Enriquez Elias') {
                return 'rgba(4, 94, 251, 0.6)'
            } else if (props.Nombres2018 === 'Martin Galvez') {
                return 'rgba(9, 164, 23, 0.6)'
            } else if (props.Nombres2018 === 'Silvia Yacolca') {
                return 'rgba(128, 0, 0, 0.6)'
            } else if (props.Nombres2018 === 'Estefany Centurion Eslava') {
                return 'rgba(25, 77, 51, 0.6)'
            } else if (props.Nombres === 'Bricsy Sobrino Morales') {
                return 'rgba(6, 224, 118, 0.6)'
            } else if (props.Nombres2018 === 'Melissa Rojas Garcia') {
                return 'rgba(24, 75, 220, 0.6)'
            } else if (props.Nombres2018 === 'Jose Patazca Lojas') {
                return 'rgba(83, 106, 187, 0.6)'
            } else if (props.Nombres2018 === 'Naip Janrely Benito') {
                return 'rgba(164, 82, 18, 0.6)'
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
            return props.Nombres2018
        })
        var dataset3 = this.state.labels3.map((props, index) => {
            return props.Total2018
        })
        var color3 = this.state.labels3.map((props, index) => {
            if (props.Nombres2018 === 'Practicante Lima') {
                return 'rgba(249, 17, 28, 0.6)'
            } else if (props.Nombres2018 === 'Orlando Gonzales') {
                return 'rgba(249, 130, 17, 0.6)'
            } else if (props.Nombres2018 === 'Juan Carlos Enriquez Elias') {
                return 'rgba(4, 94, 251, 0.6)'
            } else if (props.Nombres2018 === 'Martin Galvez') {
                return 'rgba(9, 164, 23, 0.6)'
            } else if (props.Nombres2018 === 'Silvia Yacolca') {
                return 'rgba(128, 0, 0, 0.6)'
            } else if (props.Nombres2018 === 'Estefany Centurion Eslava') {
                return 'rgba(25, 77, 51, 0.6)'
            } else if (props.Nombres2018 === 'Bricsy Sobrino Morales') {
                return 'rgba(6, 224, 118, 0.6)'
            } else if (props.Nombres2018 === 'Melissa Rojas Garcia') {
                return 'rgba(24, 75, 220, 0.6)'
            } else if (props.Nombres2018 === 'Jose Patazca Lojas') {
                return 'rgba(83, 106, 187, 0.6)'
            } else if (props.Nombres2018 === 'Naip Janrely Benito') {
                return 'rgba(164, 82, 18, 0.6)'
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
            return props.Nombres2019
        })
        var dataset4 = this.state.labels4.map((props, index) => {
            return props.Total2019
        })
        var color4 = this.state.labels4.map((props, index) => {
            if (props.Nombres2019 === 'Practicante Lima') {
                return 'rgba(249, 17, 28, 0.6)'
            } else if (props.Nombres2019 === 'Orlando Gonzales') {
                return 'rgba(249, 130, 17, 0.6)'
            } else if (props.Nombres2019 === 'Juan Carlos Enriquez Elias') {
                return 'rgba(4, 94, 251, 0.6)'
            } else if (props.Nombres2019 === 'Andrea Guzman Saldaña') {
                return 'rgba(9, 164, 23, 0.6)'
            } else if (props.Nombres2019 === 'Nair Rojas') {
                return 'rgba(128, 0, 0, 0.6)'
            } else if (props.Nombres2019 === 'Estefany Centurion Eslava') {
                return 'rgba(25, 77, 51, 0.6)'
            } else if (props.Nombres2019 === 'Bricsy Sobrino Morales') {
                return 'rgba(6, 224, 118, 0.6)'
            } else if (props.Nombres2019 === 'Melissa Rojas Garcia') {
                return 'rgba(24, 75, 220, 0.6)'
            } else if (props.Nombres2019 === 'Jose Patazca Lojas') {
                return 'rgba(83, 106, 187, 0.6)'
            } else if (props.Nombres2019 === 'Herleny Loloy Niquin') {
                return 'rgba(164, 82, 18, 0.6)'
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
            return props.Nombres2019
        })
        var dataset5 = this.state.labels5.map((props, index) => {
            return props.Total2019
        })
        var color5 = this.state.labels5.map((props, index) => {
            if (props.Nombres2019 === 'Practicante Lima') {
                return 'rgba(249, 17, 28, 0.6)'
            } else if (props.Nombres2019 === 'Orlando Gonzales') {
                return 'rgba(249, 130, 17, 0.6)'
            } else if (props.Nombres2019 === 'Juan Carlos Enriquez Elias') {
                return 'rgba(4, 94, 251, 0.6)'
            } else if (props.Nombres2019 === 'Gianella Hilario') {
                return 'rgba(9, 164, 23, 0.6)'
            } else if (props.Nombres2019 === 'Silvia Yacolca') {
                return 'rgba(128, 0, 0, 0.6)'
            } else if (props.Nombres2019 === 'Estefany Centurion Eslava') {
                return 'rgba(25, 77, 51, 0.6)'
            } else if (props.Nombres2019 === 'Bricsy Sobrino Morales') {
                return 'rgba(6, 224, 118, 0.6)'
            } else if (props.Nombres2019 === 'Melissa Rojas Garcia') {
                return 'rgba(24, 75, 220, 0.6)'
            } else if (props.Nombres2019 === 'Jose Patazca Lojas') {
                return 'rgba(83, 106, 187, 0.6)'
            } else if (props.Nombres2019 === 'Naip Janrely Benito') {
                return 'rgba(164, 82, 18, 0.6)'
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
            return props.Nombres2019
        })
        var dataset6 = this.state.labels6.map((props, index) => {
            return props.Total2019
        })
        var color6 = this.state.labels6.map((props, index) => {
            if (props.Nombres2019 === 'Practicante Lima') {
                return 'rgba(249, 17, 28, 0.6)'
            } else if (props.Nombres2019 === 'Orlando Gonzales') {
                return 'rgba(249, 130, 17, 0.6)'
            } else if (props.Nombres2019 === 'Juan Carlos Enriquez Elias') {
                return 'rgba(4, 94, 251, 0.6)'
            } else if (props.Nombres2019 === 'Martin Galvez') {
                return 'rgba(9, 164, 23, 0.6)'
            } else if (props.Nombres2019 === 'Silvia Yacolca') {
                return 'rgba(128, 0, 0, 0.6)'
            } else if (props.Nombres2019 === 'Estefany Centurion Eslava') {
                return 'rgba(25, 77, 51, 0.6)'
            } else if (props.Nombres2019 === 'Herleny Loloy Niquin') {
                return 'rgba(6, 224, 118, 0.6)'
            } else if (props.Nombres2019 === 'Melissa Rojas Garcia') {
                return 'rgba(24, 75, 220, 0.6)'
            } else if (props.Nombres2019 === 'Jose Patazca Lojas') {
                return 'rgba(83, 106, 187, 0.6)'
            } else if (props.Nombres2019 === 'Naip Janrely Benito') {
                return 'rgba(164, 82, 18, 0.6)'
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
            <div key={1} className="chart">
                <h1 className="sombras">VALORES DE TOTALES DE ASIGNADOS POR USUARIOS</h1>
                <div className="wrapper">
                    <div>
                        <React.Fragment>
                            <h2 className="parrafo">DATOS GENERALES DE LAS PERSONAS DEL AÑO 2019 MARZO</h2>
                            <table className="table table-dark mt-5">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Trabajadores</th>
                                        <th scope="col">Cantidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.labels6.map((item, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.Nombres2019} </td>
                                            <td> {item.Total2019}</td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </React.Fragment>
                    </div>
                    <div className="mb-4" style={CardStyle}>
                        <Bar data={data6}
                            width={550}
                            height={800}
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
                    <div>
                        <React.Fragment>
                            <h2 className="parrafo mt-10">DATOS GENERALES DE LAS PERSONAS AÑO 2019 MES FEBRERO</h2>
                            <table className="table table-dark mt-5">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Trabajadores</th>
                                        <th scope="col">Cantidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.labels5.map((item, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.Nombres2019} </td>
                                            <td> {item.Total2019}</td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </React.Fragment>
                    </div>
                    <div className="mb-4" style={CardStyle}>
                        <Bar data={data5}
                            width={550}
                            height={800}
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
                    <div>
                        <React.Fragment>
                            <h2 className="parrafo">DATOS GENERALES DE LAS PERSONAS DEL AÑO 2019 ENERO</h2>
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Trabajadores</th>
                                        <th scope="col">Cantidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.labels4.map((item, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.Nombres2019} </td>
                                            <td> {item.Total2019}</td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </React.Fragment>
                    </div>
                    <div className="mb-4" style={CardStyle}>
                        <Bar data={data4}
                            width={550}
                            height={800}
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
                    <div>
                        <React.Fragment>
                            <h2 className="parrafo">DATOS GENERALES DE LAS PERSONAS DEL AÑO 2018 DICIEMBRE</h2>
                            <table className="table table-dark mt-5">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Trabajadores</th>
                                        <th scope="col">Cantidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.labels3.map((item, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.Nombres2018} </td>
                                            <td> {item.Total2018}</td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </React.Fragment>
                    </div>
                    <div className="mb-4" style={CardStyle}>
                        <Bar data={data3}
                            width={550}
                            height={800}
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
                    <div>
                    <React.Fragment>
                            <h2 className="parrafo">DATOS GENERALES DE LAS PERSONAS DEL AÑO 2018 NOVIEMBRE</h2>
                            <table className="table table-dark mt-5">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Trabajadores</th>
                                        <th scope="col">Cantidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.labels2.map((item, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.Nombres2018} </td>
                                            <td> {item.Total2018}</td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </React.Fragment>
                    </div>
                    <div className="mb-4" style={CardStyle}>
                        <Bar data={data2}
                            width={550}
                            height={800}
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
                    <div>
                    <React.Fragment>
                            <h2 className="parrafo">DATOS GENERALES DE LAS PERSONAS DEL AÑO 2018 OCTUBRE</h2>
                            <table className="table table-dark mt-5">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Trabajadores</th>
                                        <th scope="col">Cantidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.labels1.map((item, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.Nombres2018} </td>
                                            <td> {item.Total2018}</td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </React.Fragment>
                    </div>
                    <div className="mb-4" style={CardStyle}>
                        <Bar data={data1}
                            width={550}
                            height={800}
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
                    <div>
                    <React.Fragment>
                            <h2 className="parrafo">DATOS GENERALES DE LAS PERSONAS DEL AÑO 2018 SEPTIEMBRE</h2>
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
                                            <td>{item.Nombres2018} </td>
                                            <td> {item.Total2018}</td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </React.Fragment>
                    </div>
                    <div className="mb-4" style={CardStyle}>
                        <Bar data={data}
                            width={550}
                            height={800}
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

        )
    }
}

export default Usuarios;
