//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { Container, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export let productosIni = [
  {
    id: 1,
    type: "Samsung",
    slug: "oqKaHnzZSq",
    title: "Celular Galaxy S21 FE 5G",
    price: 112.499,
    pictureUrl: "/imagenes/1.png",
    stock: 10,
    description:
      "El equipo incorpora una batería de 4500 mAh con carga rápida de 25W que permite cargar el 50% del teléfono en 30 minutos, de igual modo, incorpora conectividad 5G y WiFi 6. Al igual que algunos smartphones del mercado, el S21 FE posee una certificación IP68, es decir, que es resistente a accidentes con agua y al polvo. Por último, el dispositivo cuenta con capacidad para dos SIM Card, desafortunadamente, al igual que toda la familia S21 (S21, S21 + y S21 Ultra), este equipo no incorpora una ranura para tarjetas microSD, por lo que los usuarios tendrán que conformarse con la capacidad que ofrece el dispositivo (existen versiones de 128 y 256 GB).",
  },
  {
    id: 2,
    type: "Samsung",
    slug: "qkNJMDmdkl",
    title: "Galaxy Z Flip3 5G (128GB)",
    price: 129.999,
    pictureUrl: "/imagenes/2.png",
    stock: 5,
    description:
      "Se pliega en el bolsillo. Entra en tu cartera. Se desliza en tus jeans más apretados. Cuando lo sacás, se abre un smartphone 5G con pantalla completa que se adapta a tus ángulos favoritos. No hay dudas. Queríamos rediseñar el concepto del teléfono, y lo hicimos. Revisá los mensajes, tomá fotos, reproducí música y mucho más, todo sin abrir tu teléfono.4 La pantalla Cover Screen de 1,9 pulgadas muestra notificaciones y te permite interactuar de forma intuitiva con ellas.5 Elegí tus opciones de visualización favoritas para acceder fácilmente a ellas y personalízalas con diferentes estilos y colores.",
  },
  {
    id: 3,
    type: "Apple",
    slug: "pwoamZNqas",
    title: "Apple Iphone 13 Pro Max (512GB)",
    price: 514.499,
    pictureUrl: "/imagenes/3.png",
    stock: 7,
    description:
      "Un sistema de cámaras mucho más poderoso, una pantalla con respuesta inmediata en cada interacción, el chip de smartphone más rápido del mundo, Un diseño increíblemente resistente y un gran salto en duración de batería.",
  },
  {
    id: 4,
    type: "Apple",
    slug: "ikqdkjQNHs",
    title: "Apple Iphone 12 (128GB)",
    price: 276.999,
    pictureUrl: "/imagenes/4.png",
    stock: 2,
    description:
      "El iPhone 12 tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas. Un frente de Ceramic Shield, cuatro veces más resistente a las caídas. Modo Noche en todas las cámaras, para que puedas tomar fotos increíbles con poca luz. Grabación, edición y reproducción de video en Dolby Vision con calidad cinematográfica. Y el potente chip A14 Bionic. Además, es compatible con los nuevos accesorios MagSafe, que se acoplan fácilmente a tu iPhone y permiten una carga inalámbrica más rápida. Que comience la diversión.",
  },
  {
    id: 5,
    type: "Xiaomi",
    slug: "oqedujQJNQ",
    title: "Xiaomi Redmi Note 10 PRO (128GB)",
    price: 114.999,
    pictureUrl: "/imagenes/5.png",
    stock: 8,
    description:
      "Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Con su potente procesador y memoria RAM de 6 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras. Con la súper batería de 5020 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas.",
  },
  {
    id: 6,
    type: "Xiaomi",
    slug: "mQxnANQsd",
    title: "Xiaomi Mi 11 Lite (128GB)",
    price: 89.999,
    pictureUrl: "/imagenes/6.png",
    stock: 4,
    description:
      "Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados Además, el dispositivo cuenta con cámara frontal de 20 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Con su potente procesador y memoria RAM de 8 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras.",
  },
  {
    id: 7,
    type: "Samsung",
    slug: "dDkjfQFji",
    title: "Samsung Galaxy A52",
    price: 74.999,
    pictureUrl: "/imagenes/7.png",
    stock: 7,
    description:
      "Con su pantalla Infinity-O extrafluida, el Samsung Galaxy A52 ofrece resistencia a agua y polvo, batería duradera, diseño sorprendente, y más. Permite ampliar la visión como nunca antes gracias a su pantalla Infinity-O Display de 6,5 pulgadas. Super AMOLED FHD+ alcanza los 800 nits1 para mayor claridad, incluso con la luz de día brillante El Samsung A52 presenta curvas cómodas y elegantes en un diseño perfecto. El mínimo borde de la cámara combina con el acabado mate en la parte posterior para lograr un aspecto icónico y unificado. Expresá tu estilo con un negro asombroso que combinará a la perfección con todos tus look",
  },
  {
    id: 8,
    type: "Apple",
    slug: "fawgghKS",
    title: "iPhone 11 Pro Max (256GB)",
    price: 298.999,
    pictureUrl: "/imagenes/8.png",
    stock: 3,
    description:
      "La pantalla OLED Super Retina XDR de 6,5, sin marcos y con una resolución FullHD+, es la pantalla más nítida diseñada por Apple. El iPhone 11 Pro Max tiene un revolucionario sistema de tres cámaras que multiplica tu capacidad creativa y es fácil de usar. Con su cámara ultra angular nadie se queda afuera de la toma ya que abarca un campo visual cuatro veces más amplio. ",
  },
  {
    id: 9,
    type: "Xiaomi",
    slug: "fwjNMFnmrE",
    title: "Xiaomi Pocophone Poco X3 Pro Dual",
    price: 91.999,
    pictureUrl: "/imagenes/9.png",
    stock: 4,
    description:
      "Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. on su potente procesador y memoria RAM de 8 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras",
  },
];

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { type } = useParams();

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIni);
      }, 1000);
    });

    promesa
      .then((res) => {
        if (type !== undefined) {
          const productsFiltered = productosIni.filter(
            (product) => product.type === type
          );
          setProducts(productsFiltered);
        } else {
          setProducts(productosIni);
        }
      })
      .catch((rej) => {
        toast.error("Hubo un error!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [type]);

  return (
    <>
      <Container fluid>
        {loading ? (
          <Spinner animation="border" variant="light" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <ItemList items={products} />
        )}
      </Container>
    </>
  );
};

export default ItemListContainer;
