import React, { useState, useContext } from "react";
import CupboardContext from "./context/CupboardContext";
import SelectedIngredient from './SelectedIngredient'
export default function Cupboard({ item }) {
    //Takes in the context set in the FetchData component
    const [ingFilter, setIngFilter] = useContext(CupboardContext);
    //Creates a state for the selected ingredient
    const [selectedItems, setSelectedItems] = useState([]);
    const addIngredient = (e, selectedItem) => {
        //creates an array containing the selected ingredients and the currently selected ingredient
        let newState = [...selectedItems, selectedItem];
        //updates the context so that the data can pass through to the search component and be used to filter the list
        setIngFilter(newState);
        //updates the state
        setSelectedItems(newState);

    }
    const clearAll = (e) =>{
        //declares an empty array and sets the value of the context and state to that array
        let empty = []
        setIngFilter(empty);
        setSelectedItems(empty);
    }

    return (
        <>
            <div>
                <h2>Your Cupboard</h2>
                <select Name="" Size="5">
                    {item.map((ingredient, index) => (
                        <option key={index} onClick={(e) => addIngredient(e, ingredient)}>
                            {ingredient}
                        </option>
                    ))}
                </select>
            </div>
            <div>
            <div onClick={(e) => clearAll(e) }><p>Clear all</p></div>
                {selectedItems.map((ingredient, index) => (
                    <SelectedIngredient item={ingredient} />
                )
                )}

            </div>


        </>
    );

}