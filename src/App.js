import React, { useState } from 'react';
import styles from './index.module.scss';

function App() {
  const [selected, setSelected] = useState(false);

  return (
    <div className={styles.app}>
      <div className={styles.title}>Title of app component</div>
      <div className={`${styles.card} ${selected ? styles.selected : ''}`} onClick={() => setSelected(!selected)}>
        <div className={styles.title}>Title of card</div>
      </div>
    </div>
  );
}

export default App;
