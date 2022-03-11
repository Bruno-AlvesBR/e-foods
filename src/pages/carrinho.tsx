import React from 'react';
import { UseCart } from '../hooks/Cart';

export const carrinho = () => {
    const { productCart } = UseCart();

    return (
        <div>
            {productCart}
        </div>
    );
};