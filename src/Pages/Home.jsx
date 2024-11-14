//Home.jsx
import React, { useState } from 'react'
import arrow from '../Assets/ei_arrow-up.png'
import '../Pages/home.css'
import coverimg from '../Assets/Image.svg'
import userimg from '../Assets/image 15.png'
import vector from '../Assets/Vector.png'
import { useDispatch, useSelector } from 'react-redux';
import {  submitUserData, updateUserData } from '../Redux/slices/userSlice';

function Home() {

    const [toggleAdd,setToggleAdd] = useState(false)
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.data);

    const addDetails =()=>{
        setToggleAdd(!toggleAdd)
    }

    

    const handleChange = (e) => {
        const { id, value } = e.target;
        dispatch(updateUserData({ ...userData, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitUserData());
        setToggleAdd(!toggleAdd)
      };

  return (
    <>
        <div className="home row mt-2">
            <div className="col-md-3">
                <div className="user-navigation d-flex align-items-center px-4">
                    <div className='arrow'>
                        <img src={arrow} width={'65px'} alt="" />
                    </div>
                    <div className="username">
                        <span>Saimon Junior</span>
                    </div>
                </div>
            </div>
            <div className="col-md-6">

                <div className="user-details ">

                    <div className="user-cover">
                        <img src={coverimg} width={'100%'} alt="" />
                    </div>
                    <div className="user-img">
                        <img src={userimg} width={'100%'} alt="" />
                    </div>
                    <div className="user-infos row">
                        <div className="col-md-3"></div>
                        <div className='col-md-6 px-5 text-left'>
                            <div className="info-name mb-1">
                                <span>Saimon Junior</span>
                            </div>
                            <div className="info-cpny d-flex justify-content-between mb-3">
                                <div className="cpny d-flex ">
                                    <div className='d-flex align-items-center px-2 gap-2 border rounded'>
                                        <img src={vector}  alt="" />
                                        <span>OGSI MOON</span>
                                    </div>
                                </div>
                                <div className="pos">
                                    <span>Owner</span>
                                </div>
                            </div>
                            <div className="info-social d-flex gap-2">
                                <div className="soc-icon">
                                    <div className="watsp ">
                                    <i class="fa-brands fa-whatsapp"></i>
                                    </div>
                                </div>
                                <div className="soc-icon">
                                    <div className="insta ">
                                    <i class="fa-brands fa-instagram"></i>
                                    </div>
                                </div>
                                <div className="soc-icon">
                                    <div className="facebook ">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    </div>
                                </div>
                                <div className="soc-icon">
                                    <div className="twitx ">
                                    <i class="fa-brands fa-x-twitter"></i>
                                    </div>
                                </div>
                                <div className="soc-icon">
                                    <div className="youtube ">
                                    <i class="fa-brands fa-youtube"></i>
                                    </div>
                                </div>
                                <div className="soc-icon">
                                    <div className="chat ">
                                    <i class="fa-brands fa-weixin"></i>
                                    </div>
                                </div>
                                <div className="soc-icon">
                                    <div className="telegram ">
                                    <i class="fa-solid fa-paper-plane"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>

                    <div className="page-controls d-flex justify-content-between mt-5">
                        <div className="control-btn" style={{backgroundColor:'#6e55ff',color:'white'}}>
                            <i class="fa-solid fa-house"></i>
                            <span>Full Page</span>
                        </div>
                        <div className="control-btn">
                            <i class="fa-solid fa-house"></i>
                            <span>Properties</span>
                        </div>
                        <div className="control-btn">
                            <i class="fa-solid fa-gear"></i>
                            <span>Services</span>
                        </div>
                        <div className="control-btn">
                        <i class="fa-solid fa-globe"></i>
                            <span>News</span>
                        </div>
                        <div className="control-btn">
                        <i class="fa-solid fa-location-crosshairs"></i>
                            <span>Locations</span>
                        </div>
                        <div className="control-btn">
                        <i class="fa-solid fa-gears"></i>
                            <span>Management</span>
                        </div>
                        <div className="control-btn">
                        <i class="fa-solid fa-circle-info"></i>
                            <span>About</span>
                        </div>
                    </div>

                    <section className='my-5'>
                        <div className='about shadow px-3 py-4 rounded-4'>
                            <div className="about-head d-flex justify-content-between">
                                <span>About Simon Junior</span>
                                <div className="add-btn rounded px-2">
                                    <button onClick={addDetails}>{toggleAdd?"Cancel":"Add"}</button>
                                </div>
                            </div>
                            <hr />
                            <div className="about-details">
                                <p>Damac® Properties Dubai — Exciting Investment Opportunities With Guaranteed Returns Of Up To 8% On Selected Projects.</p>
                            </div>
                            <hr />

                            <div className="datas rounded-4 p-4 ">

                                <div className="data  ">
                                    {toggleAdd?
                                    <div className="form">
                                        <form action="" onSubmit={handleSubmit} className='d-flex flex-column'>
                                            <label htmlFor="name">Name</label>
                                                <input type="text" id='name' onChange={handleChange}/>
                                            <label htmlFor="phone">Phone</label>
                                                <input type="text" id='phone' onChange={handleChange}/>
                                            <label htmlFor="web">Website</label>
                                                <input type="text" id='web' onChange={handleChange}/>
                                            <label htmlFor="gender">Gender</label>
                                                <input type="text" id='gender' onChange={handleChange}/>
                                            <label htmlFor="dob">Date Of Birth</label>
                                                <input type="text" id='dob' onChange={handleChange}/>
                                            <label htmlFor="nationality">Nationality</label>
                                                <input type="text" id='nationality' onChange={handleChange}/>
                                            <label htmlFor="idnum">National ID Number</label>
                                                <input type="text" id='idnum' onChange={handleChange}/>
                                            <label htmlFor="country">Country</label>
                                                <input type="text" id='country' onChange={handleChange}/>
                                            <label htmlFor="province">Province/State</label>
                                                <input type="text" id='province' onChange={handleChange}/>
                                            <label htmlFor="city">City</label>
                                                <input type="text" id='city' onChange={handleChange}/>
                                            <label htmlFor="zip">Postal/Zip Code</label>
                                                <input type="text" id='zip' onChange={handleChange}/>
                                            <label htmlFor="address">Address</label>
                                                <input type="text" id='address' onChange={handleChange}/>
                                            <div className="save">
                                                <button type='submit'>Save</button>
                                            </div>    
                                        </form>
                                    </div>
                                    :
                                    <div className='row'>
                                        <div className='col-md-4 d-flex flex-column gap-2'>
                                            <div className="key">
                                                <span>Email</span>
                                            </div>
                                            <div className="key">
                                                <span>Phone</span>
                                            </div>
                                            <div className="key">
                                                <span>Website</span>
                                            </div>
                                            <div className="key">
                                                <span>Gender</span>
                                            </div>
                                            <div className="key">
                                                <span>Date Of Birth</span>
                                            </div>
                                            <div className="key">
                                                <span>Nationality</span>
                                            </div>
                                            <div className="key">
                                                <span>National ID Number</span>
                                            </div>
                                            <div className="key">
                                                <span>Country</span>
                                            </div>
                                            <div className="key">
                                                <span>Province/State</span>
                                            </div>
                                            <div className="key">
                                                <span>City</span>
                                            </div>
                                            <div className="key">
                                                <span>Postal/Zip Code</span>
                                            </div>
                                            <div className="key">
                                                <span>Address</span>
                                            </div>
                                        </div>
                                        <div className='col-md-8 d-flex flex-column gap-2'>
                                                    <div className="value"><span>{userData.name || '-'}</span></div>
                                                    <div className="value"><span>{userData.phone || '-'}</span></div>
                                                    <div className="value"><span>{userData.web || '-'}</span></div>
                                                    <div className="value"><span>{userData.gender || '-'}</span></div>
                                                    <div className="value"><span>{userData.dob || '-'}</span></div>
                                                    <div className="value"><span>{userData.nationality || '-'}</span></div>
                                                    <div className="value"><span>{userData.idnum || '-'}</span></div>
                                                    <div className="value"><span>{userData.country || '-'}</span></div>
                                                    <div className="value"><span>{userData.province || '-'}</span></div>
                                                    <div className="value"><span>{userData.city || '-'}</span></div>
                                                    <div className="value"><span>{userData.zip || '-'}</span></div>
                                                    <div className="value"><span>{userData.address || '-'}</span></div>
                                                </div>
                                    </div>
                                    
                                    }
                                </div>

                            </div>

                        </div>
                    </section>

                </div>

            </div>
            <div className="col-md-3"></div>
        </div>
    </>
  )
}

export default Home