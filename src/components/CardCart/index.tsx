import { Button, CircularProgress } from "@material-ui/core"
import Image from "next/image"

import { UseCart } from "../../hooks/Cart"
import { CalItemsCart } from "../../utils/CalcItemsCart"

import { Container, Content, ContentCardsGroup, ContentCard } from "./style"

interface ICardProps {
  id: string
  name: string
  src: string
  price: number
}

interface IListCardProps {
  produto: ICardProps[]
}

const CardCart = ({ produto }: IListCardProps) => {
  const { handleRemoveProductCart } = UseCart()

  return (
    <Container>
      {produto ? (
        <>
          <ContentCardsGroup>
            {produto.flat(Infinity).map((produto, index) => (
              <ContentCard key={index}>
                <Image
                  src={`/${produto.src}`}
                  alt={produto.id}
                  width={100}
                  height={150}
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
          <Content>
            {produto.flat(Infinity).map(produto => {
              return CalItemsCart([produto.price])
            })}
          </Content>
        </>
      ) : (
        <CircularProgress />
      )}
    </Container>
  )
}

export default CardCart
