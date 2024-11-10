import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <div className='container'>
            <Navbar className='yellotail'>
                <LinkContainer to="/">
                    <Navbar.Brand>The daily news</Navbar.Brand>
                </LinkContainer>
            </Navbar>
            <Nav className='mt-3'>
                <Nav.Item>
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/newsletter">
                        <Nav.Link>Join</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Header;