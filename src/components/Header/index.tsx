import { Toolbar } from '@material-ui/core';

import { UseCart } from '../../hooks/Cart';
import router from "next/router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { LinkCart, Navbar } from './style';

export const Header = () => {
  const { counter } = UseCart();

  const handleGoToCart = () => {
    router.push("/carrinho");
  };

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