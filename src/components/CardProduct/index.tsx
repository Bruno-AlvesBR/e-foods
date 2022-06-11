import { Button } from '@material-ui/core';
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { memo } from 'react';

import { useCart } from '../../hooks/Cart';
import { IFoods } from '../../interfaces/IFoods';

import { ContentCard } from './style';

const Card = ({ foods }: IFoods) => {
  const { handlePushProduct, productsFilters } = useCart();

  const ProductsFilter: React.FC = () => {
    return (
      <>
        {productsFilters?.map(item => (
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

  const FoodProducts: React.FC = () => {
    return (
      <>
        {foods?.map(item => (
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

  return productsFilters?.length !== 0 ? <ProductsFilter /> : <FoodProducts />;
};

export default memo(Card);
