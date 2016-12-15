import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// import { sampleSize } from 'lodash'
import IdeaCard from './IdeaCard'
import { loadIdeas } from '../../actions/idea'
import { bindActionCreators } from 'redux'
import Auth from '../../helpers/token'
import PopularIdea from './PopularIdea'

class UserIdea extends Component {
  componentDidMount() {
    this.props.loadIdeas()
  }
  render() {
        // sampleSize from lodash takes two arguments in which the first is the array, and the second is the picked element randomly
      const sampleIdea = this.props.ideas.filter(idea => idea.UserId === Auth.getUser().sub )
      const userIdea = sampleIdea.map(idea => <IdeaCard props={idea} key={idea.title}/>)
      if(userIdea.length > 0 ) {
          return (
          <div className="container">
            <div className="section text-center">
                <h2 className="poptitle text-info">{Auth.getUser().name} Idea</h2>
                <div className="row">
                  {userIdea}
                </div>
                <ul className="pager">
                  <li className="next">
                    <Link to="explore"> Explore More  <span aria-hidden="true">&rarr;</span></Link>
                    </li>
                </ul>
            </div>
          </div>
        )
      } else {
        return (
          <PopularIdea />
        )
      }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadIdeas: bindActionCreators(loadIdeas, dispatch)
  }
}

const mapStateToProps = (state) =>
  ({
    ideas: state.ideas
  })


export default connect(mapStateToProps, mapDispatchToProps)(UserIdea)

// const UserIdea = () => {
//     return (
//         <div className="container">
//             <div className="section text-center">
//                 <h2>{Auth.getUser().name} Idea</h2>
//                 <div className="row">
//                     <div className="col-md-4 text-left">
//                       <div className="card thumbnail">

//                         <img src="https://images.pexels.com/photos/205316/pexels-photo-205316.png?dl&fit=crop&w=640&h=426" alt="..."  className="img-responsive"/>
//                         <div className="caption">
//                           <h3>Idea Title</h3>
//                           <p>
//                             <i className="fa fa-icon fa-user"></i> Ken Duigraha
//                             &nbsp;
//                             <i className="fa fa-icon fa-tag"></i> Social Network
//                             &nbsp;
//                             <i className="fa fa-icon fa-calendar"></i> Dec 12th, 2016
//                           </p>
//                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                           <ul className="pager">
//                             <li className="next"><a href="#">See Details <span aria-hidden="true">&rarr;</span></a></li>
//                           </ul>
//                         </div>

//                       </div>
//                     </div>
//                     <div className="col-md-4 text-left">
//                       <div className="card thumbnail">

//                         <img src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?dl&fit=crop&w=640&h=425" alt="..."  className="img-responsive"/>
//                         <div className="caption">
//                           <h3>Idea Title</h3>
//                           <p>
//                             <i className="fa fa-icon fa-user"></i> Ken Duigraha
//                             &nbsp;
//                             <i className="fa fa-icon fa-tag"></i> Social Network
//                             &nbsp;
//                             <i className="fa fa-icon fa-calendar"></i> Dec 12th, 2016
//                           </p>
//                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                           <ul className="pager">
//                             <li className="next"><a href="#">See Details <span aria-hidden="true">&rarr;</span></a></li>
//                           </ul>
//                         </div>

//                       </div>
//                     </div>

//                     <div className="col-md-4 text-left">
//                       <div className="card thumbnail">

//                         <img src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?dl&fit=crop&w=640&h=425" alt="..."  className="img-responsive"/>
//                         <div className="caption">
//                           <h3>Idea Title</h3>
//                           <p>
//                             <i className="fa fa-icon fa-user"></i> Ken Duigraha
//                             &nbsp;
//                             <i className="fa fa-icon fa-tag"></i> Social Network
//                             &nbsp;
//                             <i className="fa fa-icon fa-calendar"></i> Dec 12th, 2016
//                           </p>
//                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                           <ul className="pager">
//                             <li className="next"><a href="#">See Details <span aria-hidden="true">&rarr;</span></a></li>
//                           </ul>
//                         </div>

//                       </div>
//                     </div>
//                 </div>
//                 <ul className="pager">
//                   <li className="next"><a href="#">Explore more <span aria-hidden="true">&rarr;</span></a></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default UserIdea


// import React from 'react'
// import Auth from '../../helpers/token'
// import { Link } from 'react-router'
// import slug from 'slug'
// console.log('this is slug',slug('MAK cek'.toLowerCase()))
// import renderHTML from 'react-render-html'
// // console.log('this auth', Auth.getUser())
// // import { stateFromHTML } from 'draft-js';


// // const sampleMarkup =
// //   '<b>Bold text</b>, <i>Italic text</i><br/ ><br />' +
// //   '<a href="http://www.facebook.com">Example link</a>';

// // const blocksFromHTML = convertFromHTML(sampleMarkup);
// // const state = ContentState.createFromBlockArray(blocksFromHTML);

// // this.state = {
// //   editorState: EditorState.createWithContent(state),
// // };

// const UserIdea = ({props}) => {
//   // console.log(stateFromHTML(props.description))

//   console.log('this is coming from idea card', props, Auth.getUser())
//   let path = slug(props.title.toLowerCase())

//   return (
//         <div className="col-md-4 text-left">
//             <div className="card thumbnail">

//               <img src={props.image} alt="..."  className="img-responsive"/>
//               <div className="caption">
//                 <h3>{props.title}</h3>
//                 <p>
//                   <i className="fa fa-icon fa-user"></i> {props.author}
//                   &nbsp;
//                   <i className="fa fa-icon fa-tag"></i> <a href={props.category}>{props.category}</a>
//                   &nbsp;
//                   <i className="fa fa-icon fa-calendar"></i> {props.join}
//                 </p>
//                 <p>{renderHTML(props.description)}</p>
//                 <ul className="pager">
//                   <li className="next"><Link to={`/${path}`}>See Details <span aria-hidden="true">&rarr;</span></Link></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//   )
// }

// export default UserIdea
