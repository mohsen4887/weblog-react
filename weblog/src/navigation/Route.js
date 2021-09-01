import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const RouteWrapper = ({ auth, guest, children, ...otherProps }) => {
  const login = false;

  if (auth && !login) {
    return <Redirect to="/auth/login" />;
  }
  if (guest && login) {
    return <Redirect to="/" />;
  }

  return <Route {...otherProps}>{children}</Route>;
};

export default RouteWrapper;

RouteWrapper.propTypes = {
  auth: PropTypes.bool,
  guest: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  auth: false,
  guest: false,
};
