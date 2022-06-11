import { GetStaticProps } from 'next';

import Card from '../components/CardProduct';
import { Filters } from '../components/Filters';
import { foodService } from '../services';
import { IFoods } from '../interfaces/IFoods';

import {
  Container,
  ContainerProducts,
  ContentCards,
} from '../styles/home.module';

const index: React.FC<IFoods> = ({ foods }) => {
  return (
    <Container>
      <ContainerProducts>
        <Filters foods={foods} />
        <ContentCards>{foods && <Card foods={foods} />}</ContentCards>
      </ContainerProducts>
    </Container>
  );
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const foods = await foodService?.findAll();

    return {
      props: {
        foods,
      },
      revalidate: 60,
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);

    return {
      props: {},
      revalidate: 60,
    };
  }
};
