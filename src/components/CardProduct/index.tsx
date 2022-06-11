import { Button } from '@material-ui/core';
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { UseCart } from '../../hooks/Cart';
import { IFoodProps, IFoods } from '../../interfaces/IFoods';

import { ContentCard } from './style';

const Card = ({ foods }: IFoods) => {
  const { handlePushProduct, filter } = UseCart();

  return (
    <>
      {filter?.length !== 0
        ? filter?.map(item => (
            <ContentCard key={item?.id}>
              <Image
                src={item?.image?.desktopSrc}
                alt={item?.title}
                width={120}
                height={120}
              />
              <h1>{item?.title}</h1>
              <Button
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                onClick={() => handlePushProduct(item?.id)}
              >
                + Carrinho
              </Button>
            </ContentCard>
          ))
        : foods?.map(item => (
            <ContentCard key={item?.id}>
              <Image
                src={item?.image?.desktopSrc}
                alt={item?.title}
                width={120}
                height={120}
              />
              <h1>{item?.title}</h1>
              <Button
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                onClick={() => handlePushProduct(item?.id)}
              >
                + Carrinho
              </Button>
            </ContentCard>
          ))}
    </>
  );
};

export default Card;
