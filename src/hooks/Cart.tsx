import { createContext, ReactNode, useContext, useMemo, useState } from "react";

import { produtos } from "../services/api";

interface IProductProps {
	id: string;
	name: string;
	src: string;
	price: number;
}

interface ICartContextProps {
	productCart: IProductProps[];
	handlePushProduct: (productId: string) => void;
	handleRemoveProductCart: (productId: string) => void;
	handleFilter: (word: string) => void;
	counter: number;
	filter: IProductProps[];
}

interface ICartContextProviderProps {
	children: ReactNode;
}

export const CartContext = createContext({} as ICartContextProps);

export const CartContextProvider = ({ children }: ICartContextProviderProps) => {
	const [productCart, setProductCart] = useState([]);
	const [counter, setCounter] = useState(0);
	const [filter, setFilter] = useState([]);

	const handlePushProduct = (productId: string) => {
		const addedProduct = produtos.flat(Infinity).filter(produto => {
			return produto.id === productId;
		});

		setProductCart(initialState => [...initialState, addedProduct]);
	};

	const handleRemoveProductCart = (productId: string) => {
		const newListProduct = productCart.flat(Infinity).filter(produto => {
			return produto.id !== productId;
		});

		setProductCart(newListProduct);
	};

	useMemo(() => {
		setCounter(productCart.length);
	}, [setCounter, productCart]);

	const handleFilter = (word: string) => {
		const addFilter = produtos.flat(Infinity).filter(produto => {
			return produto.name === word;
		});

		setFilter(initialState => [...initialState, addFilter]);
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
