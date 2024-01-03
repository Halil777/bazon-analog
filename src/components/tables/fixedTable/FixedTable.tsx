import { Table } from 'antd';
import { Autopart, FixedTableProps, columns } from '@app/components/types/catalog/catalogTypes';

const FixedTable: React.FC<FixedTableProps> = ({ data, loading, tableRef }) => {
  const handleEdit = (record: Autopart) => {
    // Add your logic for editing here
    console.log('Editing record:', record);
  };

  const handleDelete = (record: Autopart) => {
    // Add your logic for deleting here
    console.log('Deleting record:', record);
  };
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
