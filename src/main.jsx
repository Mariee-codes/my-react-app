// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

export default function Main() {
  const ingredients = ["Chicken","Oregano","Tomatoes"]

  /* review challenge
    map over the list of ingredients and render them as list items
    */

    const ingredientsListItems = ingredients.map(ingredient => (
      <li key = {ingredient}>{ingredient}</li>
    ))
      
  function handleSubmit(event) {
    event.preventDefault()
    console.log("Form Submitted!")
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    console.log(newIngredient)
  }
  return (


<main>
  <form onSubmit= {handleSubmit} className="add-ingredient-form">
    <input  

    type = "text"
    placeholder="e.g. oregano"
    aria-label="Add ingredient"
    name= "ingredient"
    
    />

    <button>
      Add ingredient
    </button>
     </form>

     <ul>
        {ingredientsListItems}
     </ul>
</main>
  )}