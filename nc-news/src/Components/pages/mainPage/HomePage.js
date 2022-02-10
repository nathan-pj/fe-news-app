import * as React from "react";
import GetArticles from "./GetArticles";
export default function HomePage({ sortBy, setSortBy }) {
  return (
    <>
      <GetArticles sortBy={sortBy} setSortBy={setSortBy} />
    </>
  );
}
