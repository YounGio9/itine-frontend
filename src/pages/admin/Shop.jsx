import React, {useState} from "react";
import {Link} from "react-router-dom";
import search from "../../assets/search.png";

export default function Shop() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className=" max-w-screen-xl mx-auto">
        {/* input for search */}
        <div className='hidden md:block'>
          <div className="relative flex mt-10">
            <input type="search" placeholder="" className="p-3 border-2 w-1/2 ml-20 border-r-0"/>
            <Link to="#"> <img src={search} alt="search" className="w-14 border p-3 mr-0"/></Link>
          </div>
        </div>
        <div>
          {/* Categorie */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:space-x-16 justify-center ">
            <button
              className={`p-3 px-8 bg-gray-100 shadow-sm rounded-md  text-xl focus:outline-none m-4 border-2 border-gray-200 ${activeTab === 'tab1' ? 'bg-red-500 text-white' : ''}`}
              onClick={() => handleTabClick('tab1')}
            >
              Boutique 1
            </button>
            <button
              className={`p-3 px-8 bg-gray-100 shadow-sm rounded-md text-xl focus:outline-none m-4 border-2 border-gray-200 ${activeTab === 'tab2' ? 'bg-red-500 text-white' : ''}`}
              onClick={() => handleTabClick('tab2')}
            >
              Boutique 2
            </button>
            <button
              className={`p-3 px-8 bg-gray-100 shadow-sm rounded-md  text-xl focus:outline-none m-4 border-2 border-gray-200 ${activeTab === 'tab3' ? 'bg-red-500 text-white' : ''}`}
              onClick={() => handleTabClick('tab3')}
            >
              Boutique 3
            </button>
            <button
              className={`p-3 px-8 bg-gray-100 shadow-sm rounded-md text-xl focus:outline-none m-4 border-2 border-gray-200 ${activeTab === 'tab4' ? 'bg-red-500 text-white' : ''}`}
              onClick={() => handleTabClick('tab4')}
            >
              Boutique 4
            </button>
          </div>
          {/* Category contents */}
          <div className="mt-4 relative">
            {/*   Boutique 1 */}
            <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? '' : 'hidden'}`}>
              Article boutique 1
            </div>
            {/*  Boutique 2 */}
            <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? '' : 'hidden'}`}>
              Article boutique 2
            </div>
            {/*   Boutique 3 */}
            <div id="tab3" className={`tab-content ${activeTab === 'tab3' ? '' : 'hidden'}`}>
              Article boutique 3
            </div>
            {/*   Boutique 4 */}
            <div id="tab4" className={`tab-content ${activeTab === 'tab4' ? '' : 'hidden'}`}>
              Article boutique 4
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
