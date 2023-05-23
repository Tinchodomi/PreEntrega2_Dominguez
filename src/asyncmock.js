const productos = [
  {
    nombre: "Nike Crater Impact",
    id: '1',
    precio: `$${48500}`,
    img: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw0a870367/products/NI_CW2386-001/NI_CW2386-001-1.JPG",
    stock:10,
    idCat: "1",
  },
  {
    nombre: "Nike Air Vapor Wm",
    id: '2',
    precio: `$${63200}`,
    img: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd8f07c01/products/NI_CK2612-500/NI_CK2612-500-1.JPG",
    stock:5,
    idCat: "2",
  },
  {
    nombre: "Nike Jordan Kids",
    id: '3',
    precio: `$${39590}`,
    img: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw227ed372/products/NIDN2647-060/NIDN2647-060-1.JPG",
    stock:10,
    idCat: "3",
  },
];

export const getProductos = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(productos);
    }, 0);
  });
};


export const getUnProducto = (id) => {

  return new Promise( resolve =>{

    setTimeout(() => {
      
      const producto = productos.find(prod => prod.id === id)
      resolve(producto)
    
    }, 0);
  }) 

}


export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = productos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 0);
  });
};
