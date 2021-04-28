import React, { useState } from 'react';
import styles from './index.module.scss';

function App({color}) {
  return (
    <div className={styles.app} style={{backgroundColor:color}}>App</div>
  );
}

export default App;
