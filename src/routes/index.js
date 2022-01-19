// import { Route } from "react-router-dom";
// import { Fragment } from "react";
import TrangHome from "../container/PublicPage/TrangHome";
import PhimDangChieu from "../container/PublicPage/PhimDangChieu";
import PublicPage from "../container/PublicPage";
import ChiTietPhim from "../container/PublicPage/ChiTietPhim";


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
        component: PhimDangChieu,
    },
    {
        //Trang Chi Tiet Phim
        exact: false,
        path: "/chi-tiet-phim",
        component: ChiTietPhim,
    }
];

//routes of Admin

//Function for rendering routeHome
export const renderRoutesHome = () => {
    return routesHome.map((route, index) => {
        return <PublicPage exact={route.exact} path={route.path} component={route.component} key={index} />
    });
}
