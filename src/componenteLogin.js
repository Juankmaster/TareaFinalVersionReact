import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ComponenteCatalogo  from './componenteCatalogo.js';
import { Grid, Row, Col, FormGroup, FormControl,  Alert, Button } from 'react-bootstrap';
import './componenteLogin.css'

class ComponenteLogin extends Component {

  constructor(props) {
    super(props);
//Estado del componente
     this.state = {
       usuario:'',
       clave: '',
       validarCampoUsuario: true,
       validarCampoClave: true,
       loginValido:true

     };
//Configuracion del scope de las funciones
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

//Funcion para obtener el valor de los campos de entrada

  handleChange(event) {

    if (event.target.id === 'usuario') {
        this.setState({usuario:event.target.value});

   } else if (event.target.id === 'clave') {
        this.setState({clave: event.target.value});
   }
 }

//Funcion para validacion de formulario
  handleSubmit(event) {

     event.preventDefault();
     var validarFormulario = true

     if(this.state.usuario === ''){
        this.setState({validarCampoUsuario:false})
        validarFormulario=false;
     }else{
        this.setState({validarCampoUsuario:true})
     };

     if(this.state.clave === ''){
        this.setState({validarCampoClave:false})
        validarFormulario=false;
     }else{
        this.setState({validarCampoClave:true})
     }
//validacion de usuarios en la base de datos
     if(validarFormulario){

       fetch("https://tareafinal-8729a.firebaseio.com/usuarios.json")
          .then((response) => response.json())
          .then((response) => {

            for(let user of response){

              if(user.email == this.state.usuario && user.clave == this.state.clave) {
                ReactDOM.render(
                  <ComponenteCatalogo/>,
                  document.getElementById('root')
                );

              }else{
                this.setState({
                    loginValido:false,
                    usuario:'',
                    clave:''
                })
              }
            }
          })
          .catch(error =>{
              console.error(error);
          })
     }

 }

  render() {

    return(

      <div>
        <Grid>

          <Row className="centrado">

            <Col lg={6} xsOffset={3}>

              <h1 className=" white-text ">Inicio de Sesión</h1>

              <form className="form" onSubmit={this.handleSubmit}>

              <FormGroup>
                  <FormControl
                    type="email"
                    value={this.state.usuario}
                    placeholder="Usuario"
                    id='usuario'
                    onChange={this.handleChange}
                   />
                   {!this.state.validarCampoUsuario &&
                      <Alert bsStyle="danger">Campo Obligatorio</Alert>}
                </FormGroup>

                <FormGroup>
                    <FormControl
                      type="password"
                      value={this.state.password}
                      placeholder="Clave"
                      id="clave"

                      onChange={this.handleChange}
                    />
                    {!this.state.validarCampoClave &&
                      <Alert bsStyle="danger">Campo Obligatorio</Alert>}
                  </FormGroup>

                  <FormGroup>
                  {!this.state.loginValido &&
                    <Alert bsStyle="danger">Usuario y/o Clave no validos</Alert>}
                    <Button
                      bsStyle="danger"
                      type="submit"
                      bsSize="large"
                      >
                     Login
                    </Button>
                  </FormGroup>

              </form>
            </Col>
          </Row>

        </Grid>
      </div>
    )
  }

}
export default ComponenteLogin
