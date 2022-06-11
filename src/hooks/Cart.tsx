import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { IProductProps } from '../interfaces/IProduct';
import { foodService } from '../services';

interface ICartContextProps {
  productsCart?: IProductProps[];
  handlePushProduct?: (id: string) => void;
  handleRemoveProductCart?: (id: string) => void;
  handleFilterProduct?: (id: string) => void;
  counter?: number;
  productsFilters?: IProductProps[];
}

interface ICartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as ICartContextProps);

const CartProvider: React.FC<ICartProviderProps> = ({ children }) => {
  const [productsCart, setProductsCart] = useState<IProductProps[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [productsFilters, setProductsFilters] = useState<IProductProps[]>([]);

  const handlePushProduct = useCallback(
    async (id: string) => {
      const productResponse = await foodService?.findAll();

      const existItemCart = productsCart?.find(({ ...item }: IProductProps) => {
        return item?.id === id;
      });

      if (existItemCart) return;

      const addedProduct = productResponse?.filter(
        ({ ...item }: IProductProps) => {
          return item?.id === id;
        },
      );

      setProductsCart(initialState => [...initialState, ...addedProduct]);
    },
    [productsCart],
  );

  const handleRemoveProductCart = useCallback(
    async (id: string) => {
      const removeCartProduct = productsCart?.filter(
        ({ ...item }: IProductProps) => {
          return item.id !== id;
        },
      );

      setProductsCart(removeCartProduct);
    },
    [productsCart],
  );

  useEffect(() => {
    setCounter(productsCart.length);
  }, [setCounter, productsCart]);

  const handleFilterProduct = useCallback(
    async (id: string) => {
      const productResponse = await foodService?.findAll();

      const filterProduct = productResponse?.filter(
        ({ ...item }: IProductProps) => {
          return item?.id === id;
        },
      );

      setProductsFilters(initialState => [...initialState, ...filterProduct]);

      const existItem = productsFilters?.find(({ ...item }: IProductProps) => {
        return item?.id === id;
      });

      if (existItem) {
        const removeItem = productsFilters?.filter(
          ({ ...item }: IProductProps) => {
            return item?.id !== id;
          },
        );

        setProductsFilters(removeItem);
      }
    },
    [productsFilters],
  );

  return (
    <CartContext.Provider
      value={{
        counter,
        productsCart,
        productsFilters,
        handlePushProduct,
        handleRemoveProductCart,
        handleFilterProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be within a cartProvider');
  }

  return context;
}

export { CartProvider, useCart };
