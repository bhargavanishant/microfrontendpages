import React, { useEffect, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import "./index.css";
import { useStore } from "second/ZustandStore";

export default function Categories() {
  useEffect(() => {
    fetchData();
  }, []); // Empty array ensures this runs only once

  const { setData, data } = useStore();

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    const newData = await response.json();
    setData(newData.recipes || []);
  };

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "ingredients", headerName: "Ingredients" },
    { field: "prepTimeMinutes", headerName: "Prep Time (min)" },
    { field: "cookTimeMinutes", headerName: "Cook Time (min)" },
    { field: "servings", headerName: "Servings" },
    { field: "difficulty", headerName: "Difficulty" },
    { field: "cuisine", headerName: "Cuisine" },
    { field: "caloriesPerServing", headerName: "Calories per Serving" },
    { field: "rating", headerName: "Rating" },
    { field: "reviewCount", headerName: "Review Count" },
    { field: "mealType", headerName: "Meal Type" },
  ]);

  return (
    <>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500, width: "100%" }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={data}
          columnDefs={colDefs}
          pagination={true} // Enables pagination if there are many rows
        />
      </div>
    </>
  );
}
