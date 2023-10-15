import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
// @mui
import { Button, Container, Stack, Typography } from '@mui/material';
// components
import { ProductSort, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import Iconify from '../components/iconify';

import { getProducts } from '../services/product.service';
import Loading from '../components/UI/Loading';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

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
                <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
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
