'use client';

import { useState } from 'react';
import styles from './keyboard.module.css';

interface KeyboardProps {
  onKeyPress: (key: string) => void;
}

export function Keyboard({ onKeyPress }: KeyboardProps) {
  const [capsLock, setCapsLock] = useState(false);

  const handleKeyPress = (key: string) => {
    switch (key) {
      case '🎓':
        setCapsLock(!capsLock);
        break;
      case '🗑️':
        onKeyPress('Backspace');
        break;
      case '🦘':
        onKeyPress('Enter');
        break;
      case '🛹':
      case '⛸️':
        // Toggle caps for the next key press only
        setCapsLock((prev) => !prev);
        break;
      default:
        onKeyPress(capsLock ? key.toUpperCase() : key.toLowerCase());
        // Reset caps if it was toggled by shift
        if (capsLock && (key === '🛹' || key === '⛸️')) {
          setCapsLock(false);
        }
    }
  };

  const renderKey = (key: string, id?: string) => (
    <li
      key={id || key} // Đảm bảo key duy nhất
      className={`${styles.key} ${styles.clay}`}
      id={id ? styles[id] : undefined}
      onClick={() => handleKeyPress(key)}
    >
      {key}
    </li>
  );

  return (
    <div className={styles.keyboard}>
      <ul className={styles.row}>
        {renderKey('☘️', 'esc')}
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_', '='].map((key, index) =>
          renderKey(key, `num-${index}`)
        )}
        {renderKey('🗑️', 'del')}
      </ul>
      <ul className={styles.row}>
        {renderKey('🦃', 'tab')}
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key, index) =>
          renderKey(key, `alpha-${index}`)
        )}
        {renderKey('{', 'brace-open')}
        {renderKey('}', 'brace-close')}
        {renderKey('\\', 'slash')}
      </ul>
      <ul className={styles.row}>
        {renderKey('🎓', 'caps')}
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key, index) =>
          renderKey(key, `alpha2-${index}`)
        )}
        {renderKey(';', 'semicolon')}
        {renderKey('"', 'quote')}
        {renderKey('🦘', 'enter')}
      </ul>
      <ul className={styles.row}>
        {renderKey('🛹', 'shift')}
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key, index) =>
          renderKey(key, `alpha3-${index}`)
        )}
        {renderKey(',', 'comma')}
        {renderKey('.', 'period')}
        {renderKey('?', 'question')}
        {renderKey('⛸️', 'shift2')}
        {renderKey('☝️', 'up-arrow')}
      </ul>
      <ul className={styles.row}>
        {renderKey('🕹️', 'ctrl')}
        {renderKey('🎪', 'fn')}
        {renderKey('🌏', 'win')}
        {renderKey('🦇', 'alt')}
        {renderKey(' ', 'space')}
        {renderKey('⛓', 'altgr')}
        {renderKey('🌶️', 'menu')}
        {renderKey('🐪', 'ctrl2')}
        {renderKey('👈🏿', 'left-arrow')}
        {renderKey('👇🏻', 'down-arrow')}
      </ul>
    </div>
  );
}
