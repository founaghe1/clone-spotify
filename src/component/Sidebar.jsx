// import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaHome, FaSearch, FaBook, FaPlusSquare, FaHeart, FaSpotify } from 'react-icons/fa';
// // import {TbWorld} from 'react-icons/tb';
// import Contenu from '../component/Contenu'

// export const Sidebar = () => {
//     return (
                    
//         <div class="container-fluid bg-black">
//         <div class="row flex-nowrap">
//             <div class="col-auto col-md-3 col-sm-3 col-xl-2 px-sm-2 px-0 border-end">
//                 <div class="d-flex flex-column align-items-start align-items-sm-start px-3 pt-2 text-white fw-bold min-vh-100 position-sticky sticky-top" id='sidebar'>
//                     <h4 className='text-start'><FaSpotify className='me-2'/>Spotify</h4>
//                     <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mt-3" id="menu">
//                         <li>
//                           <a href="gg" class="nav-link px-0 align-middle text-white fw-bold">
//                             <FaHome className='text-light' /> <span class="ms-1 d-none d-sm-inline">Home</span></a>
//                         </li>
//                         <li>
//                             <a href="gg" class="nav-link px-0 align-middle text-secondary fw-bold">
//                               <FaSearch className='text-secondary' /> <span class="ms-1 d-none d-sm-inline">Search</span></a>
//                         </li>
//                         <li>
//                           <a href="gg" class="nav-link px-0 align-middle text-secondary fw-bold">
//                             <FaBook className="text-secondary" /> <span class="ms-1 d-none d-sm-inline">Library</span></a>
//                         </li>
//                         <li>
//                           <a href="gg" class="mt-4 nav-link px-0 align-middle text-secondary fw-bold">
//                             <FaPlusSquare className="text-secondary" /> <span class="ms-1 d-none d-sm-inline">Playlist</span></a>
//                         </li>
//                         <li>
//                             <a href="gg" class="nav-link px-0 align-middle text-secondary fw-bold">
//                               <FaHeart className='text-danger'/> <span class="ms-1 d-none d-sm-inline">Liked</span> </a>
//                         </li>
//                       </ul>

//                       <p class="text-start para mt-5">
//                         <span className='me-2 size'>Legacy</span> <span className='size'>Cookies</span> <br /> <span className='size'>Privacy Policy</span> <br />
//                         <span className='size'>Privacy Center</span> <br /> <span className='me-2 size'>About</span><span className='size'>Adds</span> 
//                       </p>
//                       <button className='btn-black border-light text-white p-1 px-3 bg-transparent rounded-5 mb-5'>English</button>
//                 </div>
//             </div>
//             <div class="col p-0">
//                <Contenu />
//             </div>
            
//         </div>

      
//     </div>
//     );
// };

import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FaHome, FaSearch, FaBook, FaPlusSquare, FaHeart, FaSpotify } from 'react-icons/fa';
// import {TbWorld} from 'react-icons/tb';
import Contenu from '../component/Contenu'

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`container-fluid bg-black  ${isOpen ? 'open' : ''}`}>
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-sm-3 col-xl-2 px-sm-2 px-0">
          <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
            <button className="navbar-toggler text-white border-0 shadow-none" type="button" onClick={toggleSidebar}>
              <FaSpotify />
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
              <div className="d-flex flex-column align-items-start align-items-sm-start px-3 pt-2 text-white fw-bold min-vh-100 position-sticky sticky-top" id="sidebar">
                <h4 className="text-start d-none d-sm-block">
                <FaSpotify /> Spotify
                </h4>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mt-3" id="menu">
                  <li>
                    <a href="#" className="nav-link px-0 align-middle text-white fw-bold">
                      <FaHome className="text-light" /> <span className="ms-1 d-none d-sm-inline">Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="./about.html" className="nav-link px-0 align-middle text-secondary fw-bold">
                      <FaSearch className="text-secondary" /> <span className="ms-1 d-none d-sm-inline">Search</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle text-secondary fw-bold">
                      <FaBook className="text-secondary" /> <span className="ms-1 d-none d-sm-inline">Library</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mt-4 nav-link px-0 align-middle text-secondary fw-bold">
                      <FaPlusSquare className="text-secondary" /> <span className="ms-1 d-none d-sm-inline">Playlist</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle text-secondary fw-bold">
                      <FaHeart className="text-danger" /> <span className="ms-1 d-none d-sm-inline">Liked</span>
                    </a>
                  </li>
                </ul>

                <p className="text-start para mt-5">
                  <span className="me-2 size">Legacy</span> <span className="size">Cookies</span> <br /> <span className="size">Privacy Policy</span> <br />
                  <span className="size">Privacy Center</span> <br /> <span className="me-2 size">About</span><span className="size">Adds</span>
                </p>
                <button className="btn-black border-light text-white p-1 px-3 bg-transparent rounded-5 mb-5">English</button>
              </div>
            </div>
          </nav>
        </div>
        <div className="col p-0">
          <Contenu />
        </div>
      </div>
    </div>
  );
};

