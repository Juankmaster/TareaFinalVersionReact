import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './componenteCatalogo.css';
import { Jumbotron , Row, Grid } from 'react-bootstrap';
import  ComponenteNavegacion from './componenteNavegacion.js';
import  ComponenteProductos from './componenteProductos.js';


class ComponenteCatalogo extends Component {

  constructor(props) {
      super(props)

      this.state = {

      }
  }


  componentDidMount() {
      ReactDOM.render(
          <ComponenteProductos/>,
          document.getElementById('contenido')
      )
   }

  render(){

    return(
            <div className="fondo">
              <Grid>
                <Row>
                  <ComponenteNavegacion/>
                </Row>

                <Row>
                  <Jumbotron>
                    <div id="contenido"/>
                  </Jumbotron>
                </Row>

              </Grid>
             </div>
    )
  }

}
export default ComponenteCatalogo;
