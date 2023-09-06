import React from 'react'
import add from "../../assets/add.png"
import { products_cosmetic, products_cosmetic2 } from "../../data/products_cosmetic"
import { Link } from 'react-router-dom'
import { useToggleDots } from "../../functions/dotproducts";
export default function Cosmetics() {
  const { dotOpen, toggleDots } = useToggleDots();

  return (
    <div>
      <div className=' max-w-screen-xl mx-auto'>
        <h3 className='text-start font-bold text-2xl my-10'>Vêtement à la une</h3>
        {/* Liste_for_clothes-Cosmetics1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products_cosmetic.map((produit) => (
            <div
              className="bg-gray-100 p-4 rounded-lg shadow-md relative"
              key={produit.id}
            >
              <div>
                {/* dot button */}
                <button
                  id={produit.id}
                  className={`${dotOpen[produit.id]
                    ? 'md:hover:bg-transparent md:border-0'
                    : ''
                    } pl-3 pr-4 py-2 md:hover:text-red-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto`}
                  onClick={() => toggleDots(produit.id)}
                >
                  <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
                {/* dots menu */}
                <div
                  id={`dots-${produit.id}`}
                  className={`${dotOpen[produit.id] ? 'block' : 'hidden'
                    } bg-white text-base list-none absolute divide-y divide-gray-100 rounded shadow my-4 md:w-44 w-[90%]`}
                >
                  <ul className="py-1" aria-labelledby={`dots-${produit.id}`}>
                    <li>
                      <Link
                        to="/updateproduct"
                        className="text-sm block text-start hover:bg-gray-100 text-gray-700 px-4 py-2"
                      >
                        Modifier
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/deleteproduct"
                        className="text-sm text-start hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Supprimer
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/addproduct"
                        className="text-sm text-start hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Ajouter à une boutique
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
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

        {/* Liste_for_clothes-Cosmetics2 */}
        <div>
          <h3 className=' text-start font-bold text-2xl my-10 mt-20'>Autre Vêtement</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {products_cosmetic2.map((produit) => (
              <div
                className="bg-gray-100 p-4 rounded-lg shadow-md relative"
                key={produit.id}
              >
                <div>
                  {/* dot button */}
                  <button
                    id={produit.id}
                    className={`${dotOpen[produit.id]
                      ? 'md:hover:bg-transparent md:border-0'
                      : ''
                      } pl-3 pr-4 py-2 md:hover:text-red-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto`}
                    onClick={() => toggleDots(produit.id)}
                  >
                    <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  </button>
                  {/* dots menu */}
                  <div
                    id={`dots-${produit.id}`}
                    className={`${dotOpen[produit.id] ? 'block' : 'hidden'
                      } bg-white text-base list-none absolute divide-y divide-gray-100 rounded shadow my-4 md:w-44 w-[90%]`}
                  >
                    <ul className="py-1" aria-labelledby={`dots-${produit.id}`}>
                      <li>
                        <Link
                          to="/updateproduct"
                          className="text-sm block text-start hover:bg-gray-100 text-gray-700 px-4 py-2"
                        >
                          Modifier
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/deleteproduct"
                          className="text-sm text-start hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Supprimer
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/addproduct"
                          className="text-sm text-start hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Ajouter à une boutique
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
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
