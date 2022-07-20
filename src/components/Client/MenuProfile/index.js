import { useEffect, useMemo, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { Form } from "react-bootstrap";
import { useUser } from "../../../hooks/useUser";
import { Text } from "@chakra-ui/react";
import { authentication } from "../../../Firebase/config";
import usersSlice from "../Login/usersSlice";
import { getUser } from "../../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import SliderRank from "../Slider/index";
import { signOut } from "firebase/auth";
import cartSlice from "../Cart/cartSlice";
import { useNavigate } from "react-router-dom";

import { FaEgg } from "react-icons/fa";
export default function MenuProfile({ selected, setSelected }) {
  const tilt = useRef(null);
  const checkUser = authentication.currentUser;
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  console.log(checkUser);
  useEffect(() => {
    VanillaTilt.init(tilt.current);
  }, []);
  const handleLogout = () => {
    signOut(authentication)
      .then(() => {
        alert("log out success");
        dispatch(cartSlice.actions.setPhone(""));
        dispatch(cartSlice.actions.setEmail(""));
        dispatch(cartSlice.actions.setNameCustomer(""));
        dispatch(cartSlice.actions.setAddress(""));
        dispatch(usersSlice.actions.setUser({}));
        navigate("../");
        dispatch(cartSlice.actions.setPhone(""));
        dispatch(cartSlice.actions.setEmail(""));
        dispatch(cartSlice.actions.setNameCustomer(""));
        dispatch(cartSlice.actions.setAddress(""));
        dispatch(usersSlice.actions.setUser({}));
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return checkUser ? (
    <div className="col-lg-4 col-md-12 border-info-left">
      <div className="member-card">
        <div ref={tilt} className={user.score<100 ? "rad-12 member-card-standard": user.score>300 ? "rad-12 member-card-diamond" :"rad-12 member-card-gold"} >
          <div className="d-flex flex-row-reverse img-background-card">
            <img
              style={{ width: "160px" }}
              src="https://order.thecoffeehouse.com/_nuxt/img/Leaves.5c9ad83.svg"
              alt=""
            />
          </div>
          <div className={user.score<100 ? "card-info-bean text-metal-dark fw-bold fs-6": user.score>100 ? "card-info-bean text-metal-silver fw-bold fs-6" :"card-info-bean text-metal-dark fw-bold fs-6"}>
            <div className="d-flex align-items-center">{user.score}<FaEgg className=""/></div>
            </div>
          <div className={user.score<100 ? "card-info-name text-metal-dark fw-bold fs-6": user.score>100 ? "card-info-name text-metal-silver fw-bold fs-6" :"card-info-name text-metal-dark fw-bold fs-6"}>
            {`${user.lastName} ${user.name}`}
          </div>
          <div className="card-info-rank text-metal-gold fs-6">{user.score<100 ? "STANDARD" : user.score>100 ?"DIAMOND":"GOLD"}</div>
          <div className={user.score<100 ? "card-info-idUser text-metal-dark fw-bold fs-6": user.score>100 ? "card-info-idUser text-metal-silver fw-bold fs-6" :"card-info-idUser text-metal-dark fw-bold fs-6"}>
            {user.phone}
          </div>
        </div>
        <div className="note-member-card half-down-border-product half-down-rad-12">
          <div className="d-flex align-items-center justify-content-between">
            <span className="text-secondary fw-bold">
              {user.score > 300
                ? "Kim cương"
                : user.score > 100
                ? "Vàng"
                : "Tiêu chuẩn"}
            </span>
            <span className="text-secondary fw-bold">
              {" "}
              {user.score > 300 ? "" : user.score > 100 ? "Kim cương" : "Vàng"}
            </span>
          </div>
          {/* <SliderRank myScore={user.score} /> */}
          <Form.Range className="py-2" min="1" max="100" value={user.score}/>
          {user.score<=300 &&
          <span className="fs-min-plus">
            Còn {user.score > 100 ? 300 - user.score : 100 - user.score} BEAN
            nữa bạn sẽ thăng hạng. Đổi quà không ảnh hưởng tới việc thăng hạng
            của bạn Chưa tích điểm
          </span>
          }
        </div>
      </div>
      <div className="pd-12">
        <div
          className={selected ==="profile"?"options-user options-active pe-cursor":"options-user pe-cursor"}
          onClick={() => setSelected("profile")}
        >
          <i className={selected ==="profile"? "fa-regular fa-user mx-4 options-active":"fa-regular fa-user mx-4"}></i>
          <span>Thông tin tài khoản</span>
        </div>
        <div
          className={selected ==="promotion"?"options-user user-active  options-active pe-cursor":"options-user user-active pe-cursor"}
          onClick={() => setSelected("promotion")}
        >
          <i className={selected ==="promotion"?"fa-solid fa-shield-heart mx-4 options-active":"fa-solid fa-shield-heart mx-4 text-secondary"}></i>
          <span className="">Quyền lợi thành viên</span>
        </div>
        <div
          className={selected ==="history"?"options-user user-active options-active  pe-cursor":"options-user user-active pe-cursor"}
          onClick={() => setSelected("history")}
        >
          <i className={selected ==="history"?"fa-solid fa-clock-rotate-left mx-4 options-active":"fa-solid fa-clock-rotate-left mx-4 text-secondary"}></i>{" "}
          Lịch sử mua hàng
        </div>
        <div
          className="options-user user-active pe-cursor"
          onClick={() => handleLogout()}
        >
          <i className="fa-solid fa-right-from-bracket mx-4 text-secondary"></i>{" "}
          Đăng xuất
        </div>
      </div>
    </div>
  ) : null;
}
