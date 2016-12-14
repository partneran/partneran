import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { sampleSize } from 'lodash'

import IdeaCard from './IdeaCard'

const RecommendedIdea = ({ideas}) => {
  const sampleIdea = sampleSize(ideas, 3)
  const recommendIdeaList = sampleIdea.map(i => <IdeaCard image={i.image}
                                                          key={i.id}
                                                          title={i.title}
                                                          author={i.User.name}
                                                          category={i.Category.name}
                                                          join={i.createdAt}
                                                          description={i.description}
                                                />)
    return (
        <div className="container">
            <div className="section text-center">
                <h2 className="poptitle text-info">Recommended Ideas</h2>
                <div className="row">
                  {recommendIdeaList}
                </div>
                <ul className="pager">
                  <li className="next">
                    <Link to="explore">Explore more <span aria-hidden="true">&rarr;</span></Link>
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


export default connect(mapStateToProps, null)(RecommendedIdea)
