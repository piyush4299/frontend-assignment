import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json'
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Get current records
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Highly-Rated Kickstarter Projects</h1>
      <Table data={currentRecords} currentPage={currentPage} />
      <Pagination
        recordsPerPage={recordsPerPage}
        totalRecords={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;