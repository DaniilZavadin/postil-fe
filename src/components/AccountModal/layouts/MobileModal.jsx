/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../AccountModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAccountModal } from '../../../store/operations';
import SignUp from '../modalComponents/SignUp';
import LogIn from '../modalComponents/LogIn';

const MobileModal = () => {
  const dispatch = useDispatch();

  const forSignUp = useSelector(
    (state) => state.accountModalAction === 'signUp'
  );

  return (
    <>
      <div className="mobile-account-modal">
        <img
          onClick={() => dispatch(toggleAccountModal())}
          src={`${process.env.PUBLIC_URL}/images/accountModal/back.svg`}
          alt="close"
          className="back-button"
        />

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
    </>
  );
};

export default MobileModal;
