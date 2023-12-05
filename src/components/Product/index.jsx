import React from "react";

// Ciclos de vida del componente
// Antes de que sea rendereado
// cuando ha sido rendereado
// cuando el componente ha sido actualizado o sus states o sus props
// Cuando el componente ha sido removido

// export default class ProductTwo extends React.Component {
//   componentDidMount() {
//     console.log("componente rendereado");
//   }
//   componentDidUpdate(){

//   }
//   componentWillUnmount(){

//   }
//   render() {
//     return (
//       <article
//         style={{ width: "200px", display: "inline-block", marginLeft: "1em" }}
//       >
//         <figure style={{ margin: 0, padding: 0 }}>
//           <img
//             src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/0aa7749b049f41a2b75dcbd32910cb3b_9366/zapatillas-forum-low-x-the-grinch.jpg"
//             alt=""
//             style={{
//               width: "100%",
//             }}
//           />
//         </figure>
//         <h4 style={{ fontSize: "12px", wordWrap: "break-word" }}>
//           {this.props.product.title}
//         </h4>
//         <h5>{this.props.product.subtitle}</h5>
//         <p>Proximamente!</p>
//       </article>
//     );
//   }
// }

export default function Product(props) {
  const { product, user, handleAddItemToCart } = props;

  const handleAddProductToCart = () => {
    handleAddItemToCart({
      ...product,
      user,
    });
  };

  return (
    <article
      style={{ width: "200px", display: "inline-block", marginLeft: "1em" }}
    >
      <figure style={{ margin: 0, padding: 0 }}>
        <img
          src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/0aa7749b049f41a2b75dcbd32910cb3b_9366/zapatillas-forum-low-x-the-grinch.jpg"
          alt=""
          style={{
            width: "100%",
          }}
        />
      </figure>
      <h4 style={{ fontSize: "12px", wordWrap: "break-word" }}>
        {product.title}
      </h4>
      <h5>{product.subtitle}</h5>
      <p>Proximamente!</p>
      <button onClick={handleAddProductToCart}>Agregar a canasta</button>
    </article>
  );
}
