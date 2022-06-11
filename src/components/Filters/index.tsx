import { Button } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';

import React, { useState } from 'react';
import { UseCart } from '../../hooks/Cart';
import { IFoods } from '../../interfaces/IFoods';

import { ContainerFilters } from './style';

export const Filters = ({ foods }: IFoods) => {
  const { handleFilter } = UseCart();
  const [counterItems, setCounterItems] = useState(5);
  const [showFilters, setShowFilters] = useState(false);

  const handleExpandItems = () => {
    setCounterItems(foods?.length);
    if (counterItems === foods?.length) {
      setCounterItems(5);
    }
  };

  return (
    <ContainerFilters>
      <h1 onClick={() => setShowFilters(!showFilters)}>
        Filtrar por:
        {showFilters ? <ArrowDropDown /> : <ArrowDropUp />}
      </h1>
      <span style={showFilters ? { display: 'flex' } : { display: 'none' }}>
        <ul>
          {foods?.slice(0, counterItems)?.map(item => (
            <li key={item?.id}>
              <input
                type="checkbox"
                value={item?.id}
                onChange={e => handleFilter(e.target.value)}
              />
              {item?.title}
            </li>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={handleExpandItems}
          >
            {counterItems === 5 ? <>Expandir</> : <>Reduzir</>}
          </Button>
        </ul>
      </span>
    </ContainerFilters>
  );
};
