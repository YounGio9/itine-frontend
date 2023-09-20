import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const transactions = [...Array(24)].map((_, index) => ({
  id: faker.datatype.number(),
  client: faker.name.fullName(),
  amount: faker.commerce.price(100, 800, 0, '€'),
  method: faker.finance.transactionType(),
  date: faker.date.birthdate(),
}));

export default transactions;
