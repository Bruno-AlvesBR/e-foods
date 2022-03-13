import { Button, CircularProgress } from "@material-ui/core";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { UseCart } from "../../hooks/Cart";

import { ContentCard } from "./style";

interface ICardProps {
	id: string;
	name: string;
	src: string;
}

interface IListCardProps {
	produto: ICardProps[];
}

const Card = ({ produto }: IListCardProps) => {
	const { handlePushProduct } = UseCart();

	return (
		<>
			{produto ? (
				produto.map(produto => (
					<ContentCard key={produto.id}>
						<Image
							src={`/${produto.src}`}
							alt={produto.id}
							width={100}
							height={150}
						/>
						<h1>{produto.name}</h1>
						<Button
							variant="contained"
							startIcon={<ShoppingCartIcon />}
							onClick={() => handlePushProduct(produto.id)}
						>
							+ Carrinho
						</Button>
					</ContentCard>
				))
			) : (
				<CircularProgress />
			)}
		</>
	);
};

export default Card;
