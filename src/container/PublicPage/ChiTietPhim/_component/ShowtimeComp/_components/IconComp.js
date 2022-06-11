import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { actSelectHeThongRap } from "../modules/actions";

export default function IconComp() {
  const showtimeData = useSelector((state) => state.lichChieuPhimReducer.data);
  const dispatch = useDispatch();

  const [activeIconBtn, setActiveIconBtn] = useState("Tatca");

  useEffect(() => {
    dispatch(actSelectHeThongRap(activeIconBtn));
  }, [activeIconBtn]);

  const iconBtnOnChange = (heThongRap) => {
    setActiveIconBtn(heThongRap);
  };

  const renderIconBtn = () => {
    return showtimeData.heThongRapChieu.map((heThongRap) => {
      return (
        <div
          className={clsx("icon-btn", {
            "icon-btn_active": activeIconBtn === heThongRap.maHeThongRap,
          })}
          key={heThongRap.maHeThongRap}
          onClick={() => {
            iconBtnOnChange(heThongRap.maHeThongRap);
          }}
        >
          <div className="icon-container">
            <img src={heThongRap.logo} alt={heThongRap.maHeThongRap} />
          </div>
          <div className="icon-name">{heThongRap.maHeThongRap}</div>
        </div>
      );
    });
  };

  return (
    <div className="icon-list-container">
      <div
        className={clsx("icon-btn", {
          "icon-btn_active": activeIconBtn === "Tatca",
        })}
        onClick={() => {
          iconBtnOnChange("Tatca");
        }}
      >
        <div className="icon-container">
          <img src="/images/tatca-icon.svg" alt="tat-ca-icon" />
        </div>
        <div className="icon-name">Tất cả</div>
      </div>
      {showtimeData && renderIconBtn()}
    </div>
  );
}
