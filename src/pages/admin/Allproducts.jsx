import React from 'react';
import {products_men} from "../../data/products_men";
import {Link} from "react-router-dom";
import {useToggleDots} from "../../functions/dotproducts";
import {products_women} from "../../data/products_women";
import {products_child} from "../../data/products_child";
import {products_cosmetic} from "../../data/products_cosmetic";
import search from "../../assets/search.png";
export default function Allproducts() {
  const {dotOpen, toggleDots} = useToggleDots();

  return (
    <>
      <div className=" max-w-screen-xl mx-auto">
        {/* input for search */}
        <div className='hidden md:block'>
          <div className="relative flex mt-10">
            <input type="search" placeholder="" className="p-3 border-2 w-1/2 ml-20 border-r-0" />
            <Link to="#"> <img src={search} alt="search" className="w-14 border p-3 mr-0" /></Link>
          </div>
        </div>
        {/* List_for_clothes-Men1 */}
        <div>
          <h3 className='text-start font-bold text-2xl my-10 uppercase'>Vêtements homme</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {products_men.map((product1) => (
              <div
                className="bg-gray-100 p-4 rounded-lg shadow-md relative"
                key={product1.id}
              >
                <div>
                  {/* dot button */}
                  <button
                    id={product1.id}
                    className={`${dotOpen[product1.id]
                      ? 'md:hover:bg-transparent md:border-0'
                      : ''
                    } pl-3 pr-4 py-2 md:hover:text-red-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto`}
                    onClick={() => toggleDots(product1.id)}
                  >
                    <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
                          stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                    </svg>
                  </button>
                  {/* dots menu */}
                  <div
                    id={`dots-${product1.id}`}
                    className={`${dotOpen[product1.id] ? 'block' : 'hidden'
                    } bg-white text-base list-none absolute divide-y divide-gray-100 rounded shadow my-4 md:w-44 w-[90%]`}
                  >
                    <ul className="py-1" aria-labelledby={`dots-${product1.id}`}>
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
                <h3 className=" text-red-700 font-medium absolute ">{product1.prix}$</h3>
                <img src={product1.image} alt={product1.nom}/>
                <h2>{product1.nom}</h2>
              </div>
            ))}
          </div>
        </div>
        {/* List_for_clothes-Women1 */}
        <div>
          <h3 className='text-start font-bold text-2xl my-10 uppercase'>Vêtements femmes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {products_women.map((product1) => (
              <div
                className="bg-gray-100 p-4 rounded-lg shadow-md relative"
                key={product1.id}
              >
                <div>
                  {/* dot button */}
                  <button
                    id={product1.id}
                    className={`${dotOpen[product1.id]
                      ? 'md:hover:bg-transparent md:border-0'
                      : ''
                    } pl-3 pr-4 py-2 md:hover:text-red-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto`}
                    onClick={() => toggleDots(product1.id)}
                  >
                    <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
                          stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                    </svg>
                  </button>
                  {/* dots menu */}
                  <div
                    id={`dots-${product1.id}`}
                    className={`${dotOpen[product1.id] ? 'block' : 'hidden'
                    } bg-white text-base list-none absolute divide-y divide-gray-100 rounded shadow my-4 md:w-44 w-[90%]`}
                  >
                    <ul className="py-1" aria-labelledby={`dots-${product1.id}`}>
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
                <h3 className=" text-red-700 font-medium absolute ">{product1.prix}$</h3>
                <img src={product1.image} alt={product1.nom}/>
                <h2>{product1.nom}</h2>
              </div>
            ))}
          </div>
        </div>
        {/* List_for_clothes-child1 */}
        <div>
          <h3 className='text-start font-bold text-2xl my-10 uppercase'>Vêtements enfants</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {products_child.map((product1) => (
              <div
                className="bg-gray-100 p-4 rounded-lg shadow-md relative"
                key={product1.id}
              >
                <div>
                  {/* dot button */}
                  <button
                    id={product1.id}
                    className={`${dotOpen[product1.id]
                      ? 'md:hover:bg-transparent md:border-0'
                      : ''
                    } pl-3 pr-4 py-2 md:hover:text-red-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto`}
                    onClick={() => toggleDots(product1.id)}
                  >
                    <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
                          stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                    </svg>
                  </button>
                  {/* dots menu */}
                  <div
                    id={`dots-${product1.id}`}
                    className={`${dotOpen[product1.id] ? 'block' : 'hidden'
                    } bg-white text-base list-none absolute divide-y divide-gray-100 rounded shadow my-4 md:w-44 w-[90%]`}
                  >
                    <ul className="py-1" aria-labelledby={`dots-${product1.id}`}>
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
                <h3 className=" text-red-700 font-medium absolute ">{product1.prix}$</h3>
                <img src={product1.image} alt={product1.nom}/>
                <h2>{product1.nom}</h2>
              </div>
            ))}
          </div>
        </div>
        {/* List_for_clothes-Cosmetics1 */}
        <div>
          <h3 className='text-start font-bold text-2xl my-10 uppercase'> produits cosmetics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {products_cosmetic.map((product1) => (
              <div
                className="bg-gray-100 p-4 rounded-lg shadow-md relative"
                key={product1.id}
              >
                <div>
                  {/* dot button */}
                  <button
                    id={product1.id}
                    className={`${dotOpen[product1.id]
                      ? 'md:hover:bg-transparent md:border-0'
                      : ''
                    } pl-3 pr-4 py-2 md:hover:text-red-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto`}
                    onClick={() => toggleDots(product1.id)}
                  >
                    <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
                          stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                    </svg>
                  </button>
                  {/* dots menu */}
                  <div
                    id={`dots-${product1.id}`}
                    className={`${dotOpen[product1.id] ? 'block' : 'hidden'
                    } bg-white text-base list-none absolute divide-y divide-gray-100 rounded shadow my-4 md:w-44 w-[90%]`}
                  >
                    <ul className="py-1" aria-labelledby={`dots-${product1.id}`}>
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
                <h3 className=" text-red-700 font-medium absolute ">{product1.prix}$</h3>
                <img src={product1.image} alt={product1.nom}/>
                <h2>{product1.nom}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
