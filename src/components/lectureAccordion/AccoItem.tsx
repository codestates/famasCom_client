import styled from "styled-components";
import click from 'images/click.png'
type types = {
    accordion: any;
    isOpen:boolean;
    onHeaderClick:()=>void;
  };
const AccordionItem = ({accordion, isOpen, onHeaderClick}:types) => {
    return (
        <AccoItem>
            <AccoHead onClick={onHeaderClick}>
                <HeadText>
                    <HeadTitle>{accordion.head.title}</HeadTitle>
                    <HeadDesc>{accordion.head.description}</HeadDesc>
                </HeadText>
                <img src={accordion.head.img} width="100" height="100" />
            </AccoHead>
            {(isOpen) &&
            <AccoBody>
                <AccoPart/>
                <img src={accordion.body.img} width="50%" height="50%"/>
                <BodyText>
                    {accordion.body.text}
                </BodyText>
            </AccoBody>
            }
        </AccoItem>
    )    
}
const AccoItem = styled.div`
    padding : 3em;
    width:100%;
    border-bottom:1px solid #f0f0f0;
    :hover{
        border: 3px solid #f0f0f0;
        transition: 0.3s border;
    }
`
const AccoHead = styled.div`
    display:flex;
    justify-content:space-between;
    &:hover{ 
        cursor: url(${click}), auto;
    }
`
const HeadTitle = styled.div`
    font-size:30px;
    padding-bottom:15px;
`
const HeadDesc = styled.div`
    font-size:20px;
    color:gray;
    text-shadow: white 2px;
    :hover{
        text-shadow: white 2px;
    }
`
const HeadText = styled.div`

`
const AccoBody = styled.div`
    padding: 3em 0;
`
const AccoPart = styled.div`
    padding: 15px 40px 20px 20px;
    position: relative;
    :before{
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0px;
        width: 100%;
        height: 2px;
        background: #f6f6f6;
    }
`
const BodyText = styled.div`
    padding: 2em 0;
    font-size:20px;
`
  export default AccordionItem