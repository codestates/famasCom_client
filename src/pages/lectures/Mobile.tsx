import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import pointer from '../../images/pointer.png'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Navbar from 'components/common/navbar';
import Siderbar from 'components/common/siderbar';
import Responsive from 'components/common/Responsive';
import Wrapper from 'themes/Wrapper';
import GoToTop from 'components/common/GoToTop'
import Footer from 'components/Footer';
import Wifi from '../../images/lectures/wifi.jpg'
import Message from '../../images/lectures/Message.jpg'
import NaverMap from '../../images/lectures/NaverMap.png'
import LectureUpper from 'components/lectureNav/LectureList';
import MobSection from 'components/mobSection/MobSection';


const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 200,
  },
  body:{
    height:50
  }
});

const Mobile = () => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => {
      setIsOpen(!isOpen)
    }
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <>
    <Wra>
      <Navbar toggle={toggle}/>
      <Siderbar isOpen={isOpen} toggle={toggle} />
      <MobSection />
      <LectureTemplateBlock>
        <Wrapper>
          <LectureBody>
            <LectureUpper/>
            <LectureBox>
              <Link to="Mobile/Wifi">
              <LectureCard className={classes.root}>
                <CardActionArea>
                  <CardMedia className={classes.media} image={Wifi}/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      와이파이 설정하기
                    </Typography>
                    <Typography className={classes.body} variant="body1" color="textSecondary" component="p">
                      와이파이를 연결해 적용해보아요!
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="large" color="primary">
                    눌러보세요!
                  </Button>
                </CardActions>
              </LectureCard>
              </Link>
              <Link to="Mobile/Message">
              <LectureCard className={classes.root}>
                <CardActionArea>
                  <CardMedia className={classes.media} image={Message}/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      문자메세지 보내기
                    </Typography>
                    <Typography className={classes.body} variant="body1" color="textSecondary" component="p">
                      문자로 내 생각을 전해보아요!
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="large" color="primary">
                    눌러보세요!
                  </Button>
                </CardActions>
              </LectureCard>
              </Link>
              <Link to="Mobile/NaverMap">
              <LectureCard className={classes.root}>
                <CardActionArea>
                  <CardMedia className={classes.media} image={NaverMap}/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      네이버 지도 설치하기
                    </Typography>
                    <Typo className={classes.body} variant="body1" color="textSecondary" >
                      내 핸드폰에 네이버 지도를 설치해보아요!
                    </Typo>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="large" color="primary">
                    눌러보세요!
                  </Button>
                </CardActions>
              </LectureCard>
              </Link>
            </LectureBox>
          </LectureBody>
        </Wrapper>
        </LectureTemplateBlock>
    </Wra>
    <Footer />
    <GoToTop />
    </>
    )
  }

//이하 스타일 설정
  const Wra = styled.div`
    cursor: url(${pointer}), auto;
  `
  const LectureBody = styled.div`
    display:flex;
    flex-direction:column;
    margin:0px auto 100px auto;
    min-height:600px;
  `
  const LectureBox = styled.div`
    display:flex;
  `
  const LectureCard = styled(Card)`
  margin:0px 10px;
  `
  const Typo = styled(Typography)`
  word-break:keep-all;
  `
const LectureTemplateBlock = styled(Responsive)`
position: relative;
left: 0;
right: 0;
top: 0;
bottom: 0;
background: #fff;
`;
export default Mobile;