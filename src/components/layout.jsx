import React from 'react'
import {Container, Row, Col, Navbar} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout(props) {
    // this is the general layout for at least, most of the pages
    return (
        <Container fluid>
            {/* Header */}
            <Row id="header">
                <Container id="header-content">
                    <Row id="header-row">
                        <Col id="level-content" xs={3} sm={3} md={4} lg={4} xl={4}>
                            <span>مرحله ۱ از ۴</span>
                        </Col> 
                        <Col xs={{ span: 5, offset: 4 }} sm={{ span: 5, offset: 4 }} md={{ span: 4, offset: 4 }} lg={{ span: 4, offset: 4 }} xl={{ span: 4, offset: 4 }}>
                            {/* Links to index page */}
                            <h3>دیز نسخه دوم</h3>
                        </Col>
                    </Row>                    
                </Container>
            </Row>

            {/* Content */}
            <Row>
                <Container>
                    {props.children}
                </Container>
                
            </Row>

            {/* Footer */}
            <Row id="footer">
                <Container id="footer-content">
                    <p>دیز، دریچه ورود به دنیای برنامه نویسی</p>
                </Container>
            </Row>
        </Container>
    )
}
