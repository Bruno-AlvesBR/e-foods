import { useRouter } from 'next/router';

import { useCart } from '../hooks/Cart';
import CardCart from '../components/core/CardCart';

import { Container, ContentHeader } from '../styles/carrinho.module';

const Carrinho = () => {
  const [{ productsCart }, router] = [useCart(), useRouter()];

  const handleBackToHome = () => router.push('/');

  return (
    <Container>
      <ContentHeader>
        <h2 onClick={handleBackToHome}>Home</h2>
        {' / '}
        <h2>Carrinho</h2>
      </ContentHeader>
      <CardCart products={productsCart} />
    </Container>
  );
};

export default Carrinho;
