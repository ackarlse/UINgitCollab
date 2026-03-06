import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Character from "./components/Character";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="characters" element={<Characters />} />
      <Route path="characters/:id" element={<Character />} />
    </Routes>
  );
}

export default App;
