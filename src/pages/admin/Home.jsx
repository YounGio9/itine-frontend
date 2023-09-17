import React from "react";
import capital from "../../assets/capital.png";
import customer from "../../assets/customer.png";
import shop from "../../assets/shop.png";
import delivery2 from "../../assets/delivery2.png";

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
      </div>
    </>
  );
}
