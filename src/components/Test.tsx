import React from 'react';

const Crosstable = () => {
  const headers = ["Category 1", "Category 2", "Category 3"];
  const rows = [
    { rowHeader: "Row 1", data: ["Data 1,1", "Data 1,2", "Data 1,3"] },
    { rowHeader: "Row 2", data: ["Data 2,1", "Data 2,2", "Data 2,3"] },
    { rowHeader: "Row 3", data: ["Data 3,1", "Data 3,2", "Data 3,3"] },
  ];

  return (
    <div style={{ margin: '20px 0', position: 'relative' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%', tableLayout: 'fixed' }}>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2', textAlign: 'center' }}>
                {row.rowHeader}
              </th>
              {row.data.map((cellData, cellIndex) => (
                <td key={cellIndex} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                  {cellData}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'center' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}></th>
              {headers.map((header, index) => (
                <th key={index} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Crosstable;
