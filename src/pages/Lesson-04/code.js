export const code1 = `class App extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    return <input type="text" value={value} onChange={this.handleChange} />;
  }
}`;

export const code2 = `class SignUpForm extends Component {
  state = {
    login: '',
  };

  /*
   * Отвечает за обновление состояния
   */
  handleChange = e => {
    this.setState({ login: e.target.value });
  };

  /*
   * Вызывается при отправке формы
   */
  handleSubmit = evt => {
    evt.preventDefault();
    console.log(\`Signed up as: \${this.state.login}\`);

    // Проп который передается форме для вызова при сабмите
    this.props.onSubmit(this.state.login);
  };

  render() {
    const { login } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            value={login}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}`;

export const code3 = `/*
* Выносим объект с примитивами в константу чтобы было удобно сбрасывать.
* Нельзя использовать если в каком-то свойстве состояния хранится сложный тип.
*/
const INITIAL_STATE = {
 login: '',
 email: '',
 password: '',
};

class SignUpForm extends React.Component {
 state = { ...INITIAL_STATE };

 /*
  * Для всех инпутов создаем один обарботчик
  * Различать инпуты будем по атрибуту name
  */
 handleChange = ({ target }) => {
   const { name, value } = target;

   this.setState({ [name]: value });
 };

 handleSubmit = evt => {
   evt.preventDefault();

   const { login, email, password } = this.state;

   console.log(\`
     Login: \${login}
     Email: \${email}
     Password: \${password}
   \`);

   this.props.onSubmit({ ...this.state });
   this.reset();
 };

 reset = () => {
   this.setState({ ...INITIAL_STATE });
 };

 render() {
   const { login, email, password } = this.state;

   return (
     <form onSubmit={this.handleSubmit}>
       <label>
         Name
         <input
           type="text"
           placeholder="Enter login"
           name="login"
           value={login}
           onChange={this.handleChange}
         />
       </label>
       <label>
         Email
         <input
           type="email"
           placeholder="Enter email"
           name="email"
           value={email}
           onChange={this.handleChange}
         />
       </label>
       <label>
         Password
         <input
           type="password"
           placeholder="Enter password"
           name="password"
           value={password}
           onChange={this.handleChange}
         />
       </label>

       <button type="submit">Sign up as {login}</button>
     </form>
   );
 }
}`;

export const code4 = `// Можно использовать любой пакет для генерации уникальных строк
import shortid from 'shortid';

class Form extends React.Component {
  loginInputId = shortid.generate();

  render() {
    return (
      <form>
        <label htmlFor={this.loginInputId}>Login</label>
        <input type="text" name="login" id={this.loginInputId} />
      </form>
    );
  }
}`;

export const code5 = `const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
};

class SignUpForm extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;

    // Если тип элемента checkbox, берем значение checked,
    // в противном случае value
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { login, email, password, agreed } = this.state;

    console.log(\`
      Login: \${login}
      Email: \${email}
      Password: \${password}
      Agreed: \${agreed}
    \`);

    /* ... */
  };

  render() {
    const { login, email, password, agreed } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {/* ... */}
        <label>
          Agree to terms
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}`;

export const code6 = `<input
type="radio"
checked={this.state.gender === 'male'}
value="male"
onChage={this.handleGenderChange}
/>`;

export const code7 = `/*
* Используем Enumerable чтобы не болеть антипаттерном "магические числа"
*/
const Gender = {
 MALE: 'male',
 FEMALE: 'female',
};

const INITIAL_STATE = {
 login: '',
 email: '',
 password: '',
 agreed: false,
 gender: null,
};

class SignUpForm extends React.Component {
 state = {
   ...INITIAL_STATE,
 };

 /*... */

 render() {
   const { login, email, password, agreed, gender } = this.state;

   return (
     <form onSubmit={this.handleSubmit}>
       {/* ... */}

       <section>
         <h2>Choose your gender</h2>
         <label>
           Male
           <input
             type="radio"
             checked={gender === Gender.MALE}
             name="gender"
             value={Gender.MALE}
             onChange={this.handleChange}
           />
         </label>
         <label>
           Female
           <input
             type="radio"
             checked={gender === Gender.FEMALE}
             name="gender"
             value={Gender.FEMALE}
             onChange={this.handleChange}
           />
         </label>
       </section>

       <button type="submit" disabled={!agreed}>
         Sign up as {login}
       </button>
     </form>
   );
 }
}`;

export const code8 = `const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
};

class SignUpForm extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  /* ... */

  render() {
    const { login, email, password, agreed, gender, age } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {/* ... */}

        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}`;
