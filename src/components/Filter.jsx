// src/components/Filter.js
import React, { useState } from "react";

const Filter = ({ onFilterApply }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortOrder, setSortOrder] = useState("low-to-high");

  const handleApply = () => {
    onFilterApply({ minPrice, maxPrice, sortOrder });
  };

  return (
    <div className="filter-sidebar">
      <h3>Filter</h3>
      <div className="filter-section">
        <label>Price Range</label>
        <input
          type="range"
          min="0"
          max="5000"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <input
          type="range"
          min="0"
          max="5000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <div className="range-values">
          <span>${minPrice}</span> - <span>${maxPrice}</span>
        </div>
      </div>
      <div className="filter-section">
        <label>Sort By</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default Filter;
