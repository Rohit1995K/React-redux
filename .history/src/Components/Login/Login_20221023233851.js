import React from "react";
import { Card,CardBody,CardTitle,CardText,Button } from "reactstrap";


const Login = () => {

    return (
        <div className="container">
        <div className="row">
            <div className="offset-md-4 col-md-4">
                <Card className="mt-5">
                    <CardBody>
                        <CardTitle tag="h5">
                            Special Title Treatment
                        </CardTitle>
                        <CardText>
                            With supporting text below as a natural lead-in to additional content.
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