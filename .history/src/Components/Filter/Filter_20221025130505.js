import React, { useState } from "react";
//import { Form, FormGroup, Input, Label } from "reactstrap";
import { Accordion, AccordionItem, AccordionHeader, AccordionBody  } from "reactstrap";

const Filter  = () => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }


    return (

        <>
        
        <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>        
        
        </>





// <Form>
//     <FormGroup
//         check
//         inline
//     >
//         <Input type="checkbox" />
//         <Label check>
//         Some input
//         </Label>
//     </FormGroup>
//     <FormGroup
//         check
//         inline
//     >
//         <Input type="checkbox" />
//         <Label check>
//         Some other input
//         </Label>
//     </FormGroup>
// </Form>
    );
}

export default Filter;