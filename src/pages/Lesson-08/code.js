export const code1 = `// Статический импорт, всегда в начале файла
import moduleA from './path/to/module-a';

/*
 *  Динамический импорт, где угодно
 * Путь к модулю должен быть полный, без выражений
 */
const loadModuleB = () => import('./path/to/module-b');

/*
 * Можно использовать в любом месте, к примеру при событии
 * import() возвращает обещание
 */
loadModuleB().then(module => {
  // Объект модуля с полем default - дефолтный экспорт
  console.log(module);
});`;

export const code2 = `// asyncComponent.js

const asyncComponent = ({ loader, loading: Loading }) => {
  return class AsyncComponent extends Component {
    state = {
      component: null,
    };

    async componentDidMount() {
      const { default: component } = await loader();

      this.setState({ component });
    }

    render() {
      const { component: LoadedComponent } = this.state;

      return LoadedComponent ? (
        <LoadedComponent {...this.props} />
      ) : (
        <Loading />
      );
    }
  };
};`;

export const code3 = `const AsyncHome = asyncComponent({
  loader: () => import('./pages/Home'),
  loading: Loader,
});`;

export const code4 = `<Route path="/" exact component={AsyncHome} />`;

export const code5 = `const AsyncHome = asyncComponent({
  loader: () => import('./pages/Home' /* webpackChunkName: "home-page" */),
  loading: Loader,
});`;

export const code6 = `npm install react-loadable`;

export const code7 = `const Loading = ({ error, timedOut, pastDelay, retry }) => {
  if (error) {
    return (
      <div>
        Error! <button onClick={retry}>Retry</button>
      </div>
    );
  }

  if (timedOut) {
    return (
      <div>
        Taking a long time... <button onClick={retry}>Retry</button>
      </div>
    );
  }

  if (pastDelay) {
    return <div>Loading...</div>;
  }

  return null;
};`;

export const code8 = `React.lazy(loader);`;

export const code9 = `import React, { lazy, Suspense } from 'react';

const AsyncComponent = lazy(() => import('./AsyncComponent'));

const MyComponent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <AsyncComponent />
  </Suspense>
);`;
