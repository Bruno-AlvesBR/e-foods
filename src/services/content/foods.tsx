import { api } from '../api';

const delay = (amount = 750) =>
  new Promise(resolve => setTimeout(resolve, amount));

const findAll = async () => {
  await delay();

  const foodService = await api.get('product/foods');

  return foodService?.data || [];
};

const findBySlug = async (slug: string | any) => {
  await delay();

  const foodResponse = await api.get(`product/${slug}`);

  return foodResponse?.data ?? {};
};

export { findAll, findBySlug };
