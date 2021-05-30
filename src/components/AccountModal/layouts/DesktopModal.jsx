/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignUp from '../modalComponents/SignUp';
import LogIn from '../modalComponents/LogIn';
import ChoiseButtons from '../modalComponents/ChoiseButtons';
import { toggleAccountModal } from '../../../store/operations';

const DesktopModal = () => {
  const dispatch = useDispatch();

  const forSignUp = useSelector(
    (state) => state.accountModalAction === 'signUp'
  );

  return (
    <div className="account-modal">
      <img
        onClick={() => dispatch(toggleAccountModal())}
        src={`${process.env.PUBLIC_URL}/images/accountModal/close-icon.svg`}
        alt="close"
        className="cross-button"
      />

      <ChoiseButtons />

      {forSignUp ? <SignUp /> : <LogIn />}

      {forSignUp && (
        <div className="enter-via-socials">
          <img
            className="enter-via-socials__item"
            src={`${process.env.PUBLIC_URL}/images/google.svg`}
            alt="google"
          />
          <img
            className="enter-via-socials__item"
            src={`${process.env.PUBLIC_URL}/images/fb.svg`}
            alt="facebook"
          />
        </div>
      )}
    </div>
  );
};

export default DesktopModal;
