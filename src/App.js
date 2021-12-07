import './App.css';
import React from 'react';
import { index } from './utils/index'

function App() {

const productos = require('./products.json');
const categoriaProductos = productos.results;

<<<<<<< Updated upstream
console.log(index(categoriaProductos));
=======

/*levantar el api*/

const api_url = 'https://api.fudex.com.ar/api/locales/local/186';

fetch(`${api_url}/producto`)
  .then((response) => response.json())
  .then((producto) => {
    console.log(producto)
  })


/*console.log(miFuncion(categoriaProductos));*/
>>>>>>> Stashed changes



/* //Suma de precios de los productos
let cuantiti = 0
categoriaProductos.forEach(item => { cuantiti = cuantiti + item.price });
console.log(`El precio total de los productos es: ${cuantiti}`);

//mapeo de categorias
var lista = _.map(categoriaProductos, categoriaProductos.name);

//Guardar categorias en un array

function guardarCategorias(data) {
  var categorias = [];
  data.forEach(item => {
    if (!categorias.includes(item.categoriaProducto.name)) {
      categorias.push(item.categoriaProducto.name);
    }
  });
  return categorias;
}
const categoriasOrdenadas = guardarCategorias(lista);

//objeto de categorias
const felipe = {};
categoriasOrdenadas.forEach(item => { felipe[item] = categoriaProductos.filter( item2 => item2.categoriaProducto.name === item)});
console.log(felipe)

//impresion de categorias
const listaRenderisada = categoriasOrdenadas.map((item) => <li key={item} >{ item }</li>);

//Pasaje del array de categorias a un objeto
const objeto = Object.assign({}, categoriasOrdenadas);
console.log(objeto);

//Cuantos porductos de cocina y cuantos de bar??? grab_for


const cocina = lista.filter(item => item.grab_from === "Kitchen");
const bar = lista.filter(item => item.grab_from === "Bar");

console.log(`Hay ${cocina.length} productos de cocina y ${bar.length} de bar`);

//Happy hour => total

const happyHour = lista.map(item => item.happyHour);
let happyHourTotal = 0;
happyHour.forEach(item => {if(item === true){ happyHourTotal = happyHourTotal + 1 }});
console.log(`La cantidad total de productos con Happy Hour es: ${happyHourTotal}`);

//status, cuantos estas activos o no?

const activos = lista.filter(item => item.status === "Active");
console.log(`Hay ${activos.length} productos activos`);

//cuantos productos valen mas o menos de $500
const productosValenMas = lista.filter(item => item.price > 500);
const productosValenMenos = lista.filter(item => item.price < 500);
console.log(`cantidad de productos que valen mas de $500: ${productosValenMas.length}`);
console.log(`cantidad de productos que valen menos de $500: ${productosValenMenos.length}`);

//Cuantos productos tienen al menos un grupo de opciones.
const opciones = lista.map(item => item.gruposOpciones);
let opcionesActivas = 0;
opciones.forEach(item => {
  if (item.length > 0) { 
    opcionesActivas = opcionesActivas + 1;
  }
});
console.log(`Hay ${opcionesActivas} productos con al menos una opcion activa`); */

  return (
    <React.Fragment>
      <h1>Ejercicio JSON, abrir consola</h1>
      Ingrese una categoria   
    <input type="text" name="categoriaProduct"/>
    <h3>Categorias disponibles:</h3>
<<<<<<< Updated upstream
=======
    <ol>
      
    </ol>
>>>>>>> Stashed changes
    </React.Fragment>
  );
}

export default App;