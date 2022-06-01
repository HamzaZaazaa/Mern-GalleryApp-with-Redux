import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminTable from "./AdminTable";
import { Routes, Route } from "react-router-dom";
import LinkToposts from "./LinkToposts";
import LinkTousers from "./LinkTousers";
import { motion } from "framer-motion";
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
      <motion.h2
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          color: "white",
          marginTop: "5%",
        }}
      >
        Welcome Administrator
      </motion.h2>
      <AdminTable users={users} posts={posts} />
      <Routes>
        <Route path='/allusers' element={<LinkTousers users={users} />} />
        <Route path='/allposts' element={<LinkToposts posts={posts} />} />
      </Routes>
    </div>
  );
}

export default Admin;
