import { convertToDate } from '@app/utils/utils';
import type { ColumnsType } from 'antd/es/table';
export interface Autopart {
  autopart_id: number;
  brand_id: number | null;
  model_id: number | null;
  generation_id: number;
  manufacturer_id: number | null;
  name: string;
  front_back: string | null;
  left_right: string;
  number_of_part: number | null;
  year: number | null;
  color: string | null;
  comment: string | null;
  cross_number: string | null;
  note: string | null;
  marking: string | null;
  is_archive: boolean;
  not_for_export: boolean;
  site_link: string | null;
  video: string | null;
  old_bar_code: string | null;
  old_data: string | null;
  is_used: string;
  status: string;
  created_at: string;
  updated_at: string;
  model: {
    id: number;
    name: string;
    model_id: number;
  } | null;
  brand: string | null;
  generation: {
    id: number;
    name: string;
    model_id: number;
  };
}

export interface GetBrands {
  id: number;
  name: string;
  value: string;
  label: string;
  number_of_part: number;
}

export interface CarModel {
  id: number;
  name: string;
  brand_id: number;
}

export const columns: ColumnsType<Autopart> = [
  // {
  //   title: 'Autopart ID',
  //   dataIndex: 'autopart_id',
  //   key: 'autopart_id',
  //   width: 100,
  // },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
  },
  {
    title: 'Front/Back',
    dataIndex: 'front_back',
    key: 'front_back',
    width: 100,
  },
  {
    title: 'Left/Right',
    dataIndex: 'left_right',
    key: 'left_right',
    width: 100,
  },
  {
    title: 'Number of Part',
    dataIndex: 'number_of_part',
    key: 'number_of_part',
    width: 100,
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
    width: 100,
  },
  {
    title: 'Color',
    dataIndex: 'color',
    key: 'color',
    width: 100,
  },
  {
    title: 'Comment',
    dataIndex: 'comment',
    key: 'comment',
    width: 150,
  },
  {
    title: 'Cross Number',
    dataIndex: 'cross_number',
    key: 'cross_number',
    width: 150,
  },
  {
    title: 'Note',
    dataIndex: 'note',
    key: 'note',
    width: 150,
  },
  {
    title: 'Marking',
    dataIndex: 'marking',
    key: 'marking',
    width: 150,
  },
  {
    title: 'Is Archive',
    dataIndex: 'is_archive',
    key: 'is_archive',
    width: 100,
  },
  {
    title: 'Not for Export',
    dataIndex: 'not_for_export',
    key: 'not_for_export',
    width: 120,
  },
  {
    title: 'Site Link',
    dataIndex: 'site_link',
    key: 'site_link',
    width: 150,
  },
  {
    title: 'Video',
    dataIndex: 'video',
    key: 'video',
    width: 150,
  },
  {
    title: 'Old Bar Code',
    dataIndex: 'old_bar_code',
    key: 'old_bar_code',
    width: 150,
  },
  {
    title: 'Old Data',
    dataIndex: 'old_data',
    key: 'old_data',
    width: 150,
  },
  {
    title: 'Is Used',
    dataIndex: 'is_used',
    key: 'is_used',
    width: 100,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 100,
  },
  {
    title: 'Created At',
    dataIndex: 'created_at',
    key: 'created_at',
    width: 150,
    render: (text: string) => convertToDate(text),
  },
  {
    title: 'Updated At',
    dataIndex: 'updated_at',
    key: 'updated_at',
    width: 150,
    render: (text: string) => convertToDate(text),
  },
  {
    title: 'Model ID',
    dataIndex: ['model', 'id'],
    key: 'model_id',
    width: 100,
  },
  {
    title: 'Model Name',
    dataIndex: ['model', 'name'],
    key: 'model_name',
    width: 150,
  },

  {
    title: 'Generation ID',
    dataIndex: ['generation', 'id'],
    key: 'generation_id',
    width: 100,
  },
  {
    title: 'Generation Name',
    dataIndex: ['generation', 'name'],
    key: 'generation_name',
    width: 150,
    fixed: 'right',
  },
  {
    title: 'Actions',
    key: 'actions',
    fixed: 'right',
    width: 120,
  },
];

export interface FixedTableProps {
  data: Autopart[];
  loading: boolean;
  tableRef: any;
}
