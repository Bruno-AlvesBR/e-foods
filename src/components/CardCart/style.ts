import { styled } from '@material-ui/core';

export const Container = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  gap: 10,

  '@media (max-width: 650px)': {
    flexDirection: 'column',
  },
}));

export const ContentCard = styled('span')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 'fit-content',
  maxHeight: 75,
  flex: 1,
  position: 'relative',

  '& span': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  '@media (max-width: 850px)': {
    '& h1': {
      fontSize: '1rem',
    },

    '& button': {
      width: 'fit-content',
    },
  },

  '@media (max-width: 400px)': {
    '& h1': {
      fontSize: '.70rem',
    },
  },
}));

export const Content = styled('span')(() => ({
  width: 300,
  height: 450,
  background: '#fff',
  boxShadow: '0 0 10px #00000020',
  margin: '0 10px 10px 0',

  '@media (max-width: 650px)': {
    width: '100%',
  },
}));

export const ContentCardsGroup = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  background: '#fff',
  boxShadow: '0 0 10px #00000020',
  height: 'fit-content',
  padding: 15,
}));
