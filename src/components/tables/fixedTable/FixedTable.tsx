import { Table } from 'antd';
import { FixedTableProps, columns } from '@app/components/types/catalog/catalogTypes';

const FixedTable: React.FC<FixedTableProps> = ({ data, loading, tableRef }) => {
  return (
    <Table
      ref={tableRef}
      columns={columns}
      dataSource={data}
      scroll={{ x: 5500 }}
      loading={loading}
      locale={{ emptyText: 'No data found' }}
    />
  );
};

export default FixedTable;
