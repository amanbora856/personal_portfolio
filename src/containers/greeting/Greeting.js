import React, { useContext } from "react";
import ReactGA from "react-ga4";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";
import landingPerson from "../../assets/lottie/landingPerson";
import Button from "../../components/button/Button";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import StyleContext from "../../contexts/StyleContext";
import { greeting, illustration } from "../../portfolio";
import "./Greeting.scss";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }

  const handleResumeDownload = () => {
    ReactGA.event({
      category: "Download Resume",
      action: "Resume Downloaded",
      label: "Resume Download"
    });
  };

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title} <span className="wave-emoji">👋</span>
              </h1>
              <div
                className={
                  isDark
                    ? "dark-mode profile-details-role"
                    : "profile-details-role"
                }
              >
                <span>
                  {" "}
                  <h1>
                    {" "}
                    <Typewriter
                      options={{
                        strings: [
                          "Backend Developer",
                          "Crypto Enthusiast ₿"
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 60
                      }}
                    />
                    {/* Please modify the above code to change the
                    role as you wish.  */}
                  </h1>
                </span>
              </div>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <a
                  className="my-resume"
                  href={greeting.resumeLink}
                  download={greeting.resumeName}
                  target="_blank"
                  onClick={handleResumeDownload}
                >
                  {greeting.resumeLink && <Button text="See my resume" />}
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
