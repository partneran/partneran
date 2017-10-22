import React from 'react'
// import Auth from '../../helpers/token'
import { Link } from 'react-router'
import slug from 'slug'
// console.log('this is slug',slug('MAK cek'.toLowerCase()))
import renderHTML from 'react-render-html'
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

const IdeaCard = ({props}) => {
  let path = slug(props.title.toLowerCase())
  let description = renderHTML(props.description.substring(3, 125));
  console.log(props);
  return (
        <div className="col-md-4 text-left">
            <div className="card thumbnail explore-card">

              <img src={props.image} alt="..."  className="img-responsive"/>
              <div className="caption">
                <h3>{props.title}</h3>
                <p>
                  <i className="fa fa-icon fa-user"></i> {props.User.name}
                  &nbsp;
                  <i className="fa fa-icon fa-tag"></i> {props.Category.name}
                  &nbsp;
                  <i className="fa fa-icon fa-calendar"></i> {props.createdAt}
                </p>
                <div className="break">{description} . . .</div>
                <ul className="pager">
                  <li className="next"><Link to={`/${path}`}>See Details <span aria-hidden="true">&rarr;</span></Link></li>
                </ul>
              </div>
            </div>
          </div>
    )
}

export default IdeaCard
