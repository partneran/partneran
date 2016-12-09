import React from 'react';

const RecommendedIdea = () => {
    return (
        <div className="container">
            <div className="section text-center">
                <h2>Recomendation Ideas</h2>
                <div className="row">
                    <div className="col-md-4 text-left">
                        <div className="idea_thumbnail hovereffect" style={{backgroundImage: 'url(https://avatars1.githubusercontent.com/u/10125796?v=3&u=b92ee420ae73b0fa745c0dbbbbf846630184fbb3&s=400)'}}>
                            <div className="overlay">
                                <div className="box">
                                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
              				        <p> <a href="#">LINK HERE</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedIdea
