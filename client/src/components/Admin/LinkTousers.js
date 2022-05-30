import React from "react";
import UserCard from "./UserCard";

function LinkTousers({ users }) {
  return (
    <div>
      <h2 style={{ fontFamily: "fantasy", marginTop: "5%" }}>ALL USERS</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {users.map((user) => (
          <UserCard user={user} key={user._id} />
        ))}
      </div>
    </div>
  );
}

export default LinkTousers;
