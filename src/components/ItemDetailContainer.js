import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ItemDetail from "./ItemDetail";

let itemDetail = {
  id: 1,
  title: "Celular Galaxy S21 FE 5G",
  price: 112.499,
  pictureUrl:
    "https://http2.mlstatic.com/D_NQ_NP_879603-MLA49171604463_022022-O.webp",
  stock: 10,
  description:
    "El equipo incorpora una batería de 4500 mAh con carga rápida de 25W que permite cargar el 50% del teléfono en 30 minutos, de igual modo, incorpora conectividad 5G y WiFi 6. Al igual que algunos smartphones del mercado, el S21 FE posee una certificación IP68, es decir, que es resistente a accidentes con agua y al polvo. Por último, el dispositivo cuenta con capacidad para dos SIM Card, desafortunadamente, al igual que toda la familia S21 (S21, S21 + y S21 Ultra), este equipo no incorpora una ranura para tarjetas microSD, por lo que los usuarios tendrán que conformarse con la capacidad que ofrece el dispositivo (existen versiones de 128 y 256 GB).",
};

function ItemDetailContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(itemDetail);

        promesa
          .then((respuesta) => {
            setProducts(itemDetail);
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
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemDetail products={products} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
