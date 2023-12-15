import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { RadioChangeEvent } from 'antd';
import { Radio, Space, Tabs } from 'antd';
import Draft from '@app/components/bazon/incomes/draft/Draft';
import Completed from '@app/components/bazon/incomes/completed/Completed';
import Canceled from '@app/components/bazon/incomes/canceled/Canceled';
import AllReceipts from '@app/components/bazon/incomes/receipt/AllReceipts';
import Supplies from '@app/components/bazon/incomes/supplies/Supplies';
import { Stack } from '@mui/material';
import AddNewReceipt from '@app/components/bazon/incomes/receipt/AddNewReceipt';

interface CustomTab {
  key: string;
  content: React.ReactNode;
  buttonLabel: string;
}

const Incomes: FC = () => {
  const navigation = useNavigate();
  const location = useLocation();

  const [tabPosition, setTabPosition] = useState<'left' | 'right' | 'top' | 'bottom'>('left');

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };

  const customTabs: CustomTab[] = [
    { key: '1', content: <Draft />, buttonLabel: 'Drafts' },
    { key: '2', content: <Completed />, buttonLabel: 'Completed' },
    { key: '3', content: <Canceled />, buttonLabel: 'Canceled' },
    { key: '4', content: <AllReceipts />, buttonLabel: 'All Receipt' },
    { key: '5', content: <Supplies />, buttonLabel: 'Supplies' },
  ];

  return (
    <div style={{ width: '100%' }}>
      {location.pathname === '/catalog' ? (
        <Button icon={<PlusOutlined />} onClick={(e) => navigation('/incomes')}>
          Add New Part
        </Button>
      ) : null}
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        {location.pathname === '/incomes' ? (
          <Space>
            <Radio.Group value={tabPosition} onChange={changeTabPosition}>
              <Radio.Button value="top">top</Radio.Button>
              <Radio.Button value="bottom">bottom</Radio.Button>
              <Radio.Button value="left">left</Radio.Button>
              <Radio.Button value="right">right</Radio.Button>
            </Radio.Group>
          </Space>
        ) : null}
        <AddNewReceipt />
      </Stack>

      {location.pathname === '/incomes' ? (
        <Tabs style={{ marginTop: 50 }} tabPosition={tabPosition}>
          {customTabs.map((tab) => (
            <Tabs.TabPane key={tab.key} tab={<Button type="text">{tab.buttonLabel}</Button>}>
              {tab.content}
            </Tabs.TabPane>
          ))}
        </Tabs>
      ) : null}
    </div>
  );
};

export default Incomes;
