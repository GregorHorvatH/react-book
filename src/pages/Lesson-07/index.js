import React from 'react';
// import { CopyBlock, hybrid } from 'react-code-blocks';
import Image from '../../components/Image';
import Link from '../../components/Link';

// import * as code from './code';

const Lesson07 = () => (
  <div className="container lesson-07">
    <div className="row">
      <div className="col">
        <h2>1. Маршрутизация</h2>
        <p>
          Отличающее преимущество веб-приложения от десктоп это наличие URL, при
          переходе по которому, пользователь оказывается в определенной части
          приложения. Так можно сохранить закладку или передать ссылку другому
          пользователю, при этом ему будет отображен один и тот же интерфейс (за
          исключением приватных данных).
        </p>
        <p>
          <strong>Маршрутизация (routing)</strong> - это не побочный эффект при
          написании приложения, наоборот, грамотную архитектуру навигации
          необходимо продумывать в первую очередь.
        </p>

        <h3>1.1. Структура URL-строки</h3>
        <p>
          Аналогией URL-строки может быть адрес по которому вы проживаете:
          улица, дом, квартира. У каждого состояния интерфейса должен быть свой
          адрес, свой URL. То, что видит пользователь, состояние интерфейса,
          должно быть описано в URL.
        </p>
        <Image filename="url-string.jpg" />

        <ul>
          <li>
            <strong>
              <code>https://</code>
            </strong>{' '}
            - протокол
          </li>
          <li>
            <strong>
              <code>mysite.com/</code>
            </strong>{' '}
            - хост
          </li>
          <li>
            <strong>
              <code>books/e3q76gm9lzk</code>
            </strong>{' '}
            - путь, то где мы находимся в приложении
          </li>
          <li>
            <strong>
              <code>e3q76gm9lzk</code>
            </strong>{' '}
            - url-параметр. Параметры бывают динамическими или статическими
          </li>
          <li>
            <strong>
              <code>?</code>
            </strong>{' '}
            - символ начала строки запроса
          </li>
          <li>
            <strong>
              <code>?category=adventure&amp;status=unread</code>&#8203;
            </strong>{' '}
            - строка запроса
          </li>
          <li>
            <strong>
              <code>category=adventure</code>
            </strong>{' '}
            - пара параметр=значение
          </li>
          <li>
            <strong>
              <code>&amp;</code>
            </strong>{' '}
            - символ "И", разделяет параметры строки запроса
          </li>
          <li>
            <strong>
              <code>#comments</code>
            </strong>{' '}
            - якорь (хеш), определяет положение на странице
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>2. React Router</h2>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>3. Строка запроса</h2>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>4. Редиректы</h2>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>5. Дополнительные материалы</h2>
        <ul>
          <li>
            <Link
              link="https://tylermcginnis.com/build-your-own-react-router-v4/"
              text="Build your own React Router v4"
            />
          </li>
          <li>
            <Link
              link="https://github.com/reach/router"
              text="Репозиторий Reach Router"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Lesson07;
