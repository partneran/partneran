import React from 'react'


const IdeaCard = (props) => {
  return (
        <div className="col-md-4 text-left">
            <div className="card thumbnail">

              <img src={props.image} alt="..."  className="img-responsive"/>
              <div className="caption">
                <h3>{props.title}</h3>
                <p>
                  <i className="fa fa-icon fa-user"></i> {props.author}
                  &nbsp;
                  <i className="fa fa-icon fa-tag"></i> <a href={props.social}>Social Network</a>
                  &nbsp;
                  <i className="fa fa-icon fa-calendar"></i> {props.join}
                </p>
                <p>{props.description}</p>
                <ul className="pager">
                  <li className="next"><a href="#">See Details <span aria-hidden="true">&rarr;</span></a></li>
                </ul>
              </div>
            </div>
          </div>
  )
}

export default IdeaCard