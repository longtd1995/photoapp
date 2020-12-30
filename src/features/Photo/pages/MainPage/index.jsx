import React from "react";
import PropTypes from "prop-types";
import Banner from "../../../../components/Banner";
import Images from "./../../../../constants/Images";
import { Link, useRouteMatch } from "react-router-dom";
import "./MainPage.scss";

MainPage.propTypes = {};

function MainPage(props) {
  let match = useRouteMatch();
  console.log(match);
  return (
    <div className="main-page">
      <Banner title="Your awesome PhotoApp" backgroundUrl={Images.BLUE_BG} />
      <Link to={`${match.url}/add`}> Add new Photo </Link>
    </div>
  );
}

export default MainPage;
