import { styled } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const Container = styled('div')(() => ({
  '& button': {
    width: 'fit-content',
  },
}));

export const ButtonAdd = styled(Button)(() => ({
  width: 'fit-content',
}));

export const ButtonRemove = styled(Button)(() => ({
  width: 'fit-content',
}));

export const InputAmount = styled(TextField)(() => ({
  width: 20,
  height: 20,
  textAlign: 'center',
}));
