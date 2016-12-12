import React from 'react';
import { connect } from 'react-redux';


const PopularIdea = ({ ideas }) => {
    const ideaList = ideas.map(i => <PopularIdeaItem title={i.title} image={i.image} description={i.description} />)
    return (
            <div className="container">
              <div className="section text-center">
                  <h2 className="poptitle text-info">Popular Ideas</h2>
                  <div className="row">
                    {ideaList}
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
        <div className="popular-thumb hovereffect" style={{backgroundImage: 'url(https://static.pexels.com/photos/7374/startup-photos.jpg)'}}>
            <div className="overlay">
                <div className="box">
                    <h2>{props.description}</h2>
              <p> <a href="#">{props.title}</a> </p>
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
