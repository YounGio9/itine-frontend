import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const orders = [...Array(24)].map((_, index) => ({
  id: index,
  client: faker.name.fullName(),
  status: sample(['termine', 'en cours']),
  date: faker.date.birthdate(),
  price: faker.commerce.price(100, 800, 0, '€'),
}));

export default orders;
