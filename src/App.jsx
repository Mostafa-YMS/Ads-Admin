import { Route, Routes } from "react-router-dom";
import AdsPage from "./pages/AdsPage";
import Header from "./components/Header";
import "./styles/main.css";
import CreationForm from "./components/CreationForm";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<AdsPage />} />
          <Route path="/create" element={<CreationForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
