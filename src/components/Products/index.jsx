import Product from "../Product";

const products = [
  {
    img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/0aa7749b049f41a2b75dcbd32910cb3b_9366/zapatillas-forum-low-x-the-grinch.jpg",
    title: "Sneaker 1",
    subtitle: "originals",
  },
  {
    img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/0aa7749b049f41a2b75dcbd32910cb3b_9366/zapatillas-forum-low-x-the-grinch.jpg",
    title: "Sneaker 2",
    subtitle: "originals",
  },
  {
    img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/0aa7749b049f41a2b75dcbd32910cb3b_9366/zapatillas-forum-low-x-the-grinch.jpg",
    title: "Sneaker 3",
    subtitle: "originals",
  },
  {
    img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/0aa7749b049f41a2b75dcbd32910cb3b_9366/zapatillas-forum-low-x-the-grinch.jpg",
    title: "Sneaker 4",
    subtitle: "originals",
  },
  {
    img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/0aa7749b049f41a2b75dcbd32910cb3b_9366/zapatillas-forum-low-x-the-grinch.jpg",
    title: "Sneaker 5",
    subtitle: "originals",
  },
  {
    img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/0aa7749b049f41a2b75dcbd32910cb3b_9366/zapatillas-forum-low-x-the-grinch.jpg",
    title: "Sneaker 6",
    subtitle: "originals",
  },
  {
    img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/0aa7749b049f41a2b75dcbd32910cb3b_9366/zapatillas-forum-low-x-the-grinch.jpg",
    title: "Sneaker 7",
    subtitle: "originals",
  },
];

function addIdsToProducts(products) {
  return products.map((product) => ({
    ...product,
    id: crypto.randomUUID(),
  }));
}

export default function Products() {
  // JSX
  return (
    <section>
      {addIdsToProducts(products).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}
