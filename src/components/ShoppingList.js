import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [ selected, setSelected ] = useState('All')
const [ renderItems, setRenderItems ] = useState(items)

const filtered = renderItems.filter((item)  => {
  if (selected === 'All') {
    return true;
  } else {
  return item.category === selected
  }
})

function handleFilterChange(e){
  setSelected(e.target.value)
}

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filtered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
