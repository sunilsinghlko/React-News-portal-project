import React, { useState, useEffect } from "react";
import axios from "axios";
import Newsitem from "./Newsitem";
function News(props) {
  let [item, setitem] = useState([]);
  useEffect(() => {
    let result = axios.get(
      `https://newsapi.org/v2/everything?q=${props.category}&language=hi&apiKey=87b6cb674ce54e2aa58119746c328f0d`
    );
    // console.log(result);
    result.then((res) => {
      setitem(res.data.articles);
      //console.log(res.data.articles);
    });
  }, [props.category]);
  return (
    <>
      {item ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {item.map((pro) => {
            return (
              <Newsitem
                title={pro.title}
                dec={pro.description}
                idata={pro.urlToImage}
                url={pro.url}
              />
            );
          })}
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
}

export default News;
