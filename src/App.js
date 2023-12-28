import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Description from "./components/Description";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:description" element={<Description />} />
    </Routes>
  );
};

export default App;
