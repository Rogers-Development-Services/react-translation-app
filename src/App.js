import React from 'react';
import './App.css';
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <nav className="nav nav-pills nav-stacked">
      <nav
        style={{
          width: "100%",
          padding: "2rem 0",
          backgroundColor: "gray",
          textAlign: "center",
        }}
      >
        <button
          type="button"
          onClick={() => handleClick("en")}
          className="btn btn-primary m-4"
        >
          English
        </button>
        <button
          type="button"
          onClick={() => handleClick("de")}
          className="btn btn-danger m-4"
        >
          German
        </button>
        <button
          type="button"
          onClick={() => handleClick("fr")}
          className="btn btn-success m-4"
        >
          French
        </button>
      </nav>
      <div className="container center">
        <h1>{t("text1.t")} </h1>
        <p>{t("text2.t")} </p>
      </div>
    </nav>
  );
}

export default App;