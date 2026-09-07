import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

const settingsItems = [
  {
    icon: "♙",
    title: "Profile Settings",
    description: "Manage your profile information",
    action: "profile",
  },
  {
    icon: "♧",
    title: "Notification Settings",
    description: "Manage notification preferences",
    action: "notifications",
  },
  {
    icon: "◉",
    title: "Privacy Settings",
    description: "Manage privacy and data",
    action: "privacy",
  },
];

export default function Settings() {
  const navigate = useNavigate();

  const [language, setLanguage] = useState("English (US)");
  const [theme, setTheme] = useState("Light Mode");

  const [notificationEnabled, setNotificationEnabled] =
    useState(true);

  const [privacyEnabled, setPrivacyEnabled] =
    useState(true);

  function handleSetting(item) {
    if (item.action === "profile") {
      alert("Profile Settings\n\nProfile editing will be connected to backend later.");
    }

    if (item.action === "notifications") {
      setNotificationEnabled(!notificationEnabled);
    }

    if (item.action === "privacy") {
      setPrivacyEnabled(!privacyEnabled);
    }
  }

  function handleLanguage() {
    const newLanguage =
      language === "English (US)"
        ? "English (India)"
        : "English (US)";

    setLanguage(newLanguage);
  }

  function handleTheme() {
    const newTheme =
      theme === "Light Mode"
        ? "Dark Mode"
        : "Light Mode";

    setTheme(newTheme);
  }

  function handleLogout() {
    sessionStorage.removeItem("ner_demo_session");
    navigate("/login");
  }

  return (
    <div className="settings-page">

      {/* HEADER */}

      <header className="settings-header">

        <button
          className="settings-back"
          onClick={() => navigate("/dashboard")}
        >
          ←
        </button>

        <div>
          <h1>Settings</h1>
          <p>Manage your account and preferences</p>
        </div>

      </header>


      {/* CONTENT */}

      <main className="settings-content">

        {/* PROFILE / NOTIFICATION / PRIVACY */}

        <section className="settings-card">

          {settingsItems.map((item, index) => (

            <button
              className="settings-row"
              key={item.title}
              onClick={() => handleSetting(item)}
            >

              <div className="settings-icon">
                {item.icon}
              </div>

              <div className="settings-row-info">

                <strong>{item.title}</strong>

                <span>
                  {item.description}
                </span>

              </div>

              <div className="settings-row-right">

                {item.action === "notifications" && (
                  <span
                    className={
                      notificationEnabled
                        ? "setting-status on"
                        : "setting-status off"
                    }
                  >
                    {notificationEnabled
                      ? "On"
                      : "Off"}
                  </span>
                )}

                {item.action === "privacy" && (
                  <span
                    className={
                      privacyEnabled
                        ? "setting-status on"
                        : "setting-status off"
                    }
                  >
                    {privacyEnabled
                      ? "Protected"
                      : "Off"}
                  </span>
                )}

                <span className="setting-arrow">
                  ›
                </span>

              </div>

            </button>

          ))}


          {/* LANGUAGE */}

          <button
            className="settings-row"
            onClick={handleLanguage}
          >

            <div className="settings-icon">
              文
            </div>

            <div className="settings-row-info">
              <strong>Language</strong>
              <span>Select application language</span>
            </div>

            <div className="settings-row-right">

              <span className="setting-value">
                {language}
              </span>

              <span className="setting-arrow">
                ›
              </span>

            </div>

          </button>


          {/* THEME */}

          <button
            className="settings-row"
            onClick={handleTheme}
          >

            <div className="settings-icon">
              ◐
            </div>

            <div className="settings-row-info">
              <strong>Theme</strong>
              <span>Choose application appearance</span>
            </div>

            <div className="settings-row-right">

              <span className="setting-value">
                {theme}
              </span>

              <span className="setting-arrow">
                ›
              </span>

            </div>

          </button>


          {/* ABOUT */}

          <button
            className="settings-row"
            onClick={() =>
              alert(
                "NER Platform\nLogistics Intelligence\nVersion 1.0"
              )
            }
          >

            <div className="settings-icon">
              ⓘ
            </div>

            <div className="settings-row-info">
              <strong>About</strong>
              <span>Application information</span>
            </div>

            <div className="settings-row-right">

              <span className="setting-value">
                NER Platform v1.0
              </span>

              <span className="setting-arrow">
                ›
              </span>

            </div>

          </button>

        </section>


        {/* QUICK SETTINGS */}

        <section className="quick-settings">

          <div className="quick-header">
            <h2>Quick Settings</h2>
            <span>Preferences</span>
          </div>

          <div className="quick-grid">

            <div className="quick-card">

              <span className="quick-icon">
                🔔
              </span>

              <div>
                <strong>Notifications</strong>
                <small>
                  {notificationEnabled
                    ? "Enabled"
                    : "Disabled"}
                </small>
              </div>

              <button
                className={
                  notificationEnabled
                    ? "toggle active"
                    : "toggle"
                }
                onClick={() =>
                  setNotificationEnabled(
                    !notificationEnabled
                  )
                }
              >
                <span></span>
              </button>

            </div>


            <div className="quick-card">

              <span className="quick-icon">
                🔒
              </span>

              <div>
                <strong>Privacy</strong>
                <small>
                  {privacyEnabled
                    ? "Protected"
                    : "Disabled"}
                </small>
              </div>

              <button
                className={
                  privacyEnabled
                    ? "toggle active"
                    : "toggle"
                }
                onClick={() =>
                  setPrivacyEnabled(
                    !privacyEnabled
                  )
                }
              >
                <span></span>
              </button>

            </div>

          </div>

        </section>


        {/* LOGOUT */}

        <button
          className="settings-logout"
          onClick={handleLogout}
        >
          <span>↪</span>
          Logout
        </button>


        <p className="settings-footer">
          NER Platform • Logistics Intelligence
          <br />
          Version 1.0
        </p>

      </main>

    </div>
  );
}