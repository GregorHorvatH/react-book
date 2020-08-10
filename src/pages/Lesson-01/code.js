export const code1 = 'npx create-react-app имя_папки_проекта';

export const code2 = 'React.createElement(type, [props], [...children])';

export const code3 = `import React from 'react';

const link = React.createElement(
  'a',
  {
    href: 'https://reactjs.org/',
    target: '_blank',
    rel: 'noreferrer noopener',
  },
  'Ссылка на reactjs.org',
);`;

export const code4 = `import React from 'react';

const image = React.createElement('img', {
  src:
    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
  alt: 'Tacos With Lime',
  width: 640,
});
const title = React.createElement('h2', null, 'Tacos With Lime');
const price = React.createElement('p', null, 'Price: 10.99$');
const button = React.createElement('button', { type: 'button' }, 'Add to cart');

const product = React.createElement('div', null, image, title, price, button);

/*
 * Для передачи детей также используется свойство children параметра props.
 * Обратите внимание на то, что свойство children это массив.
 */
const productWithChildrenInProps = React.createElement('div', {
  children: [image, title, price, button],
});`;

export const code5 = `import ReactDOM from 'react-dom';

ReactDOM.render(product, document.getElementById('root'));`;

export const code6 = `// Plain JavaScript
const link = React.createElement(
  'a',
  {
    href: 'https://reactjs.org/',
    target: '_blank',
    rel: 'noreferrer noopener',
  },
  'Ссылка на reactjs.org',
);

// JSX
const linkWithJSX = (
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">
    Ссылка на reactjs.org
  </a>
);`;

export const code7 = `import React from 'react';
import ReactDOM from 'react-dom';

const imageUrl =
  'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640';
const price = 10.99;

const product = (
  <div>
    <img src={imageUrl} alt="Tacos With Lime" width="640" />
    <h2>Tacos With Lime</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>
);

ReactDOM.render(product, document.getElementById('root'));`;

export const code8 = `const post = (
  <h2>Post Header</h2>
  <p>Post text</p>
);`;

export const code9 = `const post = (
  React.createElement('h2', null, 'Post Header')
  React.createElement('p', null, 'Post text')
);`;

export const code10 = `const post = React.createElement(
  'div',
  null,
  React.createElement('h2', null, 'Post Header'),
  React.createElement('p', null, 'Post text'),
);`;

export const code11 = `const post = (
  <div>
    <h2>Post Header</h2>
    <p>Post text</p>
  </div>
);`;

export const code12 = `import React, { Fragment } from 'react';

const post = (
  <Fragment>
    <h2>Post Header</h2>
    <p>Post text</p>
  </Fragment>
);`;

export const code13 = `import React from 'react';

const post = (
  <>
    <h2>Post Header</h2>
    <p>Post text</p>
  </>
);`;

export const code14 = `const MyFunctionalComponent = props => <div>Functional Component</div>;`;

export const code15 = `const Product = props => (
  <div>
    <img
      src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      alt="Tacos With Lime"
      width="640"
    />
    <h2>Tacos With Lime</h2>
    <p>Price: 10.99$</p>
    <button type="button">Add to cart</button>
  </div>
);

// В разметке компонент записывается как JSX-тег
ReactDOM.render(<Product />, document.getElementById('root'));

// Это аналогично
ReactDOM.render(React.createElement(Product), document.getElementById('root'));`;

export const code16 = `const App = () => (
  <>
    <h1>Best selling products</h1>
    <Product name="Tacos With Lime" />
  </>
);`;

export const code17 = `const Product = props => (
  <div>
    <h2>{props.name}</h2>
  </div>
);`;

export const code18 = `const Product = props => (
  <div>
    <img src={props.imgUrl} alt={props.name} width="640" />
    <h2>{props.name}</h2>
    <p>Price: {props.price}$</p>
    <button type="button">Add to cart</button>
  </div>
);`;

export const code19 = `const Product = ({ imgUrl, name, price }) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>
);

const App = () => (
  <div>
    <h1>Best selling products</h1>
    <Product
      imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      name="Tacos With Lime"
      price={10.99}
    />
    <Product
      imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
      name="Fries and Burger"
      price={14.29}
    />
  </div>
);`;

export const code20 = `const Profile = ({ name, email }) => (
  <div>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
  </div>
);

const Panel = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

const App = () => (
  <div>
    <Panel title="User profile">
      <Profile name="Mango" email="mango@mail.com" />
    </Panel>
  </div>
);`;

export const code21 = `const Product = ({ imgUrl, name, price }) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>
);

Product.defaultProps = {
  imgUrl:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

/*
 * Определение defaultProps гарантирует, что 'props.imgUrl' будет иметь значение,
 * даже если оно не было указано при вызове компонента в родителе.
 */
ReactDOM.render(
  <Product name="Tacos With Lime" price={10.99} />,
  document.getElementById('root'),
);`;

export const code22 = `npm install --save-dev prop-types`;

export const code23 = `import PropTypes from 'prop-types';

const Product = ({ imgUrl, name, price }) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>
);

Product.defaultProps = {
  imgUrl:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};`;

export const code24 = `const Mailbox = ({ unreadMessages }) => (
  <div>
    <h1>Hello!</h1>
    {unreadMessages.length > 0 && (
      <p>You have {unreadMessages.length} unread messages.</p>
    )}
  </div>
);`;

export const code25 = `const Mailbox = ({ name, unreadMessages }) => (
  <div>
    <h1>Hello {name}.</h1>
    {unreadMessages.length > 0 ? (
      <p>You have {unreadMessages.length} unread messages.</p>
    ) : (
      <p>No unread messages.</p>
    )}
  </div>
);`;

export const code26 = `const Mailbox = ({ name, unreadMessages }) => (
  <div>
    <h1>Hello {name}.</h1>
    <p>
      {unreadMessages.length > 0
        ? \`You have \${unreadMessages.length} unread messages.\`
        : 'No unread messages.'}
    </p>
  </div>
);`;

export const code27 = `const Product = ({ imgUrl, name, price, quantity }) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <h1>Quantity: {quantity < 20 ? 'Few left' : 'In stock'}</h1>
    <button type="button">Add to cart</button>
  </div>
);`;

export const code28 = `const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
];

const BookList = ({ books }) => (
  <ul>
    {books.map(book => (
      <li>{book.name}</li>
    ))}
  </ul>
);

ReactDOM.render(
  <BookList books={favouriteBooks} />,
  document.getElementById('root'),
);`;

export const code29 = `const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
];

const BookList = ({ books }) => (
  <ul>
    {books.map(book => (
      <li key={book.id}>{book.name}</li>
    ))}
  </ul>
);

ReactDOM.render(
  <BookList books={favouriteBooks} />,
  document.getElementById('root'),
);`;
