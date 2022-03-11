import { createContext, ReactNode, useContext, useState } from "react";

interface IProductProps {
    id: number;
    name: string;
};

interface ICartContextProps {
    productCart: IProductProps[];
    handlePushProduct: (id: number, product: IProductProps[]) => void;
};

interface ICartContextProviderProps {
    children: ReactNode;
};  

export const CartContext = createContext({} as ICartContextProps);

export const CartContextProvider = ({ children }: ICartContextProviderProps) => {
    const [productCart, setProductCart] = useState([]);

    const handlePushProduct = (id: number, product: IProductProps[]) => {
        const addedProduct = product.filter(value => value.id === id);

        setProductCart(initialState => [...initialState, addedProduct]);
    };

    return (
        <CartContext.Provider
            value={{
                productCart,
                handlePushProduct
            }}
        >
            {children}
        </CartContext.Provider>
    )
};

export const UseCart = () => {
    const context = useContext(CartContext);

    return context;
};