import React from "react";
import "./footer.css";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
function Footer() {
  return (
    <div className='footercontainer'>
      <h5>&copy; Alza Studio</h5>
      <a
        href='https://www.facebook.com/Alzastudio1'
        className='facebookicon'
        target='blank'
      >
        {" "}
        <BsFacebook size={30} />
      </a>
      <a
        href='https://www.instagram.com/alzavision/'
        className='instagramicon'
        target='blank'
      >
        <BsInstagram size={30} />
      </a>
      <a
        href='https://www.youtube.com/channel/UCu-apL6otlor_GyaQ14i4GA'
        className='youtubeicon'
        target='blank'
      >
        {" "}
        <BsYoutube size={30} />{" "}
      </a>
    </div>
  );
}

export default Footer;
