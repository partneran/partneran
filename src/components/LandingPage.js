import React from 'react';
import Intro from './Intro';
import ModalVideo from './ModalVideo';
import PopularIdea from './Category/PopularIdea';
import LatestIdea from './Category/LatestIdea';
import RecommendedIdea from './Category/RecommendedIdea';
import Marketing from './Marketing'
import Footer from './Footer/Footer';

const LandingPage = () => {
    return (
      <div className="landing-page">
        <div className="wrapper">
            <Intro />
            <ModalVideo />
            <div className="main">
                <PopularIdea />
                <RecommendedIdea />
                <LatestIdea />
                <Marketing />
                <Footer />
            </div>
        </div>
      </div>
    )
}

export default LandingPage
