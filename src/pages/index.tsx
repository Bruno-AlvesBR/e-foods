import { GetStaticProps } from "next";
import React from "react";
import router from "next/router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { UseCart } from "../hooks/Cart";
import { produtos } from "../services/api";
import Card from "../components/CardProduct";
import { SkeletonCard } from "../components/Skeleton/index";

import {
	Container,
	ContentCards,
	ContentFilters,
	LinkCart,
} from "../styles/home.module";

interface IDados {
	id: string;
	name: string;
	src: string;
	price: number;
}

interface IDadosProps {
	products: IDados[];
}

export const index = ({ products }: IDadosProps) => {
	const { counter, handleFilter, filter } = UseCart();

	const handleGoToCart = () => {
		router.push("/carrinho");
	};

	return (
		<Container>
			<LinkCart
				badgeContent={counter}
				onClick={handleGoToCart}
				color="primary"
			>
				<ShoppingCartIcon color="action" />
			</LinkCart>
			<ContentFilters>
				{products.flat(Infinity).map(produto => (
					<div key={produto.id}>
						<input
							key={produto.id}
							type="checkbox"
							value={produto.name}
							onChange={e => handleFilter(e.target.value)}
						/>
						{produto.name}
					</div>
				))}
			</ContentFilters>
			<ContentCards>
				{products.length !== 0 ? (
					filter.length !== 0 ? (
						<Card produto={filter} />
					) : (
						<Card produto={products} />
					)
				) : (
					<SkeletonCard />
				)}
			</ContentCards>
		</Container>
	);
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
	try {
		const products = produtos.map(card => ({
			id: card.id,
			name: card.name,
			src: card.src,
			price: card.price,
		}));

		return {
			props: {
				products,
			},
			revalidate: 60,
		};
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log(err);

		return {
			props: {},
			revalidate: 60,
		};
	}
};
