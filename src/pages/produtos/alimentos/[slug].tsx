import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import ProductFood from '../../../components/pages/produtos/alimentos';

import { IProductProps } from '../../../interfaces/IProduct';
import { foodService } from '../../../services';

export interface IFoodPage {
  food: IProductProps;
}

const FoodPage: NextPage<IFoodPage> = ({ food }) => {
  return food && <ProductFood {...food} />;
};

export default FoodPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  try {
    const { slug } = ctx.params;

    const food = await foodService?.findBySlug(slug);

    return {
      props: {
        food,
      },
      revalidate: 60 * 60,
    };
  } catch (err) {
    console.log(err);

    return {
      props: {
        food: {},
      },
      revalidate: 60 * 60,
    };
  }
};
