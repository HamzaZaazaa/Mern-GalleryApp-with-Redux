import React from "react";

function Profile() {
  return (
    <div>
      <div className='row py-5 px-4'>
        <div className='col-xl-4 col-md-6 col-sm-10 mx-auto'>
          {/* Profile widget */}
          <div className='bg-white shadow rounded overflow-hidden'>
            <div className='px-4 pt-0 pb-4 bg-dark'>
              <div className='media align-items-end profile-header'>
                <div className='profile mr-3'>
                  <img
                    src=''
                    alt='...'
                    width={130}
                    className='rounded mb-2 img-thumbnail'
                  />
                  <a href='#' className='btn btn-dark btn-sm btn-block'>
                    Edit profile
                  </a>
                </div>
                <div className='media-body mb-5 text-white'>
                  <h4 className='mt-0 mb-0'>USER NAME</h4>
                </div>
              </div>
            </div>
            <div className='bg-light p-4 d-flex justify-content-end text-center'>
              <ul className='list-inline mb-0'>
                <li className='list-inline-item'>
                  <h5 className='font-weight-bold mb-0 d-block'>
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
                <h5 className='mb-0'>Recent photos</h5>
                <a href='#' className='btn btn-link text-muted'>
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
