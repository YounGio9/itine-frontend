import React from 'react';

export default function AddDelivery() {
  return (
    <div>
      <div className=" flex justify-between mb-10">
        <h3 className=" text-xl font-bold">Ajouter un nouveau Livreur</h3>
        <div>
          <button type="button" className=" bg-blue-700 mr-3 p-3 px-4 rounded-md text-white font-bold mb-3">
            Ajouter
          </button>
        </div>
      </div>
      <form className=" w-3/4 mx-auto px-8 py-6 bg-slate-100">
        <div className="flex justify-center">
          <div className=" w-full ">
            <div>
              <div className="my-4">
                <span htmlFor="nom" className="block text-sm font-medium text-gray-700">
                  Nom du livreur
                </span>
                <input type="text" id="nom" name="nom" className="mt-1 p-2 w-full border rounded-lg" required />
              </div>
              <div>
                <div className="md:flex">
                  <div className=" w-auto">
                    <span htmlFor="nom" className="block text-sm font-medium text-gray-700">
                      Boutique
                    </span>
                    <input type="text" placeholder="" className="p-2 mr-2 rounded-lg border border-gray-300" />
                  </div>
                  <div className="  w-auto">
                    <span htmlFor="nom" className="block text-sm font-medium text-gray-700">
                      Ville
                    </span>
                    <input type="text" placeholder=" leader" className="p-2 mr-2 rounded-lg border border-gray-300" />
                  </div>
                  <div className=" w-auto">
                    <span htmlFor="statut" className="block text-sm font-medium text-gray-700">
                      statut
                    </span>
                    <select className=" w-full p-2 mr-2 rounded-lg border border-gray-300">
                      <option value="actif" key="actif">
                        {' '}
                        Actif
                      </option>
                      <option value="actif" key="actif">
                        {' '}
                        inactif
                      </option>
                    </select>
                  </div>
                </div>
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
    </div>
  );
}
