import React from 'react';
import { CopyBlock, hybrid } from 'react-code-blocks';
import Image from '../../components/Image';
import Link from '../../components/Link';

import * as code from './code';

const Lesson13 = () => (
  <div className="container lesson-13">
    <div className="row">
      <div className="col">
        <h2>1. Redux middleware</h2>
        <p>
          <strong>Middleware (прослойка)</strong> - общая концепция в
          программном обеспечении, инструмент для расширения функционала,
          находящийся между двух точек в логической цепочке исполнения кода.
        </p>
        <p>
          Прослойка это функция промежуточной обработки, которая получает некие
          данные, может их обработать и, если необходимо, передать дальше по
          цепочке. Можно использовать множество прослоек в одном проекте.
        </p>
        <p>
          Redux-прослойки предоставляют точку расширения между отправкой
          действия и моментом, когда это действие достигает редюсера. Прослойки
          используются для логирования, сообщения об ошибках, обработки
          HTTP-запросов, аналитики и т.д.
        </p>
        <Image filename="redux-flow-with-middleware.png" />

        <ul>
          <li>
            Перед тем как дейсвия попадают в редюсеры, они проходят через
            цепочку (стек) прослоек.
          </li>
          <li>Прослойки получают доступ ко всем действиям.</li>
          <li>
            Если прослойка рассчитана на работу с каким-то действием, она может
            его изменять, отменять или выполнять какие-то другие дейтсвия.
          </li>
          <li>
            Если прослойка не рассчитана на работу с определенным типом
            действий, она просто пропускает действие через себя без изменений.
          </li>
          <li>
            После того как действие прошло всю цепочку прослоек, оно попадает в
            редюсеры.
          </li>
        </ul>
        <Image filename="middleware-stack.png" />

        <h3>1.1. Cоздание прослоек</h3>
        <p>
          Redux написан с применением функционального программирования, поэтому
          для создания прослоек используется
          <Link
            link="http://prgssr.ru/development/vvedenie-v-karrirovanie-v-javascript.html"
            text="каррированая функция"
          />
          .
        </p>
        <CopyBlock text={code.code1} theme={hybrid} language="jsx" />

        <ul>
          <li>
            <code>store</code> - ссылка на Redux-хранилище
          </li>
          <li>
            <code>action</code> - текущее действие
          </li>
          <li>
            <code>next</code> - функция которую необходимо вызвать когда
            прослойка закончила обработку действия, для того чтобы отправить его
            дальше по цепочке прослоек или в редюсеры.
          </li>
        </ul>
        <p>
          Для того чтобы использовать прослойку необходимо добавить ее при
          создании хранилища. Для этого у Redux есть функция{' '}
          <code>applyMiddleware</code>, которая принимает произвольное
          количество аргументов. Результат ее вызова мы передаем как аргумент
          <code>enhancer</code> в <code>createStore()</code>.
        </p>
        <CopyBlock text={code.code2} theme={hybrid} language="jsx" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>2. Асинхронность в Redux</h2>
        <p>
          На иллюстрации ниже изображена полная схема работы Redux в приложении
          при асинхронных запросах.
        </p>
        <Image filename="redux-flow-2.gif" />

        <h3>2.1. Асинхронные действия</h3>
        <p>
          Redux не предоставляет функционала для отправки асинхронных действий,
          эту задачу решают прослойки. Есть много готовых решений: для простых
          асинхронных операций подойдет <code>redux-promise</code>, для средней
          сложности <code>redux-thunk</code>, а для очень сложных и запутанных{' '}
          <code>redux-saga</code> или <code>redux-observable</code>.
        </p>
        <p>
          Для начала необходимо научиться писать асинхронные{' '}
          <code>action creators</code>. Это функции которые вместо
          объекта-действия возвращают функцию. В компьютерных науках это
          называется <code>thunk</code>.
        </p>
        <CopyBlock text={code.code3} theme={hybrid} language="jsx" />

        <p>
          Когда <code>action creator</code> возвращает функцию, эта функция
          будет выполняться прослойкой. Такая функция не должна быть чистой,
          поэтому она может иметь побочные эффекты, в том числе выполнение
          асинхронных HTTP-запросов. В ее теле также могут быть отправлены
          другие сихронные действия.
        </p>
        <CopyBlock text={code.code4} theme={hybrid} language="jsx" />

        <h3>2.2. thunk middleware</h3>
        <p>
          Напишем прослойку <code>thunk</code>, которая умеет обрабатывать
          асинхронные действия. Если действие это функция, она будет вызвана и
          аргументами ей будут переданы
          <code>dispatch</code> и <code>getState</code>, тем самым позволяя
          использовать <code>dispatch</code> в теле действия. В противном
          случае, если это обычный объект, действие будет отправлено дальше по
          цепочке прослоек.
        </p>
        <CopyBlock text={code.code5} theme={hybrid} language="jsx" />
        <Link
          link="https://github.com/reduxjs/redux-thunk"
          text="Репозиторий redux-thunk"
        />

        <h3>2.3. HTTP-запросы</h3>
        <p>
          При асинхроннах операциях зачастую необходимо отображать лоадеры и
          обрабатывать ошибки. В таких случаях можно использовать следующую
          схему действий.
        </p>
        <p>
          Начальное состояние может выглядеть так, с полями флага загрузки и
          хранения ошибки.
        </p>
        <CopyBlock text={code.code6} theme={hybrid} language="jsx" />

        <p>Тогда асинхронное действие может выглядеть так.</p>
        <ul>
          <li>
            При <code>notes/FETCH_START</code> в поле <code>loading</code>{' '}
            записывается <code>true</code>, а при
            <code>notes/FETCH_SUCCESS</code> или{' '}
            <code>notes/FETCH_FAILURE</code> наоборот <code>false</code>
          </li>
          <li>
            При <code>notes/FETCH_FAILURE</code> в поле <code>error</code>{' '}
            записывается объект ошибки
          </li>
          <li>
            При <code>notes/FETCH_SUCCESS</code> в поле <code>items</code>{' '}
            записываются данные
          </li>
        </ul>
        <CopyBlock text={code.code7} theme={hybrid} language="jsx" />

        <h3>2.4. Дополнительные материалы</h3>
        <ul>
          <li>
            <Link
              link="https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60"
              text="Thunks in Redux: The Basics"
            />
          </li>
          <li>
            <Link
              link="https://youtu.be/xihoZZU0gao"
              text="Redux Thunk Tricks"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Lesson13;
