import React, { useState } from 'react'
import "./Home.css"
import TextImg from '../../assets/images/home/rite_of_spring.png'
import { Col, Row } from 'react-bootstrap'
import Img1 from '../../assets/images/home/add-1 (1).png'
import Img2 from '../../assets/images/home/add-1 (2).png'
import Img3 from '../../assets/images/home/add3 (1).png'
import Img4 from '../../assets/images/home/add3 (2).png'
import Img5 from '../../assets/images/home/add4.png'
import Img6 from '../../assets/images/home/add5.png'
import FlexImg1 from '../../assets/images/home/flex1 (2).png'
import FlexImg2 from '../../assets/images/home/flex1 (3).png'
import FlexImg3 from '../../assets/images/home/flex1 (4).png'
import FlexImg4 from '../../assets/images/home/flex1 (5).png'
import FlexImg5 from '../../assets/images/home/flex1 (6).png'
import FlexImg6 from '../../assets/images/home/flex1 (7).png'
import Gal1 from '../../assets/images/home/gal (1).png'
import Gal2 from '../../assets/images/home/gal (2).png'
import Gal3 from '../../assets/images/home/gal (3).png'
import Gal4 from '../../assets/images/home/gal (4).png'
import Gal5 from '../../assets/images/home/gal (5).png'
import Gal6 from '../../assets/images/home/gal (6).png'
import Gal7 from '../../assets/images/home/gal (7).png'
import Gal8 from '../../assets/images/home/gal (8).png'
import Gal9 from '../../assets/images/home/gal (9).png'
import Gal10 from '../../assets/images/home/gal (10).png'
import { Container } from '@mui/material'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {

    const [height, setHeight] = useState(window.innerHeight)

    window.onresize = function (event) {
        setHeight(window.innerHeight)
    };

    return (
        <>
            <Navbar />
            <section className='hero-img'
                style={{ height: height }}
            >
                <h2
                    className='discount-offer'
                >50% OFF SITEWIDE</h2>
                <div className='rite-box'>
                    <img src={TextImg} className='rite-text' />
                </div>
                <div className='misc-text container'>
                    <div>
                        Tank Top - Black
                    </div>
                    <div>
                        SHOP NEW ARRIVALS
                    </div>
                </div>
            </section>
            <Container className='py-5'>
                <br />
                <p className='heading'>
                    Featured Collection
                </p>
                <div className='two-img-box'>
                    <div >
                        <Link to="/product" style={{ color: "black", textDecoration: 'none' }}>
                            <div className='img-box1'>
                                <img src={Img1} />
                            </div>
                            <div className='img-box-text'>
                                <div className='img-box-text1'>Spring Dresses</div>
                                <div className='img-box-text2'>Now Blooming : Springtime shades and prints </div>
                            </div>
                        </Link>
                    </div>
                    <Link to="/product" style={{ color: "black", textDecoration: 'none' }}>
                        <div >
                            <div className='img-box1'>
                                <img src={Img2} />
                            </div>
                            <div className='img-box-text'>
                                <div className='img-box-text1'>Prom Dresses</div>
                                <div className='img-box-text2'>Picture-perfect styles</div>
                            </div>
                        </div>
                    </Link>
                </div>
                <br />
                <br />
            </Container>
            <section className='hero-img-2'>
                <Container >
                    <div className="text-box-3">
                        <p className='p-text'>SHOP FORMAL DRESSES</p>
                    </div>
                </Container>
            </section>
            <Container className='py-5'>
                <br />
                <p className='heading'>
                    Trending Categories
                </p>
                <div className='two-img-box'>
                    <div >
                        <div className='img-box1'>
                            <img src={Img3} />
                        </div>
                        <div className='img-box-text'>
                            <div className='img-box-text1'>Graduation Dresses</div>
                            <div className='img-box-text2'>One degree hotter </div>
                        </div>
                    </div>
                    <div >
                        <div className='img-box1'>
                            <img src={Img4} />
                        </div>
                        <div className='img-box-text'>
                            <div className='img-box-text1'>Maxi Dresses</div>
                            <div className='img-box-text2'>Freedom It it’s best</div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </Container>
            <section className='hero-img-3'>
                <Container >
                    <div className="text-box-3">
                        <p className='p-text'>SPRING SHOPPING</p>
                    </div>
                </Container>
            </section>
            <Container className='py-5'>
                <br />
                <p className='heading'>
                    Featured Categories
                </p>
                <div className='two-img-box'>
                    <div >
                        <div className='img-box1'>
                            <img src={Img5} />
                        </div>
                        <div className='img-box-text'>
                            <div className='img-box-text1'>Two-Piece Sets</div>
                            <div className='img-box-text2'>Meet your match </div>
                        </div>
                    </div>
                    <div >
                        <div className='img-box1'>
                            <img src={Img6} />
                        </div>
                        <div className='img-box-text'>
                            <div className='img-box-text1'>Crop Tops</div>
                            <div className='img-box-text2'>Short & Sweet</div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </Container>
            <section className='hero-img-4'>
                <Container >
                    <div className="text-box-3">
                        <p className='p-text'>FLORAL DRESSES</p>
                    </div>
                </Container>
            </section>
            <section className='p-5'>
                <div className='flex-show'>
                    <div>
                        <img src={FlexImg1} />
                    </div>
                    <div>
                        <img src={FlexImg2} />
                    </div>
                    <div>
                        <img src={FlexImg3} />
                    </div>
                    <div>
                        <img src={FlexImg4} />
                    </div>
                    <div>
                        <img src={FlexImg5} />
                    </div>
                    <div>
                        <img src={FlexImg6} />
                    </div>
                </div>
            </section>
            <section className='insta-gallery'>
                <div className='p-4 text-center'
                    style={{
                        fontWeight: 500,
                    }}
                >
                    <p>
                        FOLLOW US ON INSTAGRAM
                    </p>
                    <div className='my-4'>
                        <div className='container'>
                            <div className='gal-box'>
                                <img src={Gal1} />
                                <img src={Gal2} />
                                <img src={Gal3} />
                                <img src={Gal4} />
                                <img src={Gal5} />
                            </div>
                            <div className='gal-box'>
                                <img src={Gal6} />
                                <img src={Gal7} />
                                <img src={Gal8} />
                                <img src={Gal9} />
                                <img src={Gal10} />
                            </div>
                        </div>
                    </div>
                    <p>
                        TAG US TO GET A CHANCE TO GET FEATURED
                    </p>
                </div>
            </section>
            <section className='container'>
                <div className='p-4 shopping-description'>
                    <div className='logo text-center my-4 mb-5 fs-1'>
                        THREADBARE
                    </div>
                    <p>
                        Welcome to our vibrant apparel emporium, where style meets comfort! Browse through our curated collection of trendy clothing, designed for every occasion. From chic dresses to cozy loungewear, discover the perfect ensemble to express your unique personality. Our store embodies fashion-forward choices that cater to diverse tastes, ensuring a delightful shopping experience.
                    </p>

                    <p>
                        Step into a realm of fashion possibilities with our extensive range of high-quality apparel. Whether you seek casual elegance or sophisticated charm, our selection boasts versatile pieces suitable for all ages and sizes. Explore the latest fashion trends and timeless classics, meticulously crafted to accentuate your individual flair. We prioritize comfort without compromising on style, offering a blend of contemporary designs and timeless staples.
                    </p>

                    <p>
                        Embrace effortless sophistication as you peruse our assortment of clothing that embraces modern trends. With an emphasis on quality fabrics and attention to detail, each garment reflects our commitment to delivering unparalleled style and comfort. From statement pieces to essential basics, our store caters to fashion enthusiasts seeking a perfect blend of quality, affordability, and on-trend styles.
                    </p>

                    <p>
                        Indulge in a seamless shopping experience at our online store, where fashion fantasies come to life. Enjoy hassle-free browsing, secure transactions, and prompt delivery, all aimed at elevating your satisfaction. Join us in celebrating individuality through fashion, where every garment tells a story and empowers you to embrace your unique fashion journey.
                    </p>
                    <br />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home