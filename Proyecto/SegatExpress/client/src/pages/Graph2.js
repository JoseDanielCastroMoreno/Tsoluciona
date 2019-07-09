import React, { Component } from 'react';
import { Bar, Line, Pie,Polar } from 'react-chartjs-2';
import Logo from '../imagenes/logo.png';
import { Helmet } from 'react-helmet';
//<img src={Logo} />
import './Graph.css';
const CardStyle = {
    width: '25rem',
    //backgroundColor: "4e4e4e",
}
class Graph2 extends Component {
    constructor() {
        super();

        this.state = {
            labels: []
            

        }
        this.MostrarPrimax();
        this.asignarDatos();
    }
    asignarDatos() {

        //this.setState(charData.props.data = )
    }
    
    MostrarPrimax() {
        setInterval(async () => {
            const res = await fetch("/api/primax");
            const data = await res.json();
            //const formatData = this.formatData(data);
            this.setState({ labels: data })
        }, 1000)
    }
       
    render() {
        var label = this.state.labels.map((props, index) => {
            return  props.Cliente
        })
        var dataset = this.state.labels.map((props, index) => {
            return  props.Total
        })
        var color = this.state.labels.map((props ,index) =>{
            if (props.Cliente === 'PECSA'){
                return 'rgba(110, 191, 255, 0.6)'
            }else if(props.Cliente === 'PRIMAX'){
                return 'rgba(4, 94, 251, 0.6)'  
            }else{
                return 'rgba(251, 178, 75, 0.6)'
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
        return (
            <div key={1} className="chart">
                 <Helmet>
                    <style>{'body { background-color: grey; }'}</style>
                </Helmet>
                
            <p className ="parrafoInfo2 mt-10">NUESTROS CLIENTES SON:{label[0]} Y {label[1]}</p>
            <div className="wrapper">
        
              
                
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
                

         </div>
                

                <div style={CardStyle}>
                    <Polar data={data}
                    width={800}
                    height={800}
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
                

            </div>
            
            
        )
    }
}

export default Graph2;
