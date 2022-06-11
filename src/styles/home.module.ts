import { styled } from '@material-ui/core';

export const Container = styled('div')(() => ({
  padding: 20,

  '@media (max-width: 650px)': {
    padding: '10px 5px',
  },
}));

export const ContainerProducts = styled('div')(() => ({
  display: 'flex',
  gap: 2,

  '@media (max-width: 650px)': {
    flexDirection: 'column',
  },
}));

export const ContentCards = styled('span')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
}));
