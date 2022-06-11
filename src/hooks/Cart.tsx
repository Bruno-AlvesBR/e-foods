import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { IFoodProps } from '../interfaces/IFoods';
import { foodService } from '../services';

interface ICartContextProps {
  productCart: IFoodProps[];
  handlePushProduct: (productId: string) => void;
  handleRemoveProductCart: (productId: string) => void;
  handleFilter: (word: string) => void;
  counter: number;
  filter: IFoodProps[];
}

interface ICartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as ICartContextProps);

export const CartContextProvider = ({
  children,
}: ICartContextProviderProps) => {
  const [productCart, setProductCart] = useState([]);
  const [counter, setCounter] = useState(0);
  const [filter, setFilter] = useState([]);

  const handlePushProduct = async (productId: string) => {
    const productData = await foodService?.findAll();

    const existItemCart = productCart?.find(produto => {
      return produto.id === productId;
    });

    if (existItemCart) {
      return window.alert('Vá para o carrinho!');
    }

    const addedProduct = productData?.filter(produto => {
      return produto.id === productId;
    });

    setProductCart(initialState => [...initialState, ...addedProduct]);
  };

  const handleRemoveProductCart = async (productId: string) => {
    const productData = await foodService?.findAll();

    const newListProduct = productCart?.filter(produto => {
      return produto.id !== productId;
    });

    setProductCart(newListProduct);
  };

  useMemo(() => {
    setCounter(productCart.length);
  }, [setCounter, productCart]);

  const handleFilter = async (word: string) => {
    const productData = await foodService?.findAll();

    const addFilter = productData?.filter(produto => {
      return produto?.id === word;
    });

    setFilter(old => [...old, ...addFilter]);

    const existItem = filter?.find(produto => {
      return produto?.id === word;
    });

    if (existItem) {
      const removeItem = filter?.filter(produto => {
        return produto?.id !== word;
      });

      setFilter(removeItem);
    }
  };

  return (
    <CartContext.Provider
      value={{
        counter,
        productCart,
        filter,
        handlePushProduct,
        handleRemoveProductCart,
        handleFilter,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const UseCart = () => {
  const context = useContext(CartContext);

  return context;
};
