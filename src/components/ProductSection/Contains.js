import React from "react";


export default function Contains(props) {
  console.log('props contain props contaimn' + props.contains);
  let containsArray = props.contains;
  return (
    <div>
      {containsArray?.map((ingredient) => {
        return <li>{ingredient}</li>;
      })}
    </div>
  );
}
