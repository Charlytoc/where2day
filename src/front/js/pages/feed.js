import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import "../../styles/home.css";
// import rigoImageUrl from "../../img/Where2Day.png";

export const Feed = () => {
  //   const { store, actions } = useContext(Context);

  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-6 col-xs-12 col-md-offset-3">
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">Twitter Feed</h3>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Enter here for tweet..."
                    rows="3"
                  ></textarea>
                </div>
                <a
                  href="javascript:void(0)"
                  className="btn btn-info btn-sm pull-right waves-effect waves-light"
                >
                  Tweet
                </a>
                <div className="clearfix"></div>
                <hr className="margin-bottom-10" />
                <ul className="list-group list-group-dividered list-group-full">
                  <li className="list-group-item">
                    <div className="media">
                      <div className="media-left">
                        <a
                          className="avatar avatar-online"
                          href="javascript:void(0)"
                        >
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            alt="..."
                          />
                          <i></i>
                        </a>
                      </div>
                      <div className="media-body">
                        <small className="text-muted pull-right">
                          Just now
                        </small>
                        <h4 className="media-heading">@Ramon Dunn</h4>
                        <div>
                          Lorem ipsum Veniam aliquip culpa laboris minim tempor
                          labore commodo officia veniam non in in in.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="media">
                      <div className="media-left">
                        <a
                          className="avatar avatar-busy"
                          href="javascript:void(0)"
                        >
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                            alt="..."
                          />
                          <i></i>
                        </a>
                      </div>
                      <div className="media-body">
                        <small className="text-muted pull-right">
                          38 minutes ago
                        </small>
                        <h4 className="media-heading">@Scott Sanders</h4>
                        <div>
                          Lorem ipsum Laborum sit laborum cillum proident dolore
                          culpa reprehenderit qui enim labore do mollit in.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="media">
                      <div className="media-left">
                        <a
                          className="avatar avatar-online"
                          href="javascript:void(0)"
                        >
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar3.png"
                            alt="..."
                          />
                          <i></i>
                        </a>
                      </div>
                      <div className="media-body">
                        <small className="text-muted pull-right">
                          2 hours ago
                        </small>
                        <h4 className="media-heading">@Nina Wells</h4>
                        <div>
                          Lorem ipsum Culpa mollit ex mollit magna dolore dolore
                          dolore tempor velit magna enim ad dolore dolore
                          dolore.
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <span className="text-info">163K users active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
