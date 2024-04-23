import Navbar from "../Navbar";
import Footer from "../Footer";
import TopNavbar from "../TopNavbar";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <TopNavbar />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default GlobalLayout; 