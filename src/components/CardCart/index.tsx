import { Button, CircularProgress } from "@material-ui/core";
import Image from "next/image";

import { UseCart } from "../../hooks/Cart";

import { Container, Content, ContentCardsGroup, ContentCard } from "./style";

interface ICardProps {
  id: string;
  name: string;
  src: string;
  price: number;
}

interface IListCardProps {
  produto: ICardProps[];
}

const CardCart = ({ produto }: IListCardProps) => {
  const { handleRemoveProductCart } = UseCart();

  return (
    <Container>
      {produto ? (
        <>
          <ContentCardsGroup>
            {produto.flat(Infinity).map(produto => (
              <ContentCard key={produto.id}>
                <Image
                  src={`/${produto.src}`}
                  alt={produto.id}
                  width={100}
                  height={100}
                />
                <h1>{produto.name}</h1>
                <Button
                  variant="contained"
                  onClick={() => handleRemoveProductCart(produto.id)}
                >
                  Retirar
                </Button>
              </ContentCard>
            ))}
          </ContentCardsGroup>
          <Content></Content>
        </>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default CardCart;
