export const code1 = `// withHigherOrderComponent.js
import React, { Component } from 'react';

const withHigherOrderComponent = WrappedComponent => {
  return class WithHigherOrderComponent extends Component {
    render() {
      return (
        <WrappedComponent {...this.props} extraProp="This prop is from HOC" />
      );
    }
  };
};

export default withHigherOrderComponent;`;

export const code2 = `// MyComponent.js
import React from 'react';
import withHigherOrderComponent from '/path/to/withHigherOrderComponent';

const MyComponent = props => <div>{JSON.stringify(props, null, 2)}</div>;

export default withHigherOrderComponent(MyComponent);`;

export const code3 = `const withLog = WrappedComponent => {
  return class WithLog extends Component {
    componentDidMount() {
      console.group(\`WithLog ouput @\${WrappedComponent.name}\`);
      console.log(this.props);
      console.groupEnd();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};`;

export const code4 = `// withFetch.js
const withFetch = url => WrappedComponent => {
  return class WithFetch extends Component {
    state = {
      data: [],
      loading: false,
      error: null,
    };

    componentDidMount() {
      this.setState({ loading: true });

      fetch(url)
        .then(res => res.json())
        .then(data => this.setState({ data }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};

export default withFetch;`;

export const code5 = `// App.js
const App = props => {
  return <h1>В моих пропсах будут data, loading и error</h1>;
};

export default withFetch('https://jsonplaceholder.typicode.com/todos')(App);`;

export const code6 = `const withToggle = WrappedComponent => {
  return class WithToggle extends Component {
    state = {
      isOpen: false,
    };

    toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

    render() {
      return (
        <>
          <button type="button" onClick={this.toggle}>
            {this.state.isOpen ? 'Hide' : 'Show'}
          </button>

          {isOpen && <WrappedComponent {...this.props} />}
        </>
      );
    }
  };
};`;

export const code7 = `// Toggler.js
class Toggler extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => this.setState(state => ({ isOpen: !state.isOpen }));

  render() {
    return this.props.children({
      isOpen: this.state.isOpen,
      onToggle: this.toggle,
    });
  }
}

export default Toggler;`;

export const code8 = `// App.js
const App = () => (
  <div>
    <Toggler>
      {({ isOpen, onToggle }) => (
        <>
          <button type="button" onClick={onToggle}>
            {isOpen ? 'Hide' : 'Show'}
          </button>
          {isOpen && <p>Vestibulum suscipit nulla quis orci.</p>}
        </>
      )}
    </Toggler>

    <Toggler>
      {({ isOpen, onToggle }) => (
        <>
          <label>
            <input type="checkbox" checked={isOpen} onChange={onToggle} />
            {isOpen ? 'Hide' : 'Show'}
          </label>
          {isOpen && <p>Etiam feugiat lorem non metus.</p>}
        </>
      )}
    </Toggler>
  </div>
);`;

export const code9 = `const Context = React.createContext(defaultValue);`;

export const code10 = `const ThemeContext = React.createContext();
ThemeContext.displayName = 'ThemeContext';

<ThemeContext.Provider> // "ThemeContext.Provider" в DevTools
<ThemeContext.Consumer> // "ThemeContext.Consumer" в DevTools`;

export const code11 = `<Provider value={/* value */}>`;

export const code12 = `<Consumer>
  {context => {
    /* Возвращает JSX-разметку */
  }}
</Consumer>`;

export const code13 = `import React, { createContext } from 'react';

const ThemeContext = createContext();

const App = () => (
  <ThemeContext.Provider value="light">
    <div className="App">
      <Toolbar />
    </div>
  </ThemeContext.Provider>
);

const Toolbar = () => (
  <div className="Toolbar">
    <Button label="Log In" />
    <Button label="Log Out" />
  </div>
);

const Button = ({ label }) => (
  <ThemeContext.Consumer>
    {theme => (
      <button
        className={theme === 'light' ? 'btn-light' : 'btn-dark'}
        type="button"
      >
        {label}
      </button>
    )}
  </ThemeContext.Consumer>
);`;

export const code14 = `// withTheme.js
import ThemeContext from '/path/to/ThemeContext';

// Эта функция принимает компонент...
const withTheme = WrappedComponent => {
  // ... возвращает другой компонент...
  return function WithTheme(props) {
    // ... который рендерит обернутый в Consumer компонент,
    // передавая тему как проп.
    return (
      <ThemeContext.Consumer>
        {theme => <WrappedComponent {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  };
};

export default withTheme;`;

export const code15 = `import withTheme from '/path/to/withTheme';

const Button = ({ label, theme }) => (
  <button className={theme === 'dark' ? 'btn-dark' : 'btn-light'} type="button">
    {label}
  </button>
);

export default withTheme(Button);`;

export const code16 = `class App extends React.Component {
  render() {
    return (
      <Provider value={{ something: 'some value' }}>
        <Toolbar />
      </Provider>
    );
  }
}`;

export const code17 = `// ThemeContextProvider.js
import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();

export default class ThemeContextProvider extends Component {
  static Consumer = Consumer;

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    }));
  };

  state = {
    theme: 'light',
    toggleTheme: this.toggleTheme,
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}`;
