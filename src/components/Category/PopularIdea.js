import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { sampleSize } from 'lodash'
import IdeaCard from './IdeaCard'
import { loadIdeas } from '../../actions/idea'
import { bindActionCreators } from 'redux'

class PopularIdea extends Component {
  componentDidMount() {
    this.props.loadIdeas()
  }
  render() {
        // sampleSize from lodash takes two arguments in which the first is the array, and the second is the picked element randomly
      const sampleIdea = sampleSize(this.props.ideas, 3)
      const popularIdeaList = sampleIdea.map(idea => <IdeaCard props={idea}/>)
    return (
          <div className="container">
            <div className="section text-center">
            <h2 className="poptitle text-info">Popular Idea</h2>
                <div className="row">
                  {popularIdeaList}
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


// const PopularIdea = ({ ideas }) => {
//     console.log('ideas', ideas)
//     // sampleSize from lodash takes two arguments in which the first is the array, and the second is the picked element randomly
//       const sampleIdea = sampleSize(ideas, 3)
//       const popularIdeaList = sampleIdea.map(i => <IdeaCard image={i.image}
//                                                               key={i.id}
//                                                               title={i.title}
//                                                               author={i.author}
//                                                               social={i.social}
//                                                               join={i.join}
//                                                               description={i.description}
//                                                     />)
//     return (
//             <div className="container">
//               <div className="section text-center">
//                   <h2 className="poptitle text-info">Popular Ideas</h2>
//                   <div className="row">
//                     {popularIdeaList}
//                   </div>
//                   <ul className="pager">
//                     <li className="next">
//                       <Link to="explore"> Explore More  <span aria-hidden="true">&rarr;</span></Link>
//                       </li>
//                   </ul>
//               </div>
//             </div>
//     )
// }

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


export default connect(mapStateToProps, mapDispatchToProps)(PopularIdea)
