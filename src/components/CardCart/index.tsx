import { Button } from '@material-ui/core';
import Image from 'next/image';
import { memo, useState } from 'react';

import { useCart } from '../../hooks/Cart';
import { IProducts } from '../../interfaces/IProduct';
import { CalcPriceItem } from '../../utils/CalcItemsCart';
import { ItemAmount } from './counterItem';

import {
  Container,
  Content,
  ContentGroup,
  ContentCard,
  ContentImage,
  Title,
} from './style';

const CardCart = ({ products }: IProducts) => {
  const { handleRemoveProductCart } = useCart();

  const [counterItem, setCounterItem] = useState<number>(1);

  return (
    <Container>
      {products?.length !== 0 && (
        <>
          <ContentGroup>
            {products?.map(item => (
              <ContentCard key={item?.id}>
                <ContentImage>
                  <Image
                    src={item?.image?.desktopSrc}
                    alt={item?.id}
                    layout="fill"
                  />
                </ContentImage>
                <Title>{item?.title}</Title>
                <div>
                  {CalcPriceItem(item?.price?.priceNumber, counterItem)}
                </div>
                <span style={{ marginLeft: 'auto' }}>
                  <ItemAmount
                    id={item?.id}
                    setCounterItem={setCounterItem}
                    counterItem={counterItem}
                  />
                  <Button
                    variant="contained"
                    onClick={() => handleRemoveProductCart(item?.id)}
                  >
                    Retirar
                  </Button>
                </span>
              </ContentCard>
            ))}
          </ContentGroup>
        </>
      )}
      <Content />
    </Container>
  );
};

export default memo(CardCart);
