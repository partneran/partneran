import React from 'react';
import UserIdea from './Category/UserIdea';
import MemberIdea from './Category/MemberIdea';
import Footer from './Footer/Footer';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="wrapper">
  		  <div className="header header-filter header-profile">
          <div className="container text-center">
            <h1>Ken Duigraha Profile</h1>
          </div>
  		  </div>
    		<div className="main">
  			  <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="profile">
                  <div className="avatar">
                    <img src="https://media.licdn.com/media/AAEAAQAAAAAAAAe6AAAAJGQ2YjI4OWUxLWYxODItNGUzNC1hOTc4LTA5M2JiZGMwOTg1Nw.jpg" alt="Profile" className="img-circle img-responsive img-raised"/>
                  </div>
                  <div className="name">
                    <h3 className="title">Ken Duigraha</h3>
			              <h6>kenduigraha@yahoo.com</h6>
                  </div>
                </div>
              </div>
              <div className="description text-center">
                <p>An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>
                <div className="btn-group">
                  <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Edit Profile <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a href="#">Edit Profile</a></li>
                    <li><a href="#">Change Password</a></li>
                  </ul>
                </div>
              </div>
              <div className="section">
                <UserIdea/>
              </div>

              <div className="section">
                <MemberIdea/>
              </div>
            </div>
	        </div>
    		</div>
      </div>
      <Footer />
    </div>
  )
}

export default ProfilePage;
