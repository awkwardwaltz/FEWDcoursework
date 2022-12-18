import React, { useEffect, useState, useCallback, useContext } from 'react'
import CupboardContext from './context/CupboardContext'
import PageContext from './context/PageContext'
import UserPage from './UserPage'
import RecipePage from './RecipePage'
import Search from './Search'
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';
import MenuContext from './context/MenuContext'
import ShoppingListContext from './context/ShoppingListContext'

const FetchData = () => {
    //declares the state that will be used in the cupboard context
    const [ingFilter, setIngFilter] = useState([])
    //declares the state that will be used in the menu feature
    const [menu, setMenu] = useState();
    //declares the state that will be used in the shopping list feature
    const [shoppingList, setShoppingList] = useState();
    //on first run sets both states to empty arrays to avoid an undefined error
    if (!menu && !shoppingList) {
        setMenu([])
        setShoppingList([])
    }

    //inherits the page context so that the navigation can be used
    const [page, setPage] = useContext(PageContext);

    const [Recipes, setRecipes] = useState([{
        id: "",
        name: "",
        rating: "",
        ratings: "",
        date: "",
        ingredients: [""],
        method: "",
    }]);

    const fetchData = useCallback(() => {
        const url = "/recipes";
        fetch(url)
            .then((response) => response.json())
            .then((incomingData) => {
                setRecipes(incomingData)
            })
            .catch((err) => console.log(err))
    }, [])
    useEffect(() => {

        console.log(shoppingList)

        fetchData()
    }, [fetchData])
    //declares an array of recipe names
    let rName = (Recipes.reduce((c, v) => c.concat(v), []).map(o => o.name))
    //if the page context = search it loads the search component
    if (page == "Search") {
        return (
            <div>
                <CupboardContext.Provider value={[ingFilter, setIngFilter]}>
                    <Search details={Recipes} />
                </CupboardContext.Provider>

            </div>

        )
    } 
    // if the page name is a recipe in the recipe array it loads the page for that recipe
    else if (rName.includes(page)) {
        return (
            <>
                <Container>
                    <Row>
                        <Col xs={2}>
                            <div class="sideBar">
                             
                            </div>
                        </Col>
                        <Col>
                            <MenuContext.Provider value={[menu, setMenu]}>
                                <ShoppingListContext.Provider value={[shoppingList, setShoppingList]}>
                                    <RecipePage name={page} recipe={Recipes} />
                                </ShoppingListContext.Provider>
                            </MenuContext.Provider>
                        </Col>
                        <Col xs={2}>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    } 
    //if the page context is user it loads the user page
    else if (page == "User") {
        return (
            <>
                <Container>
                    <Row>
                        <Col xs={2}>
                        </Col>
                        <Col>

                            <MenuContext.Provider value={[menu, setMenu]}>

                                <UserPage />

                            </MenuContext.Provider>

                        </Col>
                        <Col xs={2}>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default FetchData