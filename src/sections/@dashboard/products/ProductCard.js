import { useEffect, useState } from 'react';

// @mui
import { Card } from '@mui/material';

// ----------------------------------------------------------------------

import { getProducts } from '../../../services/product.service';

// ----------------------------------------------------------------------

export default function ShopProductCard() {
  const [products, setProducts] = useState([]);

  // getproducts
  useEffect(() => {
    const getPrds = async () => {
      try {
        const response = await getProducts();
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
      }
    };
    getPrds();
  }, []);

  return (
    <Card>{
      <div key={products.id} className="bg-white rounded-lg shadow-lg p-4">
        <img src={products.cover} alt={products.name} className="w-full h-40 object-cover mb-4" />
        <h2 className="text-xl font-semibold mb-2">{products.name}</h2>
        <p className="text-gray-600 mb-2">{products.description}</p>
        <p className="text-blue-500 font-semibold">{products.price} €</p>
      </div>}
    </Card>
  );
}
