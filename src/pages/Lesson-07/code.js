export const code1 = `npm install react-router-dom`;

export const code2 = `import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root'),
);`;

export const code3 = `import React from 'react';
import { Route } from 'react-router-dom';

const App = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </>
);`;

export const code4 = `// ✅ Хорошо
<Route path="/about" component={About} />

// ❌ Плохо
<Route
  path="/about"
  component={props => <About {...props} extraProp="amazing prop" />}
/>`;

export const code5 = `<Route
path="/about"
render={props => <About {...props} extraPropName="value" />}
/>`;

export const code6 = `import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </div>
);`;

export const code7 = `<Link to="/books">Books</Link>

<Link to="/books?category=adventure#treasure-island">Adventure books</Link>`;

export const code8 = `<Link
  to={{
    pathname: '/books',
    search: '?category=adventure',
    hash: '#treasure-island',
    state: { from: '/dashboard' },
  }}
/>`;

export const code9 = `<NavLink to="/books" className="link" activeClassName="active-link">
  Books
</NavLink>`;

export const code10 = `{
  key: 'ac3df4',
  pathname: '/books',
  search: '?sortby=latest',
  hash: '#comments',
  state: {
    from: '/login'
  }
}`;

export const code11 = `https://app.com/articles`;

export const code12 = `https://app.com/articles?category=health&sortBy=latest`;

export const code13 = `{
  key: 'ac3df4',
  pathname: '/articles',
  search: '?category=health&sortBy=latest',
  hash: ''
}`;

export const code14 = `import queryString from 'query-string';

const queryParams = queryString.parse(props.location.search);`;

export const code15 = `onCategoryChange = category => {
  this.props.history.push({
    pathname: this.props.location.pathname,
    search: \`category=\${category}\`,
  });
};`;

export const code16 = `const getCategoryFromProps = props => queryString.parse(props.location.search).category;

componentDidUpdate(prevProps) {
  const prevCategory = getCategoryFromProps(prevProps);
  const nextCategory = getCategoryFromProps(this.props);

  if (prevCategory !== nextCategory) {
    this.fetchArticles(nextCategory);
  }
}`;

export const code17 = `componentDidMount() {
  /*
  * При маунте компонента проверяем наличие параметра \`category\` в строке запроса.
  */
  const category = getCategoryFromProps(this.props);

  /*
  * Если параметра нет, делаем \`history.replace\` с текущим маршрутом,
  * но добавляем категорию \`all\`, чтобы забрать все статьи с бекенда.
  * При этом перезаписываем текущую страницу истории.
  */
  if (!category) {
    this.props.history.replace({
      pathname: this.props.location.pathname,
      search: \`category=all\`,
    });

    return;
  }

  /*
  * Если при рендере такой параметр уже есть, например пользователь зашел по
  * сохраненной ссылке, делаем HTTP-запрос за статьями.
  */
  fetchArticlesByCategory(category).then(articles =>
    this.setState({ articles }),
  );
}`;

export const code18 = `https://app.com/articles/:articleId`;

export const code19 = `<Link to={{
  pathname: \`/articles/\${id}\`,
  state: { from: this.props.location },
}}>
  Article title
</Link>`;

export const code20 = `handleGoBack = () => {
  this.props.history.push(this.props.location.state.from);
};`;

export const code21 = `handleGoBack = () => {
  const { state } = this.props.location;
  const { category } = this.state;

  if (state) {
    this.props.history.push(state.from);
    return;
  }

  this.props.history.push({
    pathname: '/articles',
    search: \`?category=\${category}\`,
  });
};`;
