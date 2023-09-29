import React, { useState } from 'react';
import '../tailwind.css';

import categorie1 from '../assets/chaussure.jpg';
import categorie2 from '../assets/vetement_femme.jpg';
import categorie3 from '../assets/vetement_homme.jpg';
import categorie4 from '../assets/groupevetement.jpg';
import { createCategory } from '../services/category.service';

export default function CategoriePage() {
  const [image, setImage] = React.useState();
  const [base64UrlImage, setBase64UrlImage] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

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
        <form onSubmit={handleSubmit} className=" md:w-1/3  text-center">
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
                {/* <div className="mt-5">
                  <span htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </span>
                  <textarea
                    id="description"
                    name="description"
                    // value={product.description}
                    // onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-lg"
                    rows="4"
                    required
                  />
                </div> */}
              </div>
              <button type="submit" className="bg-blue-500 text-white  py-2 w-1/2  rounded hover:bg-blue-600">
                Valider
              </button>
            </div>
          </div>
        </form>
        <div className=" md:w-2/3  px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="mx-auto my-4 bg-white rounded-lg shadow-lg">
            <img src={categorie1} alt="categorie1" className="w-full h-auto rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">categorie1</h2>
              <p className=" font-medium"> description</p>
            </div>
          </div>
          <div className="mx-auto my-4 bg-white rounded-lg shadow-lg">
            <img src={categorie2} alt="categorie1" className="w-full h-auto rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">categorie2</h2>
            </div>
          </div>
          <div className="mx-auto my-4 bg-white rounded-lg shadow-lg">
            <img src={categorie3} alt="categorie1" className="w-full h-auto rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">categorie3</h2>
            </div>
          </div>
          <div className="mx-auto my-4 bg-white rounded-lg shadow-lg">
            <img src={categorie4} alt="categorie1" className="w-full h-auto rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">categorie4</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
