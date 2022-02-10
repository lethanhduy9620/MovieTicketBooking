import PublicPage from "../container/PublicPage";
import TrangHome from "../container/PublicPage/TrangHome";
import DanhSachPhim from "../container/PublicPage/DanhSachPhim";
import ChiTietPhim from "../container/PublicPage/ChiTietPhim";
import DangNhap from "../container/PublicPage/DangNhapDangKy/DangNhap/DangNhap";
import DangKy from "../container/PublicPage/DangNhapDangKy/DangKy/DangKy";
import DatVe from "../container/PublicPage/DatVe";
import AdminPage from "../container/AdminPage";
import Dashboard from "../container/AdminPage/Dashboard";
import Customers from "../container/AdminPage/Customers";
import Movies from "../container/AdminPage/Movies";
import MovieShowtime from "../container/AdminPage/Movies/Showtime";


//routes of Public pages for Users
const routesHome = [
    {
        //Trang Home
        exact: true,
        path: "/",
        component: TrangHome
    },
    {
        //Trang Phim Dang Chieu
        exact: false,
        path: "/phim-dang-chieu",
        component: DanhSachPhim,
    },
    {
        //Trang Phim Sap Chieu
        exact: false,
        path: "/phim-sap-chieu",
        component: DanhSachPhim,
    },
    {
        //Trang Chi Tiet Phim
        exact: false,
        path: "/chi-tiet-phim/:id",
        component: ChiTietPhim,
    },
    {
        //Trang Dang Nhap
        exact: false,
        path: "/dang-nhap",
        component: DangNhap,
    },
    {
        //Trang Dang KY
        exact: false,
        path: "/dang-ky",
        component: DangKy,
    },
    {
        // Trang Dat Ve
        exact: false,
        path: "/dat-ve/:maPhim",
        component: DatVe,
    },
];

//routes of Admin
const routesAdmin = [
    {
        exact: false,
        path: '/dashboard',
        component: Dashboard
    },
    {
        exact: false,
        path: '/customers',
        component: Customers
    },
    {
        exact: false,
        path: '/movies',
        component: Movies
    },
    {
        exact: false,
        path: '/showtime/:maPhim',
        component: MovieShowtime
    }
]

//Function for rendering routeHome
export const renderRoutesHome = () => {
    return routesHome.map((route, index) => {
        return <PublicPage exact={route.exact} path={route.path} component={route.component} key={index} />
    });
}

export const renderRoutesAdmin = () => {
    return routesAdmin.map((route, index) => {
        return <AdminPage exact={route.exact} path={route.path} component={route.component} key={index} />
    })
}