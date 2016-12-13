import React, { Component } from 'react';
import AllIdea from './Category/AllIdea';
import Footer from './Footer/Footer';

class MainPage extends Component {
  constructor(){
    super()
    this.state = {
      category: "All Categories"
    }
  }

  render(){
    return (
      <div className="components-page">
        <div className="wrapper">
          <div className="header header-filter explore-header">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <h1 className="title text-center">Explore Great Ideas</h1>
                  <h2 className="title text-center"> In {this.state.category}</h2>
                </div>
              </div>
            </div>
          </div>


        <div className="main">
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <div className="fixed-section affix-top" data-spy="affix" data-offset-top="340">
                      <ul className="list-group">
                          <li className="list-group-item" onClick={() => this.setState({category: 'All Categories'})}><button className="btn btn-simple btn-sm btn-info">All Categories</button></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'E Commerce'})}><a href="#">E-Commerce</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'Education Technology'})}><a href="#">EdTech</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'Financial Technology'})}><a href="#">FinTech</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'Internet of Thing'})}><a href="#">IoT</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'Art'})}><a href="#">Art & Culture</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'Agriculture'})}><a href="#">Agriculture</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'Health'})}><a href="#">Health & Lifestyle</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'On Demand Service'})}><a href="#">On Demand Service</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'Games'})}><button className="btn btn-simple btn-sm btn-info">Games</button></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'Software'})}><a href="#">Software</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'Mobile'})}><a href="#">Mobile</a></li>
                      </ul>
                  </div>
                </div>
                <div className="col-md-10">
                  <AllIdea category={this.state.category}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Footer />
      </div>
    )
  }

}

export default MainPage
