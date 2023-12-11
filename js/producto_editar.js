console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4) 
console.log(id)
const { createApp } = Vue
createApp({
data() {
return {
id:0,
nombre:"",
descripcion:"",
imagen:"",
stock:0,
precio:0,
precioof:0,
//url:'http://localhost:5000/productos'+id,
url:'https://vsramiro.pythonanywhere.com/productos/'+id,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {

console.log(data)
this.id=data.id
this.nombre = data.nombre;
this.descripcion = data.descripcion;
this.imagen=data.imagen
this.stock=data.stock
this.precio=data.precio
this.precioof=data.precioof
})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {
let producto = {
nombre:this.nombre,
descripcion:this.descripcion,
precio: this.precio,
precioof: this.precioof,
stock: this.stock,
imagen:this.imagen
}
var options = {
body: JSON.stringify(producto),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "../templates/productos.html";
})
.catch(err => {
console.error(err);
alert("Error al Modificar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')