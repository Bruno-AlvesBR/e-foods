import { Button, CircularProgress } from '@material-ui/core';
import Image from 'next/image';

import { UseCart } from '../../hooks/Cart';
import { IFoods } from '../../interfaces/IFoods';
import { ItemAmount } from './counterItem';

import { Container, Content, ContentCardsGroup, ContentCard } from './style';

interface ICardProps {
  id: string;
  name: string;
  src: string;
  price: number;
}

interface IListCardProps {
  produto: ICardProps[];
}

const CardCart = ({ foods }: IFoods) => {
  const { handleRemoveProductCart } = UseCart();

  return (
    <Container>
      {foods?.length !== 0 ? (
        <>
          <ContentCardsGroup>
            {foods?.map(item => (
              <ContentCard key={item?.id}>
                <Image
                  src={item?.image?.desktopSrc}
                  alt={item?.id}
                  width={70}
                  height={100}
                />
                <h1>{item?.title}</h1>
                <span>
                  <ItemAmount productId={item?.id} />
                  <Button
                    variant="contained"
                    onClick={() => handleRemoveProductCart(item?.id)}
                  >
                    Retirar
                  </Button>
                </span>
              </ContentCard>
            ))}
          </ContentCardsGroup>
          <Content></Content>
        </>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default CardCart;
