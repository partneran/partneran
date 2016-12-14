import React from 'react'
import { connect } from 'react-redux'
import IdeaCard from './IdeaCard'

const AllIdea = ({category, ideas}) => {
  console.log(ideas)
  const allIdeas = ideas.map(i => <IdeaCard image={i.image} 
                                            key={i.id} 
                                            title={i.title} 
                                            author={i.author} 
                                            social={i.social}
                                            join={i.join}
                                            description={i.description}
                                            slug={i.slug}                                            
                                  />)
  const filteredIdea = ideas.filter(idea => idea.category === category).map(i => <IdeaCard image={i.image} 
                                                                                           key={i.id} 
                                                                                           title={i.title} 
                                                                                           author={i.author} 
                                                                                           social={i.social}
                                                                                           join={i.join}
                                                                                           description={i.description}
                                                                                           slug={i.slug}                                            
                                                                                  />)
  switch(category){
    case 'All Categories':
      return (
        <div>
          <h2 className="explore-title">{category}</h2>
          <div className="row">
            {allIdeas}
          </div>
          <ul className="pager">
            <li className="next"><a href="#">Explore more <span aria-hidden="true">&rarr;</span></a></li>
           </ul>
        </div>
      )
    default:
      return(
        <div>
          <h2 className="explore-title">{category}</h2>
          <div className="row">
            {filteredIdea}
          </div>
          <ul className="pager">
            <li className="next"><a href="#">Explore more <span aria-hidden="true">&rarr;</span></a></li>
           </ul>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    ideas: state.ideas
  }
}

export default connect(mapStateToProps, null)(AllIdea)
