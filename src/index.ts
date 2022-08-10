let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let agregar = document.getElementById("btn-agregar-producto");
let descuento = document.getElementById("btn-descuento");
let lista = document.getElementById("lista");
let totalsindescuento = document.getElementById("total");
let totalfinal = document.getElementById("total-final");
let vaciar = document.getElementById("vaciar");
let productos: string[] = [];
let precios: number[] = [];
let suma: number = 0;

// funciones
// primero agrego los productos y salen en la lista, con precio y suma del total
const agregaralCarrito = () => {
  productos.push(producto.value);
  precios.push(precio.value);

  lista?.innerHTML += `<li> ${producto.value} : $${precio.value} </li>`;

  producto.value = "";
  precio.value = "";
};

const sumartotal = () => {
  suma = 0;
  for (let i: number = 0; i < precios.length; i++) {
    suma += Number(precios[i]);
  }
  totalsindescuento?.innerHTML = ` $ ${suma}`;
};

const calcularDescuento = () => {
  if (suma > 2500) {
    totalfinal?.innerHTML = ` $ ${suma - suma * 0.1}`;
  } else {
    totalfinal?.innerHTML = ` $ ${suma}`;
  }
};

const vaciarCarrito = () => {
  lista?.innerHTML = "";
  totalsindescuento?.innerHTML = "";
  totalfinal?.innerHTML = "";
};

agregar?.addEventListener("click", agregaralCarrito);
agregar?.addEventListener("click", sumartotal);
descuento?.addEventListener("click", calcularDescuento);

vaciar?.addEventListener("click", vaciarCarrito);
