import React from "react";
import { Card,CardBody,CardTitle,CardText,Button } from "reactstrap";


const Login = () => {

    return (
        <div className="row">
            <div className="col-offset-md-4 col-md-4">
                <Card>
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
    )
}

export default Login;