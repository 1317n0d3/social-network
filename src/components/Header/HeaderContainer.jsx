import React, { useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, getAuthUserData } from "../../redux/authReducer";

const HeaderContainer = ({ isAuth, login, getAuthUserData }) => {
  useEffect(() => { getAuthUserData() }, [getAuthUserData]);

  return <Header isAuth={isAuth} login={login} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData, getAuthUserData })(HeaderContainer);
