import React from "react";
import "./App.css";
function Projects() {
  return (
    <div id="Projects-div-showMore">
      <div id="software-projects-showMore">
        <div id="movieRecommender-card-showMore">
          <div id="movie-card-top-showMore">
            <p
              style={{
                fontFamily: "Arial",
                fontSize: "20px",
                borderBottom: "5px solid black",
                margin: "2% 0% 0% 4%",
                width: "230px",
              }}
            >
              <strong>Movie Recommender</strong>
            </p>
          </div>

          <div id="movie-card-bottom">
            <p>
              An application for Desktop which recommends movies based on the
              genre and the year that you want.
            </p>
            <br />
            <br />

            <p>
              <strong>click to see the repository...</strong>{" "}
            </p>
          </div>
        </div>
        <div id="WPF-card">
          <div id="WPF-card-top">
            <p
              style={{
                fontFamily: "Arial",
                fontSize: "20px",
                borderBottom: "5px solid black",
                margin: "2% 0% 0% 4%",
                width: "230px",
              }}
            >
              <strong>WPF chat application</strong>
            </p>
          </div>
          <div id="WPF-card-bottom">
            <p>
              A simple chat application made with C# by using Server client
              model.
            </p>
            <br />
            <br />

            <p>
              <strong>click to see the repository...</strong>{" "}
            </p>
          </div>
        </div>
        <div id="FishGame-card">
          <div id="FishGame-card-top">
            <p
              style={{
                fontFamily: "Arial",
                fontSize: "20px",
                borderBottom: "5px solid black",
                margin: "2% 0% 0% 4%",
                width: "230px",
              }}
            >
              <strong>Fish Game</strong>
            </p>
          </div>
          <div id="FishGame-card-bottom">
            <p>
              A smiple fish game created for Android with Android Studio. this
              game works with Sensors.
            </p>
            <br />
            <br />

            <p>
              <strong>click to see the repository...</strong>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
