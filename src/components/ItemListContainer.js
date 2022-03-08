//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";

// const MiOnAdd = () => {
//   console.log("OnAdd");
// };

let productosIni = [
  {
    id: 1,
    title: "Celular Galaxy S21 FE 5G",
    price: 112.499,
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_879603-MLA49171604463_022022-O.webp",
    stock: 10,
  },
  {
    id: 2,
    title: "Galaxy Z Flip3 5G (128GB)",
    price: 129.999,
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_676914-MLA47887111268_102021-O.webp",
    stock: 5,
  },
  {
    id: 3,
    title: "Apple Iphone 13 Pro Max (512GB)",
    price: 514.499,
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_803693-MLA47776072534_102021-O.webp",
    stock: 7,
  },
  {
    id: 4,
    title: "Apple Iphone 12 (128GB)",
    price: 276.999,
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_743195-MLA45719932493_042021-O.webp",
    stock: 2,
  },
  {
    id: 5,
    title: "Xiaomi Redmi Note 10 PRO (128GB)",
    price: 114.999,
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_815921-MLA46490094279_062021-O.webp",
    stock: 8,
  },
  {
    id: 6,
    title: "Xiaomi Mi 11 Lite (128GB)",
    price: 89.999,
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_825470-MLA48495988709_122021-O.webp",
    stock: 4,
  },
];

export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIni);

        promesa
          .then((respuesta) => {
            setProducts(productosIni);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      }, 3000);
    });
  }, []);

  return (
    <>
      <main className="container">
        <h2>Hola, {props.greeting}</h2>
        {/* <ItemCount stock={5} initial={1} onAdd={MiOnAdd} /> */}
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <ItemList items={products} />
        )}
      </main>
    </>
  );
};

export default ItemListContainer;
