// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`./assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

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
    icon: icon('ic_command'),
  },
  {
    title: 'Transactions',
    path: '/admin/transactions',
    icon: icon('ic_transaction'),
  },
  {
    title: 'Catégories',
    path: '/admin/categories',
    icon: icon('ic_category'),
  },
  {
    title: 'Ville',
    path: '/admin/city',
    icon: icon('ic_city'),
  },
  {
    title: 'Livreur',
    path: '/admin/delivery',
    icon: icon('ic_delivery'),
  },
  {
    title: 'Messages',
    path: '/admin/chat',
    icon: icon('ic_message'),
  },
];

export default navConfig;
