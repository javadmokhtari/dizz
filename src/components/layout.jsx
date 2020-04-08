import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout(props) {
    // this is the general layout for at least, most of the pages
    return (
        <Container>
            {/* header */}
            <header>
                <Row>
                    <Col>
                        <h4>دیز نسخه دوم</h4>
                        <p>مرحله ۱ از ۴</p>
                    </Col>
                </Row>
                
            </header>
            {/* middle */}
            {props.children}
                
            {/* footer */}
            <footer className="container">
                <Row>
                    <Col>
                        <h4>دیز نسخه دوم</h4>
                        <p>مرحله ۱ از ۴</p>
                    </Col>
                </Row>
            </footer>
        </Container>
    )
}
