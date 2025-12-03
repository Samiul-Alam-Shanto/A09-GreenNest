import React, { useState, useMemo } from "react";
import usePlants from "../../hooks/usePlants";
import PlantCard from "../../components/PlantCard/PlantCard";
import AllPlantsLoading from "../../components/Loading/AllPlantsLoading";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";

const AllPlants = () => {
  const { plants, loading } = usePlants();

  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("default");

  // const maxPrice = useMemo(() => {
  //   if (!plants.length) return 100;
  //   return Math.max(...plants.map((item) => item.price));
  // }, [plants]);

  const maxPrice = useMemo(() => {
    return plants.length ? Math.max(...plants.map((p) => p.price)) : 100;
  }, [plants]);

  const [price, setPrice] = useState(maxPrice);
  const [inStock, setInStock] = useState(true);
  const [categories, setCategories] = useState([]);
  const [careLevels, setCareLevels] = useState([]);

  const allCategories = useMemo(
    () => [...new Set(plants.map((p) => p.category))],
    [plants]
  );
  const allCareLevels = useMemo(
    () => [...new Set(plants.map((p) => p.careLevel))],
    [plants]
  );
  // console.log(allCategories, allCareLevels);

  const resetFilters = () => {
    setSearchText("");
    setSort("default");
    setPrice(maxPrice);
    setInStock(true);
    setCategories([]);
    setCareLevels([]);
  };

  const plantsResult = useMemo(() => {
    let filteredPlants = [...plants];

    //search
    if (searchText) {
      filteredPlants = filteredPlants.filter((p) =>
        p.plantName.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    //stock availability
    if (inStock) {
      filteredPlants = filteredPlants.filter((p) => p.availableStock > 0);
    }
    //price
    filteredPlants = filteredPlants.filter((p) => p.price <= price);

    //categories filter

    if (categories.length > 0) {
      filteredPlants = filteredPlants.filter((p) =>
        categories.includes(p.category)
      );
    }

    //careLevel filter
    if (careLevels.length > 0) {
      filteredPlants = filteredPlants.filter((p) =>
        careLevels.includes(p.careLevel)
      );
    }

    //sort functions

    if (sort === "price-low") {
      filteredPlants.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-high") {
      filteredPlants.sort((a, b) => b.price - a.price);
    }
    if (sort === "rating") {
      filteredPlants.sort((a, b) => b.rating - a.rating);
    }

    return filteredPlants;
  }, [plants, searchText, inStock, price, categories, careLevels, sort]);

  //for updating the price when the data loads
  useEffect(() => {
    setPrice(maxPrice);
  }, [maxPrice]);

  if (loading) return <AllPlantsLoading />;

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Our Entire Collection</h1>
        <p className="text-lg text-gray-600 mt-2">
          Find the perfect green companion for your space.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* --- SIDEBAR --- */}
        <div className="lg:col-span-1">
          <FilterSidebar
            price={price}
            setPrice={setPrice}
            maxPrice={maxPrice}
            inStock={inStock}
            setInStock={setInStock}
            allCategories={allCategories}
            allCareLevels={allCareLevels}
            categories={categories}
            setCategories={setCategories}
            careLevels={careLevels}
            setCareLevels={setCareLevels}
            resetFilters={resetFilters}
          />
        </div>

        <div className="lg:col-span-3">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 p-4 bg-card-bg rounded-lg shadow-sm">
            {/* search */}
            <div className="relative w-full md:w-1/3">
              <input
                type="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search plants..."
                className="input input-bordered w-full pl-10"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            {/* sort */}
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span className="text-sm text-primary">
                {plantsResult.length} Products Found
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="select select-bordered"
              >
                <option value="default">Default Sorting</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
                <option value="rating">By Rating</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {plantsResult.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {plantsResult.map((plant) => (
                <PlantCard key={plant.plantId} plant={plant} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-card-bg rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold">No Plants Found</h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your filters or search term.
              </p>
              <button onClick={resetFilters} className="btn btn-primary mt-4">
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllPlants;
