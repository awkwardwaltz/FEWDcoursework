import React, { useState, useEffect } from "react";
import Heart from "./Heart";
export default function Rating({recipe, rating, ratings}) {
    //creates an array from 1 to 5 that can be mapped
    const totalHearts = [1, 2, 3, 4, 5];
    //creates state for the user's rating
    const [userRating, setUserRating] = useState()
    //on change of the state updates number of ratings, 
    useEffect(() => {
        console.log(recipe)
        if(userRating){
        ratings ++
        }
        console.log(ratings)
        let totalRating = (((parseInt(rating)) + userRating)/ratings).toFixed(2)
        console.log(totalRating)
        if(totalRating){
        updateRating(totalRating)
        }
    })


    function updateRating(totalRating) {


        let newRating = [totalRating, recipe, ratings];
        const ratingString = JSON.stringify(newRating);
        fetch(`/update`, {
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
        <div class="RatingBar">
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
