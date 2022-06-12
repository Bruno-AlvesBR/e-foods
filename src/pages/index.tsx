import { GetStaticProps, NextPage } from 'next';

import Card from '../components/core/CardProduct';
import Filters from '../components/core/Filters';
import { foodService } from '../services';
import { IFoods } from '../interfaces/IFoods';

import {
  Container,
  ContainerProducts,
  ContentCards,
} from '../styles/home.module';

const index: NextPage<IFoods> = ({ foods }) => {
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
    console.log(err);

    return {
      props: {
        foods: [],
      },
      revalidate: 60,
    };
  }
};
