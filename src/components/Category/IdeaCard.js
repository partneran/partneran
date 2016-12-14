import React from 'react'
import Auth from '../../helpers/token'
import { Link } from 'react-router'
// console.log('this auth', Auth.getUser())
// import { stateFromHTML } from 'draft-js';


// const sampleMarkup =
//   '<b>Bold text</b>, <i>Italic text</i><br/ ><br />' +
//   '<a href="http://www.facebook.com">Example link</a>';

// const blocksFromHTML = convertFromHTML(sampleMarkup);
// const state = ContentState.createFromBlockArray(blocksFromHTML);

// this.state = {
//   editorState: EditorState.createWithContent(state),
// };

const IdeaCard = (props) => {
  // console.log(stateFromHTML(props.description))
  // console.log('this is coming from idea card', props)

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
                  <li className="next"><Link to={`/${props.slug}`}>See Details <span aria-hidden="true">&rarr;</span></Link></li>
                </ul>
              </div>
            </div>
          </div>
  )
}

export default IdeaCard
