const productos = [
  {
    nombre: "Nike crater impact",
    id: 1,
    precio: 48500,
    img: "https://woker.vtexassets.com/arquivos/ids/232469-1200-1200?v=637678296098800000&width=1200&height=1200&aspect=true",
    idCat: "2",
  },
  {
    nombre: "Nike crater impact",
    id: 1,
    precio: 48500,
    img: "https://woker.vtexassets.com/arquivos/ids/232469-1200-1200?v=637678296098800000&width=1200&height=1200&aspect=true",
    idCat: "2",
  },
  {
    nombre: "Nike crater impact",
    id: 1,
    precio: 48500,
    img: "https://woker.vtexassets.com/arquivos/ids/232469-1200-1200?v=637678296098800000&width=1200&height=1200&aspect=true",
    idCat: "2",
  },
];

export const getProductos = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(productos);
    }, 2000);
  });
};

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = productos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 200);
  });
};
