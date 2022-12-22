import React, { useState } from "react";

function Shows(props) {
  const { eachShow, search } = props;

  const [showSummary, setShowSummary] = useState(false);
  let img, name, language, rating, summary;
  if (search === "people") {
    img = eachShow?._embedded?.show?.image;
    name = eachShow?._embedded?.show?.name?.slice(0, 20);
    summary = eachShow?._embedded?.show?.summary;
    rating = eachShow?._embedded?.show?.rating?.average;
    language = eachShow?._embedded?.show?.language;
    if (!rating) rating = 0;
  } else {
    img = eachShow?.show?.image;
    name = eachShow?.show?.name?.slice(0, 20);
    language = eachShow?.show?.language;
    summary = eachShow?.show?.summary;
    rating = eachShow?.show?.rating?.average;
    if (!rating) rating = 0;
  }

  if (summary) {
    summary = summary.replaceAll("<p>", "");
    summary = summary.replaceAll("</p>", "");
    summary = summary.replaceAll("<b>", "");
    summary = summary.replaceAll("</b>", "");
    summary = summary.slice(0, 200);
  }

  if (!img) {
    img =
      "https://t4.ftcdn.net/jpg/02/51/95/53/240_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg";
  } else {
    img = img.medium;
  }

  const container1 = {
    background: `url(${img})`,
    height: "295px",
    width: "210px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="show">
      {!showSummary ? (
        <>
          <div style={container1}></div>
          <div style={{ padding: "5px" }}>
            <span className="name">{name}</span>
            <br></br>
            <small className="language">Language: {language}</small>
            <br></br>
            <small className="language">IMDB Rating: {rating}</small>
            <span>&#11088;</span>
            <button className="summary" onClick={() => setShowSummary(true)}>
              Read More
            </button>
          </div>
        </>
      ) : (
        <div className="showsummary">
          <div className="summary1">
            <h3>{name}</h3>
            {summary}
          </div>
          <div className="summary2">
            <button onClick={() => setShowSummary(false)}>Read Less</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shows;
