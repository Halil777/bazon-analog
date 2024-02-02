import { FC, useEffect, useState } from 'react';
import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import SearchComponent from '@app/components/bazon/catalog-components/SearchComponent';
import FixedTable from '@app/components/tables/fixedTable/FixedTable';
import { Autopart, Section } from '@app/components/types/catalog/catalogTypes';
import Incomes from '../incomes/Incomes';
import { AxiosInstance } from '@app/api/axios/AxiosInstance';

const Catalog: FC = () => {
  const [data, setData] = useState<Autopart[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);

      const autopartResponse = await AxiosInstance.get<Autopart[]>('autoparts/');
      const autopartData = autopartResponse.data;

      const sectionResponse = await AxiosInstance.get<Section[]>('/sections');
      const sectionData = sectionResponse.data;

      const mergedData = autopartData.map((autopart) => {
        const sectionInfo = sectionData.find((section) => section.storage_id === autopart.storage_id);
        return { ...autopart, section_number: sectionInfo?.section_number };
      });

      setData(mergedData as Autopart[]);

      console.log(mergedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 50 }}>
        <SearchComponent />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 20 }}>
          <Button loading={loading} icon={<SettingOutlined />}>
            Columns Manager
          </Button>
          <Incomes />
        </div>
      </div>

      <FixedTable data={data} fetchData={fetchData} loading={loading} />
    </>
  );
};

export default Catalog;
