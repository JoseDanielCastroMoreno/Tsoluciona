import React, { Component } from 'react';
import { Bar, Line, Pie, Polar } from 'react-chartjs-2';

const CardStyle = {
    width: '',
    backgroundColor: "4e4e4e",
}
class Genero extends Component {
    constructor() {
        super();

        this.state = {
            labels: [],
            labels1: [],
            labels2: []
        }
        this.MostrarGenero();
        this.MostrarMasculino();
        this.MostrarFemenino();
        this.asignarDatos();
    }
    asignarDatos() {

        //this.setState(charData.props.data = )


    }
    MostrarMasculino() {
        setInterval(async () => {
            const res = await fetch("/api/masculino");
            const data = await res.json();
            //const formatData = this.formatData(data);
            this.setState({ labels2: data })
        }, 1000)
    }

    MostrarFemenino() {
        setInterval(async () => {
            const res = await fetch("/api/femenino");
            const data = await res.json();
            //const formatData = this.formatData(data);
            this.setState({ labels1: data })
        }, 1000)
    }


    MostrarGenero() {
        setInterval(async () => {
            const res = await fetch("/api/genero");
            const data = await res.json();
            //const formatData = this.formatData(data);
            this.setState({ labels: data })
        }, 1000)
    }

    render() {
        var label = this.state.labels.map((props, index) => {
            return props.Genero
        })
        var dataset = this.state.labels.map((props, index) => {
            return props.Total
        })
        var color = this.state.labels.map((props, index) => {
            if (props.Genero === 'MASCULINO') {
                return 'rgba(249, 17, 28, 0.6)'
            } else if (props.Genero === 'FEMENINO') {
                return 'rgba(249, 130, 17, 0.6)'
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
            return props.Cliente
        })
        var dataset1 = this.state.labels1.map((props, index) => {
            return props.Total
        })
        var color1 = this.state.labels1.map((props, index) => {
            if (props.Cliente == 'PRIMAX') {
                return 'rgba(249, 17, 28, 0.6)'
            } else if (props.Cliente === 'PECSA') {
                return 'rgba(249, 130, 17, 0.6)'
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
            return props.Cliente
        })

        var dataset2 = this.state.labels2.map((props, index) => {
            return props.Total
        })

        var color2 = this.state.labels2.map((props, index) => {
            if (props.Cliente == 'PRIMAX') {
                return 'rgba(249, 17, 28, 0.6)'
            } else if (props.Cliente === 'PECSA') {
                return 'rgba(249, 130, 17, 0.6)'
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


        return (
            
            <div key={1} className="chart">
               
                <div className="wrapper">
                <React.Fragment>                    
                    <h1 className="sombras">VALORES DE PERSONAS ASIGNADOS POR GENERO</h1>
                    <table striped bordered hover size="sm">
                        
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>MASCULINO</th>
                                <th>FEMENINO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.labels.map((item, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.Genero} </td>
                                    <td> {item.Total}</td>
                                </tr>

                            ))
                            }


                        </tbody>
                    </table>
                    </React.Fragment>
                    <div className="mb-4
                    " style={CardStyle}>
                        <Polar data={data}
                            width={900}
                            height={400}
                            options={{
                                title: {
                                    display: true,
                                    text: 'VALORES FILTRADOS POR GENERO TOTAL POR CLIENTES',
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
                        <Polar data={data1}
                            width={400}
                            height={400}
                            options={{
                                title: {
                                    display: true,
                                    text: 'VALORES FILTRADOS POR GENERO FEMENINO',
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

                    <div className="mb-6" style={CardStyle}>
                        <Bar data={data2}
                            width={900}
                            height={400}
                            options={{
                                title: {
                                    display: true,
                                    text: 'VALORES FILTRADOS POR GENERO MASCULINO',
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

export default Genero;
