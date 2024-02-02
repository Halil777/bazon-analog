import React, { useRef, useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { Autopart, FixedTableProps, columns } from '@app/components/types/catalog/catalogTypes';
import { AxiosInstance } from '@app/api/axios/AxiosInstance';
import { notificationController } from '@app/controllers/notificationController';
import { Stack } from '@mui/material';
import UpdateTable from './UpdateTable';
import { ExportOutlined } from '@ant-design/icons';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const FixedTable: React.FC<FixedTableProps> = ({ data, loading, fetchData }) => {
  const [selectedRecord, setSelectedRecord] = useState<Autopart | null>(null);
  const tableRef = useRef(null);

  const handleEdit = (record: Autopart) => {
    setSelectedRecord(record);
  };

  const rowSelection = {
    onSelect: (record: Autopart, selected: boolean) => {
      if (selected) {
        setSelectedRecord(record);
      } else {
        setSelectedRecord(null);
      }
    },
  };

  const onRow = (record: Autopart) => {
    return {
      onClick: () => handleEdit(record),
    };
  };

  const handleModalCancel = () => {
    setSelectedRecord(null);
  };

  const deleteAutoPart = (autopart_id: number) => {
    AxiosInstance.delete('autoparts/' + autopart_id)
      .then((response) => {
        console.log('Delete successful', response);
        handleModalCancel();
        fetchData();
        notificationController.success({
          message: 'Successfully Deleted auto part',
        });
      })
      .catch((error) => {
        console.error('Error deleting record', error.response);
      });
  };

  const handleExportTable = () => {
    const tableData = data.map((record) =>
      columns.map((column) => {
        if ('dataIndex' in column) {
          return record[column.dataIndex as keyof Autopart];
        }
        return null;
      }),
    );

    const ws = XLSX.utils.aoa_to_sheet([columns.map((column) => column.title), ...tableData]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const dataBlob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    saveAs(dataBlob, 'bazon.xlsx');
  };

  return (
    <>
      <Table
        ref={tableRef}
        columns={columns}
        dataSource={data}
        scroll={{ x: 6000 }}
        loading={loading}
        locale={{ emptyText: 'No data found' }}
        rowSelection={rowSelection}
        onRow={onRow}
      />
      <Modal
        title="Actions"
        visible={!!selectedRecord}
        onCancel={handleModalCancel}
        footer={[
          <Stack direction="row" spacing={3} justifyContent={'flex-end'} key="footer-buttons">
            <Button key="cancel" style={{ marginRight: 20 }} onClick={handleModalCancel}>
              Cancel
            </Button>
            <Button key="delete" danger onClick={() => deleteAutoPart(selectedRecord ? selectedRecord.autopart_id : 0)}>
              Delete
            </Button>
            <UpdateTable key={'update'} />
          </Stack>,
        ]}
      >
        {selectedRecord && (
          <div>
            <p>{`Selected record: ${selectedRecord.name}`}</p>
          </div>
        )}
      </Modal>
      <Button icon={<ExportOutlined />} onClick={handleExportTable}>
        Export Table Data
      </Button>
    </>
  );
};

export default FixedTable;
