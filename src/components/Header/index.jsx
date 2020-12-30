import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";

Header.propTypes = {};

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="www.meteccons.vn"
              target="_blank"
            >
              Meteccons
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
