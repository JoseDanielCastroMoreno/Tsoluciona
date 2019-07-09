import React, {Component} from 'react';
import { Bar, Line, Pie, Polar, Doughnut } from 'react-chartjs-2';
import './Graph.css';
import fondo from '../imagenes/fondo.jpg';;

const CardStyle ={
    width: '25rem',
}


class Spp extends Component {
    constructor(){
        super();

        this.state = {
            labels: [],
            labels1: []
        }

        this.mostrarspp2018();
        this.mostrarspp2019();
        this.asignarDatos();
    }

asignarDatos(){

}

mostrarspp2019(){
        setInterval(async () => {
        const res = await fetch("/api/spp2");
        const data = await res.json();
        //const formatData = this.formatData(data);
        this.setState({ labels1: data })
    }, 1000)
}


mostrarspp2018(){
    setInterval(async () => {
        const res = await fetch("/api/spp");
        const data = await res.json();
        //const formatData = this.formatData(data);
        this.setState({ labels: data })
    }, 1000)
}

render() {
    var label = this.state.labels.map((props, index)=>{
        return props.Seguro
    })   
    var dataset = this.state.labels.map((props, index)=>{
        return props.Totales
    })
    var color = this.state.labels.map((props, index) =>{
        if(props.Seguro ==='AFP INTEGRA'){
            return 'rgba(249, 17, 28, 0.6)'
        }else if(props.Seguro ==='AFP PROFUTURO'){
            return 'rgba(9, 164, 23, 0.6)'
        }else if(props.Seguro ==='AFP PRIMA'){
            return 'rgba(24, 75, 220, 0.6)'
        }else if(props.Seguro ==='AFP HABITAT'){
            return 'rgba(164, 82, 18, 0.6)'
        }else{
            return 'rgba(11, 30, 29, 0.6)'
        }
    })

    var data ={
        labels:label,
        datasets: [{
            label: label,
            data: dataset,
            backgroundColor: color
        }]
    }

    var label1 = this.state.labels1.map((props, index)=>{
        return props.Seguro1
    })   
    var dataset1 = this.state.labels1.map((props, index)=>{
        return props.Totales1
    })
    var color1 = this.state.labels1.map((props, index) =>{
        if(props.Seguro1 ==='AFP INTEGRA'){
            return 'rgba(249, 17, 28, 0.6)'
        }else if(props.Seguro1 ==='AFP PROFUTURO'){
            return 'rgba(9, 164, 23, 0.6)'
        }else if(props.Seguro1 ==='AFP PRIMA'){
            return 'rgba(24, 75, 220, 0.6)'
        }else if(props.Seguro1 ==='AFP HABITAT'){
            return 'rgba(164, 82, 18, 0.6)'
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
        <h1 className="sombras">SITUACIÓN DEL AÑO 2018
         SOBRE EL SISTEMA DE PENSIONES DE PERSONAS POSTULANTES: {label[0]}, {label[1]}, {label[2]}, {label[3]}
        </h1>
        {//<div className="wrapper">}
        }
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
                                <th scope="row">{index+1}</th>
                                <td>{item.Seguro} </td>
                                <td> {item.Totales}</td>
                            </tr>

                        ))
                        }
                    </tbody>
                </table>

                <div className="wrapper">
        <div className=" mb-4" style={CardStyle}>
            <Pie data={data}
                width={800}
                height={800}
                options={{
                    title: {
                        display: true,
                        text: 'ESTADO DEL AÑO 2018',
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
                    <div className=" mb-4" style={CardStyle}>
            <Bar data={data}
                width={800}
                height={800}
                options={{
                    title: {
                        display: true,
                        text: 'ESTADO DEL AÑO 2018',
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
          
     </div>
     <h3>-----------------------------------------------------------------------------------------------------------------------</h3>
     <h1 className="sombras">SITUACIÓN ACTUAL SOBRE EL SISTEMA DE PENSIONES DE PERSONAS POSTULANTES: {label[0]}, {label[1]}, {label[2]}, {label[3]}</h1>

     <table className="table table-dark mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Trabajadores</th>
                            <th scope="col">Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.labels1.map((item1, index) => (
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{item1.Seguro1} </td>
                                <td> {item1.Totales1}</td>
                            </tr>

                        ))
                        }
                    </tbody>
                </table>
                <div className="wrapper">
            <div style={CardStyle}>
                <Bar data={data1}
                width={800}
                height={800}
                options={{
                    title: {
                        display: true,
                        text: 'ESTADO DEL AÑO 2019',
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
                width={800}
                height={800}
                options={{
                    title: {
                        display: true,
                        text: 'ESTADO DEL AÑO 2019',
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


export default Spp;
