import React, { useEffect, useState, useCallback } from "react";
import Nutrition from "./Nutrition";
const FetchData = ({ query }) => {
    const [nutrition, setNutrition] = useState(
        {
            sugar_g: " ",
            fiber_g: " ",
            serving_size_g: " ",
            sodium_mg: " ",
            name: " ",
            potassium_mg: " ",
            fat_saturated_g: " ",
            fat_total_g: " ",
            calories: " ",
            cholesterol_mg: " ",
            protein_g: " ",
            carbohydrates_total_g: " ",
        },
    );

    const ingredients = []
    const value = []
    var count = 0
    var sum = 0
    const fetchData = useCallback((queryLength) => {
        var url = "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + query[queryLength];
        console.log(url)
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": 'a7b899f522mshcd63555cd326996p1c67bfjsn5f1be54cbfaf',
                "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
            },
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((incomingData) => {
                const iterator = incomingData.items.values()
                ingredients.push(iterator.next().value)
                //console.log(ingredients)
                const result = Object.values(ingredients.reduce((r, { sugar_g, fiber_g, serving_size_g, sodium_mg, potassium_mg, fat_saturated_g, fat_total_g, calories, cholesterol_mg, protein_g, carbohydrates_total_g }) => {
                    if (!r[sugar_g]) r[sugar_g] = { sugar_g: 0, fiber_g: 0, serving_size_g: 0, sodium_mg: 0, potassium_mg: 0, fat_saturated_g: 0, fat_total_g: 0, calories: 0, cholesterol_mg: 0, protein_g: 0, carbohydrates_total_g: 0 };
                    r[sugar_g].sugar_g += sugar_g;
                    r[sugar_g].fiber_g += fiber_g;
                    r[sugar_g].serving_size_g += serving_size_g;
                    r[sugar_g].sodium_mg += sodium_mg;
                    r[sugar_g].potassium_mg += potassium_mg;
                    r[sugar_g].fat_saturated_g += fat_saturated_g;
                    r[sugar_g].fat_total_g += fat_total_g;
                    r[sugar_g].calories += calories;
                    r[sugar_g].cholesterol_mg += cholesterol_mg;
                    r[sugar_g].protein_g += protein_g;
                    r[sugar_g].carbohydrates_total_g += carbohydrates_total_g;
                    return r;
                }, {}));



                value.push(Object.values(result[count]))
                count++

                console.log(value[0])
                let [sugar, fiber, servingSize, sodium, potassium, saturates, fat, calories, cholesterol, protein, carbs] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

                sum = value.map(function (num, idx) {
                    console.log(num[0])
                    sugar += parseFloat(num[0])
                    fiber += parseFloat(num[1])
                    servingSize += parseFloat(num[2])
                    sodium += parseFloat(num[3])
                    potassium += parseFloat(num[4])
                    saturates += parseFloat(num[5])
                    fat += parseFloat(num[6])
                    calories += parseFloat(num[7])
                    cholesterol += parseFloat(num[8])
                    protein += parseFloat(num[9])
                    carbs += parseFloat(num[10])

                })

                console.log(sugar, fiber, servingSize, sodium, potassium, saturates, fat, calories, cholesterol, protein, carbs)


                setNutrition({
                    sugar_g: sugar,
                    fiber_g: fiber,
                    serving_size_g: servingSize,
                    sodium_mg: sodium,
                    name: " ",
                    potassium_mg: potassium,
                    fat_saturated_g: saturates,
                    fat_total_g: fat,
                    calories: calories,
                    cholesterol_mg: cholesterol,
                    protein_g: protein,
                    carbohydrates_total_g: carbs,
                });
            });
    }, []);
    useEffect(() => {

    }, []);
    if (nutrition) {
        for (let count = 0; count < (query.length); count++) {
            fetchData(count);
        }
    }

    return (
        <div>
            <div>
                <Nutrition item={nutrition} />
            </div>
        </div>
    );
};
export default FetchData;