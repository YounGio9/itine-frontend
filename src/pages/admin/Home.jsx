import React from "react";
import livreur from "../../assets/livreur.png";
import message from "../../assets/message.png";
import boutique from "../../assets/boutique.png";
import articles from "../../assets/articles.png";
import vetements_child1 from "../../assets/vetement-child1.png";
import cosmetic1 from "../../assets/cosmetic1.png";
import vetements_homme from "../../assets/vetement-homme.png";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-20">
          <Link
            to="/admin/livreur"
            className="bg-gray-100 p-4 rounded-lg shadow-md hover:animate-pulse"
          >
            <img src={livreur} alt="livreur" className=" w-1/2 mx-auto" />
            <h3 className=" text-xl font-bold text-red-500 my-5">
              {" "}
              Voir les demandes
            </h3>
          </Link>
          <Link
            to="/admin/message"
            className="bg-gray-100 p-4 rounded-lg shadow-md hover:animate-pulse"
          >
            <img src={message} alt="livreur" className=" w-1/2 mx-auto" />
            <h3 className=" text-xl font-bold text-red-500 my-5">Messages</h3>
          </Link>
          <Link
            to="/admin/article"
            className="bg-gray-100 p-4 rounded-lg shadow-md hover:animate-pulse"
          >
            <img src={articles} alt="livreur" className=" w-1/2 mx-auto" />
            <h3 className=" text-xl font-bold text-red-500 my-5">Articles</h3>
          </Link>
          <Link
            to="/admin/shop"
            className="bg-gray-100 p-4 rounded-lg shadow-md hover:animate-pulse"
          >
            <img src={boutique} alt="livreur" className=" w-1/2 mx-auto" />
            <h3 className=" text-xl font-bold text-red-500 my-5">Boutiques</h3>
          </Link>
        </div>
        <div>
          <h3 className=" text-start text-4xl font-bold">Récemment ajoutés</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-20">
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
