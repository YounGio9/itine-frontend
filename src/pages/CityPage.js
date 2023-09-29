import React, { useState } from 'react';
import deliverydata from '../_mock/deliverydata';

export default function CityPage() {
  const [data, setData] = useState(deliverydata);
  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };
  return (
    <div>
      <div className=" lg:flex justify-center">
        {/* form of modal add city */}
        <form className=" lg:w-1/3  text-center">
          <div className="flex space-x-10">
            <div className=" w-full ">
              <h2 className="text-2xl font-semibold mb-4">Ajouter une ville</h2>

              <div className="my-4">
                <span htmlFor="nom" className="block text-sm font-medium text-gray-700">
                  Nom de la ville
                </span>
                <input type="text" id="city" name="city" className="mt-1 p-2 w-full border rounded-lg" required />
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

              <button type="submit" className="bg-blue-500 text-white  py-2 w-1/2 mt-3  rounded hover:bg-blue-600">
                Valider
              </button>
            </div>
          </div>
        </form>
        <div className="lg:w-2/3  px-10 ">
          <div>
            <ul className="flex mb-2 p-4 rounded">
              <li className="flex-1 font-bold uppercase">Villes</li>
              {/* <li className="flex-1 font-bold uppercase">Boutique</li> */}
              <li className="flex-1 font-bold uppercase">Statut</li>
              <li className="flex-1 font-bold uppercase"> {''} </li>
              <li className="flex-1 font-bold uppercase"> {''} </li>
            </ul>
            <ul className="space-y-2">
              {deliverydata.map((data, index) => (
                <li
                  key={index}
                  className="bg-[#FCFCFC] hover:bg-gray-100 p-4 rounded flex justify-between items-center"
                >
                  <div className="flex-1">{data.Ville}</div>
                  {/* <div className="flex-1">{data.Boutique}</div> */}
                  <div className="flex-1">{data.Statut}</div>
                  <div className="flex mx-4">
                    <button
                      className="bg-[#DFC679] hover:bg-yellow-500 text-white px-2 py-2 rounded text-sm"
                      type="button"
                    >
                      Modifier
                    </button>
                  </div>
                  <div className="flex-1">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded text-sm"
                      type="button"
                      onClick={() => handleDelete(data.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
