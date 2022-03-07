import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Rock+Salt"
        />
      </head>
      <div id="container">
        <div id="header-side">
          <nav className="nav">
            <ul id="NavBar">
              <li>
                <a href="#mainPage">Portfolio</a>
              </li>
              <li>
                <a href="#About-me">biography</a>
              </li>
              <li>
                <a href="#Tech-div">Tech-Skills</a>
              </li>
              <li>
                <a href="#softwareDevelopment">Projects</a>
              </li>
              <li>
                <a href="#contacts-div">Contacts</a>
              </li>
            </ul>
          </nav>
          <div id="nav-logo">
            <h1>Saeid Abedi</h1>
          </div>
        </div>
        <div id="mainPage">
          <div id="left-section">
            <embed src="splash.png" id="splash" />
            <p id="my-name-is">My Name is Saeid</p>
            <button
              id="resume-button"
              onClick={() =>
                window.open("https://mail.google.com/mail/u/0/#inbox", "_blank")
              }
            >
              View Resume...
            </button>
            <p id="text1">Frontend developer, UI/UX designer</p>
            <p id="text2">Barcelona,spain</p>
          </div>
          <div style={{ height: "650px" }}>
            <embed src="Group 17.svg" id="mypicture-background" />

            <embed src="me.jpg" alt="a picture" id="My-Picture" />
          </div>
          <embed src="splash2.svg" id="splash2" />
        </div>

        <div id="About-me">
          <h2>About me</h2>
          <div id="about-text-div">
            <p className="about-text">
              <strong>Name and Surname:</strong>Saeid Abedi
            </p>
            <p className="about-text">
              <strong>Born:</strong>July 29th, 1997 in Shiraz,Iran
            </p>
            <p className="about-text">
              <strong>Place of residence:</strong>Barcelona,Spain
            </p>
            <p className="about-text">
              <strong>status:</strong>Single
            </p>
            <p className="about-text">
              <strong>Languages:</strong>Persian, English, Spanish
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
        </div>
        <div id="Tech-div">
          <h3>Technical Skills</h3>
          <div id="tech-logos-div">
            <embed src="pngegg (1).png" className="logo"></embed>
            <embed src="pngegg (2).png" className="logo"></embed>
            <embed src="pngegg (3).png" className="logo"></embed>
            <embed src="pngegg (4).png" className="logo"></embed>
            <embed src="pngegg (5).png" className="logo"></embed>
          </div>
          <div id="line-for-tools" style={{ margin: "40% 0% 0% 0%" }}>
            <div>
              <p>
                <strong id="prof"> Tools</strong>
              </p>
            </div>
          </div>
          <div id="tools-skills">
            <div id="tools-text-top">
              <embed src="tools.svg" id="tools1" />
              <embed src="tools2.svg" id="tools2" />
              <embed src="tools3.svg" id="tools3" />
            </div>
            <div id="tools-text-down">
              <embed src="tools4.svg" id="tools4" />
              <embed src="tools5.svg" id="tools5" />
            </div>
          </div>
        </div>
        <div id="Projects-div">
          <h4>Projects</h4>
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
                  An application for Desktop which recommends movies based on
                  the genre and the year that you want.
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
                  A smiple fish game created for Android with Android Studio.
                  this game works with Sensors.
                </p>
                <br />
                <br />

                <p>
                  <strong>click to see the repository...</strong>{" "}
                </p>
              </div>
            </div>
            <embed src="dots.svg" id="dots"></embed>
            <button id="showMore-button">
              <strong>Show more....</strong>
            </button>
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
                    borderBottom: "5px solid black",
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

                <p>
                  <strong>click to see the repository...</strong>{" "}
                </p>
              </div>
            </div>
            <div id="landPage-card">
              <div id="landPage-card-top">
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "20px",
                    borderBottom: "5px solid black",
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

                <p>
                  <strong>click to see the repository...</strong>{" "}
                </p>
              </div>
            </div>
            <div id="Tribute-card">
              <div id="Tribute-card-top">
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: "20px",
                    borderBottom: "5px solid black",
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

                <p>
                  <strong>click to see the repository...</strong>{" "}
                </p>
              </div>
              <embed src="dots.svg" id="dots2"></embed>
              <button id="showMore-button2">
                <strong>Show more....</strong>
              </button>
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
                    borderBottom: "5px solid black",
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
                    borderBottom: "5px solid black",
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
                    borderBottom: "5px solid black",
                    margin: "2% 0% 0% 0%",
                    width: "260px",
                    padding: "6px",
                  }}
                >
                  <strong>Face detection</strong>
                </p>
              </div>
              <div id="QRScanner-card-bottom">
                <p>
                  An application in computer vision which detects human faces.
                </p>
                <br />
                <br />

                <p style={{ margin: "5%" }}>
                  <strong>click to see the repository...</strong>{" "}
                </p>
              </div>
              <embed src="dots.svg" id="dots3"></embed>
              <button id="showMore-button3">
                <strong>Show more....</strong>
              </button>
            </div>
          </div>
        </div>
        <p
          style={{
            margin: "1000px 0% 0% 5%",
            width: "800px",
            height: "100px",
            fontFamily: "Arial",
            color: "#c4c4c4",
            fontSize: "45px",
          }}
        >
          Need a website? Contact me...
        </p>
        <div id="contacts-div">
          <h5>Contacts</h5>
          <div id="email" className="All-contacts">
            <img src="pngegg (6).png" alt=" " className="contact-logo"></img>
            <p style={{ margin: "20%", color: "black" }}>
              Saeidabedi51@gmail.com
            </p>
          </div>
          <div id="linkedin" className="All-contacts">
            <img src="pngegg (7).png" className="contact-logo" alt=""></img>
            <p>@saeidabedi97</p>
          </div>
          <div id="instagram" className="All-contacts">
            <img src="pngegg (8).png" className="contact-logo" alt=""></img>
            <p>@_saeid_oo</p>
          </div>
          <div id="PhoneNO" className="All-contacts">
            <img src="pngegg (9).png" className="contact-logo" alt=""></img>
            <p>+34678104112</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
