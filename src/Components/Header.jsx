import React from 'react'
import '../Components/Header.css'
import icon from '../Assets/Frame 1000001083.png'
import langicon from '../Assets/clarity_language-line.png'
import curricon from '../Assets/carbon_currency.png'
import locicon from '../Assets/clarity_world-line.png'
import signicon from '../Assets/Register.png'
import logicon from '../Assets/Icon.png'

function Header() {
  return (
    <div className=''>
        <div className="top-header p-4 d-flex">
            <div className="title d-flex align-items-center me-4">
                <img src={icon} alt="" />
                <div className="title-name d-flex ms-2 text-white justify-content-center align-items-center">
                    Gir Gir <span className='fw-semibold ms-2'>AUCTION</span>
                </div>
            </div>
            <div className="search bg-white d-flex align-items-center rounded-4">
                <div className="input-box d-flex align-items-center  p-3">
                    <i class="fa-solid fa-magnifying-glass me-3 fs-2"></i>
                    <input type="text" placeholder='Search for Inventory, Auction, Dealers, more...'/>
                </div>
                <div className="search-button h-100 d-flex align-items-center px-5">
                    <button>Search</button>
                </div>
            </div>
            <div className="dropdowns d-flex align-items-center ms-3 gap-3">
                <div className="english d-flex align-items-center">
                    <div className="langicon me-1">
                        <img src={langicon} alt="" />
                    </div>
                    <div className="name">
                        <span>English</span>
                    </div>
                    <select name=""  id=""></select>
                </div>
                <div className="english d-flex align-items-center">
                    <div className="langicon me-1">
                        <img src={curricon} alt="" />
                    </div>
                    <div className="name">
                        <span>Currency</span>
                    </div>
                    <select name=""  id=""></select>
                </div>
                <div className="english d-flex align-items-center">
                    <div className="langicon me-1">
                        <img src={locicon} alt="" />
                    </div>
                    <div className="name">
                        <span>Location</span>
                    </div>
                    <select name=""  id=""></select>
                </div>
                <div className="signup d-flex align-items-center">
                    <div className="signicon me-2">
                        <img src={signicon} alt="" />
                    </div>
                    <div className="signname ">
                        <span>Sign Up</span>
                    </div>
                </div>
                <div className="signin d-flex align-items-center">
                    <div className="signicon me-2">
                            <img src={logicon} alt="" />
                        </div>
                        <div className="signname ">
                            <span>Sign In</span>
                        </div>
                    </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header