// import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogPageReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateMessageText: (body) => {
      dispatch(updateMessageTextActionCreator(body));
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;