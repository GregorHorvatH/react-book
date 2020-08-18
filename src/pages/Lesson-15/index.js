import React from 'react';
// import { CopyBlock, hybrid } from 'react-code-blocks';
import Image from '../../components/Image';
import Link from '../../components/Link';

// import * as code from './code';

const Lesson15 = () => (
  <div className="container lesson-15">
    <div className="row">
      <div className="col">
        <h2>1. JWT(JSON Web Token)</h2>
        <Image filename="jwt.png" />

        <h3>1.1. Дополнительные материалы</h3>
        <ul>
          <li>
            <Link
              link="https://jwt.io/introduction/"
              text="Introduction to JSON Web Tokens"
            />
          </li>
          <li>
            <Link
              link="https://gist.github.com/zmts/802dc9c3510d79fd40f9dc38a12bccfc"
              text="Про токены, JSON Web Tokens (JWT), аутентификацию и авторизацию"
            />
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>2. Авторизация и аутентификация пользователя</h2>
        <Image filename="auth_process.png" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>3. Защищенные ресурсы</h2>
        <Image filename="auth_diag.png" />
      </div>
    </div>
  </div>
);

export default Lesson15;
