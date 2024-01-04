import { FC, SetStateAction, useEffect, useRef, useState } from 'react';
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

  // const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await AxiosInstance.get<Autopart[]>('autoparts/');
  //     setData(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch autopart data
      const autopartResponse = await AxiosInstance.get<Autopart[]>('autoparts/');
      const autopartData = autopartResponse.data;

      // Fetch storage data
      const storageResponse = await AxiosInstance.get<Storage[]>('/storages');
      const storageData = storageResponse.data;

      // Merge autopart and storage data based on storage_id
      const mergedData = autopartData.map((autopart) => {
        const storageInfo = storageData.find((storage) => storage.id === autopart.storage_id);
        return { ...autopart, storage: storageInfo };
      });

      // Update setData line to explicitly specify the type
      setData(mergedData as unknown as SetStateAction<Autopart[]>);

      console.log(mergedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

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

      <FixedTable data={data} fetchData={fetchData} tableRef={tableRef} loading={loading} />
    </>
  );
};

export default Catalog;
