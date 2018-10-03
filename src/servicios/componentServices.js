import React, { Component } from 'react';
import ProductoCarro from  '../modelos/productoCarro.js';


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

addCarro(items, cantidad) {

    for(let item of items ){
       var producto = {
          nombre:item.nombre,
          cant:cantidad,
          subtotal:item.precio * cantidad
        }

          const productosCarroCompras = new ProductoCarro(producto)
                this.productosCarroCompras.push(productosCarroCompras)
                this.componenteNavegacion.forceUpdate();

    }

}


}
