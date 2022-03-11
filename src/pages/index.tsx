import { Button } from '@material-ui/core';
import { Skeleton, Stack } from '@mui/material';
import { GetStaticProps } from 'next';
import React from 'react';
import { UseCart } from '../hooks/Cart';

import { api } from "../services/api";

interface IDados {
  id: number;
  name: string;
};

interface IDadosProps {
  cards: IDados[];
};

export const index = ({ cards }: IDadosProps) => {
  const { handlePushProduct } = UseCart();

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {cards.map(test => (
        <span style={{margin: 5}} key={test.id}>
          <Stack spacing={0.5}>
            <Skeleton 
              variant="text" 
              width={200} 
            />  
            <Skeleton 
              variant="circular" 
              width={50} 
              height={50} 
            />  
            <Skeleton 
              variant="rectangular" 
              width={200} 
              height={120} 
            />  
            <Button variant="contained" onClick={() => handlePushProduct(test.id, cards)}>
              Adicionar
            </Button>
          </Stack> 
        </span>
      ))}
    </div>
  );
}

export default index;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await api.get('/test');

    const cards = data.map(card => {
      return {
        id: card.id,
        name: card.name
      };
    });

    return {
      props: {
        cards
      },
      revalidate: 60
    };
  }
  catch(err) {
    console.log(err);

    return {
      props: {
        
      },
      revalidate: 60
    };
  };
};