import React from "react";
import { Button } from "react-bootstrap";
import "./Notfound.css";
import { AiOutlineRollback } from "react-icons/ai";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <figure>
      <div className='sad-mac' />
      <figcaption>
        <span className='sr-text'>Error 404: Not Found</span>
        <span className='e' />
        <span className='r' />
        <span className='r' />
        <span className='o' />
        <span className='r' />
        <span className='_4' />
        <span className='_0' />
        <span className='_4' />
      </figcaption>
      <Link to='/gallery'>
        <Button variant='outline-light' className='gobackbtn'>
          GO BA
          <AiOutlineRollback style={{ marginBottom: "2%" }} />K
        </Button>
      </Link>
    </figure>
  );
}

export default NotFound;
