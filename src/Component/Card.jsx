import React from "react";

export default function Card() {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="google.com">
          <img
            className="rounded-t-lg"
            src="https://static.toiimg.com/thumb/msid-98995601,width-1070,height-580,imgsize-17666,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
            alt=""
          />
        </a>
        <div className="container border-4 border-red-700 ">
        <div className=" my-2  p-5 border-4 border-green-500 ">
          <a href="google.com">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.</p>
            <small>Aniket</small>
        </div>
          <a href="/" className="btns inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 "
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
