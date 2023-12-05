import Products from "./Products";

export default function Body(props) {
  return (
    <section>
      <Products
        user={props.user}
        handleAddItemToCart={props.handleAddItemToCart}
      />
    </section>
  );
}
