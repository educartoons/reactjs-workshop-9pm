import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function login() {
  return {
    username: "educartoons",
    email: "educartoons@gmail.com",
  };
}

export default function App() {
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setUser(login());
  }, []);

  const handleAddItemToCart = (item) => {
    setCart([...cart, item]);
  };

  // JSX
  return (
    <div>
      <Header />
      <Body user={user} handleAddItemToCart={handleAddItemToCart} />
      <Footer />
    </div>
  );
}
