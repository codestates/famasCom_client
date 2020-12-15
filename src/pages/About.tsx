import React from 'react';
import './About.css';
import byeongkuk from '../images/ByeongKuk.png';
import mira from '../images/MiRa.png';
import haseok from '../images/HaSeok.png';
import minju from '../images/MinJu.png';

function About() {
  return (

    <div className="container">
      <div className="row">
                        <div className="heading-title text-center">
                            <h3 className="text-uppercase">About us</h3>
                            <p className="p-top-30 half-txt">We're Final Project Team Helpers</p>
                        </div>

    </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src={byeongkuk} alt="byeongkuk" className="img-responsive"/>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <h4>Hi There !</h4>
                                        <p>I love to introduce myself as a hardcore Server Developer.</p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>유병국</h5>
                                <span>Team Leader &amp; FullStack Developer</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src={mira} alt="mira" className="img-responsive"/>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <h4>Hello World</h4>
                                        <p>I love to introduce myself as a hardcore Web Designer.</p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>곽미라</h5>
                                <span>Team Member &amp; FullStack Developer</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src={haseok} alt="haseok" className="img-responsive"/>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <h4>I love to design</h4>
                                        <p>I love to introduce myself as a hardcore Web Designer.</p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>김하석</h5>
                                <span>Team Member &amp; FullStack Developer</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src={minju} alt="team member" className="img-responsive"/>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <h4>I love to design</h4>
                                        <p>I love to introduce myself as a hardcore Web Designer.</p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>임민주</h5>
                                <span>Team Member &amp; FullStack Developer</span>
                            </div>
                        </div>



        </div>
  );
}
export default About;
