import React, { Component } from 'react';
import Intro from './Intro';
import ModalVideo from './ModalVideo';
import PopularIdea from './Category/PopularIdea';
import LatestIdea from './Category/LatestIdea';
import RecommendedIdea from './Category/RecommendedIdea';
import Marketing from './Marketing'
import Footer from './Footer/Footer';
import { loadIdeas } from '../actions/idea'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class LandingPage extends Component {
    componentDidMount() {
        this.props.loadIdeas()
    }
    render() {
        return (
            <div className="landing-page">
                <div className="wrapper">
                    <Intro />
                    <ModalVideo />
                    <div className="main">
                        <PopularIdea />
                        <LatestIdea />
                        <Marketing />
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
  return {
    loadIdeas: bindActionCreators(loadIdeas, dispatch)
  }
}


const mapStateToProps = (state) => {
  return {
    ideas: state.ideas
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
