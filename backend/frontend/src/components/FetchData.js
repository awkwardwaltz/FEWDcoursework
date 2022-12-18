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
    const [ingFilter, setIngFilter] = useState([])
    const [menu, setMenu] = useState();
    const [shoppingList, setShoppingList] = useState();
    if (!menu && !shoppingList) {
        setMenu([])
        setShoppingList([])
    }


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

    let rName = (Recipes.reduce((c, v) => c.concat(v), []).map(o => o.name))
    console.log(rName)
    if (page == "Search") {
        return (
            <div>
                <CupboardContext.Provider value={[ingFilter, setIngFilter]}>
                    <Search details={Recipes} />
                </CupboardContext.Provider>

            </div>

        )
    } else if (rName.includes(page)) {
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
    } else if (page == "User") {
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