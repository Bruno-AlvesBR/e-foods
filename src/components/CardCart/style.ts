import { styled } from '@material-ui/core';

export const Container = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: 0,

  '@media (max-width: 650px)': { flexDirection: 'column' },
}));

export const ContentCard = styled('span')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  maxHeight: 100,
  flex: 1,
  position: 'relative',
  padding: '20px 0px',
  marginBottom: 10,
  background: '#fff',
  boxShadow: '0 0 10px #00000020',

  '& > span': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  [theme.breakpoints.down(850)]: {
    '& h1': { fontSize: '1rem' },

    '& button': { width: 'fit-content' },
  },
  [theme.breakpoints.down(400)]: {
    '& h1': { fontSize: '.70rem' },
  },
}));

export const ContentImage = styled('div')(() => ({
  width: 100,
  height: 100,
  maxHeight: 100,
  position: 'relative',
  marginLeft: 25,

  '& img': {
    width: 100,
    height: 100,
  },
}));

export const Title = styled('h1')(({ theme }) => ({
  marginLeft: 15,
  fontSize: '1.5rem',

  [theme.breakpoints.down(850)]: {
    '& h1': { fontSize: '1rem' },
  },
  [theme.breakpoints.down(400)]: {
    '& h1': { fontSize: '.70rem' },
  },
}));

export const Content = styled('span')(() => ({
  width: 300,
  height: 450,
  background: '#fff',
  boxShadow: '0 0 10px #00000020',
  margin: '0 10px 10px 0',
  marginLeft: 'auto',

  '@media (max-width: 650px)': { width: '100%' },
}));

export const ContentGroup = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'fit-content',
  padding: '0px 15px 15px 0px',
}));
