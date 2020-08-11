export const code1 = `// Отделяйте именованные импорты, это повышает читаемость кода
import React, { Component } from 'react';

class MyClassComponent extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return <div>Class Component</div>;
  }
}`;

export const code2 = `<button onClick={event => console.log(event)}>Click me!</button>`;

export const code3 = `import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button">Increment by {step}</button>
        <button type="button">Decrement by {step}</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter step={5} />, document.getElementById('root'));`;

export const code4 = `class Counter extends Component {
  /* ... */

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button
          type="button"
          onClick={evt => {
            console.log('Increment button was clicked!', evt); // работает
            console.log('this.props: ', this.props); // работает
          }}
        >
          > Increment by {step}
        </button>
        <button
          type="button"
          onClick={evt => {
            console.log('Decrement button was clicked!', evt); // работает
            console.log('this.props: ', this.props); // работает
          }}
        >
          Decrement by {step}
        </button>
      </div>
    );
  }
}`;

export const code5 = `class Counter extends Component {
  /* ... */

  handleIncrement(evt) {
    console.log('Increment button was clicked!', evt); // работает
    console.log('this.props: ', this.props); // Error: cannot read props of undefined
  }

  handleDecrement(evt) {
    console.log('Decrement button was clicked!', evt); // работает
    console.log('this.props: ', this.props); // Error: cannot read props of undefined
  }

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}`;

export const code6 = `// ❌ Плохо
class Counter extends Component {
  /* ... */

  handleIncrement(evt) {
    // ...
  }

  handleDecrement(evt) {
    // ...
  }

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement.bind(this)}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement.bind(this)}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}`;

export const code7 = `// ✅ Хорошо
class Counter extends Component {
  /* ... */

  constructor() {
    super();

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement(evt) {
    // ...
  }

  handleDecrement(evt) {
    // ...
  }

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}`;

export const code8 = `// ✅ Хорошо
class Counter extends Component {
  /* ... */

  handleIncrement = evt => {
    console.log('Increment button was clicked!', evt); // работает
    console.log('this.props: ', this.props); // работает
  };

  handleDecrement = evt => {
    console.log('Decrement button was clicked!', evt); // работает
    console.log('this.props: ', this.props); // работает
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}`;

export const code9 = `class Counter extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
    };
  }

  /* ... */

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        {/* ... */}
      </div>
    );
  }
}`;

export const code10 = `class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.initialValue,
    };
  }

  /* ... */
}

ReactDOM.render(<Counter initialValue={10} />, document.getElementById('root'));`;

export const code11 = `class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  /* ... */
}`;

export const code12 = `setState(updater, callback)`;

export const code13 = `state = { fullName: 'Poly' };

// ❌ Плохо
this.state.fullName = 'Mango';

// ✅ Хорошо
this.setState({
  fullName: 'Mango',
});`;

export const code14 = `class Toggle extends Component {
  state = { isOpen: false };

  show = () => this.setState({ isOpen: true });

  hide = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <>
        <button onClick={this.show}>Show</button>
        <button onClick={this.hide}>Hide</button>
        {isOpen && children}
      </>
    );
  }
}`;

export const code15 = `// состояние перед объединением
const currentState = { a: 2, b: 3, c: 7, d: 9 };

// объект переданный в setState
const updateSlice = { b: 5, d: 4 };

// новое значение this.state после объединения
const nextState = { ...currentState, ...updateSlice }; // {a: 2, b: 5, c: 7, d: 4}`;

export const code16 = `// Предположим что есть такое состояние
state = { value: 0 };

// Запустим цикл и создадим 3 операции обновления
for (let i = 0; i < 3; i += 1) {
  /*
   * Если посмотреть состояние, на всех итерациях будет 0
   * Потому что это синхронный код и обновление состояния еще не произошло
   */
  console.log(this.state.value);

  this.setState({ value: this.state.value + 1 });
}`;

export const code17 = `setState((state, props) => {
  return {}
}, callback)`;

export const code18 = `// Предположим что есть такое состояние
state = { value: 0 };

// Запустим цикл и создадим 3 операции обновления
for (let i = 0; i < 3; i += 1) {
  /*
   * Если посмотреть состояние, на всех итерациях будет 0
   * Потому что это синхронный код и обновление состояния еще не произошло
   */
  console.log(this.state.value); // 0

  this.setState(prevState => {
    /*
     * Если посмотреть состояние переданное callback-функции во время ее вызова,
     * получим актуальное состояния на момент обновления.
     */
    console.log(prevState.value); // будет разный на каждой итерации

    return { value: prevState.value + 1 };
  });
}`;

export const code19 = `class Toggle extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <div>
        <button onClick={this.toggle}>{isOpen ? 'Hide' : 'Show'}</button>
        {isOpen && children}
      </div>
    );
  }
}`;

export const code20 = `class Counter extends Component {
  /* ... */

  handleIncrement = () => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
  };

  handleDecrement = () => {
    this.setState((state, props) => ({
      value: state.value - props.step,
    }));
  };

  /* ... */
}`;

export const code21 = `/*
* Button получает функцию changeMessage (имя пропа),
* которая вызывается при событии onClick
*/
const Button = ({ changeMessage, label }) => (
 <button type="button" onClick={changeMessage}>
   {label}
 </button>
);

class App extends Component {
 state = {
   message: new Date().toLocaleTimeString(),
 };

 // Метод который будем передавать в Button для вызова при клике
 updateMessage = evt => {
   console.log(evt); // Доступен объект события

   this.setState({
     message: new Date().toLocaleTimeString(),
   });
 };

 render() {
   return (
     <>
       <span>{this.state.message}</span>
       <Button label="Change message" changeMessage={this.updateMessage} />
     </>
   );
 }
}`;
