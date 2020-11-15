import React from "react";



export default function AllergensSection(props) {
  let allergensList = props.allergens;
  return (
    <>
      {allergensList?.map((ingredient) => {
        return <li>{ingredient}</li>;
      })}
      
    </>
  );
}
