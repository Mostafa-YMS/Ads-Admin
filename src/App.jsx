import { useSelector } from "react-redux";
import { Ad } from "./components/Ad";
import Header from "./components/Header";
import "./styles/main.css";

function App() {
  const ads = useSelector((state) => state);

  return (
    <>
    <Header/>
    <div className="container">
      <div className="row">
        {ads.map((ad, index) => (
          <Ad ad={ad} key={index}/>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
