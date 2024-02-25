import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
// @mui
import { Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// components
import { ProductSort, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import Iconify from '../components/iconify';

import { deleteProduct, getProducts } from '../services/product.service';
import Loading from '../components/UI/Loading';
import { useToggleDots } from '../utils/dotToggle';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  const { dotOpen, toggleDots } = useToggleDots();

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  // getproducts
  useEffect(() => {
    const getPrds = async () => {
      try {
        setLoading(true);
        const response = await getProducts();
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
      }
    };
    getPrds();
  }, []);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Dashboard: Products | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Articles
          </Typography>
          <Button
            href="/admin/addproducts"
            className="bg-blue-700"
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Nouvel Article
          </Button>
        </Stack>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        {loading ? (
          <Loading />
        ) : (
          <div className="container mx-auto my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products?.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg p-4 relative">
                  <button
                    type="button"
                    className={`${
                      dotOpen[product.id] ? 'md:hover:bg-transparent md:border-0' : ''
                    } pl-3 pr-4 py-2 md:hover:text-red-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto`}
                    onClick={() => toggleDots(product.id)}
                  >
                    <svg
                      className=" w-10 absolute top-0 right-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
                          stroke="#000000"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </button>
                  {/* dots menu */}
                  <div
                    id={`dots-${product.id}`}
                    className={`${
                      dotOpen[product.id] ? 'block' : 'hidden'
                    } bg-white text-base list-none absolute  divide-gray-100 rounded shadow my-4 md:w-44 right-0 top-6`}
                  >
                    <ul className="py-1" aria-labelledby={`dots-${product.id}`}>
                      {/* <li>
                      <Link to="#" className="text-sm block text-start hover:bg-gray-100 text-gray-700 px-4 py-2">
                        Modifier
                      </Link>
                    </li> */}
                      <li>
                        <Link
                          to="#"
                          className="text-sm text-start hover:bg-gray-100 text-gray-700 block px-4 py-2"
                          onClick={() => handleDelete(product.id)}
                        >
                          Supprimer
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <img
                    src={product.images[product.cover - 1]}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-blue-500 font-semibold">{product.price} €</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
