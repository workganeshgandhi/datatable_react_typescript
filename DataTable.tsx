import React from "react";

interface DataTableProps {
  data: Array<{ [key: string]: string | number | boolean }>;
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  if (data.length === 0) {
    return <div>No data available</div>;
  }

  // Extract table headers from the keys of the first object
  const headers = Object.keys(data[0]);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
