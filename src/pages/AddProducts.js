import React, { useState, useMemo, useEffect } from 'react';
import Loading from '../components/UI/Loading';
import { createProduct } from '../services/product.service';
import { getCategories } from '../services/category.service';
import { getCities } from '../services/city.service';

export default function AddProducts() {
  const [base64UrlImages, setBase64UrlImages] = useState([]);
  const [activeCover, setActiveCover] = useState(1);
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);

  // getCities
  useEffect(() => {
    const getCty = async () => {
      try {
        const response = await getCities();
        console.log(response);
        setCities(response);
      } catch (error) {
        console.error('Erreur lors du chargement des villes:', error);
      }
    };

    getCty();
  }, []);

  // getCategories
  useEffect(() => {
    const getCtg = async () => {
      try {
        const response = await getCategories();
        console.log(response.data);
        setCategories(response.data.filter((cat) => cat.image != null));
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
      }
    };
    getCtg();
  }, []);

  const handleSelectImages = (e) => {
    if (!images.map((img) => img.name).includes(e.target.files[0].name)) setImages([...images, ...e.target.files]);
  };

  const handleSelectCategory = (e) => {
    console.log(e.target.checked);

    if (e.target.checked) {
      handleChange(e);
    } else {
      setProduct({
        ...product,
        categories: product.categories.filter((cat) => cat !== e.target.value),
      });
    }
  };

  const handleCities = (e) => {
    console.log(e.target.checked);

    if (e.target.checked) {
      handleChange(e);
    } else {
      setProduct({
        ...product,
        cities: product.cities.filter((cit) => cit !== e.target.value),
      });
    }
  };

  const handleGenders = (e) => {
    console.log(e.target.checked);

    if (e.target.checked) {
      handleChange(e);
    } else {
      setProduct({
        ...product,
        genders: product.genders.filter((gend) => gend !== e.target.value),
      });
    }
  };

  const handleSelectCover = (idx) => {
    setActiveCover(idx);
    setProduct({
      ...product,
      cover: idx,
    });
  };

  React.useEffect(() => {
    console.log(images);
    setBase64UrlImages([]);
    images.map((image) => previewFile(image));
  }, [images]);

  const previewFile = (file) => {
    console.log('images', images);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBase64UrlImages((prev) => [...prev, reader.result]);
    };
  };

  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('base64UrlImgs', base64UrlImages);
    console.log('base64Imgs.length', base64UrlImages.length);
    console.log('images.length', images.length);
  }, [base64UrlImages]);

  const [product, setProduct] = useState({
    name: '',
    price: '',
    cover: 1,
    categories: [],
    cities: [],
    genders: [],
    description: '',
    sizes: [],
    colors: [],
    availableQuantity: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!['images', 'sizes', 'categories', 'colors'].includes(name))
      setProduct({
        ...product,
        [name]: value,
      });

    if (['colors', 'sizes'].includes(name)) {
      console.log('colors', name);
      setProduct({
        ...product,
        [name]: value.replace(/\s+/g, ' ').split(' '),
      });
    }
  };

  const [loading, setLoading] = useState(false);

  useMemo(() => {
    console.log(product);
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('base64UrlImages', base64UrlImages);
    console.log('product', product);
    const payload = product;
    payload.availableQuantity = parseInt(payload.availableQuantity, 10);
    payload.images = base64UrlImages;
    payload.price = +payload.price;

    if (
      Object.keys(payload)
        .filter((key) => key !== 'soldOut')
        .some((key) => !payload[key])
    ) {
      return;
    }
    payload.soldOut = false;
    console.log('Données du produit à ajouter :', payload);
    setLoading(true);
    const data = await createProduct(payload);
    setMessage(data.message);
    setLoading(false);
  };

  if (loading) return <Loading />;
  return (
    <form onSubmit={handleSubmit}>
      <p>{message}</p>
      <div className=" flex justify-between mb-10">
        <h3 className=" text-xl font-bold">Ajouter un nouveau produit</h3>
        <div>
          <button type="submit" className=" bg-slate-500 mr-3 p-3 px-4 rounded-md text-white font-bold">
            Publier maintenant
          </button>
        </div>
      </div>
      <div className=" lg:flex justify-center my-3">
        {/* form of add article */}
        <div className="lg:w-2/3 px-8 py-6 bg-slate-100">
          <div className="flex justify-center">
            <div className=" w-full ">
              <div>
                <div className="my-4">
                  <span htmlFor="nom" className="block text-sm font-medium text-gray-700">
                    Titre du produit
                  </span>
                  <input
                    type="text"
                    id="name"
                    onChange={handleChange}
                    name="name"
                    className="mt-1 p-2 w-full border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <div className="lg:flex">
                    <div className="">
                      <span htmlFor="color1" className="block text-sm font-medium text-gray-700">
                        Couleurs (Veuillez entrer les codes couleurs séparés par des espaces)
                      </span>
                      <input
                        type="text"
                        onChange={handleChange}
                        name="colors"
                        id="color1"
                        placeholder="Couleur"
                        className="p-2 mr-2 rounded-lg border border-gray-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <span htmlFor="availableQuantity" className="block text-sm font-medium text-gray-700">
                    Quantité disponible
                  </span>
                  <input
                    type="number"
                    id="availableQuantity"
                    name="availableQuantity"
                    className="mt-1 p-2 w-full border rounded-lg"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    className=" w-full border rounded-sm bg-white p-2 overflow-hidden cursor-pointer block"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleSelectImages}
                  />
                </div>
                <div className="mt-5">
                  <span htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </span>
                  <textarea
                    id="description"
                    name="description"
                    className="mt-1 p-2 w-full border rounded-lg"
                    rows="4"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 p-4 mx-4 bg-slate-100">
          <div className=" w-full ">
            <div>
              <div className="my-4">
                <span htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Prix
                </span>
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="mt-1 p-2 w-full border rounded-lg"
                  placeholder=" Prix"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <h4>Lesquelles des images voulez-vous prendre comme couverture de l'article?</h4>
                <div className={` block my-3 `}>
                  {images.map((_, idx) => (
                    <button
                      type="button"
                      // onKeyPress={() => handleSelectCover(idx)}
                      key={idx}
                      onClick={() => handleSelectCover(idx + 1)}
                      className={`${
                        activeCover === idx + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                      }  cursor-pointer p-2 mr-4 `}
                    >
                      {' '}
                      image {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="lg:flex">
                  <div className="">
                    <span htmlFor="color1" className="block text-sm font-medium text-gray-700">
                      Tailles (Veuillez entrer les tailles séparées par des espaces)
                    </span>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="sizes"
                      id="color1"
                      placeholder="M XL S"
                      className="p-2 mr-2 rounded-lg border border-gray-300"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h4>Catégories</h4>
                <div className=" my-2 flex flex-wrap gap-4">
                  {categories.map((category, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        name="categories"
                        className="mr-1"
                        onChange={handleSelectCategory}
                        value={category.name}
                      />
                      <span>{category.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" lg:flex justify-between">
                <div className="mt-5">
                  <h4>Ville</h4>
                  <div className=" my-2">
                    {cities.map((cities, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          name="cities"
                          className="mr-1 my-2"
                          onChange={handleCities}
                          value={cities.name}
                        />
                        <span>{cities.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <h4>Genre</h4>
                  <div className=" my-2">
                    <input type="checkbox" name="genders" value="man" className="mr-1" onChange={handleGenders} />
                    <span>Homme</span>
                  </div>
                  <div className=" my-2">
                    <input type="checkbox" name="genders" value="woman" className="mr-1" onChange={handleGenders} />
                    <span>Femme</span>
                  </div>
                  <div className=" my-2">
                    <input type="checkbox" name="genders" value="child" className="mr-1" onChange={handleGenders} />
                    <span>Enfant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
