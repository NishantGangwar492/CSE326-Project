import React from 'react'
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
import "./Product.css"
import { Col, Row } from 'react-bootstrap'
import C1 from '../../assets/images/product/smoll1.png'
import C2 from '../../assets/images/product/smoll2.png'
import C3 from '../../assets/images/product/smoll3.png'
import C4 from '../../assets/images/product/smoll4.png'
import I1 from '../../assets/images/product/g1.png'
import I2 from '../../assets/images/product/g2.png'
import I3 from '../../assets/images/product/g3.png'
import I4 from '../../assets/images/product/g4.png'
import I5 from '../../assets/images/product/g5.png'
import I6 from '../../assets/images/product/g6.png'
import Big1 from '../../assets/images/product/big-img.png'
import { Button } from '@mui/material'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Product = () => {
    return (
        <>
            <section className='container'>
                <p className='py-5 dress-heading sm-none'>
                    Spring Dresses
                </p>
                <p className='py-3 fs-5 dress-heading lg-none'>
                    Spring Dresses
                </p>
                <p className='pb-5 breadcrumb-c sm-none'>
                    Home <span>|</span> Dresses <span>|</span> Spring Dresses <span>|</span> Stand Out Green Marble Sheer Mesh Bodycon Mini Dress
                </p>
                <p className=' breadcrumb-c lg-none'>
                    Home <span>|</span> Dresses <span>|</span> Spring Dresses <span>|</span> Stand Out Green Marble Sheer Mesh Bodycon Mini Dress
                </p>
                <div>
                    <Row>
                        <Col lg={2} className='sm-none'>
                            <div className='img-leftbar'>
                                <img src={C1} />
                                <img src={C2} />
                                <img src={C3} />
                                <img src={C4} />
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className='img-rightbar'>
                                <img src={Big1} />
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div>
                                <p className='product-name'>
                                    <div>
                                        mLOLLIPOP 'ORCHID RUCHED TIE
                                    </div>
                                    <div>
                                        STRAP SATIN BODYCON DRESS
                                    </div>
                                </p>
                                <div className='price-box'>
                                    <div className='product-dprice'>
                                        INR 4999
                                    </div>
                                    <div className='product-mrp'>INR 9999</div>
                                </div>
                                <div className='discount'>
                                    50% Discount
                                </div>
                                <br />
                                <p>
                                    <div className='product-h1'>
                                        COLOR
                                    </div>
                                    <div className='lavender'>

                                    </div>
                                </p>
                                <p style={{ marginTop: 30 }}>
                                    <div className='product-h1'>
                                        Size
                                    </div>
                                    <div className='size-selector'>
                                        S
                                    </div>
                                </p>
                                <p className='button-box sm-none'>
                                    <Button variant="contained" style={{ color: "#fff", background: "#000" }}>ADD TO CART</Button>
                                </p>
                                <p className='lg-none'>
                                    <Button variant="contained" style={{ color: "#fff", background: "#000", width: '100%', fontSize: 16 }}>ADD TO CART</Button>
                                </p>
                                <p>
                                    Free shipping over INR499 Order
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='container py-5 sm-none'>
                <div
                    style={{
                        fontSize: 20,
                        fontWeight: 600,
                    }}
                >SIMILAR ITEMS</div>
                <div className='ins-gal py-5'>
                    <img src={I1} />
                    <img src={I2} />
                    <img src={I3} />
                    <img src={I4} />
                    <img src={I5} />
                    <img src={I6} />
                </div>
            </section>
            <section className='container py-5 lg-none'>
                <div
                    style={{
                        fontSize: 20,
                        fontWeight: 600,
                    }}
                >SIMILAR ITEMS</div>
                <div className='ins-gal-m py-5'>
                    <img src={I1} />
                    <img src={I2} />
                    <img src={I3} />
                    <img src={I4} />
                    <img src={I5} />
                    <img src={I6} />
                </div>
            </section>
            <section className='insta-gallery sm-none'>
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
            <section className='insta-gallery lg-none'>
                <div className='p-3 text-center'
                    style={{
                        fontWeight: 500,
                    }}
                >
                    <p>
                        FOLLOW US ON INSTAGRAM
                    </p>
                    <div className='my-4'>
                        <div className='container'>
                            <div className='insta-gallery-mobile'>
                                <img src={Gal1}
                                    style={{
                                        minHeight: 175,
                                        minWidth: 155,
                                    }}
                                />
                                <img src={Gal2}
                                    style={{
                                        minHeight: 175,
                                        minWidth: 155,
                                        marginLeft: 15
                                    }}
                                />
                                <img src={Gal3}
                                    style={{
                                        minHeight: 175,
                                        minWidth: 155,
                                        marginLeft: 15
                                    }}
                                />
                                <img src={Gal4}
                                    style={{
                                        minHeight: 175,
                                        minWidth: 155,
                                        marginLeft: 15
                                    }}
                                />
                                <img src={Gal5}
                                    style={{
                                        minHeight: 175,
                                        minWidth: 155,
                                        marginLeft: 15
                                    }}
                                />
                                <img src={Gal6}
                                    style={{
                                        minHeight: 175,
                                        minWidth: 155,
                                        marginLeft: 15
                                    }}
                                />
                                <img src={Gal7}
                                    style={{
                                        minHeight: 175,
                                        minWidth: 155,
                                        marginLeft: 15
                                    }}
                                />
                                <img src={Gal8}
                                    style={{
                                        minHeight: 175,
                                        minWidth: 155,
                                        marginLeft: 15
                                    }}
                                />
                                <img src={Gal9}
                                    style={{
                                        minHeight: 175,
                                        minWidth: 155,
                                        marginLeft: 15
                                    }}
                                />
                                <img src={Gal10}
                                    style={{
                                        minHeight: 175,
                                        minWidth: 155,
                                        marginLeft: 15
                                    }}
                                />
                            </div>
                        </div>
                        <div style={{
                            fontWeight: 400,
                            marginTop: 10
                        }}>
                            Scroll right to view more
                        </div>
                    </div>
                    <p>
                        TAG US TO GET A CHANCE TO GET FEATURED
                    </p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Product