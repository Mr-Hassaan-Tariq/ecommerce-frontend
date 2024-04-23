import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import axios from "axios";
import { useActiveNavContext } from "../../context/ActiveNavContext";
const TopTrendNav = () => {
  const [data, setData] = React.useState([]);
  const [active, setActive] = React.useState(0);
  const [activeNav, { handleActiveNavChange }] = useActiveNavContext();
  const handleSelectNavChange = val => {
    handleActiveNavChange({
      id: val.id,
      title: val.title,
    });
  };

  const getNavApi = async () => {
    const url = "http://localhost:8000/topTrendNav";
    const res = await axios.get(url);
    const navBarData = res.data;
    setData(navBarData);
  };
  const handleClick = id => {
    setActive(id);
    console.log(id);
  };
  // console.log(data);
  useEffect(() => {
    getNavApi();
  }, []);
  return (
    <div className="tabs" style={{ position: "sticky" }}>
      <Swiper
        loop={false}
        autoplay={false}
        slidesPerView={7}
        style={{ height: "70px" }}>
        {data &&
          data.map(val => {
            return (
              <SwiperSlide style={{ width: "170px", padding: "0px 10px" }}>
                <>
                  <button
                    style={{ height: "40px" }}
                    id={val.id}
                    className={`tabitem ${active === val.id && "active"}`}
                    onClick={() => {
                      handleSelectNavChange(val), handleClick(val.id);
                    }}>
                    <p style={{ marginTop: "1rem" }}>{val.title}</p>
                  </button>
                </>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default TopTrendNav;
