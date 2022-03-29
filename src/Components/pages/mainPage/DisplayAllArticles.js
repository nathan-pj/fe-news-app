import * as React from "react";
import DisplayArticles from "./DisplayArticles";
export default function DisplayAllArticles({
  sortBy,
  setSortBy,
  isLoading,
  setIsLoading,
  signedIn,
}) {
  return (
    <>
      <DisplayArticles
        sortBy={sortBy}
        setSortBy={setSortBy}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        signedIn={signedIn}
      />
    </>
  );
}
