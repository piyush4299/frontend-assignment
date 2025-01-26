import React from 'react';

const Table = ({ data, currentPage }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {data.map((project, index) => (
          <tr key={index}>
            <td>{(currentPage - 1) * 5 + index + 1}</td>
            <td>{project["percentage.funded"]}</td>
            <td>{project["amt.pledged"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;