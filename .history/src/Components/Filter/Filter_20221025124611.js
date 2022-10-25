import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

const Filter  = () => {
    return (
<Form>
    <FormGroup
        check
        inline
    >
        <Input type="checkbox" />
        <Label check>
        Some input
        </Label>
    </FormGroup>
    <FormGroup
        check
        inline
    >
        <Input type="checkbox" />
        <Label check>
        Some other input
        </Label>
    </FormGroup>
</Form>
    );
}

export default Filter;