import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Profile() {
  // take user from reducer
  const user = useSelector((state) => state.authReducer.user);
  const [upload, setUpload] = useState(null);
  // upload picture function
  const UploadPic = async () => {
    const data = new FormData();
    data.append("myPic", upload);
    const config = {
      headers: {
        authorized: localStorage.getItem("token"),
      },
    };
    try {
      const res = await axios.put("/api/profile/upload", data, config);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className='row py-5 px-4 userprofile'>
        <div className='col-xl-4 col-md-6 col-sm-10 mx-auto'>
          <div className='bg-white shadow rounded overflow-hidden'>
            <div className='px-4 pt-0 pb-4 profilecover'>
              <div className='media align-items-end profile-header'>
                <div className='profile mr-3'>
                  <div className='media-body mb-5 text-white'>
                    {/* User Name & LastName*/}
                    <h1 className='mt-0 mb-0' id='profilefirstname'>
                      {user && user.name}
                    </h1>
                    <h2 className='mt-0 mb-0' id='profilelastname'>
                      {user && user.lastname}
                    </h2>
                  </div>
                  {/* Profile picture */}
                  <img
                    src={
                      user && user.postTitle
                        ? `uploads/${user.postTitle}`
                        : "https://icon-library.com/images/unknown-person-icon/unknown-person-icon-4.jpg"
                    }
                    alt='Profile Picture'
                    width={130}
                    className='rounded mb-2 img-thumbnail profilepic'
                  />
                  {/* Choose a profile Picture */}
                  <label className='uploadingforProfile'>
                    {" "}
                    Choose picture
                    <input
                      type='file'
                      size='60'
                      onChange={(e) => setUpload(e.target.files[0])}
                    />
                  </label>
                  {/* OnClick upload picture */}
                  <Button
                    variant='outline-success'
                    className='uploadpicbtn'
                    onClick={UploadPic}
                  >
                    Upload
                  </Button>
                </div>
              </div>
            </div>
            <div className='bg-light p-4 d-flex justify-content-end text-center'>
              <ul className='list-inline mb-0'>
                <li className='list-inline-item'>
                  <h5 className='font-weight-bold mb-0 d-block'>
                    {/* How many photos the user has */}
                    Number of photos
                  </h5>
                  <small className='text-muted'>
                    {" "}
                    <i className='fa fa-picture-o mr-1' />
                    Photos
                  </small>
                </li>
              </ul>
            </div>
            <div className='py-4 px-4'>
              <div className='d-flex align-items-center justify-content-between mb-3'>
                {/* Show some of the user photos */}
                <h5 className='mb-0'>My photos</h5>
                <Link to='/gallery'>
                  <p className='btn btn-link text-muted'>
                    {/* Click to show user gallery */}
                    Show all
                  </p>
                </Link>
              </div>
              <div className='row'>
                <div className='col-lg-6 mb-2 pr-lg-1'>
                  <img
                    src='https://bootstrapious.com/i/snippets/sn-profile/img-3.jpg'
                    alt=''
                    className='img-fluid rounded shadow-sm'
                  />
                </div>
                <div className='col-lg-6 mb-2 pl-lg-1'>
                  <img
                    src='https://bootstrapious.com/i/snippets/sn-profile/img-4.jpg'
                    alt=''
                    className='img-fluid rounded shadow-sm'
                  />
                </div>
                <div className='col-lg-6 pr-lg-1 mb-2'>
                  <img
                    src='https://bootstrapious.com/i/snippets/sn-profile/img-5.jpg'
                    alt=''
                    className='img-fluid rounded shadow-sm'
                  />
                </div>
                <div className='col-lg-6 pl-lg-1'>
                  <img
                    src='https://bootstrapious.com/i/snippets/sn-profile/img-6.jpg'
                    alt=''
                    className='img-fluid rounded shadow-sm'
                  />
                </div>
              </div>
              <div className='py-4'>
                <h5 className='mb-3'>BIO</h5>
                <div className='p-4 bg-light rounded shadow-sm'>
                  {/* Textarea for users  */}
                  <p className='font-italic mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
