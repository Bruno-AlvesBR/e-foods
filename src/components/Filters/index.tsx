import { Button } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';

import React, { useState } from 'react'
import { UseCart } from '../../hooks/Cart';

import {
  ContainerFilters
} from './style';

interface IDados {
  id: string;
  name: string;
  src: string;
  price: number;
}

interface IDadosProps {
  products: IDados[];
}

export const Filters = ({ products }: IDadosProps) => {
  const { handleFilter } = UseCart();
  const [counterItems, setCounterItems] = useState(5);
  const [showFilters, setShowFilters] = useState(false);

  const handleExpandItems = () => {
    setCounterItems(products.length)
    if(counterItems === products.length) {
      setCounterItems(5)
    };
  };

  return (
    <ContainerFilters>
      <h1 onClick={() => setShowFilters(!showFilters)}>
        Filtrar por:
        
        {showFilters ? (
          <ArrowDropDown />
        ) : (
          <ArrowDropUp />
        )}
      </h1>
      <span
        style={showFilters
          ? {display: 'flex'}
          : {display: 'none'} 
        }
      >
        <ul>
          {products.slice(0, counterItems).map(produto => (
            <li key={produto.id}>
              <input
                key={produto.id}
                type="checkbox"
                value={produto.name}
                onChange={e => handleFilter(e.target.value)}
              />
              {produto.name}
            </li>
          ))}
          <Button variant="contained" color="primary" onClick={handleExpandItems}>
            {counterItems === 5 
              ? <>Expandir</> 
              : <>Reduzir</>
            }
          </Button>
        </ul>
      </span>
    </ContainerFilters>
  );
};