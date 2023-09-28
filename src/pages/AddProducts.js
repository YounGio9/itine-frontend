import React from 'react';

export default function AddProducts() {
  return (
    <div>
      <div className=" flex justify-between mb-10">
        <h3 className=" text-xl font-bold">Ajouter un nouveau produit</h3>
        <div>
          <button type="button" className=" bg-blue-700 mr-3 p-3 px-4 rounded-md text-white font-bold mb-3">
            Enregistrer
          </button>
          <button type="submit" className=" bg-slate-500 mr-3 p-3 px-4 rounded-md text-white font-bold">
            Publier maintenant
          </button>
        </div>
      </div>
      <div className=" lg:flex justify-center my-3">
        {/* form of add article */}
        <form className="lg:w-2/3 px-8 py-6 bg-slate-100">
          <div className="flex justify-center">
            <div className=" w-full ">
              <div>
                <div className="my-4">
                  <span htmlFor="nom" className="block text-sm font-medium text-gray-700">
                    Titre du produit
                  </span>
                  <input type="text" id="nom" name="nom" className="mt-1 p-2 w-full border rounded-lg" required />
                </div>
                <div>
                  <div className="lg:flex">
                    <div className=" w-1/3">
                      <span htmlFor="nom" className="block text-sm font-medium text-gray-700">
                        Couleur
                      </span>
                      <input type="text" placeholder="Couleur" className="p-2 mr-2 rounded-lg border border-gray-300" />
                    </div>
                    <div className=" w-1/3">
                      <span htmlFor="nom" className="block text-sm font-medium text-gray-700">
                        Couleur
                      </span>
                      <input type="text" placeholder="Couleur" className="p-2 rounded-lg border border-gray-300" />
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <span htmlFor="nom" className="block text-sm font-medium text-gray-700">
                    Marque
                  </span>
                  <input type="text" id="Marque" name="Marque" className="mt-1 p-2 w-full border rounded-lg" required />
                </div>
                <div>
                  <input
                    className=" w-full border rounded-sm bg-white p-2 overflow-hidden cursor-pointer block"
                    type="file"
                    multiple
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
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        <form className="lg:w-1/3 p-4 mx-4 bg-slate-100">
          <div className=" w-full ">
            <div>
              <div className="my-4">
                <span htmlFor="Prix" className="block text-sm font-medium text-gray-700">
                  Prix
                </span>
                <input
                  type="number"
                  id="Prix"
                  name="Prix"
                  className="mt-1 p-2 w-full border rounded-lg"
                  placeholder=" Prix"
                  required
                />
              </div>
              <div className="my-5">
                <span htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Statut
                </span>
                <select className=" w-full bg-white p-3 rounded-md focus:border-blue-400 border border-blue-500">
                  <option value="manger">Publié</option>
                  <option value="dormir">Enregistrer</option>
                </select>
              </div>
              <div>
                <h4>Lesquelles des images voulez-vous prendre comme couverture de l'article?</h4>
                <div className=" block my-3">
                  <span className=" bg-gray-200 cursor-pointer p-2 mr-4"> image 1</span>
                  <span className=" bg-gray-200 cursor-pointer p-2 mr-4"> image 2</span>
                  <span className=" bg-gray-200 cursor-pointer p-2 mr-4"> image 3</span>
                </div>
              </div>
              <div className="mt-10">
                <h4>Catégories</h4>
                <div>
                  <div>
                    <input type="checkbox" /> <span>Jeans</span>
                  </div>
                  <div>
                    <input type="checkbox" /> <span>Chemises de cérémonie</span>
                  </div>
                  <div>
                    <input type="checkbox" /> <span>Chemises pour femmes</span>
                  </div>
                  <div>
                    <input type="checkbox" /> <span>Électronique</span>
                  </div>
                  <div>
                    <input type="checkbox" /> <span>Mobiles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
