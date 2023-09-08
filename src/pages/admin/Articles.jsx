/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import search from "../../assets/search.png"
import "../../styles/article.css"
import ClothesMan from '../../components/admin/Clothes_Man'
import ClothesWomen from '../../components/admin/Clothes_Women'
import Clotheschild from '../../components/admin/Clothes_child'
import Cosmetics from '../../components/admin/Cosmetics'
import {Link} from "react-router-dom";

export default function Articles() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className=' max-w-screen-xl mx-auto'>
      {/* input for search */}
      <div className='hidden md:block'>
        <div className="relative flex mt-10">
          <input type="search" placeholder="" className="p-3 border-2 w-1/2 ml-20 border-r-0" />
          <Link to="#"> <img src={search} alt="search" className="w-14 border p-3 mr-0" /></Link>
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
                <ClothesMan />
              </div>
              {/* Women */}
              <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? '' : 'hidden'}`}>
                <ClothesWomen />
              </div>
              {/* child */}
              <div id="tab3" className={`tab-content ${activeTab === 'tab3' ? '' : 'hidden'}`}>
                < Clotheschild />
              </div>
              {/* cosmetics */}
              <div id="tab4" className={`tab-content ${activeTab === 'tab4' ? '' : 'hidden'}`}>
                <Cosmetics />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
