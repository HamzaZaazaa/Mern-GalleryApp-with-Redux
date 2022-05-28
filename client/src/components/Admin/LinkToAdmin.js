import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function LinkToAdmin() {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <>
      {user && user.role === 1 ? (
        <Link to='/admin'>
          <Button variant='outline-light' style={{ marginLeft: "45%" }}>
            ADMINISTARTION
          </Button>
        </Link>
      ) : null}
    </>
  );
}

export default LinkToAdmin;
