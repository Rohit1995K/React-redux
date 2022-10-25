import React, { useState } from "react";
import Filter from "../Filter/Filter";
import { Col, Row } from "reactstrap";
import { Card,CardBody,CardTitle,CardText,Button,CardSubtitle } from "reactstrap";
import { addToCart } from "../../Services/Reducers/reducer";
import { removeFromCart } from "../../Services/Reducers/reducer";
import { useDispatch } from "react-redux";
import './home.css';

const Home = () => {
    
    const id = 'AA002QF';
    const [cnt, setCnt] = useState(1);
    const dispatch = useDispatch();

    // const increment = () => {

    // }

    // const decrement = () => {

    // }    

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
                                <Card className="mb-3">
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
                                <Card className="mb-3">
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
                                <Card className="mb-3">
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
                                <Card className="mb-3">
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
                                    {/* <Button>+</Button>{ cnt }<Button>-</Button> */}
                                    <span className="btnVal" onClick={() => setCnt(cnt + 1)}>+</span>{ cnt }<span className="btnVal" onClick={() => setCnt(cnt - 1)}>-</span><br />
                                    <Button onClick={() => dispatch(addToCart(id))}> Add To Cart </Button>
                                    <Button onClick={() => dispatch(removeFromCart(id))}> View Details </Button>
                                </CardBody>
                                </Card>
                            </Col>

                        </Row>
                        <Row>
                            <Col md="3">
                                <Card className="mb-3">
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
                                <Card className="mb-3">
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
                                <Card className="mb-3">
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
                                <Card className="mb-3">
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