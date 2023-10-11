import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Orders from './pages/OrderPage';
import Transactions from './pages/TransactionsPage';
import Categorie from './pages/CategoriePage';
import MessagePage from './pages/MessagesPage';
import AddProducts from './pages/AddProducts';
import AddUser from './pages/AddUser';
import Delivery from './pages/DeliveryPage';
import AddDelivery from './pages/AddDelivery';
import CityPage from './pages/CityPage';
import { AuthContextProvider } from './contexts/AuthContext';
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/admin',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/admin/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'orders', element: <Orders /> },
        { path: 'transactions', element: <Transactions /> },
        { path: 'categories', element: <Categorie /> },
        { path: 'chat', element: <MessagePage /> },
        { path: 'addproducts', element: <AddProducts /> },
        { path: 'adduser', element: <AddUser /> },
        { path: 'delivery', element: <Delivery /> },
        { path: 'adddelivery', element: <AddDelivery /> },
        { path: 'city', element: <CityPage /> },
      ],
    },
    {
      path: '/admin/login',
      element: (
        <AuthContextProvider>
          <LoginPage />
        </AuthContextProvider>
      ),
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/admin/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}