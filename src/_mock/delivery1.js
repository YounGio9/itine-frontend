import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const delivery1 = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['actif', 'innactif']),
  role: sample([
    'Paris',
    'Marseille',
    'lille',
    'Montpellier',
    'Lyon',
  ]),
}));

export default delivery1;
