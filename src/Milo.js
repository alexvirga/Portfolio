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
          <h1 className="milo-body-title"> Stack + Culture</h1>

          <p className="milo-p">
            I won't bore you with the tech/career fluff, as I'm sure you've heard enough by now. We work in the same stack. This position is a great fit for me. Instead, I'd like to use this section to talk about what I've been up to recently, and how it can contribute to Milo.
            
            <br />
            <br />
            I'm currently working on AI/ML solutions using AWS for React Native applications. On Thursday (1/9), I’ll be wrapping up a short AI/ML bootcamp hosted at Amazon. We covered a ton of use-cases for this technology, including some applications that fit perfectly into Milo's scope of services. My personal goal for the month is to extract line-items from a restaurant bill/receipt with its context intact using this technology. I am also about to release a new sound collection for my audio engineering side business. In the business world, I recently restructured my startup as a Delaware C-Corporation in preparation for future funding. For now, I am focused on a career, and intend on building this company as a side-project. Starting a company has definitely been good practice though. <b> I call it super-full-stack development. </b>
            <br />
            <br />
            Now let's talk about culture. Culture is the foundation of a company. Culture is equally as important as the product when it comes to a company's success. When asking someone what they do for work, listen closely to their response. Do they tell you about the company, or do they tell you about their position & responsibilities? As much as we hate admitting it, a lot of our self-worth comes from our job. If that person is invested in their company, they are guaranteed to talk about the company before their specific job. When asked about university, the last thing I want to do is talk about the school itself. It was a culture that excluded me. In return they lost my support, as well as the support of those who know my story. I don't want to be in that situation again. I want to hear to every voice, concern, opinion, discovery, etc..., and learn from it. I just need to find somewhere that will do the same for me.
            <br />
            <br />
              <div   style={{
            fontFamily: "Milo-medium",
            fontSize: "24px",
            fontWeight: "700",}}> That is why I'm reaching out to Milo</div>
            <br />
          
            <h3
              style={{
                fontFamily: "Milo-body",
                marginBottom: "20px",
                fontWeight: "600",
                fontSize: "22px"
              }}
            >
              
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
