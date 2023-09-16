import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import search from "../../assets/search.png"
import delivery from "../../assets/Delivery.png"
import deliveryData from '../../data/delivery';

export default function Delivery() {
  const [data, setData] = useState(deliveryData);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };
  return (
    <div className='p-4 lg:ml-64 mx-auto z-0'>
      <div className=' flex justify-between items-center'>
        {/* input for search */}
        <div className='hidden md:block w-full'>
          <div className="relative flex mt-10">
            <input type="search" placeholder="" className="p-3 border-2 w-1/2 ml-20 border-r-0" />
            <Link to="#"> <img src={search} alt="search" className="w-14 border p-3 mr-0" /></Link>
          </div>
        </div>
        <div className=''>
          <img src={delivery} alt="delivery" className='' />
        </div>
      </div>
      {/* list for delivery */}
      <div className=' mb-40'>
        <div>
          <ul className="md:flex mb-2 p-4 rounded">
            <li className="flex-1 font-bold uppercase">NOMS</li>
            <li className="flex-1 font-bold uppercase">Genres</li>
            <li className="flex-1 font-bold uppercase">Boutique</li>
            <li className="flex-1 font-bold uppercase">Date de Dernière Livraison</li>
            <li className="flex-1 font-bold uppercase">Adresse de Livraison</li>
            <li className="flex-1"></li>
            <li className="flex-1"></li>
          </ul>
          <ul className="space-y-2">
            {deliveryData.map((data, index) => (
              <li key={index} className="bg-[#FCFCFC] hover:bg-[#F9DEE1] p-4 rounded md:flex justify-between items-center">
                <div className="flex-1 font-medium ">{data.NOM}</div>
                <div className="flex-1">{data.Genre}</div>
                <div className="flex-1">{data.Boutique}</div>
                <div className="flex-1">{data["Date de Dernière Livraison"]}</div>
                <div className="flex-1">{data["Adresse de Livraison"]}</div>
                <div className="flex-1">
                  <button
                    className="bg-[#DFC679] hover:bg-yellow-500 text-white px-4 py-2 rounded"
                  >
                    Modifier
                  </button>
                </div>
                <div className="flex-1">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(data.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mt-10"
        >
          Ajouter un livreur
        </button>
      </div>
    </div>
  )
}
