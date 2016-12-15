import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// import { sampleSize } from 'lodash'
import IdeaCard from './IdeaCard'
import { loadIdeas } from '../../actions/idea'
import { bindActionCreators } from 'redux'

class Latest extends Component {
  componentDidMount() {
    this.props.loadIdeas()
  }
  render() {
    const sampleIdea = this.props.ideas.sort(function(a, b){
      var c = new Date(a.createdAt)
      var d = new Date(b.createdAt)
      return c - d
    } ).slice(0, 3)

    const latestIdea = sampleIdea.map(idea => <IdeaCard props={idea} key={idea.title} />)

    return (
          <div className="container">
            <div className="section text-center">
            <h2 className="poptitle text-info">Latest Idea</h2>
                <div className="row">
                  {latestIdea}
                </div>
                <ul className="pager">
                  <li className="next">
                    <Link to="explore"> Explore More  <span aria-hidden="true">&rarr;</span></Link>
                    </li>
                </ul>
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


export default connect(mapStateToProps, mapDispatchToProps)(Latest)
