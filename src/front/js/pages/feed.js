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
                <link
                  href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                  rel="stylesheet"
                />
                <div class="container">
                  <div class="col-md-7">
                    <div class="social-feed-separated">
                      <div class="social-avatar">
                        <a href="">
                          <img
                            alt="image"
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          />
                        </a>
                      </div>

                      <div class="social-feed-box">
                        <div class="pull-right social-action dropdown">
                          <button
                            data-toggle="dropdown"
                            class="dropdown-toggle btn-white"
                          >
                            <i class="fa fa-angle-down"></i>
                          </button>
                          <ul class="dropdown-menu m-t-xs">
                            <li>
                              <a href="#">Config</a>
                            </li>
                          </ul>
                        </div>
                        <div class="social-avatar">
                          <a href="#">Andrew Williams</a>
                          <small class="text-muted">
                            Today 4:21 pm - 12.06.2014
                          </small>
                        </div>
                        <div class="social-body">
                          <p>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, and a search for 'lorem ipsum' will uncover
                            many web sites still in their infancy. Packages and
                            web page editors now use Lorem Ipsum as their
                            default model text.
                          </p>
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            class="img-responsive"
                          />
                          <div class="btn-group">
                            <button class="btn btn-white btn-xs">
                              <i class="fa fa-thumbs-up"></i> Like this!
                            </button>
                            <button class="btn btn-white btn-xs">
                              <i class="fa fa-comments"></i> Comment
                            </button>
                            <button class="btn btn-white btn-xs">
                              <i class="fa fa-share"></i> Share
                            </button>
                          </div>
                        </div>
                        <div class="social-footer">
                          <div class="social-comment">
                            <a href="" class="pull-left">
                              <img
                                alt="image"
                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                              />
                            </a>
                            <div class="media-body">
                              <a href="#">Andrew Williams</a>
                              Internet tend to repeat predefined chunks as
                              necessary, making this the first true generator on
                              the Internet. It uses a dictionary of over 200
                              Latin words.
                              <br />
                              <a href="#" class="small">
                                <i class="fa fa-thumbs-up"></i> 26 Like this!
                              </a>{" "}
                              -<small class="text-muted">12.06.2014</small>
                            </div>
                          </div>

                          <div class="social-comment">
                            <a href="" class="pull-left">
                              <img
                                alt="image"
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                              />
                            </a>
                            <div class="media-body">
                              <a href="#">Andrew Williams</a>
                              Making this the first true generator on the
                              Internet. It uses a dictionary of.
                              <br />
                              <a href="#" class="small">
                                <i class="fa fa-thumbs-up"></i> 11 Like this!
                              </a>{" "}
                              -<small class="text-muted">10.07.2014</small>
                            </div>

                            <div class="social-comment">
                              <a href="" class="pull-left">
                                <img
                                  alt="image"
                                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                />
                              </a>
                              <div class="media-body">
                                <a href="#">Andrew Williams</a>
                                Making this the first true generator on the
                                Internet. It uses a dictionary of.
                                <br />
                                <a href="#" class="small">
                                  <i class="fa fa-thumbs-up"></i> 11 Like this!
                                </a>{" "}
                                -<small class="text-muted">10.07.2014</small>
                              </div>
                            </div>
                            <div class="social-comment">
                              <a href="" class="pull-left">
                                <img
                                  alt="image"
                                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                />
                              </a>
                              <div class="media-body">
                                <textarea
                                  class="form-control"
                                  placeholder="Write comment..."
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          <div class="social-comment">
                            <a href="" class="pull-left">
                              <img
                                alt="image"
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                              />
                            </a>
                            <div class="media-body">
                              <a href="#">Andrew Williams</a>
                              Internet tend to repeat predefined chunks as
                              necessary, making this the first true generator on
                              the Internet. It uses a dictionary of over 200
                              Latin words.
                              <br />
                              <a href="#" class="small">
                                <i class="fa fa-thumbs-up"></i> 26 Like this!
                              </a>{" "}
                              -<small class="text-muted">12.06.2014</small>
                            </div>
                          </div>

                          <div class="social-comment">
                            <a href="" class="pull-left">
                              <img
                                alt="image"
                                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                              />
                            </a>
                            <div class="media-body">
                              <a href="#">Andrew Williams</a>
                              Making this the first true generator on the
                              Internet. It uses a dictionary of over 200 Latin
                              words.
                              <br />
                              <a href="#" class="small">
                                <i class="fa fa-thumbs-up"></i> 26 Like this!
                              </a>{" "}
                              -<small class="text-muted">12.06.2014</small>
                            </div>
                          </div>

                          <div class="social-comment">
                            <a href="" class="pull-left">
                              <img
                                alt="image"
                                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                              />
                            </a>
                            <div class="media-body">
                              <textarea
                                class="form-control"
                                placeholder="Write comment..."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="social-feed-separated">
                      <div class="social-avatar">
                        <a href="">
                          <img
                            alt="image"
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          />
                        </a>
                      </div>

                      <div class="social-feed-box">
                        <div class="pull-right social-action dropdown">
                          <button
                            data-toggle="dropdown"
                            class="dropdown-toggle btn-white"
                          >
                            <i class="fa fa-angle-down"></i>
                          </button>
                          <ul class="dropdown-menu m-t-xs">
                            <li>
                              <a href="#">Config</a>
                            </li>
                          </ul>
                        </div>
                        <div class="social-avatar">
                          <a href="#">Andrew Williams</a>
                          <small class="text-muted">
                            Today 4:21 pm - 12.06.2014
                          </small>
                        </div>
                        <div class="social-body">
                          <p>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, and a search for 'lorem ipsum' will uncover
                            many web sites still in their infancy.
                          </p>
                          <div class="btn-group">
                            <button class="btn btn-white btn-xs">
                              <i class="fa fa-thumbs-up"></i> Like this!
                            </button>
                            <button class="btn btn-white btn-xs">
                              <i class="fa fa-comments"></i> Comment
                            </button>
                            <button class="btn btn-white btn-xs">
                              <i class="fa fa-share"></i> Share
                            </button>
                          </div>
                        </div>
                        <div class="social-footer">
                          <div class="social-comment">
                            <a href="" class="pull-left">
                              <img
                                alt="image"
                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                              />
                            </a>
                            <div class="media-body">
                              <a href="#">Andrew Williams</a>
                              Internet tend to repeat predefined chunks as
                              necessary, making this the first true generator on
                              the Internet. It uses a dictionary of over 200
                              Latin words.
                              <br />
                              <a href="#" class="small">
                                <i class="fa fa-thumbs-up"></i> 26 Like this!
                              </a>{" "}
                              -<small class="text-muted">12.06.2014</small>
                            </div>
                          </div>

                          <div class="social-comment">
                            <a href="" class="pull-left">
                              <img
                                alt="image"
                                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                              />
                            </a>
                            <div class="media-body">
                              <a href="#">Andrew Williams</a>
                              Making this the first true generator on the
                              Internet. It uses a dictionary of.
                              <br />
                              <a href="#" class="small">
                                <i class="fa fa-thumbs-up"></i> 11 Like this!
                              </a>{" "}
                              -<small class="text-muted">10.07.2014</small>
                            </div>
                          </div>

                          <div class="social-comment">
                            <a href="" class="pull-left">
                              <img
                                alt="image"
                                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                              />
                            </a>
                            <div class="media-body">
                              <textarea
                                class="form-control"
                                placeholder="Write comment..."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="social-feed-separated">
                      <div class="social-avatar">
                        <a href="">
                          <img
                            alt="image"
                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          />
                        </a>
                      </div>
                      <div class="social-feed-box">
                        <div class="pull-right social-action dropdown">
                          <button
                            data-toggle="dropdown"
                            class="dropdown-toggle btn-white"
                          >
                            <i class="fa fa-angle-down"></i>
                          </button>
                          <ul class="dropdown-menu m-t-xs">
                            <li>
                              <a href="#">Config</a>
                            </li>
                          </ul>
                        </div>
                        <div class="social-avatar">
                          <a href="#">Andrew Williams</a>
                          <small class="text-muted">
                            Today 4:21 pm - 12.06.2014
                          </small>
                        </div>
                        <div class="social-body">
                          <p>
                            Text, and a search for 'lorem ipsum' will uncover
                            many web sites still in their infancy.
                          </p>
                          <div class="btn-group">
                            <button class="btn btn-white btn-xs">
                              <i class="fa fa-thumbs-up"></i> Like this!
                            </button>
                            <button class="btn btn-white btn-xs">
                              <i class="fa fa-comments"></i> Comment
                            </button>
                            <button class="btn btn-white btn-xs">
                              <i class="fa fa-share"></i> Share
                            </button>
                          </div>
                        </div>
                        <div class="social-footer">
                          <div class="social-comment">
                            <a href="" class="pull-left">
                              <img
                                alt="image"
                                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                              />
                            </a>
                            <div class="media-body">
                              <textarea
                                class="form-control"
                                placeholder="Write comment..."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
