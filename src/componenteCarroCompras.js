import React, { Component } from 'react';
import {Row, Col, Grid, Button, Thumbnail,ListGroup,ListGroupItem } from 'react-bootstrap';
import ComponentServices from './servicios/componentServices';
import './componenteCarroCompras.css';

class ComponenteCarroCompras extends Component {
  constructor(props) {
    super(props);

    var servicio = new ComponentServices();

    this.state={
       productosCarroCompra: servicio
    }

  }

  render(){

    console.log(this.props.items)


    return(
      <Grid>
          <Row>

            <Col lg={12} md={4} className="divisor">
              <h2>{this.props.titulo}</h2>
            </Col>


            <Col lg={8} md={4}>
              < ListGroup >
                  < ListGroupItem >
                  <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                      <h3>Nombre</h3>
                      <p>Cantidad: </p>
                      <p>Subtotal:$</p>
                  </Thumbnail>
                  </ ListGroupItem >
              </ ListGroup >
            </Col>

            <Col lg={4} md={4}>
                 <h2>Total: $ </h2>
                  &nbsp;&nbsp;
                 <p>
                   <Button bsStyle="primary" onClick={this.detalleProducto}>
                      Pagar
                   </Button>

                     &nbsp;&nbsp;

                   <Button bsStyle="warning">
                      Cancelar
                   </Button>
                 </p>
            </Col>
          </Row>
      </Grid>

    )
  }
}
export default ComponenteCarroCompras;
