import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';

const PaginatedList = ({ data, itemsPerPage ,handleChange}) => {
  const [currentPage, setCurrentPage] = useState(2);
  
  const totalPages = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className='pagination-container'>
      
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, value) => {handleChange(value); setCurrentPage(value)}}
        
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white", // Default color
            "&:hover": {
              backgroundColor: "dodgerblue", // Background color on hover
              color: "white", // Text color on hover
            },
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "dodgerblue", // Selected background
            color: "white", // Selected text
            "&:hover": {
              backgroundColor: "#1478C0", // Hover background for selected item
              color: "white", // Hover text for selected item
            },
          },
        }}
      />
    </div>
  );
};

export default PaginatedList;