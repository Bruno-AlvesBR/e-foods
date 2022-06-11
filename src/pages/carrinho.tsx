import React from 'react';
import { UseCart } from '../hooks/Cart';

import CardCart from '../components/CardCart';
import { useRouter } from 'next/router';

import { Container, ContentHeader } from '../styles/carrinho.module';

const carrinho = () => {
  const { productCart } = UseCart();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <Container>
      <ContentHeader>
        <h2 onClick={handleBackToHome}>Home</h2>
        {' / '}
        <h2>Carrinho</h2>
      </ContentHeader>
      <CardCart foods={productCart} />
    </Container>
  );
};

export default carrinho;
