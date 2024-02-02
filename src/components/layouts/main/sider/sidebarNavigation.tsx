import React from 'react';
import {
  CompassOutlined,
  DashboardOutlined,
  LayoutOutlined,
  LineChartOutlined,
  MoneyCollectOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'Catalg',
    key: 'medical-dashboard',
    url: '/catalog',
    icon: <DashboardOutlined />,
  },

  {
    title: 'Incomes',
    key: 'incomes',
    url: '/incomes',
    icon: <PlusCircleOutlined />,
  },

  {
    title: 'Users',
    key: 'users',
    url: '/users',
    icon: <UserOutlined />,
  },

  {
    title: 'Sales',
    key: 'sales',
    url: '/sales',
    icon: <MoneyCollectOutlined />,
  },

  {
    title: 'common.authPages',
    key: 'auth',
    icon: <UserOutlined />,
    children: [
      {
        title: 'common.login',
        key: 'login',
        url: '/auth/login',
      },
      {
        title: 'common.signUp',
        key: 'singUp',
        url: '/auth/sign-up',
      },
      {
        title: 'common.lock',
        key: 'lock',
        url: '/auth/lock',
      },
      {
        title: 'common.forgotPass',
        key: 'forgotPass',
        url: '/auth/forgot-password',
      },
      {
        title: 'common.securityCode',
        key: 'securityCode',
        url: '/auth/security-code',
      },
      {
        title: 'common.newPassword',
        key: 'newPass',
        url: '/auth/new-password',
      },
    ],
  },

  {
    title: 'common.charts',
    key: 'charts',
    url: '/charts',
    icon: <LineChartOutlined />,
  },
  {
    title: 'common.maps',
    key: 'maps',
    icon: <CompassOutlined />,
    children: [
      {
        title: 'common.googleMap',
        key: 'google-maps',
        url: '/maps/google-maps',
      },
      {
        title: 'common.leafletMap',
        key: 'leaflet-maps',
        url: '/maps/leaflet-maps',
      },
      {
        title: 'common.reactSimpleMaps',
        key: 'react-simple-maps',
        url: '/maps/react-simple-maps',
      },
      {
        title: 'common.pigeonMaps',
        key: 'pigeon-maps',
        url: '/maps/pigeon-maps',
      },
    ],
  },
  {
    title: 'common.pages',
    key: 'pages',
    icon: <LayoutOutlined />,
    children: [
      {
        title: 'common.profilePage',
        key: 'profile',
        url: '/profile',
      },
      {
        title: 'common.serverError',
        key: 'serverError',
        url: '/server-error',
      },
      {
        title: 'common.clientError',
        key: '404Error',
        url: '/404',
      },
    ],
  },
];
