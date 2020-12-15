import click from '../images/click.png'
import powerOff from '../images/powerOff.png'
import mouse from '../images/mouse.png'
import power from '../images/power.png'
const accordions = [
    {   
        head:{
            img:mouse,
            title:'마우스 사용하기',
            description:'마우스를 사용하는 법을 알아보아요!'
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
            title:'컴퓨터 다루기',
            description:'컴퓨터를 시작하고 종료해보아요!'
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
            title:'네이버 가입하기',
            description:'네이버에 가입하고 회원이 되어보아요!'
        },
        body:{
            img:powerOff,
            title: 'What is Lorem Ipsum?',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
    },
  ];

export default accordions