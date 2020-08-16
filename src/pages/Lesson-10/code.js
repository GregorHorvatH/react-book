export const code1 = `npm install react-transition-group`;

export const code2 = `/* Применится как только элемент будет добавлен в DOM */
.fade-enter {
}

/*
* Применится на следующий тик после fade-enter
* Сюда добавляем свойство transition
*/
.fade-enter-active {
}

/* Применится как только проп in получит false */
.fade-exit {
}

/*
* Применится на следующий тик после fade-exit
* Сюда добавляем свойство transition
*/
.fade-exit-active {
}`;

export const code3 = `classNames={{
  appear: 'my-appear',
  appearActive: 'my-active-appear',
  appearDone: 'my-done-appear',
  enter: 'my-enter',
  enterActive: 'my-active-enter',
  enterDone: 'my-done-enter',
  exit: 'my-exit',
  exitActive: 'my-active-exit',
  exitDone: 'my-done-exit',
 }}`;

export const code4 = `import styles from './styles.module.css';

<CSSTransition classNames={styles}>
`;

export const code5 = `<CSSTransition
onEnter={() => console.log('onEnter event')}
onEntering={() => console.log('onEntering event')}
onEntered={() => console.log('onEntered event')}
onExit={() => console.log('onExit event')}
onExiting={() => console.log('onExiting event')}
onExited={() => console.log('onExited event')}
/>`;
