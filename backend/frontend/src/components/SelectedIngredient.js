import React, { useContext} from 'react'
import CupboardContext from "./context/CupboardContext";
const SelectedIngredient = ({item}) => {
    const [ingFilter, setIngFilter] = useContext(CupboardContext);
    const clearIngredient =(e) => {
        let ingredients = ingFilter
        let clear = ingFilter.indexOf(item)
        console.log(ingFilter)
        if (clear >= 0){
            ingredients.splice(clear, 1)
            setIngFilter(ingredients)
            console.log(ingFilter)
        }
    }
    if(ingFilter.includes(item)){
    return (
        <>
        <div class="Ingredient" max-width="100px" onClick={(e)=> clearIngredient(e)}>
        <p>{item}</p>
        </div>
        </>
    )
    }
}

export default SelectedIngredient