import "./css/App.css";
import Nav from "./Components/nav/Nav";
import HomePage from "./Components/pages/mainPage/HomePage";
import GetSingleArticle from "./Components/pages/articlePage/GetSingleArticle";
import GetArticles from "./Components/pages/mainPage/GetArticles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import { useState } from "react";

function App() {
  const [sortBy, setSortBy] = useState("");

  return (
    <BrowserRouter>
      <Nav setSortBy={setSortBy} />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<HomePage sortBy={sortBy} setSortBy={setSortBy} />}
          />
          <Route
            path="/articles"
            element={<HomePage sortBy={sortBy} setSortBy={setSortBy} />}
          />
          <Route path="/articles/:id" element={<GetSingleArticle />} />
          <Route
            path="/articles/:topic"
            element={<GetArticles sortBy={sortBy} setSortBy={setSortBy} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
