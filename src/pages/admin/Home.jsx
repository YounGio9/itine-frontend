import React from "react";
import vetements_child1 from "../../assets/vetement-child1.png";
import cosmetic1 from "../../assets/cosmetic1.png";
import vetements_homme from "../../assets/vetement-homme.png";
import capital from "../../assets/capital.png";
import customer from "../../assets/customer.png";
import shop from "../../assets/shop.png";
import delivery2 from "../../assets/delivery2.png";

import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <div className=" p-4 lg:ml-64 mx-auto z-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h3 className=" text-2xl font-bold">Capital</h3>
            <div className=" flex justify-between items-center pt-3">
              <h2 className="text-4xl font-bold">0$</h2>
              <img src={capital} className=" w-1/3" alt="capital" />
            </div>
          </div>
          <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h3 className=" text-2xl font-bold">Nombre de produits</h3>
            <div className=" flex justify-between items-center pt-6">
              <h2 className="text-4xl font-bold">18</h2>
              <img src={shop} className=" w-1/4" alt="shop" />
            </div>
          </div>
          <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h3 className=" text-2xl font-bold">Nombre de clients</h3>
            <div className=" flex justify-between items-center pt-6">
              <h2 className="text-4xl font-bold">56</h2>
              <img src={customer} className=" w-1/4" alt="customer" />
            </div>
          </div>
          <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h3 className=" text-2xl font-bold">Nombre de livreur</h3>
            <div className=" flex justify-between items-center pt-3">
              <h2 className="text-4xl font-bold">16</h2>
              <img src={delivery2} className=" w-1/4" alt="delivery2" />
            </div>
          </div>
        </div>
        <div className=" my-8">
          <h3 className=" text-start text-4xl font-bold">Récemment ajoutés</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
            <Link
              to="/admin/article"
              className="bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <img
                src={vetements_child1}
                alt="livreur"
                className=" w-1/2 mx-auto"
              />
              <h3 className=" text-xl font-bold text-black my-5">
                Complet enfants
              </h3>
            </Link>
            <Link
              to="/admin/article"
              className="bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <img src={cosmetic1} alt="livreur" className=" w-1/2 mx-auto" />
              <h3 className=" text-xl font-bold text-black my-5">Parfun</h3>
            </Link>
            <Link
              to="/admin/article"
              className="bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <img
                src={vetements_homme}
                alt="livreur"
                className=" w-1/2 mx-auto"
              />
              <h3 className=" text-xl font-bold text-black my-5">Pull homme</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
