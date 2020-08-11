export const code1 = `const buttonStyles = {
  display: 'inline-flex',
  margin: '0 4px',
  padding: '8px 24px',
  border: 0,
  borderRadius: 2,
  fontSize: 14,
  fontFamily: 'inherit',
};

const Button = ({ type = 'button', label, disabled }) => (
  <button
    type={type}
    disabled={disabled}
    style={{
      ...buttonStyles,
      backgroundColor: disabled ? '#0000001f' : '#2196f3',
      color: disabled ? '#00000042' : '#ffffff',
    }}
  >
    {label}
  </button>
);`;

export const code2 = `/* Button.css */
.Button {
  display: inline-flex;
  margin: 0 4px;
  padding: 8px 24px;
  border: 0;
  border-radius: 2px;
  color: #ffffff;
  font-size: 14px;
  font-family: inherit;
  background-color: #2196f3;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.Button:hover,
.Button:focus {
  background-color: #1976d2;
}

.Button-disabled {
  background-color: #0000001f;
  color: #00000042;
}`;

export const code3 = `// Button.js
import './Button.css';

const Button = ({ type = 'button', label, disabled }) => {
  const btnClasses = ['Button'];

  if (disabled) {
    btnClasses.push('Button-disabled');
  }

  return (
    <button type={type} disabled={disabled} className={btnClasses.join(' ')}>
      {label}
    </button>
  );
};`;

export const code4 = `/* Button.module.css */
.button {
  display: inline-flex;
  margin: 0 4px;
  padding: 8px 24px;
  border: 0;
  border-radius: 2px;
  color: #ffffff;
  font-size: 14px;
  font-family: inherit;
  background-color: #2196f3;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.button:hover,
.button:focus {
  background-color: #1976d2;
}

.disabled {
  background-color: #0000001f;
  color: #00000042;
}`;

export const code5 = `// Button.js
import styles from './Button.module.css';

const Button = ({ type = 'button', label, disabled }) => {
  const btnClasses = [styles.button];

  if (disabled) {
    btnClasses.push(styles.disabled);
  }

  return (
    <button className={btnClasses.join(' ')} type={type} disabled={disabled}>
      {label}
    </button>
  );
};`;

export const code6 = `/* Button.module.css */
.button {
  display: inline-flex;
  margin: 0 4px;
  padding: 8px 24px;
  border: 0;
  border-radius: 2px;
  font-size: 14px;
  font-family: inherit;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.button:hover,
.button:focus {
  background-color: #1976d2;
}

.active {
  composes: button;
  color: #ffffff;
  background-color: #2196f3;
}

.disabled {
  composes: button;
  color: #00000042;
  background-color: #0000001f;
}`;

export const code7 = `// Button.js
import styles from './Button.module.css';

const Button = ({ type = 'button', label, disabled }) => {
  const btnClass = disabled ? styles.disabled : styles.active;

  return (
    <button className={btnClass} type={type} disabled={disabled}>
      {label}
    </button>
  );
};`;

export const code8 = `/* variables.module.css */
@value font-stack: Roboto, Arial, sans-serif;

/* Button.module.css */
@value font-stack from 'path/to/variables.module.css';

.button {
  font-family: font-stack;
}`;

export const code9 = `/* Глобален по умолчанию */
body {
  color: #fff;
  font-size: 16px;
}

/* Так класс можно сделать глобальным */
:global(.my-class) {
  color: #2196f3;
}`;
