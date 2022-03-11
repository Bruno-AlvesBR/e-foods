import { createContext, ReactNode, useContext, useState } from "react";

interface IProductProps {
    id: string;
};

interface ICartContextProps {
};

interface ICartContextProviderProps {
    children: ReactNode;
};  

export const CartContext = createContext({} as ICartContextProps);

export const CartContextProvider = ({ children }: ICartContextProviderProps) => {
    return (
        <CartContext.Provider
            value={{

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