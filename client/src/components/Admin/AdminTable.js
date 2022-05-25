import React from "react";
import { Table } from "react-bootstrap";
import "./AdminTable.css";
function AdminTable({ posts, users }) {
  return (
    <div className='adminTable'>
      <Table bordered>
        <thead>
          <tr>
            <th>Number of accounts</th>
            <th>Number of posts</th>
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
