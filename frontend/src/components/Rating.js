import React, { useState, useEffect } from "react";
import Heart from "./Heart";
export default function Rating({recipe, rating, ratings}) {
    const id = recipe.recipe
    const totalHearts = [1, 2, 3, 4, 5];
    const [userRating, setUserRating] = useState()
    useEffect(() => {
        console.log(recipe)
        if(userRating){
        ratings ++
        }
        console.log(ratings)
        let totalRating = (((parseInt(rating)) + userRating)/2)
        console.log(totalRating)
        if(totalRating){
        updateRating(totalRating)
        }
    })


    function updateRating(totalRating) {


        let newRating = [totalRating, recipe, ratings];
        const ratingString = JSON.stringify(newRating);
        fetch(`http://localhost:3001/update`, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */* ",
                "Content-Type": "application/json",
            },
            body: ratingString,
        })
            .catch((err) => {
                console.log(err);
            });
    };



    return (
        <div>
            {totalHearts.map((n, i) => (
                <Heart
                    key={i}
                    selected={userRating > i}
                    onSelect={() => (setUserRating(i + 1))}

                />

            ))
            }
            <p>{userRating}</p>
        </div>
    );
}
