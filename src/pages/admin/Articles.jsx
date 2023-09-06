/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import search from "../../assets/search.png"
import "../../styles/article.css"
import vêtements_femmme1 from "../../assets/vêtements_femme1.png"
import vêtements_femme2 from "../../assets/vêtements_femme2.png"
import add from "../../assets/add.png"
import arrow_right from "../../assets/arrow_right.png"
import Clothes_Man from '../../components/admin/Clothes_Man'

export default function Articles() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className=' max-w-screen-xl mx-auto'>
      {/* input for search */}
      <div className='hidden md:block'>
        <div class="relative flex mt-10">
          <input type="search" placeholder="" class="p-3 border-2 w-1/2 ml-20 border-r-0" />
          <a href="# "> <img src={search} alt="search" class="w-14 border p-3 mr-0" /></a>
        </div>
      </div>
      {/* Tabs for categorie */}
      <div>
        <div className=" mt-4">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            {/* Categorie */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:space-x-16 justify-center ">
              <button
                className={`p-3 px-8 bg-gray-100 shadow-sm rounded-md  text-xl focus:outline-none m-4 border-2 border-gray-200 ${activeTab === 'tab1' ? 'bg-red-500 text-white' : ''}`}
                onClick={() => handleTabClick('tab1')}
              >
                Hommes
              </button>
              <button
                className={`p-3 px-8 bg-gray-100 shadow-sm rounded-md text-xl focus:outline-none m-4 border-2 border-gray-200 ${activeTab === 'tab2' ? 'bg-red-500 text-white' : ''}`}
                onClick={() => handleTabClick('tab2')}
              >
                Femmes
              </button>
              <button
                className={`p-3 px-8 bg-gray-100 shadow-sm rounded-md  text-xl focus:outline-none m-4 border-2 border-gray-200 ${activeTab === 'tab3' ? 'bg-red-500 text-white' : ''}`}
                onClick={() => handleTabClick('tab3')}
              >
                Enfants
              </button>
              <button
                className={`p-3 px-8 bg-gray-100 shadow-sm rounded-md text-xl focus:outline-none m-4 border-2 border-gray-200 ${activeTab === 'tab4' ? 'bg-red-500 text-white' : ''}`}
                onClick={() => handleTabClick('tab4')}
              >
                Produits Cosmétique
              </button>
            </div>

            {/* Category contents */}
            <div className="mt-4 relative">
              {/* Men */}
              <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? '' : 'hidden'}`}>
                 <Clothes_Man/>
              </div>

              {/* Women */}
              <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? '' : 'hidden'}`}>
                <h3 className=' text-start font-bold text-2xl my-3'>Vêtement à la une </h3>
                {/* Liste_for_clothes-Women1 */}
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  <div class="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <a href='# '>
                      <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                    <img src={vêtements_femmme1} alt="vêtements_homme" />
                  </div>

                  <div class="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <a href='# '>
                      <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                    <img src={vêtements_femmme1} alt="vêtements_homme" />
                  </div>

                  <div class="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <a href='# '>
                      <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                    <img src={vêtements_femmme1} alt="vêtements_homme" />
                  </div>

                  <div class="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <a href='# '>
                      <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                    <img src={vêtements_femmme1} alt="vêtements_homme" />
                  </div>

                  <div class="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <a href='# '>
                      <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                    <img src={vêtements_femmme1} alt="vêtements_homme" />
                  </div>

                  <div class="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <a href='# '>
                      <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                    <img src={vêtements_femmme1} alt="vêtements_homme" />
                  </div>

                  <div class="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <a href='# '>
                      <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                    <img src={vêtements_femmme1} alt="vêtements_homme" />
                  </div>

                  <div class="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <a href='# '>
                      <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                    <img src={vêtements_femmme1} alt="vêtements_homme" />
                  </div>

                  <div class="bg-gray-200 p-4 rounded-lg shadow-md border-2 justify-center flex">
                    <a href="# "> <img src={add} alt="" /></a>
                  </div>
                </div>
                <div>
                  <a href='# ' className=' text-red-700 text-md font-bold right-0 absolute flex items-center'>Voir tout <img src={arrow_right} alt="arrow_right" className=' w-7' /> </a>
                </div>
                <h3 className=' text-start font-bold text-2xl my-3'>Vêtement à la une </h3>
                {/* Liste_for_clothes-Women2 */}
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  <div class="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <a href='# '>
                      <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                    <img src={vêtements_femme2} alt="vêtements_homme" />
                  </div>

                  <div class="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <a href='# '>
                      <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                    <img src={vêtements_femme2} alt="vêtements_homme" />
                  </div>

                  <div class="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <a href='# '>
                      <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                    <img src={vêtements_femme2} alt="vêtements_homme" />
                  </div>

                  <div class="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <a href='# '>
                      <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                    <img src={vêtements_femme2} alt="vêtements_homme" />
                  </div>

                  <div class="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <a href='# '>
                      <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                    <img src={vêtements_femme2} alt="vêtements_homme" />
                  </div>

                  <div class="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <a href='# '>
                      <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                    <img src={vêtements_femme2} alt="vêtements_homme" />
                  </div>

                  <div class="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <a href='# '>
                      <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                    <img src={vêtements_femme2} alt="vêtements_homme" />
                  </div>

                  <div class="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <a href='# '>
                      <svg className=' w-10 absolute top-0 right-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                    <img src={vêtements_femme2} alt="vêtements_homme" />
                  </div>

                  <div class="bg-gray-200 p-4 rounded-lg shadow-md border-2 justify-center flex">
                    <a href="# "> <img src={add} alt="" /></a>
                  </div>
                </div>
                <div>
                  <a href='# ' className=' text-red-700 text-md font-bold right-0 absolute flex items-center'>Voir tout <img src={arrow_right} alt="arrow_right" className=' w-7' /> </a>
                </div>
              </div>
              <div id="tab3" className={`tab-content ${activeTab === 'tab3' ? '' : 'hidden'}`}>
                Contenu Enfants
              </div>
              <div id="tab4" className={`tab-content ${activeTab === 'tab4' ? '' : 'hidden'}`}>
                Contenu produit cosmetique
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
