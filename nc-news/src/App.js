import "./css/App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./Components/nav/Nav";
import DisplayAllArticles from "./Components/pages/mainPage/DisplayAllArticles";
import DisplaySingleArticle from "./Components/pages/singleArticlePage/DisplaySingleArticle";
import DisplayArticles from "./Components/pages/mainPage/DisplayArticles";
import WriteArticle from "./Components/pages/writeArticlePage/WriteArticle";

import NotFound from "./Components/NotFound";
import Info from "./Components/pages/infoPage/Info";

function App() {
  const [signedIn, setSignedIn] = useState("jessjelly");
  const [sortBy, setSortBy] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [deletedArticle, setDeletedArticle] = useState("");
  return (
    <>
      <NavBar
        setSortBy={setSortBy}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <div className="App">
        <Routes>
          <Route
            exact
            path="https://nathan-pj.github.io/fe-news-app/#/"
            element={
              <DisplayAllArticles
                sortBy={sortBy}
                setSortBy={setSortBy}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                signedIn={signedIn}
              />
            }
          />
          <Route
            exact
            path="/articles"
            element={
              <DisplayAllArticles
                sortBy={sortBy}
                setSortBy={setSortBy}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                signedIn={signedIn}
              />
            }
          />
          <Route
            exact
            path="/articles/:id"
            element={
              <DisplaySingleArticle
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                deletedArticle={deletedArticle}
                setDeletedArticle={setDeletedArticle}
                signedIn={signedIn}
              />
            }
          />
          <Route
            exact
            path="/articles/:topic"
            element={
              <DisplayArticles
                sortBy={sortBy}
                setSortBy={setSortBy}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                deletedArticle={deletedArticle}
                setDeletedArticle={setDeletedArticle}
                signedIn={signedIn}
              />
            }
          />
          <Route exact path="/write-article" element={<WriteArticle />} />
          <Route exact path="/info" element={<Info />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
