import {Navbar, Nav, Container} from 'react-bootstrap'

export default function Header() {
    return(
        <>
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/home">React Bootstrap Sass</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
        )
}