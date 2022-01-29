import TrangHome from "../container/PublicPage/TrangHome";
import DanhSachPhim from "../container/PublicPage/DanhSachPhim";
import PublicPage from "../container/PublicPage";
import ChiTietPhim from "../container/PublicPage/ChiTietPhim";
import DangNhap from "../container/PublicPage/DangNhapDangKy/DangNhap/DangNhap";
import DangKy from "../container/PublicPage/DangNhapDangKy/DangKy/DangKy";
import DatVe from "../container/PublicPage/DatVe";


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

//Function for rendering routeHome
export const renderRoutesHome = () => {
    return routesHome.map((route, index) => {
        return <PublicPage exact={route.exact} path={route.path} component={route.component} key={index} />
    });
}
