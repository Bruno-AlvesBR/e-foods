import { Toolbar } from '@material-ui/core';
import router from 'next/router';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useCart } from '../../../hooks/Cart';

import { LinkCart, Navbar } from './style';
import { memo } from 'react';

const Header: React.FC = () => {
  const [{ counter }] = [useCart()];

  const handleGoToCart = () => router.push('/carrinho');

  return (
    <Navbar>
      <Toolbar>
        <LinkCart
          badgeContent={counter}
          onClick={handleGoToCart}
          color="primary"
        >
          <ShoppingCartIcon color="action" />
        </LinkCart>
      </Toolbar>
    </Navbar>
  );
};

export default memo(Header);