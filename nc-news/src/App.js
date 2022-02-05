import "./css/App.css";
import Nav from "./Components/nav/Nav";
import HomePage from "./Components/pages/mainPage/HomePage";
import GetSingleArticle from "./Components/pages/articlePage/GetSingleArticle";
import { GetArticles } from "./Components/pages/mainPage/GetArticles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<HomePage />} />
          <Route path="/articles/:id" element={<GetSingleArticle />} />
          <Route path="/articles/:topic" element={<GetArticles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
