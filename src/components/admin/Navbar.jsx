import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import icon_notification from "../../assets/notification.png"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav className=" border-b p-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* logo */}
          <Link to="/" className="flex">
            <img src={logo} alt="logo" className="w-32" />
          </Link>
          {/* mobile-bouton */}
          <button
            data-drawer-target="separator-sidebar"
            data-drawer-toggle="separator-sidebar"
            aria-controls="separator-sidebar"
            type="button"
            className="md:hidden ml-3 p-2 rounded-lg dark:hover:text-white dark:hover:bg-[#DC3545]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open sidebar</span>
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black hover:text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {/* menu for nav */}
          <div className={` md:block w-full md:w-auto ${mobileMenuOpen ? "block" : "hidden"}`} id="mobile-menu">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-xl md:font-semibold">
              <li>
                <Link
                  to="/accueil"
                  className="bg-gray-50 md:bg-transparent hover:bg-red-300 hover:text-white md:hover:bg-transparent text-gray-700 block py-2 md:hover:text-red-700 md:p-0"
                  aria-current="page"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/message"
                  className="text-gray-700 hover:bg-red-300 hover:text-white border-b border-gray-100 md:hover:bg-transparent md:border-0 block py-2 md:hover:text-red-700 md:p-0"
                >
                  Message
                </Link>
              </li>
              <li>
                <Link
                  href="/livreur"
                  className="text-gray-700 hover:bg-red-300 hover:text-white border-b border-gray-100 md:hover:bg-transparent md:border-0 block py-2 md:hover:text-red-700 md:p-0"
                >
                  Livreur
                </Link>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  className={`text-gray-700 border-b hover:bg-red-300 hover:text-white border-gray-100 md:hover:bg-transparent  ${isDropdownOpen ? 'md:hover:bg-transparent md:border-0' : ''
                    } pl-3 pr-4 py-2 md:hover:text-red-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto`}
                  onClick={toggleDropdown}
                >
                  Articles
                  <svg
                    className="w-4 h-4 ml-1 transform transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownNavbar"
                  className={`${isDropdownOpen ? 'block' : 'hidden'
                    } bg-white text-base list-none absolute divide-y divide-gray-100 rounded shadow my-4 md:w-44 w-[90%]`}
                >
                  <ul className="py-1" aria-labelledby="dropdownNavbarLink">
                    <li>
                      <Link
                        to="/addcategory"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Ajouter une catégorie
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/deletecategory"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Supprimer tout
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/producte"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Voir tous les produits
                      </Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <Link
                      to="/triercategory"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Trier par
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  to="/notification" className=" hidden md:block">
                  <img
                    src={icon_notification}
                    alt="notification"
                    className=" w-10"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
