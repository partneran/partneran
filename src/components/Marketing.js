import React from 'react';
import { Link } from 'react-router';

const Marketing = () => {
  return (
    <div id="marketing" className="section text-center">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h2 className="title">Have an Idea? Just share it!</h2>
          <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h5>
          <Link to="signup">
            <button type="button" className="btn btn-info" name="button">Join us!</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Marketing
