import React from "react";
import "./App.css";
import HideShowDiv from "./HideShowDiv";
import SkillBar from "react-skillbars";
const skills = [
  { type: "Java", level: 35 },
  { type: "Javascript", level: 55 },
  { type: "C", level: 60 },
  { type: "HTML", level: 95 },
  { type: "CSS", level: 75 },
  { type: "React", level: 45 },
  { type: "SQL", level: 65 },
  { type: "Bootstrap", level: 65 },
  { type: "Python", level: 70 },
];

const colors = {
  bar: "#66fcf1",
  title: {
    text: "#fff",
    background: "#2980b9",
  },
};
function App() {
  return (
    <div className="App">
      <div id="container" data-testid="main">
        <div id="header-side">
          <nav className="nav">
            <ul id="NavBar" data-testid="navigation">
              <li className="navBarItems">
                <a href="#mainPage" id="Portfolio">
                  Portfolio
                </a>
              </li>
              <li className="navBarItems">
                <a href="#About-me" id="biography" data-testid="biography">
                  Biography
                </a>
              </li>
              <li className="navBarItems">
                <a href="#Tech-div">Tech-Skills</a>
              </li>
              <li className="navBarItems">
                <a href="#softwareDevelopment">Projects</a>
              </li>
              <li className="navBarItems">
                <a href="#contacts-div">Contacts</a>
              </li>
            </ul>
          </nav>
          <div id="nav-logo">
            <h1>Saeid Abedi</h1>
          </div>
        </div>
        <HideShowDiv />

        <div id="mainPage">
          <div id="left-section">
            <embed src="splash.png" id="splash" />
            <p id="my-name-is">My Name is Saeid</p>

            <p id="text1">Frontend developer</p>
            <p id="text2">Barcelona,Spain</p>
            <span
              id="resume-button"
              onClick={() =>
                window.open(
                  "https://1drv.ms/b/s!AkcbS4Fwhtw2gpwCXSc-YW54k65ecw",
                  "_blank"
                )
              }
            >
              View CV...
            </span>
          </div>
          <div style={{ height: "650px", margin: "5%" }}>
            <embed src="Group 17.svg" id="mypicture-background" />
            <embed src="Saeid1.jpg" alt="a picture" id="My-Picture1" />
            <embed src="Saeid2.jpg" alt="a picture" id="My-Picture2" />
            <embed src="Saeid3.jpg" alt="a picture" id="My-Picture3" />
            <embed src="Saeid4.jpg" alt="a picture" id="My-Picture4" />
          </div>
        </div>

        <embed src="kir.svg" id="Aboutme-header" />
        <div id="About-me" data-testid="About">
          <embed src="clause1.svg" id="clause1" />

          <div id="about-text-div">
            <p className="about-text">
              <strong>Name and Surname:</strong> Saeid Abedi
            </p>
            <p className="about-text">
              <strong>Born:</strong> July 29th, 1997 in Shiraz,Iran
            </p>
            <p className="about-text">
              <strong>Place of residence:</strong> Barcelona,Spain
            </p>
            <p className="about-text">
              <strong>status:</strong> Single
            </p>
            <p className="about-text">
              <strong>Languages:</strong> Persian, English, Spanish
            </p>
          </div>
          <div id="line-for-tools">
            <div>
              <p
                style={{
                  padding: "10px",
                  fontSize: "25px",
                  color: "whitesmoke",
                }}
              >
                <strong id="prof"> Proffesionally</strong>
              </p>
            </div>
          </div>
          <div id="prof-list">
            <ul>
              <li className="prof-text">Creative</li>
              <li className="prof-text">Hard worker</li>
              <li className="prof-text">Solution-oriented </li>
              <li className="prof-text"> Accurate</li>
              <li className="prof-text">Motivated</li>
            </ul>
          </div>
          <embed src="clause2.svg" id="clause2" />
          <embed src="Group 3.svg" id="background2" />
        </div>
        {/* <h3>Technical Skills</h3> */}
        <embed src="Techskill.svg" id="techSkillHeader" />
        <embed src="mosalas1.svg" id="mosalas1" />
        <embed src="mosalas2.svg" id="mosalas2"></embed>
        <div id="Tech-div">
          <div id="tech-logos-div">
            {/* <embed src="pngegg (1).png" className="logo"></embed>
            <embed src="pngegg (2).png" className="logo"></embed>
            <embed src="pngegg (3).png" className="logo"></embed>
            <embed src="pngegg (4).png" className="logo"></embed>
            <embed src="pngegg (5).png" className="logo"></embed> */}
            <SkillBar skills={skills} colors={colors} />
          </div>
          <div id="line-for-tools" style={{ margin: "50% 0% 0% 0%" }}>
            <div>
              <p>
                <strong id="prof"> Tools</strong>
              </p>
            </div>
          </div>
          <div id="tools-skills">
            <div id="tools-text-top">
              <embed src="adobe.svg" id="tools1" />
              <embed src="Anaconda.svg" id="tools2" />
              <embed src="android.svg" id="tools3" />
            </div>
            <div id="tools-text-down">
              <embed src="scene.svg" id="tools4" />
              <embed src="github.svg" id="tools5" />
            </div>
          </div>
        </div>
        <div id="Projects-div">
          <div id="line-for-projects">
            <div>
              <p
                style={{
                  padding: "10px",
                  fontSize: "25px",
                  color: "whitesmoke",
                }}
              >
                <strong id="softwareDevelopment"> Software development</strong>
              </p>
            </div>
          </div>
          <div id="software-projects">
            <div id="movieRecommender-card">
              <div id="movie-card-top">
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "20px",
                    borderBottom: "5px solid #66fcf1",
                    margin: "2% 0% 0% 4%",
                    width: "230px",
                    color: "white",
                  }}
                >
                  <strong>Movie Recommender</strong>
                </p>
              </div>
              <div id="movie-card-bottom">
                <p>
                  An application for Desktop which recommends movies based on
                  the genre and the year that you want.
                </p>
                <br />
                <br />

                <span
                  onClick={(e) =>
                    window.open("https://github.com/saeidabedi97")
                  }
                  style={{ cursor: "pointer" }}
                >
                  <strong>click here to see the repository...</strong>{" "}
                </span>
              </div>
            </div>
            <div id="WPF-card">
              <div id="WPF-card-top">
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "20px",
                    borderBottom: "5px solid #66fcf1",
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

                <span
                  onClick={(e) =>
                    window.open("https://github.com/saeidabedi97")
                  }
                  style={{ cursor: "pointer" }}
                >
                  <strong>click here to see the repository...</strong>{" "}
                </span>
              </div>
            </div>
            <div id="FishGame-card">
              <div id="FishGame-card-top">
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "20px",
                    borderBottom: "5px solid #66fcf1",
                    margin: "2% 0% 0% 4%",
                    width: "230px",
                  }}
                >
                  <strong>Fish Game</strong>
                </p>
              </div>
              <div id="FishGame-card-bottom">
                <p>
                  A smiple fish game created for Android with Android Studio.
                  this game works with Sensors.
                </p>
                <br />
                <br />

                <span>
                  <strong>click here to see the repository...</strong>{" "}
                </span>
              </div>
            </div>
            <embed src="dots.svg" id="dots"></embed>
            <span id="showMore-button">
              <p style={{ color: "whitesmoke", width: "150px" }}>
                <strong>Show more....</strong>
              </p>
            </span>
          </div>
          <div id="line-for-projects2">
            <div>
              <p
                style={{
                  padding: "10px",
                  fontSize: "25px",
                  color: "whitesmoke",
                }}
              >
                <strong id="webDevelopment"> Web Development</strong>
              </p>
            </div>
          </div>
          <div id="web-projects">
            <div id="HarbourSpace-card">
              <div id="HarbourSpace-card-top">
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "20px",
                    borderBottom: "5px solid #66fcf1",
                    margin: "2% 0% 0% 4%",
                    width: "230px",
                  }}
                >
                  <strong>HarbourSpace SPA</strong>
                </p>
              </div>
              <div id="HarbourSpace-card-bottom">
                <p>A single page application for HarbourSpace university.</p>
                <br />
                <br />

                <span
                  onClick={(e) =>
                    window.open("https://github.com/saeidabedi97")
                  }
                  style={{ cursor: "pointer" }}
                >
                  <strong>
                    <p>click here to see the repository...</p>
                  </strong>{" "}
                </span>
              </div>
            </div>
            <div id="landPage-card">
              <div id="landPage-card-top">
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "20px",
                    borderBottom: "5px solid #66fcf1",
                    margin: "2% 0% 0% 4%",
                    width: "230px",
                  }}
                >
                  <strong>Landing page</strong>
                </p>
              </div>
              <div id="landPage-card-bottom">
                <p>
                  A single page application for an architecture company as a
                  practice.
                </p>
                <br />
                <br />

                <span
                  onClick={(e) =>
                    window.open("https://github.com/saeidabedi97")
                  }
                  style={{ cursor: "pointer" }}
                >
                  <strong>click here to see the repository...</strong>{" "}
                </span>
              </div>
            </div>
            <div id="Tribute-card">
              <div id="Tribute-card-top">
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "20px",
                    borderBottom: "5px solid #66fcf1",
                    margin: "2% 0% 0% 4%",
                    width: "230px",
                  }}
                >
                  <strong>Tribute Page</strong>
                </p>
              </div>
              <div id="Tribute-card-bottom">
                <p>
                  A single page application for biography of a famous person.
                </p>
                <br />
                <br />

                <span
                  onClick={(e) =>
                    window.open("https://github.com/saeidabedi97")
                  }
                  style={{ cursor: "pointer" }}
                >
                  <strong>click here to see the repository...</strong>{" "}
                </span>
              </div>
              <embed src="dots.svg" id="dots2"></embed>
              <span id="showMore-button2">
                <p style={{ color: "whitesmoke" }}>
                  <strong>Show more....</strong>
                </p>
              </span>
            </div>
          </div>
          <div id="line-for-projects3">
            <div>
              <p
                style={{
                  padding: "10px",
                  fontSize: "25px",
                  color: "whitesmoke",
                }}
              >
                <strong id="MLDevelopment"> Machine Learning</strong>
              </p>
            </div>
            <div id="FacialEmotion-card">
              <div id="FacialEmotion-card-top">
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "20px",
                    borderBottom: "5px solid #66fcf1",
                    margin: "2% 0% 0% 0%",
                    width: "260px",
                    padding: "6px",
                  }}
                >
                  <strong>Facial emotion detection</strong>
                </p>
              </div>
              <div id="FacialEmotion-card-bottom">
                <p>
                  An application created with Python by using Keras and
                  tensorflow libraries.This application detects 5 human facial
                  emotions.
                </p>
                <br />
                <br />

                <p>
                  <strong>click to see the repository...</strong>{" "}
                </p>
              </div>
            </div>
            <div id="FaceDetection-card">
              <div id="FaceDetection-card-top">
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "20px",
                    borderBottom: "5px solid #66fcf1",
                    margin: "2% 0% 0% 0%",
                    width: "260px",
                    padding: "6px",
                  }}
                >
                  <strong>Face detection</strong>
                </p>
              </div>
              <div id="FaceDetection-card-bottom">
                <p>
                  An application in computer vision which detects human faces.
                </p>
                <br />
                <br />

                <p style={{ margin: "5%" }}>
                  <strong>click to see the repository...</strong>{" "}
                </p>
              </div>
            </div>
            <div id="QRScanner-card">
              <div id="QRScanner-card-top">
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "20px",
                    borderBottom: "5px solid #66fcf1",
                    margin: "2% 0% 0% 0%",
                    width: "260px",
                    padding: "6px",
                  }}
                >
                  <strong>QR scanner</strong>
                </p>
              </div>
              <div id="QRScanner-card-bottom">
                <p>An application in computer vision which scans QR codes.</p>
                <br />
                <br />

                <p style={{ margin: "5%" }}>
                  <strong>click to see the repository...</strong>{" "}
                </p>
              </div>
              <embed src="dots.svg" id="dots3"></embed>
              <span id="showMore-button3">
                <p style={{ color: "whitesmoke" }}>
                  <strong>Show more....</strong>
                </p>
              </span>
            </div>
          </div>
        </div>
        <p
          style={{
            margin: "1000px 0% 0% 5%",
            width: "800px",
            height: "100px",
            fontFamily: "Arial",
            color: "#66fcf1",
            fontSize: "45px",
          }}
        >
          Need a website? Contact me...
        </p>
        <div id="contacts-div">
          <h5>Contacts</h5>
          <div id="email" className="All-contacts">
            <img src="pngegg (6).png" alt=" " className="contact-logo"></img>
            <p style={{ margin: "20%" }}>Saeidabedi51@gmail.com</p>
          </div>
          <div id="linkedin" className="All-contacts">
            <img src="pngegg (7).png" className="contact-logo" alt=""></img>
            <p style={{ margin: "20%" }}>@saeidabedi97</p>
          </div>
          <div id="instagram" className="All-contacts">
            <img src="pngegg (8).png" className="contact-logo" alt=""></img>
            <p style={{ margin: "20%" }}>@_saeid_oo</p>
          </div>
          <div id="PhoneNO" className="All-contacts">
            <img src="pngegg (9).png" className="contact-logo" alt=""></img>
            <p style={{ margin: "20%" }}>+34678104112</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
