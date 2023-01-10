import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios'
import "./news.css";

export default function NewsApi() {
  const [newsdata, setNewsData] = useState([]);

  const fetchData = () => {
    // let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=15efb47d0fb04571a7887b7d1cc1bb10'
    let url =
      "https://dailynewshunts.netlify.app/newsapi";
    fetch(url)
      .then((res) => res.json())
      .then((jsondata) => {
        console.log(jsondata);
        setNewsData(jsondata.articles);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center bg-info py-4 " id="heading_style">
          New News Headlines{" "}
        </h1>
        <h2 onClick={fetchData} className="bg-info py-2">
          Top's news Heading
        </h2>
        <div className="row">
          {newsdata.map((news, i) => (
            <div
              className="card my-2 mx-3 "
              style={{ width: "18rem" }}
              id="card_body"
              key={i}
            >
              <img src={news.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <div className="card-des">
                  <p className="card-text">{news.description}</p>
                </div>
                <Link
                  to={news.url}
                  className="btn btn-primary mt-3"
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  Go More Info..
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
