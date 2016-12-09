import React from 'react';
import Intro from './Intro';
import PopularIdea from './Category/PopularIdea';
import LatestIdea from './Category/LatestIdea';
import RecommendedIdea from './Category/RecommendedIdea';
import Footer from './Footer/Footer';

const LandingPage = () => {
    return (
      <div className="landing-page">
        <div className="wrapper">
            <Intro />
            <div className="main">
                <PopularIdea />
                <LatestIdea />
                <RecommendedIdea />
                <Footer />
            </div>
        </div>
      </div>      
    )
}

export default LandingPage
