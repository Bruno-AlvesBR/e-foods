import { styled } from '@material-ui/core';

export const Container = styled('div')(() => ({
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
}));

export const ContentHeader = styled('span')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 5,

  '& h2:first-child': {
    cursor: 'pointer',
    transition: '.2s all ease',

    '&:hover': {
      opacity: 0.5,
    },
  },
}));
