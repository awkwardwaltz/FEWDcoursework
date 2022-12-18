import React, { useContext, useState } from "react";
import Rating from './Rating'
import PageContext from './context/PageContext'
import MenuContext from './context/MenuContext'
import ShoppingListContext from "./context/ShoppingListContext";
import FetchNutrition from './FetchNutrition'
import Card from "react-bootstrap/card"
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';
import RatingContext from "./context/RatingContext";
const UserPage = ({ recipe, name }) => {
    const [shoppingListArray, setShoppingList] = useContext(ShoppingListContext)
    const [menuArray, setMenu] = useContext(MenuContext);
    const shoppingListSave = localStorage.getItem("shoppingList");
    const menuSave = localStorage.getItem("menu");

    var shoppingList = ["empty"]
    if(shoppingListSave){
    const sl = String(JSON.parse(shoppingListSave))
    shoppingList = sl.split(',')
    }
    var menu = ["empty"]
    if(menuSave){
    const m = String(JSON.parse(menuSave))
    menu = m.split(',')
    }
    const [page, setPage] = useContext(PageContext);
    function clearMenu(e) {
        localStorage.removeItem("menu")
        menuArray.length = 0
    }
    function clearShoppingList(e) {
        localStorage.removeItem("shoppingList")
        shoppingListArray.length = 0
    }
    return (
        <Card style={{ width: '100%' }}>
            <Container>
                <Row>
                    <Col xs={3}></Col>
                    <Col>
                        <h1 class="RecipeHeader">
                            My Stuff
                        </h1>

                    </Col>
                    <Col xs={3}>

                    </Col>
                </Row>
                <Row>
                    <Col className="Menu">
                        <h2>Menu</h2>
                        <div onClick={(e) => clearMenu(e)}><p >Clear All</p></div>
                        <p>{menu.map((item) => (
                            <tr>
                                <td>{item}</td>
                                
                            </tr>))}
                        </p>
                    </Col>
                    <Col>

                    </Col>

                    <Col className="Menu">
                        <h2>Shopping List</h2>
                        <div onClick={(e) => clearShoppingList(e)}><p >Clear All</p></div>
                        <p>{shoppingList.map((item) => (
                            <tr>
                                <td>{item}</td>
                                
                            </tr>))}
                        </p>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
};
export default UserPage;