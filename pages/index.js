import Banner from "../components/Banner";
import TopCategories from "../components/TopCategories";
import Exclusive from "../components/Exclusive";
import BestSeller from "../components/BestSeller";
import BestInBeauty from "../components/BestInBeauty";
import DealZone from "../components/DealZone";
import TopBrands from "../components/TopBrands";
import TopTrend from "../components/TopTrend";
import CarFilterModal from "../components/CarFilterModal";
import NewProducts from '../components/NewProducts'
const axios = require("axios").default;

const Home = ({ banner ,getMakers,bestSeller}) => {
  return (
    <>
      <div id="__nuxt">
        <div id="__layout">
          <div>
            <Banner banner={banner} />
            <NewProducts bestSeller={bestSeller}/>
            <TopCategories />
            <DealZone />
            <Exclusive />
            <BestSeller bestSeller={bestSeller}/>
            <BestInBeauty />
            <TopBrands />
            {/* <TopTrend /> */}
            <CarFilterModal getMakers={getMakers}/>
          </div>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  let res = await axios.get(`${process.env.NEXT_PUBLIC_API}`);
  let res1 = await axios.get(`${process.env.NEXT_PUBLIC_API}`)
  const bestSeller = await axios.get('https://fakestoreapi.com/products')
 
 

  return { props: { banner: res.data,getMakers :res1.data ,bestSeller :bestSeller.data} };
}
export default Home;
