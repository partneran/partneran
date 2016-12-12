import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { sampleSize } from 'lodash'
import IdeaCard from './IdeaCard'


const Latest = ({ ideas }) => {
    // sampleSize from lodash takes two arguments in which the first is the array, and the second is the picked element randomly
      const sampleIdea = sampleSize(ideas, 3)
      const latestIdeaList = sampleIdea.map(i => <IdeaCard image={i.image} 
                                                              key={i.id} 
                                                              title={i.title} 
                                                              author={i.author} 
                                                              social={i.social}
                                                              join={i.join}
                                                              description={i.description}                                            
                                              />)
    return (
            <div className="container">
              <div className="section text-center">
                  <h2 className="poptitle text-info">Newest Idea</h2>
                  <div className="row">
                    {latestIdeaList}
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


const mapStateToProps = (state) => {
  return {
    ideas: state.ideas
  }
}


export default connect(mapStateToProps, null)(Latest)
