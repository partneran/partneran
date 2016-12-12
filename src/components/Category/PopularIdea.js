import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'


const PopularIdea = ({ ideas }) => {
    const ideaItem = ideas.map(i => <PopularIdeaItem title={i.title} image={i.image} description={i.description} slug={i.slug} key={i.id}/>)
    return (
            <div className="container">
              <div className="section text-center">
                  <h2 className="poptitle text-info">Popular Ideas</h2>
                  <div className="row">
                    {ideaItem}
                  </div>
                  <ul className="pager">
                    <li className="next"><a href="#">Explore more <span aria-hidden="true">&rarr;</span></a></li>
                  </ul>
              </div>
            </div>
    )
}


const PopularIdeaItem = (props) => {
  return (
    <div className="popular col-md-4 text-left">
      <div className="card">
        <div className="popular-thumb hovereffect" style={{backgroundImage: `url(${props.image})`}}>
            <div className="overlay">
                <div className="box">
                    <h2>{props.description}</h2>
                    <Link to={props.slug}>Visit</Link>
                </div>
            </div>
        </div>
        <div className="col-md-6 no-padding-left">

        </div>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ideas: state.ideas
  }
}


export default connect(mapStateToProps, null)(PopularIdea)
