import React, { useEffect } from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";
import { authAPI } from "../../api/api";

const HeaderContainer = (props) => {
  useEffect(() => {
    authAPI.getAuthData()
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id, email, login } = response.data.data;
          props.setAuthUserData(id, email, login);
        }
      });
  }, []);

  return <Header {...props} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
