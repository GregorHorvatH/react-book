export const code1 = `npm install axios`;

export const code2 = `import React, { Component } from 'react';
import axios from 'axios';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

class App extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    axios
      .get('https://hn.algolia.com/api/v1/search?query=react')
      .then(response => this.setState({ articles: response.data.hits }));
  }

  render() {
    const { articles } = this.state;

    return articles.length > 0 ? <ArticleList articles={articles} /> : null;
  }
}`;

export const code3 = `/* ... */

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get('https://hn.algolia.com/api/v1/search?query=react')
      .then(response => {
        this.setState({
          articles: response.data.hits,
          isLoading: false,
        });
      });
  }

  /* ... */
}`;

export const code4 = `/* ... */

class App extends Component {
  /* ... */

  render() {
    const { articles, isLoading } = this.state;

    return isLoading ? <p>Loading...</p> : <ArticleList articles={articles} />;
  }
}`;

export const code5 = `/* ... */

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get('https://hn.algolia.com/api/v1/search?query=react')
      .then(response => this.setState({ articles: response.data.hits }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  /* ... */
}`;

export const code6 = `/* ... */
class App extends Component {
  /* ... */
  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <Fragment>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </Fragment>
    );
  }
}`;

export const code7 = `// services/articlesApi.js
import axios from 'axios';

const fetchArticlesWithQuery = searchQuery => {
  return axios
    .get(\`https://hn.algolia.com/api/v1/search?query=\${searchQuery}\`)
    .then(response => response.data.hits);
};

export default {
  fetchArticlesWithQuery,
};`;

export const code8 = `/* ... */
import articlesApi from './path/to/services/articlesApi';

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    articlesApi
      .fetchArticlesWithQuery('react')
      .then(articles => this.setState({ articles }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  /* ... */
}`;
