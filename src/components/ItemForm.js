import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [addByName, setAddByName] = useState("")
  const [addCategory, setAddCategory] = useState("Produce")

  function handleNameChange(event) {
    setAddByName(event.target.value)
  }

  function handleAddCategory(event) {
    setAddCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: addByName,
      category: addCategory,
  };
  props.onItemFormSubmit(newItem)
}   
    

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleAddCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
