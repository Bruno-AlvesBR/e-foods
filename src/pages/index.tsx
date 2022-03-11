import React, { useContext } from 'react'
import { CartContext, UseCart } from '../hooks/Cart';

export const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { handleSetIncrementCounter, counter } = UseCart();

  return (
    <div>
      <button type='button' onClick={handleSetIncrementCounter}>
        incrementar
      </button>
      <h1>{counter}</h1>
    </div>
  );
}

export default index;