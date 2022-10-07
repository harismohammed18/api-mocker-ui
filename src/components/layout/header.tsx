import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t } = useTranslation();
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          {t("appName")}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
