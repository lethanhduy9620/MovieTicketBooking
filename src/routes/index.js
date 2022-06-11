import PublicPage from "../container/PublicPage";
import AdminPage from "../container/AdminPage";
import { lazy } from "react";

//routes of Public pages for Users
const routesHome = [
  {
    //Trang Home
    exact: true,
    path: "/",
    component: lazy(() => import("../container/PublicPage/TrangHome")),
  },
  {
    //Trang Phim Dang Chieu
    exact: false,
    path: "/phim-dang-chieu",
    component: lazy(() => import("../container/PublicPage/DanhSachPhim")),
  },
  {
    //Trang Phim Sap Chieu
    exact: false,
    path: "/phim-sap-chieu",
    component: lazy(() => import("../container/PublicPage/DanhSachPhim")),
  },
  {
    //Trang Chi Tiet Phim
    exact: false,
    path: "/chi-tiet-phim/:id",
    component: lazy(() => import("../container/PublicPage/ChiTietPhim")),
  },
  {
    //Trang Dang Nhap
    exact: false,
    path: "/dang-nhap",
    component: lazy(() =>
      import("../container/PublicPage/DangNhapDangKy/DangNhap/DangNhap")
    ),
  },
  {
    //Trang Dang KY
    exact: false,
    path: "/dang-ky",
    component: lazy(() =>
      import("../container/PublicPage/DangNhapDangKy/DangKy/DangKy")
    ),
  },
  {
    // Trang Dat Ve
    exact: false,
    path: "/dat-ve/:maPhim",
    component: lazy(() => import("../container/PublicPage/DatVe")),
  },
];

//routes of Admin
const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: lazy(() => import("../container/AdminPage/Dashboard")),
  },
  {
    exact: false,
    path: "/customers",
    component: lazy(() => import("../container/AdminPage/Customers")),
  },
  {
    exact: false,
    path: "/movies",
    component: lazy(() => import("../container/AdminPage/Movies")),
  },
  {
    exact: false,
    path: "/showtime/:maPhim",
    component: lazy(() => import("../container/AdminPage/Movies/Showtime")),
  },
];

//Function for rendering routeHome
export const renderRoutesHome = () => {
  return routesHome.map((route, index) => {
    return (
      <PublicPage
        exact={route.exact}
        path={route.path}
        component={route.component}
        key={index}
      />
    );
  });
};

export const renderRoutesAdmin = () => {
  return routesAdmin.map((route, index) => {
    return (
      <AdminPage
        exact={route.exact}
        path={route.path}
        component={route.component}
        key={index}
      />
    );
  });
};
