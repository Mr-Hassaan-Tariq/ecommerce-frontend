import Banner from "./Banner";
import SubBanner from "./subcomponents/SubBanner";
import TopTrendNav from "./subcomponents/TopTrendNav";
import TopTrendImg from "./TopTrend";

const Category = ({ banner }) => {
  return (
    <>
      <SubBanner banner={banner} />
      <TopTrendImg />
    </>
  );
};
export default Category;
