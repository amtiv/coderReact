//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { Container, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "./Firebase";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { type } = useParams();

  useEffect(() => {
    if (type !== undefined) {
      const peticion = query(
        collection(db, "cellphones"),
        where("type", "==", type)
      );

      getDocs(peticion)
        .then((res) =>
          setProducts(res.docs.map((p) => ({ ...p.data(), id: p.id })))
        )
        .catch((err) => toast.error("We had a error! Please try again later"))
        .finally(() => {
          setLoading(false);
        });
    } else {
      getDocs(collection(db, "cellphones"))
        .then((res) =>
          setProducts(res.docs.map((p) => ({ ...p.data(), id: p.id })))
        )
        .catch((err) =>
          toast.error(
            "We had a error with the products! Please try again later!"
          )
        )
        .finally(() => {
          setLoading(false);
        });
    }
  }, [type]);

  return (
    <>
      <Container fluid>
        {loading ? (
          <Spinner animation="border" variant="light" role="status">
            <span className="visually-hidden container">Loading...</span>
          </Spinner>
        ) : (
          <ItemList items={products} />
        )}
      </Container>
    </>
  );
};

export default ItemListContainer;
