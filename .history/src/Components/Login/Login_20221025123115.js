import React from "react";
import './login.css';
import { Card,CardBody,CardTitle,CardText,Button,Input,Form,FormGroup,Col } from "reactstrap";


const Login = () => {

    return (
        <div className="container">
        <div className="row">
            <div className="offset-md-4 col-md-4">
                <Card className="mt-5 px-5 py-4" color="dark" inverse>
                    <CardBody>
                        <CardTitle tag="h2">
                            LOGIN
                        </CardTitle>
                        <CardText>
                            With supporting text below as a natural lead-in to additional content.
                            <Form>
                                <FormGroup row>
                                    <Col className="mb-4">
                                        <Input id="exampleEmail" name="email" placeholder="Email" type="email"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col className="mb-4">
                                        <Input id="examplePassword" name="password" placeholder="Password" type="password"/>
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