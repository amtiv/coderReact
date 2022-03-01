import ItemCount from "./ItemCount";

const MiOnAdd = () => {
  console.log("OnAdd");
};

export const ItemListContainer = (props) => {
  return (
    <main className="container">
      <h2>Hola, {props.greeting}</h2>
      <ItemCount stock={5} initial={1} onAdd={MiOnAdd} />
    </main>
  );
};

export default ItemListContainer;
