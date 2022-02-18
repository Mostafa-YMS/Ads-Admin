import { Ad } from "../components/Ad";
import { useSelector } from "react-redux";


const AdsPage = () => {
  const ads = useSelector((state) => state);

  return (
    <div className="row">
      {ads.map((ad, index) => (
        <Ad ad={ad} index={index} key={index} />
      ))}
    </div>
  );
};

export default AdsPage;
