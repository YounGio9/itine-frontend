import React, { useCallback, useEffect, useMemo, useState } from "react";

function ModalAddArticle({ closeModal }) {
  const [base64UrlImages, setBase64UrlImages] = useState([]);

  const [images, setImages] = useState([]);

  const handleSelectImages = (e) => {
    if (!images.map((img) => img.name).includes(e.target.files[0].name))
      setImages([...images, ...e.target.files]);
  };

  React.useEffect(() => {
    console.log(images);
    images.map((image) => previewFile(image));
  }, [images]);

  const previewFile = (file) => {
    console.log("images", images);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBase64UrlImages((prev) => [...prev, reader.result]);
    };
  };

  useEffect(() => {
    console.log("base64UrlImgs", base64UrlImages);
  }, [base64UrlImages]);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    categories: "",
    description: "",
    sizes: [],
    colors: [],
    availableQuantity: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!["images", "sizes", "categories", "colors"].includes(name))
      setProduct({
        ...product,
        [name]: value,
      });
  };

  useMemo(() => {
    console.log(product);
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Now you can safely access the base64UrlImages state
    console.log("base64UrlImages", base64UrlImages);

    const payload = {};
    payload.images = base64UrlImages;

    console.log("Données du produit à ajouter :", payload);
  };

  return (
    <div>
      {/*form of modal add article*/}
      <h2 className="text-2xl font-semibold mb-4">Ajouter un produit</h2>
      <form onSubmit={handleSubmit} className=" w-full">
        <div className="flex  space-x-10">
          <div className=" w-1/2">
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
                    <span className="font-semibold">
                      Cliquez pour ajouter l'image{" "}
                    </span>
                  </p>
                  <p className="text-xs font-bold text-gray-700 dark:text-gray-400">
                    SVG, PNG, JPG ou GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  onChange={handleSelectImages}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  multiple
                  accept="image/png, image/jpeg"
                />
              </label>
            </div>
            <div>
              <div className="mt-5">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description du produit
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className=" w-1/2">
            <div className="mb-4">
              <label
                htmlFor="nom"
                className="block text-sm font-medium text-gray-700"
              >
                Nom du produit
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={product.nom}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="prix"
                className="block text-sm font-medium text-gray-700"
              >
                Prix du produit
              </label>
              <input
                type="number"
                id="prix"
                name="prix"
                value={product.prix}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="prix"
                className="block text-sm font-medium text-gray-700"
              >
                Tailles disponibles
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={product.prix}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="prix"
                className="block text-sm font-medium text-gray-700"
              >
                couleurs disponibles
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={product.prix}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="availableQuantity"
                className="block text-sm font-medium text-gray-700"
              >
                Quantite disponible
              </label>
              <input
                type="number"
                id="availableQuantity"
                name="availableQuantity"
                value={product.prix}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg"
                required
              />
            </div>

            <div className="flex space-x-3 items-center justify-center mt-5">
              <div className="space-y-5">
                <div className="inline-block">
                  <input
                    type="radio"
                    name="category"
                    id="enfants"
                    className="mr-2"
                  />{" "}
                  <label htmlFor="enfants">Enfants</label>
                </div>
                <div className="">
                  <input type="radio" name="category" id="femmes" />{" "}
                  <label htmlFor="femmes">Femmes</label>
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <input
                    type="radio"
                    name="category"
                    id="hommes"
                    className="mr-5"
                  />{" "}
                  <label htmlFor="hommes">Hommes</label>
                </div>
                <div>
                  <input type="radio" name="category" id="cosmetiques" />{" "}
                  <label htmlFor="cosmetiques">Cosmétiques</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex mt-10">
          <button
            type="button"
            onClick={closeModal}
            className="bg-gray-500 text-white py-2 w-1/2 mr-10 rounded hover:bg-gray-600"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="bg-red-500 text-white  py-2 w-1/2  rounded hover:bg-red-600"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalAddArticle;
