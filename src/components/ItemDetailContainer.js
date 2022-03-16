import { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
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
        toast.error("Hubo un error!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  return (
    <>
      <Container fluid>
        {loading ? (
          <Spinner animation="border" variant="light" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <ItemDetail products={products} />
        )}
      </Container>
    </>
  );
}

export default ItemDetailContainer;
