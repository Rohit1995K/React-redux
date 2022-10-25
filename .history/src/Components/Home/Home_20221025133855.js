import React from "react";
import Filter from "../Filter/Filter";
import { Col, Row } from "reactstrap";

const Home = () => {

    return (
        <>
            <div className="container">
                <Row>
                    <Col md="4">
                        <Filter />                        
                    </Col>
                    <Col md="8"></Col>
                </Row>
            </div>
        </>
    )
}

export default Home;