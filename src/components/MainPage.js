import React from 'react';
import AllIdea from './Category/AllIdea'

const MainPage = () => {
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
      </div>

      <div className="main">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="fixed-section affix-top" data-spy="affix" data-offset-top="340">
                    <ul className="list-group">
                        <li className="list-group-item"><a href="#">All Categoriess</a></li>
                        <li className="list-group-item"><a href="#">E-Commerce</a></li>
                        <li className="list-group-item"><a href="#">EdTech</a></li>
                        <li className="list-group-item"><a href="#">FinTech</a></li>
                        <li className="list-group-item"><a href="#">IoT</a></li>
                        <li className="list-group-item"><a href="#">Art & Culture</a></li>
                        <li className="list-group-item"><a href="#">Agriculture</a></li>
                        <li className="list-group-item"><a href="#">Health & Lifestyle</a></li>
                        <li className="list-group-item"><a href="#">On Demand Service</a></li>
                        <li className="list-group-item"><a href="#">Games</a></li>
                        <li className="list-group-item"><a href="#">Software</a></li>
                        <li className="list-group-item"><a href="#">Mobile</a></li>
                    </ul>
                </div>
              </div>
              <div className="col-md-10">
                <AllIdea />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MainPage
