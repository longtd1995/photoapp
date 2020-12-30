import React from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

Banner.propTypes = {
  backgroundUrl: PropTypes.string,
  title: PropTypes.string,
};

Banner.defaultProps = {
  backgroundUrl: "",
  title: "",
};

function Banner(props) {
  let { title, backgroundUrl } = props;

  const bannerStyle = backgroundUrl
    ? { backgroundImage: `url(${backgroundUrl})` }
    : "";

  return (
    <section className="banner" style={{ bannerStyle }}>
      <h1 className="banner__title">{title}</h1>
    </section>
  );
}

export default Banner;
