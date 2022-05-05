import React from "react";
import "./HomePage.css";
function HomePage() {
  return (
    <div className='backgroundcontainer'>
      <h1>JOIN US NOW </h1>
      <h2>AND SHOW THE WORLD YOUR ART</h2>
      <div className='container'>
        <div
          className='row d-flex flex-wrap align-items-center'
          data-toggle='modal'
          data-target='#lightbox'
        >
          <div className='col-12 col-md-6 col-lg-3'>
            <img
              src='https://source.unsplash.com/random/200'
              data-target='#indicators'
              data-slide-to={0}
              alt=''
            />
          </div>
          <div className='col-12 col-md-6 col-lg-3'>
            <img
              src='https://source.unsplash.com/random/201'
              data-target='#indicators'
              data-slide-to={1}
              alt=''
            />
          </div>
          <div className='col-12 col-md-6 col-lg-3'>
            <img
              src='https://source.unsplash.com/random/202'
              data-target='#indicators'
              data-slide-to={2}
              alt=''
            />
          </div>
          <div className='col-12 col-md-6 col-lg-3'>
            <img
              src='https://source.unsplash.com/random/203'
              data-target='#indicators'
              data-slide-to={3}
              alt=''
            />
          </div>
          <div className='col-12 col-md-6 col-lg-3'>
            <img
              src='https://source.unsplash.com/random/204'
              data-target='#indicators'
              data-slide-to={3}
              alt=''
            />
          </div>
          <div className='col-12 col-md-6 col-lg-3'>
            <img
              src='https://source.unsplash.com/random/205'
              data-target='#indicators'
              data-slide-to={4}
              alt=''
            />
          </div>
        </div>
        {/* Modal */}
        <div
          className='modal fade'
          id='lightbox'
          role='dialog'
          tabIndex={-1}
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <button
                type='button'
                className='close text-right p-2'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>×</span>
              </button>
              <div
                id='indicators'
                className='carousel slide'
                data-interval='false'
              >
                <ol className='carousel-indicators'>
                  <li
                    data-target='#indicators'
                    data-slide-to={0}
                    className='active'
                  />
                  <li data-target='#indicators' data-slide-to={1} />
                  <li data-target='#indicators' data-slide-to={2} />
                  <li data-target='#indicators' data-slide-to={3} />
                  <li data-target='#indicators' data-slide-to={4} />
                  <li data-target='#indicators' data-slide-to={5} />
                </ol>
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <img
                      className='d-block w-100'
                      src='https://source.unsplash.com/random/200'
                      alt='First slide'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      className='d-block w-100'
                      src='https://source.unsplash.com/random/201'
                      alt='Second slide'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      className='d-block w-100'
                      src='https://source.unsplash.com/random/202'
                      alt='Third slide'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      className='d-block w-100'
                      src='https://source.unsplash.com/random/203'
                      alt='Fourth slide'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      className='d-block w-100'
                      src='https://source.unsplash.com/random/204'
                      alt='Fifth slide'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      className='d-block w-100'
                      src='https://source.unsplash.com/random/205'
                      alt='Sixth slide'
                    />
                  </div>
                </div>
                <a
                  className='carousel-control-prev'
                  href='#indicators'
                  role='button'
                  data-slide='prev'
                >
                  <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                  />
                  <span className='sr-only'>Previous</span>
                </a>
                <a
                  className='carousel-control-next'
                  href='#indicators'
                  role='button'
                  data-slide='next'
                >
                  <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                  />
                  <span className='sr-only'>Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
