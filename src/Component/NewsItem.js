import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, Link, author, publishedAt, source } =
      this.props;
    let date = new Date(publishedAt);
    let hour = date.getHours();
    let min = date.getMinutes();
    return (
      <> <span className="bg-yellow-300 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">{source}</span>
        <div className=" border-2 border-gray-200 max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-7">
        <a href="google.com">
          <img
            className="rounded-t-lg"
            src={!imgUrl
                  ? "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
                  : imgUrl}
            alt=""
          />
        </a>
        <div className="container border-4">
        <div className=" my-2  p-5">
          <a href="google.com">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}...
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}.....</p>
            <small>
             By {author ? author : "Unknown"} at {date.getDate()}/
                  {date.getMonth()}/{date.getFullYear()} on {hour}:{min}{" "}
                  {hour > 12 ? "pm" : "am"}
            </small>
        </div>
          <a href={Link}
                rel="noreferrer"
                target="_blank" className="btns inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 "
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
}

export default NewsItem;
