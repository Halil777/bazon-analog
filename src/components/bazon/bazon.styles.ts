import styled from 'styled-components';
import { BaseCard } from '../common/BaseCard/BaseCard';

export const AddNewReceiptCard = styled(BaseCard)`
  width: 100%;
  height: 70vh;
  overflow-y: auto;

  .leaflet-container {
    z-index: 0;
  }
`;
