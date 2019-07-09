import React, { Component } from 'react'
const Root = "http://" + document.location.hostname + "/mysecondapp/src/";

class Detalles extends Component {
    // constructor() {
    //     super();
    //     this.state = ({
    //         db: []
    //     });
    //     this.mostrarBasureroDetalle();
    // }
    // mostrarBasureroDetalle() {
    //     setInterval(async () => {
    //         await fetch(Root + "api/index.php")
    //             .then((response) => response.json())
    //             .then((responseJson) => {
    //                 this.setState({
    //                     db: responseJson
    //                 });
    //                 //console.log(this.state.db);
    //             }
    //                 , 1000)
    //     })
    // }
    render() {
        return (
            <div className="row mt-3">
                <div className="col ">
                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                        <div className="card text-dark card-body">
                            {/* {this.state.db.map((props, index) => {
                                return (
                                    <div>
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">First</th>
                                                    <th scope="col">Last</th>
                                                    <th scope="col">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            })
                            } */}
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}
export default Detalles;