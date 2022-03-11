import { createContext, ReactNode, useContext, useState } from "react";

interface IProductProps {
    id: string;
};

interface ICartContextProps {
    counter: number;
    handleSetIncrementCounter: () => void;
};

interface ICartContextProviderProps {
    children: ReactNode;
};  

export const CartContext = createContext({} as ICartContextProps);

export const CartContextProvider = ({ children }: ICartContextProviderProps) => {
    let [counter, setCounter] = useState(0);

    const handleSetIncrementCounter = () => {
        setCounter(counter + 1);
    };

    console.log(counter);

    return (
        <CartContext.Provider
            value={{
                handleSetIncrementCounter,
                counter
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