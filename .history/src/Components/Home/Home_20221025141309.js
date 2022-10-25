import React from "react";
import Filter from "../Filter/Filter";
import { Col, Row } from "reactstrap";
import { Card,CardBody,CardTitle,CardText,Button,CardSubtitle } from "reactstrap";

const Home = () => {

    return (
        <>
            <div className="container mt-3">
                <Row>
                    <Col md="3">
                        <Filter />                        
                    </Col>
                    <Col md="9">
                        <Row>
                            <Col md="3">
                                <Card>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Card title
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        Card subtitle
                                    </CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                    </CardText>
                                    <Button> Button </Button>
                                </CardBody>
                                </Card>
                            </Col>
                            <Col md="3">
                                <Card>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Card title
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        Card subtitle
                                    </CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                    </CardText>
                                    <Button> Button </Button>
                                </CardBody>
                                </Card>
                            </Col>
                            <Col md="3">
                                <Card>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Card title
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        Card subtitle
                                    </CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                    </CardText>
                                    <Button> Button </Button>
                                </CardBody>
                                </Card>
                            </Col>
                            <Col md="3">
                                <Card>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Card title
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        Card subtitle
                                    </CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                    </CardText>
                                    <Button> Button </Button>
                                </CardBody>
                                </Card>
                            </Col>

                        </Row>
                        <Row>
                            <Col md="3">
                                <Card>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Card title
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        Card subtitle
                                    </CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                    </CardText>
                                    <Button> Button </Button>
                                </CardBody>
                                </Card>
                            </Col>
                            <Col md="3">
                                <Card>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Card title
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        Card subtitle
                                    </CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                    </CardText>
                                    <Button> Button </Button>
                                </CardBody>
                                </Card>
                            </Col>
                            <Col md="3">
                                <Card>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Card title
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        Card subtitle
                                    </CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                    </CardText>
                                    <Button> Button </Button>
                                </CardBody>
                                </Card>
                            </Col>
                            <Col md="3">
                                <Card>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Card title
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        Card subtitle
                                    </CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                    </CardText>
                                    <Button> Button </Button>
                                </CardBody>
                                </Card>
                            </Col>

                        </Row>                        
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Home;