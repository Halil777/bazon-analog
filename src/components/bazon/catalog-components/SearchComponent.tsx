// SearchComponent.tsx
import React, { FC, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Autopart } from '@app/components/types/catalog/catalogTypes';

interface SearchComponentProps {
  onSearchSelect: (selectedValue: string) => void;
  setFilteredData: (data: Autopart[]) => void; // Fix the prop name here
  data: Autopart[];
}

const SearchComponent: FC<SearchComponentProps> = ({ onSearchSelect, setFilteredData, data }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = () => {
    onSearchSelect(searchTerm);
  };

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.trim().toLowerCase();

    if (lowerCaseSearchTerm === '') {
      // If no search term, show the full table
      setFilteredData(data);
    } else {
      // If there's a search term, filter the table
      const filtered = data.filter((item) => {
        // Check if item.cross_number is defined before accessing it
        return item.cross_number && item.cross_number.toLowerCase().includes(lowerCaseSearchTerm);
      });
      setFilteredData(filtered);
    }
  }, [data, searchTerm]);

  return (
    <TextField
      label="Search Cross Number"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      fullWidth
      sx={{ width: 400 }}
      InputProps={{
        endAdornment: (
          <button onClick={handleSearch} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            Search
          </button>
        ),
      }}
    />
  );
};

export default SearchComponent;
