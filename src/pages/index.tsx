import { GetStaticProps } from 'next';
import React from 'react';

import { api } from "../services/api";

interface IDados {
  id: number;
  name: string;
};

interface IDadosProps {
  cards: IDados[];
};

export const index = ({ cards }: IDadosProps) => {
  return (
    <div>
      {cards.map(test => (
        <div key={test.id}>
          {test.name}  
        </div>
      ))}
    </div>
  );
}

export default index;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await api.get('test');

    const cards = data.map(card => {
      return {
        id: card.id,
        name: card.name
      }
    })

    return {
      props: {
        cards
      },
      revalidate: 60
    }
  }
  catch (err) {
    console.log(err);

    return {
      props: {
        
      },
      revalidate: 60
    }
  }
};