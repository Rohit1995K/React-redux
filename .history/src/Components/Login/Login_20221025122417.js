import React from "react";
import { Card,CardBody,CardTitle,CardText,Button,Input,Form,FormGroup,Col } from "reactstrap";


const Login = () => {

    return (
        <div className="container">
        <div className="row">
            <div className="offset-md-4 col-md-4">
                <Card className="mt-5" color="dark" inverse>
                    <CardBody>
                        <CardTitle tag="h2">
                            LOGIN
                        </CardTitle>
                        <CardText>
                            With supporting text below as a natural lead-in to additional content.
                            <Form>
                                <FormGroup row>
                                    <Col sm={10}>
                                        <Input id="exampleEmail" name="email" placeholder="with a placeholder" type="email"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={10}>
                                        <Input id="examplePassword" name="password" placeholder="password placeholder" type="password"/>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardText>
                        <Button>
                            Go somewhere
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
        </div>
    )
}

export default Login;