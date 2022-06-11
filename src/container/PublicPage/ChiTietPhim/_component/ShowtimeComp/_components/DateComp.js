import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { dateMap } from "../../../../../../utils/dateUtils.js";
import clsx from "clsx";
import { actSelectNgayChieuPhim } from "../modules/actions";

export default function DateComp() {
  const [dateObjectArray, setStateObjectArray] = useState([]);
  const [activeDate, setActiveDate] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const objectArray = [];

    const startDate = "2019-01-01";

    const todayObject = {
      fullDate: startDate,
      date: moment(startDate).date(),
      day: dateMap[moment(startDate).day()],
    };
    objectArray.push(todayObject);
    setActiveDate(todayObject.fullDate);

    for (let day = 1; day < 7; day++) {
      let fullDate = moment(startDate).add(day, "d").format("YYYY-MM-DD");
      const dateObject = {
        fullDate: fullDate,
        date: moment(fullDate).date(),
        day: dateMap[moment(fullDate).day()],
      };
      objectArray.push(dateObject);

      setStateObjectArray(objectArray);
    }
  }, []);

  useEffect(() => {
    dispatch(actSelectNgayChieuPhim(activeDate));
  }, [activeDate]);

  const dateOnChange = (fullDate) => {
    setActiveDate(fullDate);
  };

  const renderDateBtn = () => {
    return dateObjectArray.map((dateItem, index) => {
      return (
        <div
          className={clsx("btn-date", {
            "btn-date_active": activeDate == dateItem.fullDate,
          })}
          key={dateItem.fullDate}
          onClick={() => dateOnChange(dateItem.fullDate)}
        >
          <div className="date">{dateItem.date}</div>
          <div className="day">{dateItem.day}</div>
        </div>
      );
    });
  };

  return (
    <div className="btn-list-container">
      {dateObjectArray && renderDateBtn()}
    </div>
  );
}
