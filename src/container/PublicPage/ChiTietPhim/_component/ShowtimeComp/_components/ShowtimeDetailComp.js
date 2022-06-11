import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";

import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

export default function ShowtimeDetailComp() {
  const showtimeData = useSelector((state) => state.lichChieuPhimReducer.data);
  const selectedDate = useSelector(
    (state) => state.lichChieuPhimReducer.selectedDate
  );
  const selectedHeThongRap = useSelector(
    (state) => state.lichChieuPhimReducer.selectedHeThongRap
  );

  const [openedItem, setOpenedItem] = useState("1");

  const renderShowtime = (maHeThong, ngayChieu) => {
    let heThongRapList;

    if (maHeThong !== "Tatca") {
      heThongRapList = showtimeData.heThongRapChieu.filter(
        (heThongRapChieu) => heThongRapChieu.maHeThongRap === maHeThong
      );
    } else {
      heThongRapList = [...showtimeData.heThongRapChieu];
    }
    let count = 0;
    return heThongRapList.map((heThongRap) => {
      return heThongRap.cumRapChieu.map((rapChieu) => {
        let cinemaIndex = ++count;
        return (
          // Render cinema container
          <AccordionItem key={cinemaIndex}>
            <AccordionHeader
              id={`${cinemaIndex}`}
              targetId={`${cinemaIndex}`}
              onClick={() => setOpenedItem(`${cinemaIndex}`)}
            >
              {/* Logo */}
              <div className="cinema-logo">
                <img src={heThongRap.logo} />
              </div>
              <div className="cinema-info">
                <span className="name">{rapChieu.tenHeThongRap}</span>
                <span className="address">{rapChieu.diaChi}</span>
              </div>

              {/* Icon */}
              {openedItem == cinemaIndex ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </AccordionHeader>
            <AccordionBody
              accordionId={`${cinemaIndex}`}
              id={`${cinemaIndex}`}
              key={cinemaIndex}
            >
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-0">
                {/* // Render showtime by each cinema */}
                {rapChieu.lichChieuPhim.map((lichChieu) => {
                  if (
                    moment(lichChieu.ngayChieuGioChieu, "YYYY-MM-DD").diff(
                      moment(ngayChieu),
                      "days"
                    ) === 0
                  ) {
                    return (
                      <div className="col" key={lichChieu.maLichChieu}>
                        <Link
                          className="time"
                          to={`/dat-ve/${lichChieu.maLichChieu}`}
                        >
                          {moment(lichChieu.ngayChieuGioChieu).format("HH:MM")}
                          <span className="end-time">
                            {" "}
                            ~{" "}
                            {moment(lichChieu.ngayChieuGioChieu)
                              .add(lichChieu.thoiLuong, "m")
                              .format("HH:MM")}
                          </span>
                        </Link>
                      </div>
                    );
                  } else {
                    return;
                  }
                })}
              </div>
            </AccordionBody>
          </AccordionItem>
        );
      });
    });
  };

  return (
    <div className="showtime-detail-container">
      <Accordion open={openedItem} toggle={function noRefCheck() {}}>
        {showtimeData &&
          selectedDate &&
          selectedHeThongRap &&
          renderShowtime(selectedHeThongRap, selectedDate)}
      </Accordion>
    </div>
  );
}
