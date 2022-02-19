import { Route, Routes } from "react-router-dom";
import AdsPage from "./pages/AdsPage";
import Header from "./components/Header";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./utils/ProtectedRoute";
import "./styles/main.css";
import LoggedInRoute from "./utils/LoggedInRoute";
import Login from './pages/Login';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProtectedRoute child={<AdsPage />} />} />
          <Route
            path="/create"
            element={<ProtectedRoute child={<CreatePage />} />}
          />
          <Route
            path="/update"
            element={<ProtectedRoute child={<UpdatePage />} />}
          />
          <Route
            path="/signup"
            element={<LoggedInRoute child={<SignUp />} />}
          />
          <Route
            path="/signin"
            element={<LoggedInRoute child={<Login />} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
