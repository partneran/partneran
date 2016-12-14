import React from 'react';
import UserIdea from './Category/UserIdea';
import MemberIdea from './Category/MemberIdea';
import Footer from './Footer/Footer';
import Auth from '../helpers/token'
import { Link } from 'react-router';
import renderHTML from 'react-render-html';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="wrapper">
  		  <div className="header header-filter header-profile">
          <div className="container text-center">
            <h1>{Auth.getUser().name} Profile</h1>
          </div>
  		  </div>
    		<div className="main">
  			  <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="profile">
                  <div className="avatar">
                    {(Auth.getUser().photo_URL === null) ? <img src="http://i2.kym-cdn.com/photos/images/newsfeed/000/095/354/forever_alone__by_projectendo-d2z3pbc.jpg" alt="Profile" className="img-circle img-responsive img-raised"/> : <img src={Auth.getUser().photo_URL} alt="Profile" className="img-circle img-responsive img-raised"/> }

                  </div>
                  <div className="name">
                    <h3 className="title">{Auth.getUser().name}</h3>
                    <a className="btn btn-info btn-simple" href={"mailto:" + Auth.getUser().email}>
                      <h6>{Auth.getUser().email}</h6>
                    </a>

                  </div>
                </div>
              </div>
              <div className="description text-center">
                {(Auth.getUser().short_bio === null) ? <p>He is still not confident enough to tell about him/herself</p> : <p>{renderHTML(Auth.getUser().short_bio)}</p>}

                <div className="btn-group">
                  <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Edit Profile <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link to="edit-profile">Edit Profile</Link></li>
                    <li><Link to="edit-password">Change Password</Link></li>
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
