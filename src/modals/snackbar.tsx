import React, { useEffect } from 'react';
import * as style from '../styles/snackbar.module.scss';
import Airplane from "../images/airplane.svg"

interface SnackbarProps {
  message: string;
}

const Snackbar: React.FC<SnackbarProps> = ({ message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Hide the Snackbar after 5 seconds
      const snackbar = document.getElementById('snackbar');
      if (snackbar) snackbar.style.display = 'none';
    },5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="snackbar" className={style.snackbar}>
        <img src={Airplane} alt=""  />
      <p>{message}</p>
    </div>
  );
};

export default Snackbar;