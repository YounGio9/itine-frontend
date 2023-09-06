import React from 'react'
import "../../styles/article.css"
// import add from "../../assets/add.png"
import arrow_right from "../../assets/arrow_right.png"
import { products_men, products_men2 } from "../../data/products_men"
export default function Clothes_Man() {
  return (
    <div>
      <div className=' max-w-screen-xl mx-auto'>
        <h3 className='text-start font-bold text-2xl my-3'>Vêtement à la une</h3>
        {/* Liste_for_clothes-Men1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products_men.map((produit) => (
            <div
              className="bg-gray-100 p-4 rounded-lg shadow-md relative"
              key={produit.id}
            >
              <a href='# '>
                <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </a>
              <img src={produit.image} alt={produit.nom} />
              {/* <h2>{produit.nom}</h2>
                            <p>{produit.description}</p> */}
            </div>
          ))}
        </div>
        <div>
          <a href='# ' className=' text-red-700 text-md font-bold right-0 absolute flex items-center'>Voir tout <img src={arrow_right} alt="arrow_right" className=' w-7' /> </a>
        </div>

        {/* Liste_for_clothes-Men2 */}
        <div>
          <h3 className=' text-start font-bold text-2xl my-3'>Vêtement à la une </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {products_men2.map((produit) => (
              <div
                className="bg-gray-100 p-4 rounded-lg shadow-md relative"
                key={produit.id}
              >
                <a href='# '>
                  <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </a>
                <img src={produit.image} alt={produit.nom} />
                {/* <h2>{produit.nom}</h2>
                            <p>{produit.description}</p> */}
              </div>
            ))}
          </div>
          <div>
            <a href='# ' className=' text-red-700 text-md font-bold right-0 absolute flex items-center'>Voir tout <img src={arrow_right} alt="arrow_right" className=' w-7' /> </a>
          </div>
        </div>
      </div>
    </div>
  )
}
