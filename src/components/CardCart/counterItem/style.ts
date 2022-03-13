import { Button, styled, TextField } from '@material-ui/core';

export const Container = styled('div')(() => ({
  '& button': {
    width: 'fit-content'
  }
}));

export const ButtonAdd = styled(Button)(() => ({
  width: 'fit-content'
}));

export const ButtonRemove = styled(Button)(() => ({
  width: 'fit-content'
}));

export const InputAmount = styled(TextField)(() => ({
  width: 20,
  height: 20,
  textAlign: 'center'
}));