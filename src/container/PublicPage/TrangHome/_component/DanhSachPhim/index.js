import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import ThePhim from "../../../components/ThePhim";
import clsx from "clsx";
import { Nav, NavItem, TabContent, TabPane } from "reactstrap";
import "./style_DanhSachPhim.scss";

export default function DanhSachPhimComp() {
  const loading = useSelector(
    (state) => state.homePhimDangChieuReducer.loading
  );
  const dataPhim = useSelector(
    (state) => state.homePhimDangChieuReducer.dataPhim
  );

  const renderDSPhimDangChieu = () => {
    return dataPhim?.content?.items?.map((phim, index) => {
      if (phim.dangChieu) return <ThePhim phim={phim} key={index} />;
    });
  };

  const renderDSPhimSapChieu = () => {
    return dataPhim?.content?.items?.map((phim, index) => {
      if (phim.sapChieu) return <ThePhim phim={phim} key={index} />;
    });
  };

  const [activeTab, setActiveTab] = useState(1);

  const handleChangeTab = (tabNumber) => {
    if (tabNumber !== activeTab) {
      setActiveTab(tabNumber);
    }
  };

  if (loading) return <Loader />;
  return (
    <section id="movieListComp" className="danh-sach-phim-wrapper">
      <div className="container-lg">
        <Nav tabs>
          <NavItem>
            <button
              className={clsx("tab", {
                active: activeTab === 1,
              })}
              onClick={() => {
                handleChangeTab(1);
              }}
            >
              Phim đang chiếu
            </button>
          </NavItem>

          <NavItem>
            <button
              className={clsx("tab", {
                active: activeTab === 2,
              })}
              onClick={() => {
                handleChangeTab(2);
              }}
            >
              Phim sắp chiếu
            </button>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId={1}>
            {/* {const classNameThePhim = "col-sm-12 col-md-6 col-lg-3";} */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 movie-card-container">
              {renderDSPhimDangChieu()}
            </div>
          </TabPane>
          <TabPane tabId={2}>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 movie-card-container">
              {renderDSPhimSapChieu()}
            </div>
          </TabPane>
        </TabContent>
      </div>
    </section>
  );
}
