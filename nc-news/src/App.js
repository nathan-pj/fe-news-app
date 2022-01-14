import "./App.css";
import Nav from "./Components/Nav";
import HomePage from "./Components/HomePage";
import GetSingleArticle from "./Components/GetSingleArticle";
import { GetArticles } from "./Components/GetArticles";
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
