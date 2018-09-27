import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ComponenteDetalleProductos from './componenteDetalleProductos.js';
import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';
import './componenteProductos.css';

class ComponenteProductos extends Component {

  constructor() {
    super();

      this.state = {
          cantidadProducto:0
      }

    this.handleChangeFiltro= this.handleChangeFiltro.bind(this);
    this.handleChangeCantidad= this.handleChangeCantidad.bind(this);
    this.detalleProducto= this.detalleProducto.bind(this);

  }
//Funcion manejo del evento buscar para el filtro de productos
  handleChangeFiltro(event) {

    console.log("Evento Filtro")

  }
//Funcion manejo evento para asignar la cantidad de producto seleccionado
  handleChangeCantidad(event) {
      console.log("Evento Cantidad")

      this.setState({
        cantidadProducto:parseInt(event.target.value, 10)
      });

  }
//Funcion para mostrar el producto seleccionado en detalle
  detalleProducto() {
    ReactDOM.render(
      <ComponenteDetalleProductos/>,
        document.getElementById('contenido')
    );

  }

  render(){

    return(
            <Grid>
                <Row className="buscador">
                    <Col lg={9} md={6}>
                      <h2>Catálogo de Productos</h2>
                    </Col>

                    <Col lg={3} md={6}>
                      	<p>¿Que estás Buscando? </p>

                        <input
                            type="text"
                            placeholder=" Buscar Producto"
                            onChange={this.handleChangeFiltro}
                         />
                    </Col>
                </Row>

                <Row>
                  <Col lg={3} md={4}>
                      <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                          <h3>Nombre</h3>
                            <p>Precio:$</p>
                              <p>Stock: </p>
                              <p>
                                  <Button bsStyle="primary" onClick={this.detalleProducto}>
                                     Ver Mas
                                  </Button>  &nbsp;&nbsp;

                                  <Button bsStyle="warning">Añadir</Button>
                                  <input
                                      type="number"
                                      max='10'
                                      min='0'
                                      value={this.state.cantidadProducto}
                                      onChange={this.handleChangeCantidad}
                                   />
                               </p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
      );
  }

}

export default ComponenteProductos
