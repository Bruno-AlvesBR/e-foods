import React, { useState } from 'react';
import { UseCart } from '../../../hooks/Cart';

import {
  Container, 
  ButtonAdd,
  ButtonRemove,
  InputAmount,
} from './style';

interface IProductProps {
  productId: string;
};

export const ItemAmount = ({ productId }: IProductProps) => {
  const [counterItem, setCounterItem] = useState(1);
  const { handleRemoveProductCart } = UseCart();

  const handleAddAmount = () => {
    setCounterItem(counterItem + 1)
  };

  const handleRemoveAmount = () => {
    if(counterItem <= 1) {
      handleRemoveProductCart(productId);
    };
    setCounterItem(counterItem - 1)
  };

  return (
    <Container>
      <ButtonRemove 
        onClick={handleRemoveAmount}
      >
        -
      </ButtonRemove>
      <InputAmount 
        variant="standard" 
        value={counterItem} 
      />
      <ButtonAdd
        onClick={handleAddAmount}
      >
        +
      </ButtonAdd>
    </Container>
  );
};