import React, {useContext} from 'react'
import PageContext from './PageContext'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Banner() {
    const [page, setPage] = useContext(PageContext);
    const Search = (e) => { 
        setPage("Search");
    }
    const UserPage = (e) =>{
        setPage("User")
    }
    return (
        <Container className="Banner">
            <div class="container">
                <div class="col-sm">
                    <h1>Home Kitchen</h1>
                </div>
                <div class="col-sm">
                    <div class="BannerNav">
                        <Navbar variant="dark">
                            <Nav variant="pills">
                                <Nav.Link onClick={(e) => Search(e)}>Search</Nav.Link>
                                <Nav.Link onClick={(e) => UserPage(e)}>My Stuff</Nav.Link>
                                <Nav.Link>Top Recipes</Nav.Link>
                            </Nav>
                        </Navbar>
                    </div>
                </div>
            </div>
        </Container >
    )
}

export default Banner