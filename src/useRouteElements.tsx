import { Outlet, useRoutes } from 'react-router-dom';
import ProductList from './components/sites/home/product-list';
import { path } from './constants/path';
import MainLayout from './layouts';

const ProtectedRoute = () => {
  return <Outlet />;
};
const RejectedRoute = () => {
  return <Outlet />;
};

const useRouteElements = () => {
  const routeElement = useRoutes([
    {
      path: '',
      index: true,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.profile,
          element: (
            <MainLayout>
              <h1>Thông tin cá nhân</h1>
            </MainLayout>
          )
        },
        {
          path: path.cart,
          element: (
            <MainLayout>
              <h1>Giỏ hàng</h1>
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: path.register,
          element: (
            <MainLayout>
              <h1>Đăng ký</h1>
            </MainLayout>
          )
        },
        {
          path: path.login,
          element: (
            <MainLayout>
              <h1>Đăng nhập</h1>
            </MainLayout>
          )
        }
      ]
    },
    {
      path: path.productDetail,
      index: true,
      element: (
        <MainLayout>
          <h1>Chi tiết sản phẩm</h1>
        </MainLayout>
      )
    }
  ]);

  return routeElement;
};

export default useRouteElements;
