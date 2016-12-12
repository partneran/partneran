import React from 'react'
import { connect } from 'react-redux'
import IdeaCard from './IdeaCard'

const AllIdea = ({category, ideas}) => {
  const allIdeas = ideas.map(i => <IdeaCard image={i.image} 
                                            key={i.id} 
                                            title={i.title} 
                                            author={i.author} 
                                            social={i.social}
                                            join={i.join}
                                            description={i.description}                                            
                                  />)
  const filteredIdea = ideas.filter(idea => idea.category === category).map(i => <IdeaCard image={i.image} 
                                                                                           key={i.id} 
                                                                                           title={i.title} 
                                                                                           author={i.author} 
                                                                                           social={i.social}
                                                                                           join={i.join}
                                                                                           description={i.description}                                            
                                                                                  />)
  switch(category){
    case 'all':
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

// <div className="col-md-4 text-left">
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

function mapStateToProps(state) {
  return {
    ideas: state.ideas
  }
}

export default connect(mapStateToProps, null)(AllIdea)
