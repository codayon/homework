import "./App.css";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Journal from "./components/pages/Journal";
import Error from "./components/pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/error" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
