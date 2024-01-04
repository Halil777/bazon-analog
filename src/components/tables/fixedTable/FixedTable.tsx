import React, { useEffect, useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { Autopart, FixedTableProps, columns } from '@app/components/types/catalog/catalogTypes';
import { AxiosInstance } from '@app/api/axios/AxiosInstance';
import { notificationController } from '@app/controllers/notificationController';
import { Drawer, Stack, Typography } from '@mui/material';
import UpdateTable from './UpdateTable';

const FixedTable: React.FC<FixedTableProps> = ({ data, loading, tableRef, fetchData }) => {
  const [selectedRecord, setSelectedRecord] = useState<Autopart | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleEdit = (record: Autopart) => {
    setSelectedRecord(record);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
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

  const handleUpdate = () => {
    console.log('Updating record:', selectedRecord);
    handleModalCancel();
    openDrawer();
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

  return (
    <>
      <Table
        ref={tableRef}
        columns={columns}
        dataSource={data}
        scroll={{ x: 5500 }}
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
        {/* Display additional information or confirmation message */}
        {selectedRecord && (
          <div>
            <p>{`Selected record: ${selectedRecord.name}`}</p>
            {/* Add more details or confirmation messages as needed */}
          </div>
        )}
      </Modal>
    </>
  );
};

export default FixedTable;
