import React, { Suspense } from "react";
import PostDetails from "@/app/components/PostDetails";
import Loader from "./loading";
const PostDetailsPage = async (props) => {
  const postId = props.params.postId;
  return (
    <section className="container">
      <h1>Post Details</h1>
      <Suspense fallback={<Loader />}>
        <PostDetails postId={postId} />
      </Suspense>
    </section>
  );
};

export default PostDetailsPage;
