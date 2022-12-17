import React, { useState } from "react";
import Recipe from "./Recipe"
import Search from "./Search"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const RecipeList = ({ recipes }) => {
    return (
        <>

            <h2>Recent Recipes</h2>
            <Container fluid>
                {recipes.map((recipe, index) => (
                   
                    <Row key={index}>
                        <Recipe recipe={recipe} key={index} />
                    </Row>
                ))}
            </Container>
        </>
    );
};
export default RecipeList;