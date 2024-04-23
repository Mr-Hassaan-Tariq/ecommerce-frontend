import { useState, useEffect } from "react";
import axios from "axios";
import TopTrendNav from "./subcomponents/TopTrendNav";
import { useActiveNavContext } from "../context/ActiveNavContext";
import Link from "next/link";
import { useRouter } from "next/router";

const TopTrendImg = (product, addToCartHandler) => {
  const router = useRouter();
  const [activeNav] = useActiveNavContext();
  const url = "http://localhost:8000/Trending";
  const [item, setitem] = useState([]);

  const TopTrendingData = async () => {
    const res = await axios.get(url);
    const TrendData = await res.data;
    setitem(TrendData);
  };
  useEffect(() => {
    TopTrendingData();
  }, []);

  const selectedNav = item.filter(it => {
    if (activeNav.title === "All") {
      return it.title !== activeNav.title;
    }
    return it.id === activeNav.id;
  });
  return (
    <>
      <div className="arrival-main">
        <div className="desktop-banner">
          <img src="https://d30fs77zq6vq2v.cloudfront.net/media/23012022/nRHGxY1TpR4N3uCMROy-f-8d-772264640690.png" />
        </div>
        <div className="freebies-banner">
          <img src="https://d30fs77zq6vq2v.cloudfront.net/media/22012022/aV61NvorH5RRH5QUwAZyMzeS-1540272862751.png" />
        </div>
        <div className="freebies-main">
          <div className="freebies-tab">
            <TopTrendNav />
            <div style={{ position: "relative" }}>
              <div
                infinite-scroll-distance="3"
                infinite-scroll-immediate-check="true"
                className="tabpane2">
                <div className="tabcontainer">
                  <div className="tabpane">
                    <div className="freebies-container">
                      {selectedNav &&
                        selectedNav.map((val, i) => {
                          return (
                            <>
                              <div className="freebies-card">
                                <div className="freebies-image">
                                  <Link href={`/product/${product.slug}`}>
                                    <img src={val.img} />
                                  </Link>
                                </div>
                                <h6 className="freebies-detail">{val.price}</h6>
                              </div>
                            </>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopTrendImg;
