import React, { useState } from "react";
import ProductTable from "../producttable/ProductTable";
import SearchBar from "../searchbar/SearchBar";

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("fruit");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;
