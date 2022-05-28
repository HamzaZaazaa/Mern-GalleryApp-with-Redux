import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminCards from "./AdminCards";
import AdminTable from "./AdminTable";
import UserCard from "./UserCard";
function Admin() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  // Get all posts
  useEffect(() => {
    axios
      .get("/api/admin/adminpost")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);
  // Get all users
  useEffect(() => {
    axios
      .get("/api/admin/allusers")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h3
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          color: "white",
          marginTop: "5%",
        }}
      >
        Welcome Administrator
      </h3>
      <AdminTable posts={posts} users={users} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {users.map((user) => (
          <UserCard user={user} key={user._id} />
        ))}
      </div>
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

export default Admin;
