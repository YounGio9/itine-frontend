import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/sidebar.css";
export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };
  return (
    <div>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden focus:ring-2 dark:text-black dark:hover:text-white dark:hover:bg-[#DC3545] "
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 w-64 bg-[#1f2937] transition-transform h-full border-r z-10 ${
          showSidebar ? "translate-x-0 bg-white" : "-translate-x-full "
        } lg:translate-x-0`}
        aria-label="Sidebar"
      >
        <div>
          {/* Button to close sidebar */}
          <button
            type="button"
            className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden"
            onClick={closeSidebar}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* logo */}
          <div className=" p-10">
            <Link to="/admin">
              <div className="text-3xl ">Itine</div>
            </Link>
          </div>
          {/* Nav */}
          <nav className=" mt-4">
            {/* Accueil */}
            <Link
              to="/admin/"
              className="hover:bg-white hover:!text-black mx-2 text-gray-200 flex dash_link p-2 rounded-md my-5"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M15 18H9"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              <Link to="/admin/" className="block px-4 text-sm font-bold ">
                Accueil
              </Link>
            </Link>
            {/* Article */}
            <Link
              to="/admin/article"
              className="hover:bg-white hover:!text-black mx-2 text-gray-200 flex dash_link p-2 rounded-md my-5"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 14V17.6C15 18.4401 15 18.8601 14.8365 19.181C14.6927 19.4632 14.4632 19.6927 14.181 19.8365C13.8601 20 13.4401 20 12.6 20H7.40001C6.55994 20 6.1399 20 5.81903 19.8365C5.53679 19.6927 5.30731 19.4632 5.1635 19.181C5.00001 18.8601 5.00001 18.4401 5.00001 17.6V10M19 10V20M5.00001 16H15M5.55778 4.88446L3.5789 8.84223C3.38722 9.22559 3.29138 9.41727 3.3144 9.57308C3.3345 9.70914 3.40976 9.8309 3.52246 9.90973C3.65153 10 3.86583 10 4.29444 10H19.7056C20.1342 10 20.3485 10 20.4776 9.90973C20.5903 9.8309 20.6655 9.70914 20.6856 9.57308C20.7086 9.41727 20.6128 9.22559 20.4211 8.84223L18.4422 4.88446C18.2817 4.5634 18.2014 4.40287 18.0817 4.28558C17.9758 4.18187 17.8482 4.10299 17.7081 4.05465C17.5496 4 17.3701 4 17.0112 4H6.98887C6.62991 4 6.45043 4 6.29198 4.05465C6.15185 4.10299 6.02422 4.18187 5.91833 4.28558C5.79858 4.40287 5.71832 4.5634 5.55778 4.88446Z"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Link
                to="/admin/article"
                className="block px-4 text-sm font-bold "
              >
                Articles
              </Link>
            </Link>
            {/* Livreur */}
            <Link
              to="/admin/delivery"
              className="hover:bg-white hover:!text-black mx-2 text-gray-200 flex dash_link p-2 rounded-md my-5"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50626 15.2647C7.61657 15.6639 8.02965 15.8982 8.4289 15.7879C8.82816 15.6776 9.06241 15.2645 8.9521 14.8652L7.50626 15.2647ZM6.07692 7.27442L6.79984 7.0747V7.0747L6.07692 7.27442ZM4.7037 5.91995L4.50319 6.64265L4.7037 5.91995ZM3.20051 4.72457C2.80138 4.61383 2.38804 4.84762 2.2773 5.24675C2.16656 5.64589 2.40035 6.05923 2.79949 6.16997L3.20051 4.72457ZM20.1886 15.7254C20.5895 15.6213 20.8301 15.2118 20.7259 14.8109C20.6217 14.41 20.2123 14.1695 19.8114 14.2737L20.1886 15.7254ZM10.1978 17.5588C10.5074 18.6795 9.82778 19.8618 8.62389 20.1747L9.00118 21.6265C10.9782 21.1127 12.1863 19.1239 11.6436 17.1594L10.1978 17.5588ZM8.62389 20.1747C7.41216 20.4896 6.19622 19.7863 5.88401 18.6562L4.43817 19.0556C4.97829 21.0107 7.03196 22.1383 9.00118 21.6265L8.62389 20.1747ZM5.88401 18.6562C5.57441 17.5355 6.254 16.3532 7.4579 16.0403L7.08061 14.5885C5.10356 15.1023 3.89544 17.0911 4.43817 19.0556L5.88401 18.6562ZM7.4579 16.0403C8.66962 15.7254 9.88556 16.4287 10.1978 17.5588L11.6436 17.1594C11.1035 15.2043 9.04982 14.0768 7.08061 14.5885L7.4579 16.0403ZM8.9521 14.8652L6.79984 7.0747L5.354 7.47414L7.50626 15.2647L8.9521 14.8652ZM4.90421 5.19725L3.20051 4.72457L2.79949 6.16997L4.50319 6.64265L4.90421 5.19725ZM6.79984 7.0747C6.54671 6.15847 5.8211 5.45164 4.90421 5.19725L4.50319 6.64265C4.92878 6.76073 5.24573 7.08223 5.354 7.47414L6.79984 7.0747ZM11.1093 18.085L20.1886 15.7254L19.8114 14.2737L10.732 16.6332L11.1093 18.085Z"
                  fill="#ffffff"
                />
                <path
                  d="M9.56541 8.73049C9.0804 6.97492 8.8379 6.09714 9.24954 5.40562C9.66119 4.71409 10.5662 4.47889 12.3763 4.00849L14.2962 3.50955C16.1062 3.03915 17.0113 2.80394 17.7242 3.20319C18.4372 3.60244 18.6797 4.48023 19.1647 6.2358L19.6792 8.09786C20.1642 9.85343 20.4067 10.7312 19.995 11.4227C19.5834 12.1143 18.6784 12.3495 16.8683 12.8199L14.9484 13.3188C13.1384 13.7892 12.2333 14.0244 11.5203 13.6252C10.8073 13.2259 10.5648 12.3481 10.0798 10.5926L9.56541 8.73049Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                />
              </svg>
              <Link
                to="/admin/delivery"
                className="block px-4 text-sm font-bold "
              >
                Livreur
              </Link>
            </Link>
            {/* Message */}
            <Link
              to="/admin/message"
              className="hover:bg-white hover:!text-black mx-2 text-gray-200 flex dash_link p-2 rounded-md my-5"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 9H17M7 13H17M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Link
                to="/admin/message"
                className="block px-4 text-sm font-bold "
              >
                Message
              </Link>
            </Link>
            {/* Cartegorie */}
            <Link
              to="/admin/categorie"
              className="hover:bg-white hover:!text-black mx-2 text-gray-200 flex dash_link p-2 rounded-md my-5"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Link
                to="/admin/categorie"
                className="block px-4 text-sm font-bold "
              >
                Catégories
              </Link>
            </Link>
            {/* boutique */}
            <Link
              to="/admin/shop"
              className="hover:bg-white hover:!text-black mx-2 text-gray-200 flex dash_link p-2 rounded-md my-5"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.13238 1C4.07859 1 3.10207 1.5529 2.5599 2.45651L0.615776 5.69672C0.17816 6.42608 0.0121122 7.42549 0.508798 8.32014C0.789678 8.82607 1.27459 9.55181 2 10.1205V20C2 21.6569 3.34315 23 5 23H8C9.10457 23 10 22.1046 10 21V15H14V21C14 22.1046 14.8954 23 16 23H19C20.6569 23 22 21.6569 22 20V10.1205C22.7254 9.55181 23.2103 8.82607 23.4912 8.32014C23.9879 7.42548 23.8218 6.42608 23.3842 5.69672L21.4401 2.45651C20.8979 1.5529 19.9214 1 18.8676 1H5.13238ZM20 10.9697C19.8391 10.9895 19.6725 11 19.5 11C18.1259 11 17.1126 10.3216 16.4364 9.60481C16.2632 9.4211 16.1082 9.23119 15.9705 9.04325C15.2167 9.98812 13.9542 11 12 11C10.0458 11 8.7833 9.98812 8.02952 9.04325C7.89183 9.23119 7.73684 9.4211 7.56355 9.60481C6.8874 10.3216 5.87405 11 4.5 11C4.32752 11 4.16089 10.9895 4 10.9697V20C4 20.5523 4.44772 21 5 21H8V15C8 13.8954 8.89543 13 10 13H14C15.1046 13 16 13.8954 16 15V21H19C19.5523 21 20 20.5523 20 20V10.9697ZM4.27489 3.4855C4.45561 3.1843 4.78112 3 5.13238 3H18.8676C19.2189 3 19.5444 3.1843 19.7251 3.4855L21.6692 6.72571C21.8324 6.99765 21.8127 7.2231 21.7426 7.34937C21.2851 8.17345 20.5493 9 19.5 9C18.8448 9 18.323 8.69006 17.8913 8.23245C17.4506 7.76524 17.1659 7.20393 17.0284 6.88399C16.8114 6.37951 16.3329 6.21388 16.0033 6.21248C15.674 6.21109 15.1982 6.37172 14.9752 6.8683C14.6702 7.54754 13.7982 9 12 9C10.2018 9 9.32978 7.54754 9.0248 6.8683C8.80182 6.37172 8.32598 6.21109 7.99667 6.21248C7.66706 6.21388 7.18855 6.37951 6.97164 6.88399C6.83407 7.20393 6.5494 7.76524 6.10869 8.23245C5.67703 8.69006 5.15524 9 4.5 9C3.45065 9 2.71491 8.17345 2.2574 7.34937C2.1873 7.2231 2.1676 6.99765 2.33076 6.72571L4.27489 3.4855Z"
                  fill="#ffffff"
                />
              </svg>
              <Link to="/admin/shop" className="block px-4 text-sm font-bold">
                Boutique
              </Link>
            </Link>
          </nav>
        </div>
      </aside>
    </div>
  );
}
