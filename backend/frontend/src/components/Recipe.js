import React, { useContext } from "react";
import PageContext from './context/PageContext'
import Card from "react-bootstrap/card"
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';
const Recipe = ({ recipe }) => {
    const [page, setPage] = useContext(PageContext);
    const openRecipe = (e, recipe) => {
        setPage(recipe);

    }
    return (

        <Card style={{ width: '100%' }}>
            <Container>
                <Row>
                    <Col className="ratingCol" xs={2}>
                        <h1 class="Rating" color="white">
                            {recipe.rating}
                        </h1>
                    </Col>
                    <Col>
                        <h4 class="RecipeName" onClick={(e) => openRecipe(e, `${recipe.name}`)}>
                            {recipe.name}
                        </h4>
                    </Col>
                    <Col>
                        {recipe.date}

                    </Col>
                </Row>
            </Container>
        </Card>


    );
};
export default Recipe;