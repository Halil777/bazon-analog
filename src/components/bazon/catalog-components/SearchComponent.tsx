import React from 'react';
import { AutoComplete } from 'antd';

const options = [{ value: 'Burns Bay Road' }, { value: 'Downing Street' }, { value: 'Wall Street' }];

const SearchComponent: React.FC = () => (
  <AutoComplete
    style={{ width: 500 }}
    options={options}
    placeholder="Search by Cross Number"
    filterOption={(inputValue, option) => option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
  />
);

export default SearchComponent;
