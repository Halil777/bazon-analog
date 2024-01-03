import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { Autopart, FixedTableProps, columns } from '@app/components/types/catalog/catalogTypes';
import { AxiosInstance } from '@app/api/axios/AxiosInstance';

const FixedTable: React.FC<FixedTableProps> = ({ data, loading, tableRef }) => {
  const [selectedRecord, setSelectedRecord] = useState<Autopart | null>(null);

  const handleEdit = (record: Autopart) => {
    setSelectedRecord(record);
    // Additional logic for editing can be added here if needed
  };

  const rowSelection = {
    onSelect: (record: Autopart, selected: boolean) => {
      if (selected) {
        setSelectedRecord(record);
        // Additional logic when a row is selected can be added here
      } else {
        setSelectedRecord(null);
        // Additional logic when a row is deselected can be added here
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
    // Handle the update logic, e.g., navigate to the update page
  };

  const hasIdProperty = (record: Autopart | null): record is Autopart => {
    return record !== null && typeof record === 'object' && 'id' in record;
  };

  const handleDeleteConfirm = () => {
    console.log('Deleting record:', selectedRecord);

    if (hasIdProperty(selectedRecord)) {
      const autopartId = selectedRecord.autopart_id;
      AxiosInstance.delete(`/autoparts/${autopartId}`)
        .then((response) => {
          console.log('Delete successful', response);
          // Add any additional logic here if needed
          handleModalCancel();
        })
        .catch((error) => {
          console.error('Error deleting record', error.response); // Log the detailed error response
        });
    } else {
      console.error('Selected record does not have an id property', selectedRecord);
    }
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
          <Button key="cancel" onClick={handleModalCancel}>
            Cancel
          </Button>,
          <Button key="delete" danger onClick={handleDeleteConfirm}>
            Delete
          </Button>,
          <Button key="update" type="primary" onClick={handleUpdate}>
            Update
          </Button>,
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
