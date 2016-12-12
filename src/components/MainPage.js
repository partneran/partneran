import React, { Component } from 'react';
import AllIdea from './Category/AllIdea';
import Footer from './Footer/Footer';

class MainPage extends Component {
  constructor(){
    super()
    this.state = {
      category: ""
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
                          <li className="list-group-item" onClick={() => this.setState({category: 'all'})}><a href="#">All Categories</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'eCommerce'})}><a href="#">E-Commerce</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'edTech'})}><a href="#">EdTech</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'finTech'})}><a href="#">FinTech</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'iot'})}><a href="#">IoT</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'art'})}><a href="#">Art & Culture</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'agriculture'})}><a href="#">Agriculture</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'health'})}><a href="#">Health & Lifestyle</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'onDemand'})}><a href="#">On Demand Service</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'games'})}><a href="#">Games</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'software'})}><a href="#">Software</a></li>
                          <li className="list-group-item" onClick={() => this.setState({category: 'mobile'})}><a href="#">Mobile</a></li>
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

      </div>
    )
  }

}

export default MainPage
