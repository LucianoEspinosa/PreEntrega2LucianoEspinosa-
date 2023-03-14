const carrito = [];
let deseaAgregarProductos = "";
let precioTotal = 0;
let compra = "";

alert("Bienvenido a Fragance.net");
let preg = "";
pregunta();

if (preg == "si") {
    preguntaFiltro();
    do {
        deseaAgregarProductos = prompt("Desea agregar mas productos al carrito").toLowerCase();
        while (deseaAgregarProductos != "si" && deseaAgregarProductos != "no") {
            deseaAgregarProductos = prompt("Ingreso incorrecto. Por favor ingrese 'Si o 'No'");
        }
        if (deseaAgregarProductos == "si") {
            preguntaFiltro();
        } else {
            precioTotal = carrito.reduce((total, item) => total + item.precio, 0);
            mostrarCarrito();
            alert("Gracias por su compra");
        }
    } while (deseaAgregarProductos == "si");
} else {
    alert("Hasta luego");
}


function pregunta() {
    preg = prompt("Desea comprar alguna fragancia? Si/No").toLowerCase();
    while (preg != "si" && preg != "no") {
        alert("Por favor ingrese Si o No");
        preg = prompt("Ingrese si o no").toLowerCase();
    }

}
function preguntaFiltro() {
    let pregunta = prompt("Para ver todas las fragancias teclee 1. Para filtrar por diseñador teclee 2");
    while (pregunta != "1" && pregunta != "2") {
        pregunta = prompt("Su ingreso es incorrecto. Por favor ingrese [ 1 ] o [ 2 ]");
    }
    if (pregunta === "1") {
        todosLosProductos();
    } else {

        filtroDiseniador();
    }
}
function filtroDiseniador() {
    let existe = true;
    let diseniador = prompt("Actualmente trabajamos con los siguiente diseñadores.\nDior\nGivenchy\nMoschino\nAzzaro\n\nSeleccione marca o diseñador").toUpperCase();
    existe = productos.some(item => item.marca === diseniador);
    while (existe === false) {
        diseniador = prompt("El diseñador esta mal escrito o no trabajamos con el. Intente nuevamente").toUpperCase();
        existe = productos.some(item => item.marca === diseniador);
    }
    const filtroMarcas = productos.filter(p => p.marca == diseniador);
    console.log(filtroMarcas);
    const fraganciasSeleccionadas = filtroMarcas.map(p => p.nombre + " " + " $" + p.precio);
    alert("A continuacion las fragancias de " + diseniador);
    compra = prompt(diseniador + "\n\nIngrese el nombre de la fragancia que desea agregar al carrito.\n\n" + fraganciasSeleccionadas.join("\n"));
    agregarAlCarrito(filtroMarcas)

}
function todosLosProductos() {
    const prod = productos.map(p => p.nombre + " " + " $" + p.precio);
    alert("A continuacion todas las fragancias en stock");
    compra = prompt("Ingrese el nombre de la fragancia que desea agregar al carrito.\n" + prod.join("\n"));
    agregarAlCarrito(productos)

}
function agregarAlCarrito(carro) {
    let existe = true;
    existe = carro.some(item => item.nombre === compra);
    while (existe === false) {
        compra = prompt("El nombre de la fragancia esta mal escrito o no la tenemos a disposicion en este momento. Intente nuevamente");
        existe = carro.some(item => item.nombre === compra);
    }
    for (let item of productos) {
        if (item.nombre === compra) {
            carrito.push(item);
        }
    }

}
function mostrarCarrito() {

    const mostrarCarro = carrito.map(item => item.marca + " " + item.nombre + " $" + item.precio);
    alert("A continuacion los productos en el carrito");
    alert(mostrarCarro.join("\n") + "\n---------------------------------------" + "\nTotal $ " + precioTotal);


}

