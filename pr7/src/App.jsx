import { useState } from 'react';
import './App.css'
import { Card } from './Card'
import productsArray from "../data/data"

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState(""); 

  let filteredCards = productsArray;

  if (selectedCategory === "price<100") {
    filteredCards = productsArray.filter(product => product.price < 100);
  } else if (selectedCategory === "price>100") {
    filteredCards = productsArray.filter(product => product.price > 100);
  } else if (selectedCategory === "price>500") {
    filteredCards = productsArray.filter(product => product.price > 500);
  }

  if (sortOrder === "highToLow") {
    filteredCards = filteredCards.sort((a, b) => b.price - a.price); 
  } else if (sortOrder === "lowToHigh") {
    filteredCards = filteredCards.sort((a, b) => a.price - b.price);
  }
  return (
    <>
      <div className="container">

        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">None</option>
          <option value="price<100">Price &lt; 100</option>
          <option value="price>100">Price &gt; 100</option>
          <option value="price>500">Price &gt; 500</option>
        </select>


        
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Sort By</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>


        <div className="cards">
          {filteredCards.map((e, index) => (
            <Card key={index} imgAdd={e.image} brandName={e.brand} price={e.price} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;