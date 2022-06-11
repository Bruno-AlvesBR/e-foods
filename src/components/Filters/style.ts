import { styled } from '@material-ui/core';

export const ContainerFilters = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 280,
  height: 'fit-content',
  background: '#fff',
  boxShadow: '0 0 10px #00000020',
  borderRadius: 10,
  padding: 10,
  gap: 5,

  '& h1': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  '@media (max-width: 650px)': {
    minWidth: 0,
    width: '100%',
  },
}));
