import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Slider from '../components/Slider';

const Home = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <Slider />
            <main className="art-sheet clearfix">
                <div className="art-layout-wrapper">
                    <div className="art-content-layout">
                        <div className="art-content-layout-row">
                            <div className="art-layout-cell art-sidebar1">
                                <div className="art-block clearfix">
                                    <div className="art-blockheader">
                                        <h3 className="t">Welcome to Tunaweza Mwanza</h3>
                                    </div>
                                    <div className="art-blockcontent">
                                        <p>
                                            <img width="165" height="124" alt="" className="art-lightbox" src="assets/images/intro.jpg" />
                                            TUNAWEZA offers young people with disabilities the chance to widen their social and vocational skills.
                                        </p>
                                        <p>
                                            <img width="169" height="126" alt="" className="art-lightbox" src="assets/images/batic.jpg" />
                                            <strong>Batik workshop!</strong> Youngsters learn how to stamp Wax and participate in Batik Production.
                                        </p>
                                        <p>
                                            <img width="165" height="124" alt="" className="art-lightbox" src="assets/images/sewing.jpg" />
                                            <strong>Sewing room!</strong> Tailoring is one of our backbones, training youngsters to produce colorful items.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="art-layout-cell art-content">
                                <article className="art-post art-article">
                                    <div className="art-postcontent art-postcontent-0 clearfix">
                                        <h2>Our Programs</h2>
                                        <p>
                                            <img width="376" height="282" alt="" className="art-lightbox" src="assets/images/ecological.jpg" />
                                            <strong>Ecological gardening!</strong> Students learn horticulture and how to grow medicinal plants.
                                        </p>
                                        <p>
                                            <img width="376" height="282" alt="" className="art-lightbox" src="assets/images/domestic.jpg" />
                                            <strong>Domestic economy!</strong> Students learn food hygiene and preparation of different cuisines.
                                        </p>
                                    </div>
                                </article>
                            </div>
                            <div className="art-layout-cell art-sidebar2">
                                <div className="art-block clearfix">
                                    <div className="art-blockheader">
                                        <h3 className="t">Our Workshops</h3>
                                    </div>
                                    <div className="art-blockcontent">
                                        <p>
                                            <img width="169" height="126" alt="" className="art-lightbox" src="assets/images/paperworkshop.jpg" />
                                            <strong>Paper workshop!</strong> Youngsters learn how to recycle papers and produce lovely designs.
                                        </p>
                                        <p>
                                            <img width="165" height="124" alt="" className="art-lightbox" src="assets/images/jewerlymanufacturing.jpg" />
                                            <strong>Jewelry manufacturing!</strong> This department deals with the design and production of ornaments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;