import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ComponenteLogin from './componenteLogin.js';
import ComponenteCarroCompras from './componenteCarroCompras.js';
import  './componenteNavegacion.css';
import carro from './img/cart.png';
import salir from './img/logout.png';
import { Navbar, Nav, NavItem }  from 'react-bootstrap';

class ComponenteNavegacion extends Component {

  constructor() {
    super();

      this.carroCompras = this.carroCompras.bind(this);
      this.salir = this.salir.bind(this);
  }

   carroCompras(){
      ReactDOM.render(
        <ComponenteCarroCompras/>,
        document.getElementById('contenido')
      )
   }

   salir(){
     ReactDOM.render(<ComponenteLogin/>,
       document.getElementById('root')
     );
   }


  render(){

    return(

       <Navbar className="nav">
               <Navbar.Header>
                    <Navbar.Brand>
                      <span className="titulo">Mi Tienda</span>
                    </Navbar.Brand>
                </Navbar.Header>

                <Nav pullRight >
                    <NavItem onClick={this.carroCompras}>
                      <img  className="items" src={carro}  alt="" height="30"/>
                    </NavItem>

                    <NavItem onClick={this.salir} >
                      <img  className="login" src={salir}  alt="" height="30"/>
                    </NavItem>
                </Nav>

       </Navbar>

    )
  }
}
export default ComponenteNavegacion;
