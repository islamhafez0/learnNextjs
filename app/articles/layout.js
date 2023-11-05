import React from "react";

console.log(metadata);

const MainArticleComponent = ({ children }) => {
  return (
    <>
      <section>
        <h2>MainArticleComponent</h2>
        <div className="articles-container">{children}</div>
      </section>
    </>
  );
};

export default MainArticleComponent;
