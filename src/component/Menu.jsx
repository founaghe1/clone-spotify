import React from "react";
import logo1  from '../assets/img/logo1.png';
import logo2  from '../assets/img/logo2.png';
import logo3  from '../assets/img/logo3.png';
import logo4  from '../assets/img/logo4.png';
import logo5  from '../assets/img/logo5.png';
import logo6  from '../assets/img/logo6.png';
import logo7  from '../assets/img/logo7.png';
import logo8  from '../assets/img/logo8.png';
import logo9  from '../assets/img/logo9.png';
import logo10 from '../assets/img/logo10.png'
import "bootstrap/dist/css/bootstrap.min.css";
import './Menu.css';

export const Menu = () => {
  return (
    <div className="menu">
      
      <div className="container mt-5">

        <div className="row d-flex justify-content-center align-items-center">
            <h3 className=" text-start text-light mt-3">Focus <span className="float-end fs-6 show1">show all</span> </h3>

            <div className="col-lg-2 col-md-4 col-sm-6   ">
            <div class="card my-md-5">
                <img src={logo1} class="card-img-top" alt="..." />
                <div class="card-body text-start">
                    <h5 class="card-title">Peaceful Piano</h5>
                    <p class="card-text">
                    Peaceful piano to help you slow down, breathe, and...
                </p>
                </div>

            
            </div>

            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 ">
            <div class="card">
                <img src={logo2} class="card-img-top" alt="..." />
                <div class="card-body text-start">
                    <h5 class="card-title">Deep Focus</h5>
                    <p class="card-text">
                    Keep calm and focus with ambient and post-rock music.
                    </p>
                </div>

            
            </div>

            </div>

            <div className="col-lg-2 col-md-4 col-sm-6   ">
            <div class="card">
                <img src={logo3} class="card-img-top" alt="..." />
                <div class="card-body text-start">
                    <h5 class="card-title">Instrumental Study</h5>
                    <p class="card-text">
                    Focus with soft study music in the background.
                    </p>
                </div>

            
            </div>

            </div>

            <div className="col-lg-2 col-md-4 col-sm-6   ">
            <div class="card">
                <img src={logo4} class="card-img-top" alt="..." />
                <div class="card-body text-start">
                    <h5 class="card-title">Focus Flow</h5>
                    <p class="card-text">
                    Uptempo instrumental hip hop beats.
                    </p>
                </div>

            
            </div>

            </div>

            <div className="col-lg-2 col-md-4 col-sm-6   ">
            <div class="card">
            <img src={logo5} class="card-img-top" alt="..." />
            <div class="card-body text-start">
            <h5 class="card-title">Beats to think to</h5>
            <p class="card-text ">
            Focus with deep techno and tech house.
            </p>
            </div>

            
            </div>

            </div>

            <div className="col-lg-2 col-md-4 col-sm-6   ">
            <div class="card">
            <img src={logo2} class="card-img-top" alt="..." />
            <div class="card-body text-start">
            <h5 class="card-title">Instrumental Study</h5>
            <p class="card-text ">
            Uptempo instrumental hip hop beats.
            </p>
            </div>

            
            </div>

            </div>
        </div>



        {/* PlayListe */}

        <div className="row d-flex justify-content-center align-items-center ">
            <h3 className=" text-start text-light">Spotify Playliste</h3>
            <div className="col-lg-2 col-md-4 col-sm-6    my-3">
            <div class="card">
            <img src={logo6} class="card-img-top" alt="..." />
            <div class="card-body text-start">
            <h5 class="card-title">Today’s Top Hits</h5>
            <p class="card-text">
            Harry Styles is on top of the Hottest 50!
            </p>
            </div>

            
            </div>

            </div>

            <div className="col-lg-2 col-md-4 col-sm-6   ">
            <div class="card">
            <img src={logo7} class="card-img-top" alt="..." />
            <div class="card-body text-start">
            <h5 class="card-title">RapCaviar</h5>
            <p class="card-text">
            New music from Lil Baby, Gucci Mane and DaBaby.
            </p>
            </div>

            
            </div>

            </div>

            <div className="col-lg-2 col-md-4 col-sm-6   ">
            <div class="card">
            <img src={logo8} class="card-img-top" alt="..." />
            <div class="card-body text-start">
            <h5 class="card-title">All Out 2010s</h5>
            <p class="card-text">
            The biggest songs of the 2010s.
            </p>
            </div>

            
            </div>

            </div>

            <div className="col-lg-2 col-md-4 col-sm-6   ">
            <div class="card">
            <img src={logo9} class="card-img-top" alt="..." />
            <div class="card-body text-start">
            <h5 class="card-title">Rock Classics</h5>
            <p class="card-text">
            Rock legends & epic songs that continue to inspire...

            </p>
            </div>

            
            </div>

            </div>

            <div className="col-lg-2 col-md-4 col-sm-6   ">
            <div class="card">
            <img src={logo10} class="card-img-top" alt="..." />
            <div class="card-body text-start">
            <h5 class="card-title">Chill Hits</h5>
            <p class="card-text ">
            Kick back to the best new and recent chill hits.
            </p>
            </div>

            
            </div>

            </div>

            <div className="col-lg-2 col-md-4 col-sm-6   ">
            <div class="card">
            <img src={logo7} class="card-img-top" alt="..." />
            <div class="card-body text-start">
            <h5 class="card-title">Rock Classics</h5>
            <p class="card-text ">
            Rock legends & epic songs that continue to inspire...
            </p>
            </div>

            
            </div>

            </div>
        </div>
      </div>
    </div>
  );
};
