import { useLocation } from "react-router-dom";
import outputImg from "../Images/aboutImage.png";
import styles from "./Output.module.css";
import { useState } from "react";
function Output() {
  const location = useLocation();
  const { data } = location.state || {};
  const output = JSON.parse(data);
  const [isMore, setIsMore] = useState(false);
  const Details = document.querySelector("#Details");

  // function HandleSeeMore() {
  //   Details.classList.toggle("display");
  //   setIsMore(!isMore);
  // }

  const [isTextVisible, setIsTextVisible] = useState(false);

  console.log(isTextVisible)
  // Function to toggle visibility
  const toggleText = () => {
    setIsTextVisible(!isTextVisible);
    
  };

  return (
    <div className={styles.Output}>
      <div className={styles.OutputImage}>
        <img src={outputImg} className="image" />
      </div>
      <div className={styles.OutputText}>

        {data ? (
          <p className={styles.verdict}>{output.verdict}</p>
        ) : (
          <p className={styles.verdict}>No data available</p>
        )}


        {data ? (
          <p className={styles.reason}>{output.why}</p>
        ) : (
          <p className={styles.reason}>No data available</p>
        )}
        {data ? (
          <p className={`${styles.reason} display`} id="Details">
            {output.detailed_analysis}{" "}
          </p>
        ) : (
          <p className={styles.reason}></p>
        )}

        <button
          className="btn btn-success seeMore"
          id="SeeMoreBtn"
          onClick={toggleText}
        >
          {isTextVisible ? "See Less..." : "See More..."}
        </button>
      </div>
    </div>
  );
}
export default Output;
// {output.detailed_analysis}
