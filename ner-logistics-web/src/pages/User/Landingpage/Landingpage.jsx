import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";



/* =========================================================
   ICON COMPONENTS
   No external icon library required.
========================================================= */

function RouteIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="feature-svg"
      aria-hidden="true"
    >
      <path
        d="M13 13h5c7 0 12 5 12 12v4c0 3 2 6 6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle
        cx="11"
        cy="13"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <circle
        cx="37"
        cy="35"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M26 21l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function TrackingIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="feature-svg"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="24"
        r="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <circle
        cx="24"
        cy="24"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M24 9V5M24 43v-4M9 24H5M43 24h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}


function RiskIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="feature-svg"
      aria-hidden="true"
    >
      <path
        d="M24 6L43 40H5L24 6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      <path
        d="M24 17v11"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle
        cx="24"
        cy="34"
        r="1.8"
        fill="currentColor"
      />
    </svg>
  );
}


function AccessibilityIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="feature-svg"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="8"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M10 17h28"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M24 17v12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M24 29l-8 13M24 29l8 13"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M17 23l-7 10M31 23l7 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* =========================================================
   ARROW ICON
========================================================= */

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="arrow-icon"
      aria-hidden="true"
    >
      <path
        d="M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* =========================================================
   FEATURE DATA
========================================================= */

const features = [
  {
    title: "AI Route Planning",
    icon: RouteIcon,
  },
  {
    title: "Real-time Tracking",
    icon: TrackingIcon,
  },
  {
    title: "Risk Monitoring",
    icon: RiskIcon,
  },
  {
    title: "Accessibility Check",
    icon: AccessibilityIcon,
  },
];


/* =========================================================
   LANDING PAGE
========================================================= */

function LandingPage() {

  const navigate = useNavigate();


  /* -------------------------------------------------------
     Navigation handlers
  ------------------------------------------------------- */

  const handleLogin = () => {
    navigate("/login");
  };


  const handleGetStarted = () => {
    navigate("/login");
  };


  const handleLearnMore = () => {
    document
      .getElementById("features")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };


  const handleNavigation = (section) => {

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <div className="landing-page">

      {/* =================================================
          HERO SECTION
      ================================================= */}

      <section
        id="home"
        className="landing-hero"
      >

        {/* Background image */}
        <div className="hero-background" >
          <img src="public\assets\ner-hero-landscape-clear.jpg" alt="" />
        </div>

        {/* Atmospheric mountain haze */}
        <div className="hero-haze" />

        {/* Strong white fade behind text */}
        <div className="hero-white-gradient" />


        {/* =================================================
            NAVIGATION
        ================================================= */}


         <header className="landing-header">

          {/* Brand / screen label */}

          <div className="landing-brand">

           

          </div>



          {/* Desktop navigation */}

          <nav className="landing-navigation">

            <button
              type="button"
              onClick={() => handleNavigation("home")}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => handleNavigation("features")}
            >
              Features
            </button>

            <button
              type="button"
              onClick={() => handleNavigation("about")}
            >
              About Us
            </button>

            <button
              type="button"
              onClick={() => handleNavigation("contact")}
            >
              Contact
            </button>

            <button
              type="button"
              className="header-login-button"
              onClick={handleLogin}
            >
              Login
            </button>

          </nav>

        </header>


        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="hero-content">

          <div className="hero-copy">

            <h1 className="hero-title">
              NER Logistics
              <br />
              Intelligence Platform
            </h1>


            <p className="hero-description">
              AI-Powered Logistics, Real-time Traffic,
              <br className="desktop-only" />

              Risk Monitoring &amp; Smarter Deliveries
              <br className="desktop-only" />

              for Northeast India.
            </p>


            {/* =================================================
                HERO BUTTONS
            ================================================= */}

            <div className="hero-buttons">

              <button
                type="button"
                className="get-started-button"
                onClick={handleGetStarted}
              >
               
                <span>
                  Get Started
                </span>
                


                <ArrowIcon />

              </button>


              <button
                type="button"
                className="learn-more-button"
                onClick={handleLearnMore}
              >
                Learn More
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          FEATURE BAR
      ================================================= */}

      <section
        id="features"
        className="feature-bar"
      >

        {features.map((feature) => {

          const Icon = feature.icon;

          return (
            <div
              className="feature-item"
              key={feature.title}
            >

              <div className="feature-icon">
                <Icon />
              </div>

              <span className="feature-title">
                {feature.title}
              </span>

            </div>
          );

        })}

      </section>


      {/* =================================================
          INVISIBLE NAVIGATION TARGETS
          These allow About Us / Contact to work now.
          Full sections can be implemented later.
      ================================================= */}

      <section
        id="about"
        className="navigation-anchor"
        aria-hidden="true"
      />

      <section
        id="contact"
        className="navigation-anchor"
        aria-hidden="true"
      />

    </div>
  );
}

export default LandingPage;