export const code1 = `constructor() {}`;

export const code2 = `static getDerivedStateFromProps(nextProps, prevState) {}`;

export const code3 = `render() {}`;

export const code4 = `componentDidMount() {}`;

export const code5 = `shouldComponentUpdate(nextProps, nextState) {}`;

export const code6 = `getSnapshotBeforeUpdate(prevProps, prevState) {}`;

export const code7 = `componentDidUpdate(prevProps, prevState, snapshot) {}`;

export const code8 = `componentWillUnmount() {}`;

export const code9 = `componentDidCatch(error, info) {}`;

export const code10 = `class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    // Если метод был вызван значит есть ошибка!
    // Устанавливаем состояние
    this.setState({ hasError: true });
    // Также можно отправить отчет об ошибке вашему аналитическому сервису
    // logErrorToMyService(error, info);
  }

  render() {
    // Если есть ошибка...
    if (this.state.hasError) {
      // Рендерим fallback UI
      return <h1>Something went wrong, please try again later :(</h1>;
    }

    // Если все ок, рендерим детей
    return this.props.children;
  }
}`;
