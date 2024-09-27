import React from "react";
import DataTable from "./DataTable";

const App: React.FC = () => {
  // Example 1: User data
  const userData = [
    { name: "John Doe", age: 28, email: "john@example.com", active: true },
    { name: "Jane Smith", age: 34, email: "jane@example.com", active: false },
    { name: "Bob Johnson", age: 45, email: "bob@example.com", active: true },
  ];

  // Example 2: Product data
  const productData = [
    { productName: "Laptop", price: 999.99, inStock: true },
    { productName: "Smartphone", price: 599.99, inStock: false },
    { productName: "Tablet", price: 299.99, inStock: true },
  ];

  return (
    <div>
      <h1>User Data Table</h1>
      <DataTable data={userData} />

      <h1>Product Data Table</h1>
      <DataTable data={productData} />
    </div>
  );
};

export default App;
