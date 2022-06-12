import Rating from '@mui/material/Rating';
import Image from 'next/image';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

import { IProductProps } from '../../../../interfaces/IProduct';
import { useCart } from '../../../../hooks/Cart';

import {
  Container,
  Content,
  ContentImage,
  ButtonCart,
  ContentInfos,
  ContentInstallment,
  ContentPrices,
  ContentRating,
  Description,
  TextBold,
  Title,
} from './styles';
import { ContentHeader } from '../../../../styles/carrinho.module';
import { Box } from '@material-ui/core';

const ProductFood: React.FC<IProductProps> = ({ ...item }) => {
  const [router, { handlePushProduct }] = [useRouter(), useCart()];

  const handleBackToHome = () => router.push('/');

  return (
    <>
      <ContentHeader>
        <h2 onClick={handleBackToHome}>Home</h2>
        {' / '}
        <h2>{item?.slug}</h2>
      </ContentHeader>
      <Container>
        <ContentImage>
          {item?.image?.desktopSrc && (
            <Image
              src={item?.image?.desktopSrc}
              alt={item?.title}
              layout="fill"
            />
          )}
        </ContentImage>
        <Content>
          <Title>{item?.title}</Title>
          <ContentPrices>
            <span>
              <TextBold>Preço:</TextBold> R${' '}
              {item?.price?.priceNumber}
              ,00
            </span>
            {item?.price?.installment !== 0 && (
              <ContentInstallment>
                <span>
                  <TextBold>Meses de parcelamento:</TextBold>{' '}
                  {item?.price?.installment?.monthInstallment}
                </span>
                <span>
                  <TextBold>Preço p/ mês:</TextBold>
                  R$ {item?.price?.installment?.pricePerMonth},00
                </span>
              </ContentInstallment>
            )}
          </ContentPrices>
          <ContentInfos>
            <p>
              <TextBold>Categoria:</TextBold> {item?.category}
            </p>
            <p>
              <TextBold>Marca:</TextBold> {item?.brand}
            </p>
            <p>
              <TextBold>Fabricante:</TextBold> {item?.manufacture}
            </p>
            <p>
              <TextBold>Atualizado em:</TextBold>{' '}
              {dayjs(item?.updatedAt).format('DD/MM/YYYY')}
            </p>
          </ContentInfos>
          <ContentRating>
            <TextBold>Avaliação:</TextBold>{' '}
            <Rating precision={0.5} value={item?.rating} readOnly />
          </ContentRating>
          <Box mb={5} mt={1.5}>
            <ButtonCart onClick={() => handlePushProduct(item?.id)}>
              Adicionar ao carrinho
            </ButtonCart>
          </Box>
          <Description
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <TextBold>Descrição:</TextBold>
            {item?.description}
          </Description>
        </Content>
      </Container>
    </>
  );
};

export default ProductFood;
