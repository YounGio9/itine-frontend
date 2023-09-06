import React from 'react'
import add from "../../assets/add.png"
import { products_women, products_women2 } from "../../data/products_women"
export default function Clothes_Women() {
  return (
    <div>
      <div className='max-w-screen-xl mx-auto'>
        <h3 className=' text-start font-bold text-2xl my-10'>Vêtement à la une </h3>
        {/* Liste_for_clothes-Women1 */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {products_women.map((produit) => (
              <div
                className="bg-gray-100 p-4 rounded-lg shadow-md relative"
                key={produit.id}
              >
                <a href='# '>
                  <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </a>
                <img src={produit.image} alt={produit.nom} />
                {/* <h2>{produit.nom}</h2> */}
              </div>
            ))}
            <div class="bg-gray-200 p-4 rounded-lg shadow-md border-2 justify-center flex">
              <a href="# "> <img src={add} alt="addClothe " /></a>
            </div>
          </div>
          <div>
            <a href='# ' className=' text-red-700 text-md font-bold right-0 absolute flex items-center'>
              Voir tout
              <svg className=' mx-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 29" fill="none">
                <path d="M3 14.5H37M37 14.5L22.4286 3M37 14.5L22.4286 26" stroke="#DC3545" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Liste_for_clothes-Women1 */}
        <div>
          <h3 className=' text-start font-bold text-2xl my-10 mt-20'>Autre Vêtement</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {products_women2.map((produit) => (
              <div
                className="bg-gray-100 p-4 rounded-lg shadow-md relative"
                key={produit.id}
              >
                <a href='# '>
                  <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </a>
                <img src={produit.image} alt={produit.nom} />
                {/* <h2>{produit.nom}</h2>*/}
              </div>
            ))}
            <div class="bg-gray-200 p-4 rounded-lg shadow-md border-2 justify-center flex">
              <a href="# "> <img src={add} alt="addClothe " /></a>
            </div>
          </div>
          <div>
            <a href='# ' className=' text-red-700 text-md font-bold right-0 absolute flex items-center'>
              Voir tout
              <svg className=' mx-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 29" fill="none">
                <path d="M3 14.5H37M37 14.5L22.4286 3M37 14.5L22.4286 26" stroke="#DC3545" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
