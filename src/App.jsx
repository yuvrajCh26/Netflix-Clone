import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Header from "./component/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;