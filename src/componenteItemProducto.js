import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import   Producto from './modelos/Producto.js';
import { Row, Col, Button, Thumbnail } from 'react-bootstrap';
import ComponenteDetalleProductos from './componenteDetalleProductos.js';
import ComponenteCarroCompras from './componenteCarroCompras.js';
import ComponentServices from './servicios/componentServices.js';


class ComponenteItemProducto extends Component {
  constructor(props) {
    super(props);

    var servicios =  ComponentServices.getInstance();

    this.state = {
      cantidadProducto:0,
      item:[],
      productosCarrito:[],
      carroCompras:servicios
    }

  }

//Funcion para manejar el evento del input numerico

handleChangeCantidad(event){
  this.setState({
    cantidadProducto:parseInt(event.target.value, 10)
  });
}

//Funcion para mostrar el producto en detalleProducto
 handleChange(event){
    var idProducto= event.target.id

      var detalleItem =this.props.prod
      var items=[]

        for(let detalle of detalleItem){

          if(detalle.id == idProducto){

            var item =new Producto();
                item.id=detalle.id;
                item.nombre=detalle.nombre;
                item.img=detalle.img;
                item.precio=detalle.precio;
                item.stock=detalle.stock;

                items.push(item)
          }

        }
        this.setState({
          productosCarrito:items
        })

        if(event.target.title === 'vermas'){

            ReactDOM.render(<ComponenteDetalleProductos producto={items}/>,
              document.getElementById('contenido')
            )
        }else{

            if(this.state.cantidadProducto === 0){

              alert('Debe Seleccionar la Cantidad')

            }else{

                this.state.carroCompras.addCarro( items, this.state.cantidadProducto)
            }
        }
}

  render() {
          
      var productosCatalogo=[];

      for(let products of this.props.prod){

        var rutaimg = require('./'+products.img)

        productosCatalogo.push(<Col lg={3} key={products.id}>

           <Thumbnail>
              <img src={rutaimg} alt="" height={150} width={'100%'}/>
              <h3>{products.nombre}</h3>
                <p>Precio:$ {products.precio}</p>
                  <p>Stock: {products.stock} </p>
                  <p>
                      <Button bsStyle="primary" title="vermas" id={products.id} onClick={this.handleChange.bind(this)}>
                         Ver Mas
                      </Button>  &nbsp;&nbsp;

                      <Button bsStyle="warning" title="addcarrito" id={products.id} onClick={this.handleChange.bind(this)}>
                        Añadir
                      </Button>

                      <input
                          type="number"
                          max='10'
                          min='0'
                          value={this.state.cantidadProducto}
                          onChange={this.handleChangeCantidad.bind(this)}
                       />
                   </p>
            </Thumbnail>
          </Col>)

      }
    return(
          <Row>
            {productosCatalogo}
          </Row>

    )
  }
}
export default ComponenteItemProducto;
