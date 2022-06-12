import { useMemo, useState } from 'react';

import { useCart } from '../../../../hooks/Cart';
import { IProductProps, IProducts } from '../../../../interfaces/IProduct';

import { Container, ButtonAdd, ButtonRemove, InputAmount } from './style';

interface IItemAmount {
  id: string;
  setCounterItem?(type: number): void;
  counterItem?: number;
}

export const ItemAmount: React.FC<IItemAmount> = ({
  id,
  setCounterItem,
  counterItem,
}) => {
  const [{ handleRemoveProductCart }] = [useCart()];

  const handleAddAmount = useMemo(() => {
    return () => setCounterItem(counterItem + 1);
  }, [counterItem, setCounterItem]);

  const handleRemoveAmount = useMemo(() => {
    return () => {
      if (counterItem <= 1) {
        handleRemoveProductCart(id);
      }
      setCounterItem(counterItem - 1);
    };
  }, [counterItem, handleRemoveProductCart, id, setCounterItem]);

  return (
    <Container>
      <ButtonRemove onClick={() => handleRemoveAmount()}>{' - '}</ButtonRemove>
      <InputAmount variant="standard" value={counterItem} />
      <ButtonAdd onClick={() => handleAddAmount()}>{' + '}</ButtonAdd>
    </Container>
  );
};
