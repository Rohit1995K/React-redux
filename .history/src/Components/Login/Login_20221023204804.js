import React from "react";
// import { Card,CardHeader,CardBody,CardTitle,CardText,Button,CardFooter } from "reactstrap";
import Card from "reactstrap";
import CardBody from "reactstrap";

const Login = () => {

    return (
<Card>
  {/* <CardHeader>
    Header
  </CardHeader> */}
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
  <CardFooter>
    Footer
  </CardFooter>
</Card>
    )
}

export default Login;