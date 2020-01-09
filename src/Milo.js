import React, { Component } from "react";

import "./App.css";
import { useLocation } from "react-router-dom";

class Milo extends Component {
  render() {
    return (
      <div className="content-page-milo">







        <div
          style={{
            backgroundColor: "#F8F2ED",
            display: "flex",
            justifyItems: "center"
          }}
        >
            
          <div
            style={{
              width: "20%",
              display: "flex:",
              zIndex: 1
            }}
          >
            <img
              style={{
                alignItems: "center",
                margin: "30px",
                width: "60px"
              }}
              src="milo_logo.png"
            />
          </div>
          <div className="leash large-background">
          <div className="leash-part-one">
            <div className="leash-part-two"></div>
          </div>
          <div className="leash-part-three"></div>
        </div>
        </div>

        <div className="milo-header-container">
          <h1 className="milo-header-title"> Why Milo? </h1>
        </div>

        <div className="milo-body-container">
          <div className="blob"></div>
          <h1 className="milo-body-title"> Placeholder blah blah</h1>

          <p className="milo-p">
            My path to becoming a software engineer was a bit unusual. From a
            young age, I began experimenting with audio engineering. As I
            continued my education, audio synthesis and production were my
            creative outlets that helped me balance my aptitude for math,
            analytics and business with my love for creating. It was a textbook
            struggle between left-brain / right-brain. I wasn’t satisfied with
            just one side..
            <br />
            <br />
            After moving into the professional world, that balance was thrown
            off. I was left searching for that creative, yet analytical part of
            my life again. I missed waking up and counting down the minutes
            until I could get back to work. I quit my job and began coding 12+
            hours a day, and I loved every second of it. Becoming a developer
            has given me the tools to succeed not only in my professional life,
            but my personal life as well.
            <br />
            <br />
            <h3
              style={{
                fontFamily: "Milo-body",
                marginBottom: "20px",
                fontWeight: "600",
                fontSize: "22px"
              }}
            >
              My passion has become my profession, and I couldn’t be happier.
            </h3>
          </p>
        </div>

        <h1
          style={{
            fontFamily: "Milo-medium",
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "700",
            marginTop: "9px",
            paddingTop: "15px",
            marginBottom: "20px"
          }}
        >
          {" "}
          What's important
        </h1>

        <div className="milo-footer-container">
          <div style={{ display: "flex", alignItems: "center", flex: "1" }}>
            <img style={{ height: "70px", margin: "3px" }} src="eyesmilo.png" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "3px",
                height: "70px"
              }}
            >
              <p
                style={{
                  fontFamily: "Milo-body",
                  fontWeight: "700",
                  marginBottom: "1px"
                }}
              >
                {" "}
                Inclusive
              </p>

              <p style={{ fontFamily: "Milo-body" }}> Let's all get along</p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", flex: "1" }}>
            <img
              style={{ height: "70px", margin: "3px" }}
              src="miloinclusive.png"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "3px",
                height: "70px"
              }}
            >
              <p
                style={{
                  fontFamily: "Milo-body",
                  fontWeight: "700",
                  marginBottom: "1px"
                }}
              >
                {" "}
                Different
              </p>

              <p style={{ fontFamily: "Milo-body" }}> In a good way </p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", flex: "1" }}>
            <img
              style={{ height: "70px", margin: "3px", display: "flex" }}
              src="accessibility.png"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "3px",
                height: "70px"
              }}
            >
              <p
                style={{
                  fontFamily: "Milo-body",
                  fontWeight: "700",
                  marginBottom: "1px"
                }}
              >
                {" "}
                Accessibility
              </p>

              <p style={{ fontFamily: "Milo-body" }}> Made for everyone </p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", flex: "1" }}>
            <img
              style={{ height: "70px", margin: "3px" }}
              src="milo-house.png"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "3px",
                height: "70px"
              }}
            >
              <p
                style={{
                  fontFamily: "Milo-body",
                  fontWeight: "700",
                  marginBottom: "1px"
                }}
              >
                {" "}
                Learn
              </p>

              <p style={{ fontFamily: "Milo-body" }}>
                {" "}
                At work, at home, wherever
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Milo;
