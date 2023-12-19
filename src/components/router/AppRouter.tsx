import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// no lazy loading for auth pages to avoid flickering
const AuthLayout = React.lazy(() => import('@app/components/layouts/AuthLayout/AuthLayout'));
import LoginPage from '@app/pages/LoginPage';
import SignUpPage from '@app/pages/SignUpPage';
import ForgotPasswordPage from '@app/pages/ForgotPasswordPage';
import SecurityCodePage from '@app/pages/SecurityCodePage';
import NewPasswordPage from '@app/pages/NewPasswordPage';
import LockPage from '@app/pages/LockPage';

import MainLayout from '@app/components/layouts/main/MainLayout/MainLayout';
import ProfileLayout from '@app/components/profile/ProfileLayout';
import RequireAuth from '@app/components/router/RequireAuth';
import { withLoading } from '@app/hocs/withLoading.hoc';
import NftDashboardPage from '@app/pages/DashboardPages/NftDashboardPage';
import MedicalDashboardPage from '@app/pages/DashboardPages/MedicalDashboardPage';

const CatalogPage = React.lazy(() => import('@app/pages/bazon-pages/catalog/Catalog'));
const IncomesPage = React.lazy(() => import('@app/pages/bazon-pages/incomes/Incomes'));
const UsersPage = React.lazy(() => import('@app/pages/bazon-pages/users/Users'));
const SalesPage = React.lazy(() => import('@app/pages/bazon-pages/sales/Sales'));
const AddNewReceiptPage = React.lazy(() => import('@app/pages/bazon-pages/incomes/Incomes'));
const NewsFeedPage = React.lazy(() => import('@app/pages/NewsFeedPage'));
const DataTablesPage = React.lazy(() => import('@app/pages/DataTablesPage'));
const ChartsPage = React.lazy(() => import('@app/pages/ChartsPage'));
const ServerErrorPage = React.lazy(() => import('@app/pages/ServerErrorPage'));
const Error404Page = React.lazy(() => import('@app/pages/Error404Page'));
const AdvancedFormsPage = React.lazy(() => import('@app/pages/AdvancedFormsPage'));
const PersonalInfoPage = React.lazy(() => import('@app/pages/PersonalInfoPage'));
const SecuritySettingsPage = React.lazy(() => import('@app/pages/SecuritySettingsPage'));
const NotificationsPage = React.lazy(() => import('@app/pages/NotificationsPage'));
const PaymentsPage = React.lazy(() => import('@app/pages/PaymentsPage'));
const GoogleMaps = React.lazy(() => import('@app/pages/maps/GoogleMapsPage/GoogleMapsPage'));
const LeafletMaps = React.lazy(() => import('@app/pages/maps/LeafletMapsPage/LeafletMapsPage'));
const ReactSimpleMaps = React.lazy(() => import('@app/pages/maps/ReactSimpleMapsPage/ReactSimpleMapsPage'));
const PigeonsMaps = React.lazy(() => import('@app/pages/maps/PigeonsMapsPage/PigeonsMapsPage'));
const Logout = React.lazy(() => import('./Logout'));

export const NFT_DASHBOARD_PATH = '/';
export const MEDICAL_DASHBOARD_PATH = '/medical-dashboard';

const MedicalDashboard = withLoading(MedicalDashboardPage);
const NftDashboard = withLoading(NftDashboardPage);
const NewsFeed = withLoading(NewsFeedPage);
const AdvancedForm = withLoading(AdvancedFormsPage);

const DataTables = withLoading(DataTablesPage);
const Catalog = withLoading(CatalogPage);
const Incomes = withLoading(IncomesPage);
const Users = withLoading(UsersPage);
const Sales = withLoading(SalesPage);

//
const AddNewReceipt = withLoading(AddNewReceiptPage);
const Charts = withLoading(ChartsPage);

// Maps
const Google = withLoading(GoogleMaps);
const Leaflet = withLoading(LeafletMaps);
const ReactSimple = withLoading(ReactSimpleMaps);
const Pigeons = withLoading(PigeonsMaps);

const ServerError = withLoading(ServerErrorPage);
const Error404 = withLoading(Error404Page);

// Profile
const PersonalInfo = withLoading(PersonalInfoPage);
const SecuritySettings = withLoading(SecuritySettingsPage);
const Notifications = withLoading(NotificationsPage);
const Payments = withLoading(PaymentsPage);

const AuthLayoutFallback = withLoading(AuthLayout);
const LogoutFallback = withLoading(Logout);

export const AppRouter: React.FC = () => {
  const protectedLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path={NFT_DASHBOARD_PATH} element={protectedLayout}>
          <Route index element={<Catalog />} />
          <Route path={MEDICAL_DASHBOARD_PATH} element={<MedicalDashboard />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="incomes" element={<Incomes />} />
          <Route path="users" element={<Users />} />
          <Route path="sales" element={<Sales />} />
          <Route path="add-new-receipt" element={<AddNewReceipt />} />
          <Route path="apps">
            <Route path="feed" element={<NewsFeed />} />
          </Route>
          <Route path="forms">
            <Route path="advanced-forms" element={<AdvancedForm />} />
          </Route>
          <Route path="data-tables" element={<DataTables />} />
          <Route path="charts" element={<Charts />} />
          <Route path="maps">
            <Route path="google-maps" element={<Google />} />
            <Route path="leaflet-maps" element={<Leaflet />} />
            <Route path="react-simple-maps" element={<ReactSimple />} />
            <Route path="pigeon-maps" element={<Pigeons />} />
          </Route>
          <Route path="server-error" element={<ServerError />} />
          <Route path="404" element={<Error404 />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route path="personal-info" element={<PersonalInfo />} />
            <Route path="security-settings" element={<SecuritySettings />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="payments" element={<Payments />} />
          </Route>
        </Route>
        <Route path="/auth" element={<AuthLayoutFallback />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route
            path="lock"
            element={
              <RequireAuth>
                <LockPage />
              </RequireAuth>
            }
          />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="security-code" element={<SecurityCodePage />} />
          <Route path="new-password" element={<NewPasswordPage />} />
        </Route>
        <Route path="/logout" element={<LogoutFallback />} />
      </Routes>
    </BrowserRouter>
  );
};
