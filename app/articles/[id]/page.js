import React from "react";
export const metadata = {
  title: "single article",
};
const SinglePageId = (props) => {
  console.log(props);
  return (
    <section>
      <h1>{props.params.id}</h1>
    </section>
  );
};

export default SinglePageId;
