import React, { useState, useContext } from "react";
import RecipeList from "./RecipeList";
import Cupboard from './Cupboard'
import CupboardContext from "./context/CupboardContext";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';
function Search({ details }) {
    const [ingFilter,setIngFilter] = useContext(CupboardContext)
    const [searchField, setSearchField] = useState("");
    //create ingredients array
    const ingredients = []
    var entryIngredients = []
    var ingList = []
    //filter recipe data
    const filtered = details.filter((entry) => {
        //set up array iterator to transfer nested object data
        const iterator = entry.ingredients.values();
        //loops for the length of the ingredients array within this particular entry
        for (let count = 0; count < entry.ingredients.length; count++) {
            //inserts each nested object value into the ingredients array
            ingredients.push(iterator.next().value)
        }
        //reduces the two-dimensional ingredients array to a one-dimensional array on ingredient key
        entryIngredients = (ingredients.reduce((c, v) => c.concat(v), []).map(o => o.ingredient))
        ingList.push(...entryIngredients)
        //clears the ingredients array
        ingredients.length = 0
        const sult = true
        return sult === ingFilter.every(o => entryIngredients.includes(o)) && entry.name.toLowerCase().includes(searchField.toLowerCase())
    });
    ingList.sort()
    const unique = [...new Set(ingList)]
    return (
        <>
        <Container>
            
            <div class="sidebar">
            <Row>
                <Col md={6}>
                <div>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search ..."
                        onChange={(e) => setSearchField(e.target.value)}
                    />
                </div>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
                </Row>
                    <Row>
                        <Col>
                            <RecipeList recipes={filtered} />
                        </Col>
                        <Col>
                        <CupboardContext.Provider value = {[ingFilter,setIngFilter]}>
                            <Cupboard item={unique} />
                        </CupboardContext.Provider>
                        </Col>
                    </Row>
               
            </div>
            </Container>
        </>
    );
}
export default Search;