import { PlusOutlined } from '@ant-design/icons';
import AllDeals from '@app/components/bazon/sales/all-deals/AllDeals';
import Canceled from '@app/components/bazon/sales/canceled/Canceled';
import Issued from '@app/components/bazon/sales/issued/Issued';
import New from '@app/components/bazon/sales/new/New';
import Working from '@app/components/bazon/sales/working/Working';
import { Stack } from '@mui/material';
import { Button, Radio, RadioChangeEvent, Space, Tabs } from 'antd';
import { FC, useState } from 'react';

interface CustomTab {
  key: string;
  content: React.ReactNode;
  buttonLabel: string;
}

const Sales: FC = () => {
  const [tabPosition, setTabPosition] = useState<'left' | 'right' | 'top' | 'bottom'>('left');

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };

  const customTabs: CustomTab[] = [
    { key: '1', content: <New />, buttonLabel: 'New' },
    { key: '2', content: <Working />, buttonLabel: 'Working' },
    { key: '3', content: <Canceled />, buttonLabel: 'Canceled' },
    { key: '4', content: <Issued />, buttonLabel: 'Issued' },
    { key: '5', content: <AllDeals />, buttonLabel: 'All Deals' },
  ];
  return (
    <div>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Space>
          <Radio.Group value={tabPosition} onChange={changeTabPosition}>
            <Radio.Button value="top">top</Radio.Button>
            <Radio.Button value="bottom">bottom</Radio.Button>
            <Radio.Button value="left">left</Radio.Button>
            <Radio.Button value="right">right</Radio.Button>
          </Radio.Group>
        </Space>
        <Button icon={<PlusOutlined />}>Add New Deals</Button>
      </Stack>
      <Tabs style={{ marginTop: 50 }} tabPosition={tabPosition}>
        {customTabs.map((tab) => (
          <Tabs.TabPane key={tab.key} tab={<Button type="text">{tab.buttonLabel}</Button>}>
            {tab.content}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Sales;
