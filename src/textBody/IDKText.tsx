import click from '../images/click.png'
import powerOff from '../images/powerOff.png'
import mouse from '../images/Mouse.png'
import power from '../images/power.png'
const accordions = [
    {   
        head:{
            img:mouse,
            title:'회원으로 참여하기',
            description:'회원으로 참여해 자유롭게 이용해보아요!'
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
            title:'커뮤니티 이용하기',
            description:'커뮤니티에서 소통하고 궁금증을 해소해보아요!'
        },
        body:{
            img:powerOff,
            title: 'What is Lorem Ipsum?',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
    },
  ];

export default accordions