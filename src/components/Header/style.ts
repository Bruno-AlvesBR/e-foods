import { AppBar, Badge, styled } from '@material-ui/core';

export const Navbar = styled(AppBar)(() => ({
  position: 'relative',
  boxShadow: '0 0 10px #00000020',
  background: '#fff',
  height: 80,
}));

export const LinkCart = styled(Badge)(() => ({
  width: 25,
}));