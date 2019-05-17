import React, {useState} from 'react'

const Recipe = ({title,calories,image,ingredients}) => {
  const [key, setKey] = useState(1)

  return (
    <div>
      <h1>{title}</h1>
      <ol>
          {ingredients.map(ingredient => {
            return (
              <li>{ingredient.text}</li>
            )
          })}
      </ol>
      <p>{calories}</p>
      <img src={image} alt=""/>
    </div>
  )
}

export default Recipe;
