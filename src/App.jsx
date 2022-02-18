import { Route, Routes } from "react-router-dom";
import AdsPage from "./pages/AdsPage";
import Header from "./components/Header";
import "./styles/main.css";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<AdsPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/update" element={<UpdatePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
