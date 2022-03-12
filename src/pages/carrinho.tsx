import React from "react"
import { UseCart } from "../hooks/Cart"

import CardCart from "../components/CardCart"

const carrinho = () => {
  const { productCart } = UseCart()

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <CardCart produto={productCart} />
    </div>
  )
}

export default carrinho
