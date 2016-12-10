import React from 'react';
const ModalVideo = () => {
  return (
    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-video">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 className="modal-title" id="myModalLabel">About Partneran</h4>
          </div>
          <div className="modal-body video-intro">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/YfUEci1JbQc"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ModalVideo
