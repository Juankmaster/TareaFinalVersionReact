import React, { Component } from 'react';
import ComponenteItemProducto from './componenteItemProducto.js';
import { Grid, Row, Col } from 'react-bootstrap';
import './componenteProductos.css';
import   Producto from './modelos/Producto.js';

class ComponenteProductos extends Component {

  constructor(props) {
    super(props);

      this.state = {
          saludo:"hola cabron",
          productos: [],
          productosMostrar:[]

      }

  this.handleChangeFiltro= this.handleChangeFiltro.bind(this);

  }

//Funcion manejo del evento buscar para el filtro de productos
  handleChangeFiltro(event) {

      var textoFiltro = event.target.value

      if (textoFiltro.length > 0) {

        const productosMostrar = this.state.productos.filter(
          product => product.nombre.toLowerCase().indexOf(textoFiltro.toLowerCase()) >=0
        )

         this.setState({productosMostrar:productosMostrar})
          console.log(textoFiltro)
     } else {

         this.setState({productosMostrar:this.state.productos})
     }

  }

//Funcion para llamar la funcion una ves este cargado el componente
  componentDidMount(){

    this.cargarProductos();
  }

//Funcion para cargar los productos en el catalogo
  cargarProductos() {

    fetch('https://tareafinal-8729a.firebaseio.com/productos.json')

        .then(response => response.json())
          .then(responseJson => {


            if (responseJson.error) {

                 alert("Error al Cargar Productos")

            } else {

              const products= [];

               for ( let product of responseJson) {

                var  produc = new Producto();
                produc.id = product.id;
                produc.nombre = product.nombre;
                produc.img = product.img;
                produc.precio = product.precio;
                produc.stock = product.stock;

                products.push(produc);

                }
                this.setState({
                  productos:products,
                  productosMostrar:products
                })
               }
            })
            .catch(error => {

            console.error(error);

    })

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
                   <ComponenteItemProducto prod={this.state.productosMostrar}/>
                </Row>
            </Grid>
      );
  }

}

export default ComponenteProductos
