import { GetStaticProps } from "next";
import React from "react";

import { produtos } from "../services/api";
import Card from "../components/CardProduct";

import {
  Container,
  ContainerProducts,
  ContentCards,
} from "../styles/home.module";
import { Filters } from "../components/Filters";

interface IDados {
  id: string;
  name: string;
  src: string;
  price: number;
}

interface IDadosProps {
  products: IDados[];
}

export const index = ({ products }: IDadosProps) => {
  return (
    <Container>
      <ContainerProducts>
        <Filters products={products} />
        <ContentCards>
          {products.length !== 0 && (
            <Card produto={products} />
          )}
        </ContentCards>
      </ContainerProducts>
    </Container>
  );
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const products = produtos.map(card => ({
      id: card.id,
      name: card.name,
      src: card.src,
      price: card.price,
    }));

    return {
      props: {
        products,
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
