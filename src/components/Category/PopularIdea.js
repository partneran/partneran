import React from 'react';

const PopularIdea = () => {
    return (
            <div className="container">
              <div className="section text-center">
                  <h2 className="poptitle text-info">Popular Ideas</h2>
                  <div className="row">
                    <div className="popular col-md-4 text-left">
                      <div className="card">
                        <div className="popular-thumb hovereffect" style={{backgroundImage: 'url(https://static.pexels.com/photos/7374/startup-photos.jpg)'}}>
                            <div className="overlay">
                                <div className="box">
                                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                              <p> <a href="#">LINK HERE</a> </p>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="popular col-md-4 text-left">
                      <div className="card">
                        <div className="popular-thumb hovereffect" style={{backgroundImage: 'url(https://images.pexels.com/photos/7375/startup-photos.jpg?w=1260&h=750&auto=compress&cs=tinysrgb)'}}>
                            <div className="overlay">
                                <div className="box">
                                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
              				        <p> <a href="#">LINK HERE</a> </p>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="popular col-md-4 text-left">
                      <div className="card">
                        <div className="popular-thumb hovereffect" style={{backgroundImage: 'url(https://static.pexels.com/photos/7110/desk-office-workspace-coworking.jpg)'}}>
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
            </div>
    )
}

const PopularIdeaItem = () => {
  return (
    <div className="popular col-md-4 text-left">
      <div className="card">
        <div className="popular-thumb hovereffect" style={{backgroundImage: 'url(https://static.pexels.com/photos/7374/startup-photos.jpg)'}}>
            <div className="overlay">
                <div className="box">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
              <p> <a href="#">LINK HERE</a> </p>
                </div>
            </div>
        </div>
        <div className="col-md-6 no-padding-left">

        </div>
      </div>

    </div>
  )
}

export default PopularIdea

    //     <div className="container">
    //       <div className="section text-center">
    //         <h2 className="title">Popular Ideas</h2>
    //         <div className="row">


    //             <h3>Cool Ideas</h3>
    //             <div className="col-md-6 no-padding-left">
    //               <p className="small text-muted">
    //                 <strong>Initiator:</strong>
    //                 <span className="small-detail">Tama Adhi</span>
    //               </p>
    //             </div>
                // <div className="col-md-6 no-padding-left">
                //   <p className="small text-muted">
                //     <strong>Category: </strong>
                //     <span className="small-detail">Category</span>
                //   </p>
                // </div>
    //           </div>
    //         </div>
    //     </div>
    // </div>
