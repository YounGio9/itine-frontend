import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const transactions = [...Array(24)].map((_, index) => ({
  id: faker.datatype.number(),
  client: faker.name.fullName(),
  amount: faker.commerce.price(100, 800, 0, '€'),
  method: sample(['Carte de crédit', 'Paiement a la livraison']),
  date: faker.date.birthdate(),
}));

export default transactions;
