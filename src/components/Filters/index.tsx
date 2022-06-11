import { Button } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { memo, useCallback, useState } from 'react';

import { useCart } from '../../hooks/Cart';
import { IFoods } from '../../interfaces/IFoods';

import { ContainerFilters } from './style';

const Filters = ({ foods }: IFoods) => {
  const [{ handleFilterProduct }] = [useCart()];

  const [counterItems, setCounterItems] = useState<number>(5);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const handleExpandItems = useCallback(() => {
    setCounterItems(foods?.length);

    if (counterItems === foods?.length) {
      setCounterItems(5);
    }
  }, [counterItems, foods?.length]);

  return (
    <ContainerFilters>
      <h1 onClick={() => setShowFilters(!showFilters)}>
        Filtrar por:
        {showFilters ? <ArrowDropDown /> : <ArrowDropUp />}
      </h1>

      <span style={{ display: showFilters ? 'flex' : 'none' }}>
        <ul>
          {foods?.slice(0, counterItems).map(item => (
            <li key={item?.id}>
              <input
                type="checkbox"
                value={item?.id}
                onChange={e => handleFilterProduct(e.target.value)}
              />
              {item?.title}
            </li>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={handleExpandItems}
          >
            {counterItems === 5 ? 'Expandir' : 'Reduzir'}
          </Button>
        </ul>
      </span>
    </ContainerFilters>
  );
};

export default memo(Filters);
