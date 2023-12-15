import React, { FC, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Button, Typography } from 'antd';
import { ExportOutlined, SettingOutlined } from '@ant-design/icons';
import SearchComponent from '@app/components/bazon/catalog-components/SearchComponent';
import FixedTable from '@app/components/tables/fixedTable/FixedTable';
import { Autopart } from '@app/components/types/catalog/catalogTypes';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import Incomes from '../incomes/Incomes';

const Catalog: FC = () => {
  const [data, setData] = useState<Autopart[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const tableRef = useRef(null);
  const [filteredData, setFilteredData] = useState<Autopart[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Autopart[]>('http://95.85.121.153:3030/autoparts/');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSelect = (selectedValue: string) => {
    setSearchTerm(selectedValue);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.trim().toLowerCase();

    if (lowerCaseSearchTerm === '') {
      // If no search term, show the full table
      setFilteredData(data);
    } else {
      // If there's a search term, filter the table
      const filtered = data.filter((item) => {
        // Check if item.cross_number is defined and is a string
        return (
          item.cross_number &&
          typeof item.cross_number === 'string' &&
          item.cross_number.toLowerCase().includes(lowerCaseSearchTerm)
        );
      });
      setFilteredData(filtered);
    }
  }, [data, searchTerm]);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 50 }}>
        <SearchComponent onSearchSelect={handleSearchSelect} setFilteredData={setFilteredData} data={data} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 20 }}>
          <DownloadTableExcel currentTableRef={tableRef.current} filename="autoparts-table" sheet="autoparts">
            <Button icon={<ExportOutlined />}>Export Table Data</Button>
          </DownloadTableExcel>
          <Button loading={loading} icon={<SettingOutlined />}>
            Columns Manager
          </Button>
          <Incomes />
        </div>
      </div>

      {filteredData.length > 0 ? (
        <FixedTable data={filteredData} tableRef={tableRef} loading={loading} />
      ) : (
        <Typography.Text>No results found</Typography.Text>
      )}
    </>
  );
};

export default Catalog;
