// src/components/FilterSidebar/FilterSidebar.js
import React from "react";

const FilterSidebar = ({
  price,
  setPrice,
  maxPrice,
  inStock,
  setInStock,
  allCategories,
  allCareLevels,
  categories,
  setCategories,
  careLevels,
  setCareLevels,
  resetFilters,
}) => {
  // toggle
  const toggle = (currentList, clickedValue, updateList) => {
    const alreadySelected = currentList.includes(clickedValue);

    if (alreadySelected) {
      // Remove the item
      const newList = currentList.filter((item) => item !== clickedValue);
      updateList(newList);
    } else {
      // Add the item
      const newList = [...currentList, clickedValue];
      updateList(newList);
    }
  };

  return (
    <div className="bg-card-bg p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
        <h2 className="text-lg font-bold ">Filter By</h2>
        <button
          onClick={resetFilters}
          className="btn btn-sm btn-ghost text-primary hover:bg-primary/10"
        >
          Reset
        </button>
      </div>

      {/* Price Range Filter */}
      <div className="py-4">
        <h3 className="font-bold text-text-dark mb-2">Price</h3>
        <input
          type="range"
          min={0}
          max={maxPrice}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="range range-primary"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>$0</span>
          <span>${price}</span>
        </div>
      </div>

      {/* Stock Filter */}
      <div className="border-t border-gray-200 py-4">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="font-bold text-text-dark">In Stock Only</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
          />
        </label>
      </div>

      {/* Category Filter */}
      <div className="border-t border-gray-200 py-4">
        <h3 className="font-bold mb-2">Category</h3>
        <div className="space-y-2">
          {allCategories.map((category, i) => (
            <label
              key={i}
              className="flex items-center justify-between cursor-pointer"
            >
              <span className="text-gray-600">{category}</span>
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
                checked={categories.includes(category)}
                onChange={() => toggle(categories, category, setCategories)}
              />
            </label>
          ))}
        </div>
      </div>

      {/* Care Level Filter */}
      <div className="border-t border-gray-200 py-4">
        <h3 className="font-bold mb-2">Category</h3>
        <div className="space-y-2">
          {allCareLevels.map((careLevel, i) => (
            <label
              key={i}
              className="flex items-center justify-between cursor-pointer"
            >
              <span className="text-gray-600">{careLevel}</span>
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
                checked={careLevels.includes(careLevel)}
                onChange={() => toggle(careLevels, careLevel, setCareLevels)}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
