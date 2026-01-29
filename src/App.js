import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import PostDetails from "./page/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
