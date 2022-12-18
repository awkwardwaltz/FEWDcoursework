import React, { useContext } from 'react'
import PageContext from './context/PageContext'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Banner() {
    const [page, setPage] = useContext(PageContext);
    //navigation is handled using context as opposed to routes to create a smoother user experience
    const Search = (e) => {
        setPage("Search");
    }
    const UserPage = (e) => {
        setPage("User")
    }
    return (
        <Container className="Banner">
            <Row>
                <Col xl={10}>
                    <h1>Home Kitchen</h1>
                </Col>
                <Col>
                    <div class="BannerNav">
                        <Navbar variant="dark">
                            <Nav variant="pills">
                                <Nav.Link onClick={(e) => Search(e)}>Search</Nav.Link>
                                <Nav.Link onClick={(e) => UserPage(e)}>My Stuff</Nav.Link>
                            </Nav>
                        </Navbar>
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

export default Banner