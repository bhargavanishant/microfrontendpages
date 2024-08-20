import React, { useEffect, useState } from 'react';
import './index.css';

export default function Product() {
    const [productsData, setProductsData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const newData = await response.json();
        setProductsData(newData.products); // Assuming the API returns an object with a 'products' array
    };

    return (
            <div className="container">
                {productsData && productsData.map(product => (
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
