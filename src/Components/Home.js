import React from 'react'
import Navbar from './Navbar'
import { FiArrowRight } from "react-icons/fi"
import { BsSteam } from "react-icons/bs";
import { GiGamepad } from "react-icons/gi";

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <div className='home-bannerImage-container'></div>
                <img src="" alt="" />
            </div>
            <div className='home-text-section'>
                <h4 className='primary-subheading'>
                    Comunidad
                </h4>
                <h1 className='primary-heading'> 
                    SLADE 
                </h1>
                <p className='primary-text'>
                    Somos una comunidad de CSGO argentina dedicada a la diversion y el entretenimiento, contamos con multiples servidores libres de toxicidad y mal ambiente, ¿que esperas? ¡Unete!
                </p>
                <a href="https://steamcommunity.com/groups/ComunidadSlade" target="_blank" rel='noreferrer'>
                    <button className='primary-button'>
                        <BsSteam className='navbar-cart-icon'/> Steam <FiArrowRight/>
                    </button>
                </a>
                <a href="https://www.gametracker.com/server_info/45.235.98.243:27051/" target="_blank" rel='noreferrer'>
                    <button className='secondary-button'>
                        <GiGamepad className='navbar-cart-icon'/> GameTracker<FiArrowRight/>
                    </button>
                </a>
                
            </div>
            <div className='home-text-'></div>
        </div>
    </div>
  )
}

export default Home