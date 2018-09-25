import React, { Component } from 'react';
import './componenteLogin.css'

class ComponenteLogin extends Component {

  constructor(props){
    super(props);
//Estado del componente
     this.state = {
       usuario:'',
       clave: '',
       validarCampoUsuario: true,
       validarCampoClave: true,

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

     if(this.state.usuario === ''){
        this.setState({validarCampoUsuario:false})
     }else{
        this.setState({validarCampoUsuario:true})
     };

     if(this.state.clave === ''){
        this.setState({validarCampoClave:false})
     }else{
        this.setState({validarCampoClave:true})
     }

 }


  render() {

        var { Grid, Row, Col, FormGroup, FormControl,  Alert, Button } = require('react-bootstrap');

    return(

      <div>
        <Grid>

          <Row className=" justify-content-center">

            <Col lg={6} xsOffset={3}>

              <h1 className="text-center white-text ">Inicio de Sesión</h1>

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
