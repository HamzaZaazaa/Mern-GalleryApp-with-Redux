import React from "react";
import AdminCards from "./AdminCards";

function LinkToposts({ posts }) {
  return (
    <div>
      <h2 style={{ fontFamily: "fantasy", marginTop: "5%" }}>ALL POSTS</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10%",
        }}
      >
        {posts.map((post) => (
          <AdminCards post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

export default LinkToposts;
