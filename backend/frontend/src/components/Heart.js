import React from "react";
import { AiFillHeart } from "react-icons/ai";
export default function Star({ selected = false, onSelect = f => f , onClick = f => f}) {
    return  <AiFillHeart
        color={selected ? "coral" : "grey"}
        onClick={onSelect}
    />

}
