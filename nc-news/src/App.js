import "./css/App.css";
import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import NavBar from "./Components/nav/Nav";
import DisplayAllArticles from "./Components/pages/mainPage/DisplayAllArticles";
import DisplaySingleArticle from "./Components/pages/singleArticlePage/DisplaySingleArticle";
import DisplayArticles from "./Components/pages/mainPage/DisplayArticles";
import WriteArticle from "./Components/pages/writeArticlePage/WriteArticle";

import NotFound from "./Components/NotFound";
import Info from "./Components/pages/infoPage/Info";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [signedIn, setSignedIn] = useState("jessjelly");
  const [sortBy, setSortBy] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [deletedArticle, setDeletedArticle] = useState("");
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter>
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
              path={process.env.PUBLIC_URL + "/"}
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
              path={process.env.PUBLIC_URL + "/articles"}
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
              path={process.env.PUBLIC_URL + "/articles/:id"}
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
              path={process.env.PUBLIC_URL + "/articles/:topic"}
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
            <Route
              exact
              path={process.env.PUBLIC_URL + "/write-article"}
              element={<WriteArticle />}
            />
            <Route path={process.env.PUBLIC_URL + "/info"} element={<Info />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
