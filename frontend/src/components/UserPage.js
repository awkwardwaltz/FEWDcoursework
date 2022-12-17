import React, { useContext, useState } from "react";
import Rating from './Rating'
import PageContext from './PageContext'
import MenuContext from './MenuContext'
import ShoppingListContext from "./ShoppingListContext";
import FetchNutrition from './FetchNutrition'
import Card from "react-bootstrap/card"
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';
import RatingContext from "./RatingContext";
const UserPage = ({ recipe, name }) => {
    const [shoppingListArray, setShoppingList] = useContext(ShoppingListContext)
    const [menuArray, setMenu] = useContext(MenuContext);
    const shoppingListSave = localStorage.getItem("shoppingList");
    const menuSave = localStorage.getItem("menu");
    const shoppingList = JSON.parse(shoppingListSave)
    const menu = JSON.parse(menuSave)
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
                        <p>{menu}</p>
                    </Col>
                    <Col>

                    </Col>

                    <Col className="Menu">
                        <h2>Shopping List</h2>
                        <div onClick={(e) => clearShoppingList(e)}><p >Clear All</p></div>
                        <p>{shoppingList}</p>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
};
export default UserPage;