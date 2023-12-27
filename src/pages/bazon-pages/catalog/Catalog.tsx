import { FC, useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import { ExportOutlined, SettingOutlined } from '@ant-design/icons';
import SearchComponent from '@app/components/bazon/catalog-components/SearchComponent';
import FixedTable from '@app/components/tables/fixedTable/FixedTable';
import { Autopart, CarModel, GetBrands } from '@app/components/types/catalog/catalogTypes';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import Incomes from '../incomes/Incomes';
import { AxiosInstance } from '@app/api/axios/AxiosInstance';

const Catalog: FC = () => {
  const [data, setData] = useState<Autopart[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const tableRef = useRef(null);
  const [brandData, setBrandData] = useState<GetBrands[]>([]);
  const [modelData, setModelData] = useState<CarModel[]>([]);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await AxiosInstance.get<Autopart[]>('autoparts/');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  //  useEffect(() => {
  //    const fetchData = async () => {
  //      const res = await AxiosInstance.get(`autoparts/q=${query}`);
  //      setData(res.data);
  //    };
  //    if (query.length === 0 || query.length > 2) fetchData();
  //  }, [query]);

  //  const fetchData = async () => {
  //    try {
  //      setLoading(true);
  //      const response = await AxiosInstance.get<Autopart[]>(`autoparts/?q=${query}`);
  //      setData(response.data);
  //      console.log(response.data);
  //    } catch (error) {
  //      console.error('Error fetching data:', error);
  //    } finally {
  //      setLoading(false);
  //    }
  //  };

  const getBrands = async () => {
    try {
      setLoading(true);
      const response = await AxiosInstance.get<GetBrands[]>('/options/brands');
      setBrandData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching brands:', error); // Improved error logging
    } finally {
      setLoading(false);
    }
  };

  const getModels = async () => {
    try {
      setLoading(true);
      const response = await AxiosInstance.get<CarModel[]>('/options/models');
      setModelData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching models:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    getBrands();
    getModels();
  }, []);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 50 }}>
        <SearchComponent />
        {/* <SearchComponent setQuery={setQuery} /> */}
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

      <FixedTable data={data} tableRef={tableRef} loading={loading} />
    </>
  );
};

export default Catalog;
