import React from "react";
import { Table } from "react-bootstrap";
import "./AdminTable.css";
function AdminTable({ posts, users }) {
  return (
    <div className='adminTable'>
      <Table bordered>
        <thead>
          <tr>
            <th>Accounts Number</th>
            <th>Posts Number</th>
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
