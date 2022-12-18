import React, { useContext, useState, useEffect } from "react";
import Rating from './Rating'
import PageContext from './context/PageContext'
import MenuContext from './context/MenuContext'
import ShoppingListContext from "./context/ShoppingListContext";
import FetchNutrition from './FetchNutrition'
import Card from "react-bootstrap/Card"
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';
import RatingContext from "./context/RatingContext";
const RecipePage = ({ recipe, name }) => {
    const [page, setPage] = useContext(PageContext);
    const [menu, setMenu] = useContext(MenuContext);
    const [shoppingList, setShoppingList] = useContext(ShoppingListContext)
    var menuList = menu
    var entryIngredients = []
    var entryQuantity = []
    const ingredients = []
    const filter = recipe.filter((entry) => {
        return entry.name == name
    }
    )

    const recipeID = (filter[0]._id)
    const rating = (filter[0].rating)
    const ratings = (filter[0].ratings)
    const ingredientFilter = filter.filter((entry) => {
        const iterator = entry.ingredients.values();
        for (let count = 0; count < entry.ingredients.length; count++) {
            ingredients.push(iterator.next().value)
        }
        entryIngredients = (ingredients.reduce((c, v) => c.concat(v), []).map(o => o.ingredient))
        entryQuantity = (ingredients.reduce((c, v) => c.concat(v), []).map(o => o.quantity))
    })
    var rowCount = 0
    function count() {
        rowCount++
    }
    function addToMenu(e, selectedItem) {

        let newState = [...menuList, selectedItem];
        setMenu(newState)

    }
    function addToShoppingList(e, ingredients) {
        let newState = [...shoppingList, ingredients];
        setShoppingList(newState)
    }
    useEffect(() => {
        const uniqueMenu = [...new Set(menu)]
        const uniqueShoppingList = [...new Set(shoppingList)]
        localStorage.setItem("menu", JSON.stringify(uniqueMenu));
        localStorage.setItem("shoppingList", JSON.stringify(uniqueShoppingList));
        console.log(uniqueMenu)
        console.log(uniqueShoppingList)
    })
    console.log(entryQuantity + entryIngredients)
    return (
        <Card style={{ width: '100%' }}>
            <Container>
                <Row>
                    <Col xs={3}>
                        <div class="MenuContainer">
                        <div class="menuButton" onClick={(e) => addToMenu(e, name)}>Add to Menu[+]</div>
                        </div>
                    </Col>
                    <Col>
                        <h1 class="RecipeHeader">
                            {name}
                        </h1>

                    </Col>
                    <Col  xs={3}>
                        <Rating className="RatingBar" recipe={recipeID} rating={rating} ratings={ratings} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <table>
                            <tr>
                                <th>Ingredients</th>

                            </tr>
                            {entryIngredients.map((ingredient, index) => (
                                <tr>
                                    <td>{entryQuantity[rowCount]} {ingredient}</td>
                                    {count()}
                                </tr>
                            ))}
                        </table>
                        <div class="shoppingListButton" onClick={(e) => addToShoppingList(e, entryIngredients)}>Add to Shopping List[+]</div>
                        <FetchNutrition query={entryIngredients} />
                    </Col>
                    <Col>
                        {filter.map((recipe, index) => (
                            <>
                                <Row>
                                    <p>{recipe.date}</p>
                                </Row>
                                <Row key={index}>
                                    <p>{recipe.method}</p>
                                </Row>
                            </>
                        ))}
                        <Row>

                        </Row>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
};
export default RecipePage;