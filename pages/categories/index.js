import Categories from "../../components/Category";
import axios from "axios";
const category = ({ banner }) => {
  return (
    <>
      <Categories banner={banner} />
    </>
  );
};
export async function getServerSideProps() {
  let res = await axios.get(`${process.env.NEXT_PUBLIC_API}`);

  return { props: { banner: res.data } };
}
export default category;
