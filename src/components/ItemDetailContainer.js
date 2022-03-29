import { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "./Firebase";

function ItemDetailContainer() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const peticion2 = query(
      collection(db, "cellphones"),
      where("slug", "==", slug)
    );
    getDocs(peticion2)
      .then((res) => setProducts(res.docs.map((p) => p.data())[0]))

      .catch((err) =>
        toast.error("We had a error with the products! Please try again later!")
      )
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

/*

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

*/
