import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AdminTable.css";
function AdminTable({ posts, users }) {
  return (
    <div className='adminTable'>
      <Table bordered>
        <thead>
          <tr>
            <th><Link to="/admin/allusers"><Button variant="outline-light" className="postsbtn">Number of accounts</Button></Link></th>
            <th><Link to="/admin/allposts"><Button variant="outline-light" className="postsbtn">Number of posts</Button></Link></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{users.length}</td>
            <td>{posts.length}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AdminTable;
