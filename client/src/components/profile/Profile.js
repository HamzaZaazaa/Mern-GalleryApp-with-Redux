import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
function Profile() {
  // take user from reducer
  const user = useSelector((state) => state.authReducer.user);
  return (
    <div>
      <div className='row py-5 px-4'>
        <div className='col-xl-4 col-md-6 col-sm-10 mx-auto'>
          <div className='bg-white shadow rounded overflow-hidden'>
            <div className='px-4 pt-0 pb-4 bg-dark'>
              <div className='media align-items-end profile-header'>
                <div className='profile mr-3'>
                  <img
                    src='https://icon-library.com/images/unknown-person-icon/unknown-person-icon-4.jpg'
                    alt='...'
                    width={130}
                    className='rounded mb-2 img-thumbnail'
                  />
                  <a href='#' className='btn btn-light btn-sm btn-block'>
                    {/* Click to change or add name, lastname, email, profile photo, password */}
                    Edit Profile
                  </a>
                </div>
                <div className='media-body mb-5 text-white'>
                  {/* User Name & LastName*/}
                  <h4 className='mt-0 mb-0'>{user && user.name}</h4>
                  <h4 className='mt-0 mb-0'>{user && user.lastname}</h4>
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
                <h5 className='mb-0'>Recent photos</h5>
                <a href='#' className='btn btn-link text-muted'>
                  {/* Click to show user gallery */}
                  Show all
                </a>
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
