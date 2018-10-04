import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import {Row, Col, Grid, Button, Thumbnail,ListGroup,ListGroupItem } from 'react-bootstrap';
import ComponentServices from './servicios/componentServices';
import ComponenteCatalogo from './componenteCatalogo';
import './componenteCarroCompras.css';

class ComponenteCarroCompras extends Component {
  constructor(props) {
    super(props);

    var servicio = ComponentServices.getInstance();

    this.state={
       productosCarroCompra: servicio
    }
  }
//Funcion para cancelar y salir del carrito de compras
salir() {
  this.state.productosCarroCompra.limpiarCarroCompras();
  ReactDOM.render(<ComponenteCatalogo/>,
    document.getElementById('contenido')
  )
}

//Funcion para gegistrar el pago de los productos
pagar(){
  this.state.productosCarroCompra.pagarCompra(this.props.items);
  
}

  render(){
     var total=0;
     var productosCarro=[];
        for(let proCar of this.props.items){

          var rutaimg=require('./'+ proCar.img)
          total+=proCar.subtotal;

          productosCarro.push(

              <Col lg={8} key={proCar.id} className="cuadro">
                <Col lg={4}>
                  <img  src={rutaimg}  width="100%" height="100" alt="242x200"/>
                  <p>Subtotal:${proCar.subtotal}</p>
                </Col >
                <Col lg={4}>
                  <h2>{proCar.nombre}</h2>
                  <p>Cantidad:{proCar.cant} </p>
                </Col >
              </Col>
          )
        }

    return(
      <Grid>
          <Row>
            <Col lg={12} md={4} className="divisor">
              <h2>Carro de Compras</h2>
            </Col>
            <Row>
              <Col lg={8}>
                {productosCarro}
              </Col>
              <Col lg={3} className="total">
                &nbsp;
                <h2>Total: $ {total}</h2>
                &nbsp;&nbsp;
                <p>
                  <Button bsStyle="primary" onClick={this.pagar.bind(this)}>
                    Pagar
                  </Button>

                  &nbsp;&nbsp;

                  <Button bsStyle="warning" onClick={this.salir.bind(this)}>
                    Cancelar
                  </Button>
                </p>
              </Col>
            </Row>
          </Row>
      </Grid>

    )
  }
}
export default ComponenteCarroCompras;
