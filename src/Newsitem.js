import React from "react";
import { Link } from "react-router-dom";
function Newsitem(props) {
  let h = {
    height: "550px",
  };
  return (
    <>
      <br />
      <div className="card border border-success bg-dark text-white" style={h}>
        <img src={props.idata} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.dec}</p>
          <Link to={props.url} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}

export default Newsitem;
