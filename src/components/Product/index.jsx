export default function Product(props) {
  const { product } = props;
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
    </article>
  );
}
