import { IUserLogin } from '../../interfaces/IUser';
import { api } from '../api';

const delay = (amount = 750) =>
  new Promise(resolve => setTimeout(resolve, amount));

const login = async ({ email, password }: IUserLogin) => {
  await delay();

  const userResponse = await api.post('user/login', { email, password });

  return userResponse?.data || [];
};

export { login };
