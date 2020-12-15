import click from '../images/click.png'
import powerOff from '../images/powerOff.png'
import mouse from '../images/mouse.png'
import power from '../images/power.png'
const accordions = [
    {   
        head:{
            img:mouse,
            title:'와이파이 설정하기',
            description:'와이파이를 설정하는 법을 알아보아요!'
        },
        body:{
            img:click,
            title: 'What is Lorem Ipsum?',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
    },
    {   
        head:{
            img:power,
            title:'네이버 지도 설치하기',
            description:'네이버 지도를 설치해보아요!'
        },
        body:{
            img:powerOff,
            title: 'What is Lorem Ipsum?',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
    },
    {   
        head:{
            img:mouse,
            title:'카카오스토리 사용하기',
            description:'카카오스토리를 사용해 소통해보아요!'
        },
        body:{
            img:powerOff,
            title: 'What is Lorem Ipsum?',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
    },
    {   
        head:{
            img:mouse,
            title:'문자메세지 보내기',
            description:'문자메세지를 보내보아요!'
        },
        body:{
            img:click,
            title: 'What is Lorem Ipsum?',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
    },
  ];

export default accordions