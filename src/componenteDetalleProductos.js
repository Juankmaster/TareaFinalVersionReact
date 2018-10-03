import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ComponenteCatalogo from './componenteCatalogo.js';
import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';

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

      var rutaImg=require("./"+this.props.producto[0]['img'])

    return(

        <Grid>
            <Row>
              <Col lg={12} >
                <h2>{this.props.producto[0]['nombre']}</h2>
              </Col>
            </Row>

            <Row>
              <Col lg={8}>
                <hr/>
                  <Thumbnail >
                    <img src={rutaImg} alt="" width="100%" height="350"/>
                  </Thumbnail>
                  <p>
                    &nbsp;
                    <Button bsStyle="danger" onClick={this.regresar}>Regresar</Button>
                  </p>
              </Col>

              <Col lg={4}>
                   <p>&nbsp;</p>
                   <p>&nbsp;</p>
                   <p>&nbsp;</p>
                   <p>&nbsp;</p>
                   <p><b>Precio:$</b> {this.props.producto[0]['precio']}</p>
                   <p><b>Unidades Disponibles:</b> {this.props.producto[0]['stock']}</p>
              </Col>
            </Row>
        </Grid>
    )
  }
}
export default ComponenteDetalleProductos
