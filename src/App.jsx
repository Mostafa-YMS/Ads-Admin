import { useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state);
  console.log(data);

  return <h1>Ads Manager</h1>;
}

export default App;
