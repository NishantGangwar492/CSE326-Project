import React from 'react'
import "./Footer.css"
import Countries from '../assets/images/footer/countries.png'
import AppStoreIcon from '../assets/icons/AppStoreIcon'
import TwitterIcon from '../assets/icons/TwitterIcon'
import FBIcon from '../assets/icons/FBIcon'
import IgIcon from '../assets/icons/IgIcon'
import PinterestIcon from '../assets/icons/PinterestIcon'

const Footer = () => {
    return (
        <div className='my-footer  p-3'>
            <div className='container'>
                <section className='input-box'>
                    <div>SIGN UP FOR EMAIL</div>
                    <div style={{ width: 60 }}></div>
                    <div className='input-text-box'>
                        <div>
                            <input className='input-email' />
      
                        </div>
                        <div>
                            <button className='btn btn-dark btn-search'>SUBMIT</button>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <section className='section-link'>
                    <div className='sm-none'>
                        <div>INFO</div>
                        <br />
                        <div>
                            <div className='footer-link-item'>Info</div>
                            <div className='footer-link-item'>Sign In</div>
                            <div className='footer-link-item'>Shopping</div>
                            <div className='footer-link-item'>Returns</div>
                            <div className='footer-link-item'>Help</div>
                            <div className='footer-link-item'>Contact Us</div>
                            <div className='footer-link-item'>Size Guide</div>
                        </div>
                    </div>
                    <div>
                        <div className='footer-middle'>
                            <div className='logo'>THREADBARE</div>
                            <div className='para-1'>
                                Due to the impact of Covid-19, we are currently experiencing
                                minor delays with our shipping carriers
                            </div>
                            <div className='para-1-subtext'>
                                Free shipping over INR499
                            </div>
                            <div className='para-1-subtext'>
                                Free 5-day return shipping
                            </div>
                        </div>
                    </div>
                    <div className='sm-none'>
                        <div>COMPANY</div>
                        <br />
                        <div>
                            <div className='footer-link-item'>About Us</div>
                            <div className='footer-link-item'>Careers</div>
                            <div className='footer-link-item'>Threabare Cares</div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <section>
                    <div className='avl-text'>Available Country</div>
                    <div className='countries-pan'>
                        <img src={Countries} className='countries-img' />
                    </div>
                    <div className='hr-style'></div>
                    <div className='d-flex justify-content-center'>
                        <AppStoreIcon />
                    </div>
                    <div className='social-media-icons'>
                        <div className='social-media-item'>
                            <FBIcon />
                        </div>
                        <div className='social-media-item'>
                            <IgIcon />
                        </div>
                        <div className='social-media-item'>
                            <TwitterIcon />
                        </div>
                        <div className='social-media-item'>
                            <PinterestIcon />
                        </div>
                    </div>
                    <div className='text-center copyright-details'>
                        <div>
                            Sitemap | Terms of Service | Privacy Policy
                        </div>
                        <div>
                            &copy; 2022 threadbare.com LLC. ALL RIGHTS RESERVED.
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer