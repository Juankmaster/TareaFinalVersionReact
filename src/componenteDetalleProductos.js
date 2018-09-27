import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ComponenteCatalogo from './componenteCatalogo.js';
import { Grid, Row, Col, Button, Thumbnail,Jumbotron } from 'react-bootstrap';

class ComponenteDetalleProductos extends Component {
  constructor() {
    super()

      this.regresar = this.regresar.bind(this);

  }

//Funcion para volver al menu principal
regresar(){
    ReactDOM.render(
      <ComponenteCatalogo/>,
      document.getElementById('contenido')
    )

}

  render(){
    return(

        <Grid>
            <Row>
              <Col lg={8} md={4}>
                  <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                    <p>
                      &nbsp;
                      <Button bsStyle="default" onClick={this.regresar}>Regresar</Button>
                    </p>
                  </Thumbnail>
              </Col>

              <Col lg={4} md={4}>
                   <h3>Nombre</h3>
                   <p>Precio:$</p>
                   <p>Stock: </p>
              </Col>
            </Row>
        </Grid>
    )
  }
}
export default ComponenteDetalleProductos
