import React, { useState} from 'react';
import './About.css';
import byeongkuk from '../images/ByeongKuk.png';
import mira from '../images/MiRa.png';
import haseok from '../images/HaSeok.png';
import minju from '../images/MinJu.png';
import Navbar from '../components/common/navbar'
import Siderbar from '../components/common/siderbar'
import GoToTop from '../components/common/GoToTop'
import Footer from '../components/Footer';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import AboutSection from 'components/AboutSection/AboutSection'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '90%',
    },
    head:{
      padding:'2em'
    },
    heading: {
      fontSize: theme.typography.pxToRem(25),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    body: {
      fontSize: theme.typography.pxToRem(20),
      flexBasis: '33.33%',
      flexShrink: 0,
      padding:'1em 2em'
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);


function About() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => {
      setIsOpen(!isOpen)
    }

  return (
<>
<Navbar toggle={toggle}/>
      <Siderbar isOpen={isOpen} toggle={toggle} />
      <AboutSection/>
    <div className="container">
      {/* <div className="row"> */}
 
                        <div className="heading-title text-center">
                            <h1 className="text-uppercase">About us</h1>
                            <p className="p-top-30 half-txt">We're Final Project Team Helpers</p>
                            </div>

    {/* </div> */}
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
        <Footer />
      <GoToTop />
        </>
  );
}
export default About;
