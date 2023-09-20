// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/admin/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Utilisateurs',
    path: '/admin/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Articles',
    path: '/admin/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Commandes',
    path: '/admin/orders',
    icon: '',
  },
  {
    title: 'Transactions',
    path: '/admin/transactions',
    icon: '',
  },
];

export default navConfig;
