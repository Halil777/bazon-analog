import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row, Typography } from 'antd';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from '@app/components/bazon/bazon.styles';

const AddNewReceipt: FC = () => {
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/incomes' ? (
        <Button onClick={(e) => navigation('/add-new-receipt')} icon={<PlusOutlined />}>
          Add New Receipt
        </Button>
      ) : null}
      {location.pathname === '/add-new-receipt' ? (
        <>
          <S.AddNewReceiptCard>
            <div style={{ width: '200%', background: '#fff' }}></div>
          </S.AddNewReceiptCard>
        </>
      ) : null}
    </div>
  );
};

export default AddNewReceipt;
