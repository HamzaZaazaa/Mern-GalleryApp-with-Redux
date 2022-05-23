import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loader.css";
function Loader() {
  return (
    <Spinner animation='border' variant='light' className='loader' size='lg' />
  );
}

export default Loader;
