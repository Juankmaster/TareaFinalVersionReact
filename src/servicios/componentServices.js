import React, { Component } from 'react';
import ReactDOM from  'react-dom';
import ProductoCarro from  '../modelos/productoCarro.js';
import ComponenteProductos from  '../componenteProductos.js';
import Producto from  '../modelos/Producto.js';


export default class ComponentServices {

  static instance = null;

  productosCarroCompras=[];

  componenteNavegacion;

  static getInstance() {

      if (this.instance == null) {
          this.instance = new ComponentServices();
      }
          return this.instance;
  }
//Funcion para agregar los productos al carro de compras con sus cantidades
addCarro(items, cantidad) {

    for(let item of items ){
       var producto = {
          id:item.id,
          nombre:item.nombre,
          img:item.img,
          precio:item.precio,
          stock:item.stock,
          cant:cantidad,
          subtotal:item.precio * cantidad
        }
        this.productosCarroCompras.push(producto)
        this.componenteNavegacion.forceUpdate();
    }
}
//Funcion para limpiar el carrito de compras
limpiarCarroCompras(){
  this.productosCarroCompras=[];
  this.componenteNavegacion.forceUpdate();
}

//Funcion para la actualizacion y pago del productos
pagarCompra(){

  var contador=parseInt(this.productosCarroCompras.length)
  for(let item of this.productosCarroCompras) {

      var stock=item.stock-item.cant
      let productos=new Producto();
        productos.id=item.id,
        productos.nombre=item.nombre,
        productos.img=item.img,
        productos.precio=item.precio,
        productos.stock=stock

        var datos = JSON.stringify(productos);

        var url="https://tareafinal-8729a.firebaseio.com/productos/"+ productos.id +'.json';

             fetch( url, {
               method:'put',
               body:datos
             }).then(response => response.json())
                  .then(response => {
                    console.log(response)
                    console.log(contador)
                    if(contador === 0){
                        this.limpiarCarroCompras();
                        ReactDOM.render(<ComponenteProductos />,
                          document.getElementById('contenido')
                        )
                    }
                  })
                  .catch(error => {

                      console.error(error);

                  })
                      contador--;
          }



      }
 }
