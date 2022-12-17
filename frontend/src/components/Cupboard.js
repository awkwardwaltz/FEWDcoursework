import React, { useState, useContext } from "react";
import CupboardContext from "./CupboardContext";
import SelectedIngredient from './SelectedIngredient'
export default function Cupboard({ item }) {
    const [ingFilter, setIngFilter] = useContext(CupboardContext);
    const [selectedItems, setSelectedItems] = useState([]);
    const addIngredient = (e, selectedItem) => {
        let newState = [...selectedItems, selectedItem];
        setIngFilter(newState);
        setSelectedItems(newState);

    }
    const clearAll = (e) =>{
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