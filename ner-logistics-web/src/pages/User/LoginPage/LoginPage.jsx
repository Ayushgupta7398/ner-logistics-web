import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../../services/authService";

function Logo() {
  return (
    <Link to="/" className="login-logo">
      <span className="logo-mark">
        NER
      </span>

      <span className="logo-text">
        NER PLATFORM
      </span>
    </Link>
  );
}

function GoogleIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M21.35 12.2c0-.7-.06-1.37-.18-2H12v3.79h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.18z"
      />
      <path
        fill="#34A853"
        d="M12 21.99c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.29v2.53A9.74 9.74 0 0 0 12 21.99z"
      />
      <path
        fill="#FBBC05"
        d="M6.54 14.08A5.86 5.86 0 0 1 6.23 12c0-.72.12-1.42.31-2.08V7.39H3.29A9.98 9.98 0 0 0 2.25 12c0 1.66.4 3.22 1.04 4.61l3.25-2.53z"
      />
      <path
        fill="#EA4335"
        d="M12 5.89c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 2.96 14.63 2 12 2a9.74 9.74 0 0 0-8.71 5.39l3.25 2.53C7.31 7.61 9.46 5.89 12 5.89z"
      />
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="9" height="9" fill="#F25022" />
      <rect x="13" y="2" width="9" height="9" fill="#7FBA00" />
      <rect x="2" y="13" width="9" height="9" fill="#00A4EF" />
      <rect x="13" y="13" width="9" height="9" fill="#FFB900" />
    </svg>
  );
}

function EyeIcon({ visible }) {
  return visible ? (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  ) : (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M3 3l18 18" />
      <path d="M10.6 6.2A9.7 9.7 0 0 1 12 6c6.5 0 10 6 10 6a18.5 18.5 0 0 1-3.1 3.8" />
      <path d="M6.6 6.6C3.7 8.5 2 12 2 12s3.5 6 10 6c1.7 0 3.2-.4 4.5-1" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
    </svg>
  );
}

export default function LoginPage() {
  const navigate = useNavigate();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function validateForm() {
    const newErrors = {};

    if (!emailOrPhone.trim()) {
      newErrors.emailOrPhone = "Email or phone is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    if (password && password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

 async function handleSubmit(event) {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  try {
    setLoading(true);

    const response = await authService.login({
      identifier: emailOrPhone,
      password: password,
    });

    if (response.success) {
      sessionStorage.setItem(
        "ner_demo_session",
        JSON.stringify(response)
      );

      navigate("/dashboard");
    }
  } catch (error) {
    setErrors({
      form: "Unable to login. Please try again.",
    });
  } finally {
    setLoading(false);
  }
}
 

  function handleGoogleLogin() {
    alert("Google login will be connected with the backend later.");
  }

  function handleMicrosoftLogin() {
    alert("Microsoft login will be connected with the backend later.");
  }

  return (
    <main className="login-page">

      {/* HEADER */}

      <header className="login-header">
        <Logo />

        <button
          className="menu-button"
          type="button"
          aria-label="Open menu"
          onClick={() => navigate("/")}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>


      {/* LOGIN CONTENT */}

      <section className="login-wrapper">

        <div className="login-card">

          <div className="login-heading">
            <h1>Welcome Back!</h1>

            <p>
              Login to your account
            </p>
          </div>


          {/* LOGIN / SIGNUP TABS */}

          <div className="auth-tabs">

            <Link
              to="/login"
              className="auth-tab active"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="auth-tab"
            >
              Sign Up
            </Link>

          </div>


          {/* FORM */}

          <form
            className="login-form"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* EMAIL / PHONE */}

            <div className="form-group">

              <label htmlFor="emailOrPhone">
                Email / Phone
              </label>

              <input
                id="emailOrPhone"
                type="text"
                placeholder="Enter email or phone"
                value={emailOrPhone}
                onChange={(event) => {
                  setEmailOrPhone(event.target.value);

                  if (errors.emailOrPhone) {
                    setErrors((prev) => ({
                      ...prev,
                      emailOrPhone: "",
                    }));
                  }
                }}
                autoComplete="username"
              />

              {errors.emailOrPhone && (
                <span className="field-error">
                  {errors.emailOrPhone}
                </span>
              )}

            </div>


            {/* PASSWORD */}

            <div className="form-group">

              <label htmlFor="password">
                Password
              </label>

              <div className="password-wrapper">

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);

                    if (errors.password) {
                      setErrors((prev) => ({
                        ...prev,
                        password: "",
                      }));
                    }
                  }}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  <EyeIcon
                    visible={showPassword}
                  />
                </button>

              </div>

              {errors.password && (
                <span className="field-error">
                  {errors.password}
                </span>
              )}

            </div>


            {/* FORGOT PASSWORD */}

            <div className="login-options">

              <label className="remember-option">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) =>
                    setRememberMe(
                      event.target.checked
                    )
                  }
                />

                <span>
                  Remember me
                </span>

              </label>

              <Link
                to="/forgot-password"
                className="forgot-password"
              >
                Forgot Password?
              </Link>

            </div>


            {/* FORM ERROR */}

            {errors.form && (
              <div className="form-error">
                {errors.form}
              </div>
            )}


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="button-spinner"></span>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>

          </form>


          {/* DIVIDER */}

          <div className="social-divider">

            <span></span>

            <p>
              Or continue with
            </p>

            <span></span>

          </div>


          {/* SOCIAL LOGIN */}

          <div className="social-buttons">

            <button
              type="button"
              className="social-button"
              onClick={handleGoogleLogin}
              aria-label="Continue with Google"
            >
              <GoogleIcon />
            </button>

            <button
              type="button"
              className="social-button"
              onClick={handleMicrosoftLogin}
              aria-label="Continue with Microsoft"
            >
              <MicrosoftIcon />
            </button>

          </div>


          {/* MOBILE-LIKE SIGNUP MESSAGE */}

          <p className="signup-footer">
            Don't have an account?

            <Link to="/signup">
              Sign Up
            </Link>
          </p>

        </div>

      </section>

    </main>
  );}
