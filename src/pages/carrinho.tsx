import React from "react";
import { UseCart } from "../hooks/Cart";

import CardCart from "../components/CardCart";
import { useRouter } from "next/router";

const carrinho = () => {
  const { productCart } = UseCart();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/')
  };

  return (
    <div style={{ display: "flex", flexDirection: 'column'}}>
      <span style={{display: 'flex', alignItems: 'center', gap: 3.5}}>
        <h2 onClick={handleBackToHome}>Home</h2>
        |
        <h2>Carrinho</h2>
      </span>
      <CardCart produto={productCart} />
    </div>
  );
};

export default carrinho;
