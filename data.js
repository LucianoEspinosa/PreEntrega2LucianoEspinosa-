//carga de productos
class fragancia {
    constructor(marca, nombre, precio) {
        this.marca = marca;
        this.nombre = nombre;
        this.precio = precio;
    }
}
const producto1 = new fragancia("DIOR", "homme", 32000);
const producto2 = new fragancia("DIOR", "homme intense", 35000);
const producto3 = new fragancia("GIVENCHY", "gentleman", 32000);
const producto4 = new fragancia("GIVENCHY", "play", 30000);
const producto5 = new fragancia("MOSCHINO", "toy boy", 32000);
const producto6 = new fragancia("MOSCHINO", "toy 2", 30000);
const producto7 = new fragancia("AZZARO", "wanted", 25000);
const producto8 = new fragancia("AZZARO", "most wanted", 35000);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8];