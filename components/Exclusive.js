import Link from "next/link";
import { useOpenModalContext } from "../context/OpenModalContext";
import CarFilterModal from "./CarFilterModal";
const Exclusive = () => {
  const [openModal,{handleOpenModalChange}] = useOpenModalContext()
  return (
    <>
      <div className="categori-banner">
        <div className="head-container">
          <h6>EXCLUSIVE FOR YOU</h6>
        </div>
        <div className="destop-banner">
          <div style={{ order: "1" }}>
            <div className="cate-banner" onClick={()=>handleOpenModalChange(true)}>
              <Link href="" >
                <img src="https://d30fs77zq6vq2v.cloudfront.net/files/shares/20220905/Fresh-Designs_Desktop.jpg" />
              </Link>
            </div>
          </div>
          <div style={{ order: "2" }}>
            <div className="cate-banner">
              <Link href="/categories">
                <img src="https://d30fs77zq6vq2v.cloudfront.net/files/shares/20220905/Kids_Desktop.jpg" />
              </Link>
            </div>
          </div>
          <div className="halfBanner" style={{ order: "3" }}>
            <div className="cate-banner">
              <Link href="/catgeroies">
                <img src="https://d30fs77zq6vq2v.cloudfront.net/files/shares/20220905/Men_Desktop.jpg" />
              </Link>
            </div>
          </div>
          <div className="halfBanner" style={{ order: "4" }}>
            <div className="cate-banner">
              <Link href="/categories">
                <img src="https://d30fs77zq6vq2v.cloudfront.net/files/shares/20220905/Women_Desktop.jpg" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mobile-banner">
          <div style={{ order: "1" }}>
            <div className="cate-banner">
              <Link href="/categories">
                <img src="https://d30fs77zq6vq2v.cloudfront.net/files/shares/20220905/Fresh-Designs_Mobile.jpg" />
              </Link>
            </div>
          </div>
          <div style={{ order: "2" }}>
            <div className="cate-banner">
              <Link href="/collections">
                <img src="https://d30fs77zq6vq2v.cloudfront.net/files/shares/20220905/Kids_Mobile.jpg" />
              </Link>
            </div>
          </div>
          <div className="halfBanner" style={{ order: "3" }}>
            <div className="cate-banner">
              <Link href="/categories">
                <img src="https://d30fs77zq6vq2v.cloudfront.net/files/shares/20220905/Men_Mobile.jpg" />
              </Link>
            </div>
          </div>
          <div className="halfBanner" style={{ order: "4" }}>
            <div className="cate-banner">
              <Link href="/collections">
                <img src="https://d30fs77zq6vq2v.cloudfront.net/files/shares/20220905/Women_Mobile.jpg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exclusive;
