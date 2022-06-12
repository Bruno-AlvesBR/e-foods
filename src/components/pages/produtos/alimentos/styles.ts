import { Button, styled } from '@material-ui/core';
import Box from '@material-ui/core/Box';

export const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'relative',
  padding: 20,
  margin: '40px auto',
  width: '100%',
  maxWidth: 1280,
}));

export const ContentImage = styled(Box)(() => ({
  minHeight: 500,
  maxHeight: 500,
  width: '100%',
  minWidth: 500,
  maxWidth: 500,
  position: 'relative',
  boxShadow: '0px 0px 50px #00000010',

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

export const ButtonCart = styled(Button)(() => ({
  maxWidth: 'fit-content',
  margin: '15px auto 15px 0px',
  background: '#C4C4C4',
  padding: 15,
}));

export const Content = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  position: 'relative',
  marginLeft: 50,
  textAlign: 'left',
}));

export const Title = styled('h1')(() => ({
  fontSize: 40,
  fontWeight: 700,
}));

export const Description = styled('p')(() => ({
  fontSize: 26,
  fontWeight: 500,
  width: '100%',
}));

export const ContentPrices = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',

  '& > span': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
  },
}));

export const ContentInstallment = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  '& > span': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
  },

  '& span:first-child': { marginRight: 40 },
}));

export const ContentInfos = styled(Box)(() => ({
  '& p': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
  },
}));

export const TextBold = styled('p')(() => ({
  fontWeight: 700,
  fontSize: '20px !important',
  marginRight: 7,
  marginBottom: 4,
}));

export const ContentRating = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',

  '& p': { marginBottom: -1 },
}));
