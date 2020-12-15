import * as React from 'react';
import styled from 'styled-components'
import AccordionItem from './AccoItem';

type types = {
    accordions: any;
  };
const AccordionList = ({accordions}:types) => {
    const [activeAccordion,isActive] = React.useState(-1)
  
    const headerClick = (index:number) => (
        isActive((prevActiveAccordion: number) => 
            prevActiveAccordion === index ? -1 : index
        )
    );
  
    const accordionElement = accordions.map((item: { title: string | number | null | undefined; }, index: any) =>
    <AccordionItem
       key={item.title}
       accordion={item}
       isOpen={activeAccordion === index}
       onHeaderClick={headerClick.bind(null, index)}
    />
    );
  
    return (
        <AccoList>
            {accordionElement}
        </AccoList>
    )
}

const AccoList = styled.div`
`
export default AccordionList