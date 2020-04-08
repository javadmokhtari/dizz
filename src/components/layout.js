import React from 'react'
import {Container, Row} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout(props) {
    // this is the general layout for at least, most of the pages
    return (
        <Container>
            {/* header */}
            <header>Header</header>
            {/* middle */}
            {props.children}
            
            {/* footer */}
            <footer>Footer</footer>
        </Container>
    )
}
