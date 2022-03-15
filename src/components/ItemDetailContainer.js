import { useState, useEffect } from "react";
import { Toast } from "react-bootstrap";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { productosIni } from "./ItemListContainer";

function ItemDetailContainer() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIni);
      }, 1000);
    });

    promesa
      .then((rta) => {
        const result = productosIni.find((product) => {
          return product.slug === slug;
        });
        setProducts(result);
      })
      .catch((err) => {
        Toast.error("Hubo un error!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  return (
    <div>
      {loading ? (
        <span className="visually-hidden">Loading...</span>
      ) : (
        <ItemDetail products={products} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
