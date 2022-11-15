import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterBy, setFilterBy] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setFilterBy(event.target.value)
    console.log(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && item.name.includes(filterBy)) return true;

    return item.category === selectedCategory && item.name.includes(filterBy);
  });

  function addElement(element) {
    setItems([...items, element]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addElement} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={filterBy}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
