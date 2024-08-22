import React, { useEffect, useState } from "react";
import "./index.css";
import { useStore } from "second/ZustandStore";
import _ from "lodash";

export default function Product() {
  const [productsData, setProductsData] = useState(null);
  const [productsFilterData, setProductsFilterData] = useState(null);
  const { filters, reset } = useStore();
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setProductsFilterData(productsData);
  }, [reset]);

  useEffect(() => {
    console.log("Product-useEffect-Filters-", { filters });
    let newProductFilterData: any = _.cloneDeep(productsData);
    if (filters?.search) {
      newProductFilterData = newProductFilterData?.filter(
        (item: any) =>
          item?.title
            ?.toLowerCase()
            ?.includes(filters?.search?.toLowerCase()) ||
          item?.brand?.toLowerCase()?.includes(filters?.search?.toLowerCase())
      );
    }
    if (filters?.priceRange) {
      newProductFilterData = newProductFilterData?.filter(
        (item: any) =>
          item?.price >= filters?.priceRange[0] &&
          item?.price <= filters?.priceRange[1]
      );
    }
    setProductsFilterData(newProductFilterData);
  }, [filters]);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const newData = await response.json();
    setProductsData(newData.products); // Assuming the API returns an object with a 'products' array
    setProductsFilterData(newData.products);
  };

  return (
    <div className="container">
      {productsFilterData &&
        productsFilterData.map((product) => (
          <div key={product.id} className="card">
            <div className="card-header">
              <h5 className="no-margin">Item Name: {product.title}</h5>
            </div>
            <div className="card-description">
              <h5 className="small hint-text no-margin">{product.brand}</h5>
              <h3 className="m-b-0">${product.price}</h3>
            </div>
            <div className="card-footer">
              <span className="text-success">Stock: {product.stock}</span>
            </div>
          </div>
        ))}
    </div>
  );
}
