import React, { useEffect, useState } from 'react';
import '../tailwind.css';
import { Link } from 'react-router-dom';

import { createCategory, deleteCategories, getCategories } from '../services/category.service';
import { useToggleDots } from '../utils/dotToggle';
import Loading from '../components/UI/Loading';

export default function CategoriePage() {
  const [image, setImage] = React.useState();
  const [base64UrlImage, setBase64UrlImage] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState([]);
  const { dotOpen, toggleDots } = useToggleDots();

  // getCategories
  useEffect(() => {
    const getCtg = async () => {
      try {
        setLoading(true);
        const response = await getCategories();
        setCategories(response.data.filter((cat) => cat.image != null));
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
      }
    };
    getCtg();
  }, []);

  const handleDelete = async (id) => {
    setCategories((prev) => prev.filter((city) => city.id !== id));
    await deleteCategories(id);
  };

  const handleSelectImage = (e) => {
    setImage(e.target.files[0]);
  };

  React.useEffect(() => {
    console.log(image);
    if (image) previewFile(image);
  }, [image]);

  const [category, setCategory] = React.useState({
    name: '',
    image: '',
  });

  const handleChangeName = (e) => {
    setCategory({
      ...category,
      name: e.target.value,
    });
  };

  const previewFile = (file) => {
    console.log('image', image);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBase64UrlImage(reader.result);
    };
  };

  React.useMemo(() => {
    console.log(category);
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('base64UrlImage', base64UrlImage);
    console.log('product', category);
    const payload = category;
    payload.image = base64UrlImage;

    if (Object.keys(payload).some((key) => !payload[key])) {
      return;
    }
    console.log('Données de la categorie à ajouter :', payload);
    setLoading(true);
    const data = await createCategory(payload);
    setMessage(data.message);
    setLoading(false);
  };

  return (
    <div>
      <div className=" md:flex justify-center">
        {/* form of modal add categorie */}
        <form onSubmit={handleSubmit} className=" md:w-1/3  text-center mb-20">
          <div className="flex space-x-10">
            <div className=" w-full ">
              <h2 className="text-2xl font-semibold mb-4">Ajouter une categorie</h2>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-blue-100  hover:bg-blue-200"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Cliquez pour ajouter l'image </span>
                    </p>
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-400">
                      SVG, PNG, JPG ou GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    onChange={handleSelectImage}
                    id="dropzone-file"
                    type="file"
                    name="dropzone-file"
                    className="hidden"
                    accept="image/png, image/jpeg"
                  />
                </label>
              </div>
              <div>
                <div className="my-4">
                  <span htmlFor="nom" className="block text-sm font-medium text-gray-700">
                    Nom de la catégorie
                  </span>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    onChange={handleChangeName}
                    className="mt-1 p-2 w-full border rounded-lg"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="bg-blue-500 text-white  py-2 w-1/2  rounded hover:bg-blue-600">
                Valider
              </button>
            </div>
          </div>
        </form>
        {loading ? (
          <Loading />
        ) : (
          <div className="md:w-2/3 px-10 flex flex-wrap -m-4">
            {categories.map((category) => (
              <div key={category.id} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
                <div className="mx-auto bg-white rounded-lg shadow-lg max-w-sm relative">
                  {/* dot button */}
                  <button
                    type="button"
                    className={`${
                      dotOpen[category.id] ? 'md:hover:bg-transparent md:border-0' : ''
                    } pl-3 pr-4 py-2 md:hover:text-red-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto`}
                    onClick={() => toggleDots(category.id)}
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
                    id={`dots-${category.id}`}
                    className={`${
                      dotOpen[category.id] ? 'block' : 'hidden'
                    } bg-white text-base list-none absolute  divide-gray-100 rounded shadow my-4 md:w-44 right-0 top-6`}
                  >
                    <ul className="py-1" aria-labelledby={`dots-${category.id}`}>
                      {/* <li>
                      <Link to="#" className="text-sm block text-start hover:bg-gray-100 text-gray-700 px-4 py-2">
                        Modifier
                      </Link>
                    </li> */}
                      <li>
                        <Link
                          to="#"
                          className="text-sm text-start hover:bg-gray-100 text-gray-700 block px-4 py-2"
                          onClick={() => handleDelete(category.id)}
                        >
                          Supprimer
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <img src={category.image} alt={category.name} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{category.name}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
