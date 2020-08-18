import React from 'react';
import { CopyBlock, hybrid } from 'react-code-blocks';
import Image from '../../components/Image';
import Link from '../../components/Link';

import * as code from './code';

const Lesson14 = () => (
  <div className="container lesson-14">
    <div className="row">
      <div className="col">
        <h2>1. Селекторы</h2>
        <p>
          Компоненты не должны знать о структуре состояния, их задача - создание
          разметки по полученным <code>props</code>. В случае изменения
          структуры состояния, а это естественный процесс, все компоненты
          которые подписаны на его измененную часть придется рефакторить. В
          решении этой проблемы помогают селекторы.
        </p>
        <p>
          <strong>Селектор</strong> — функция которая получает ссылку на все
          состояние и произвольное кол-во других аргументов. Возвращает только
          определенную часть состояния или вычисляемые данные основываясь на
          состоянии.
        </p>
        <p>
          Наибольшая выгода получается при использовании композиции селекторов
          для рассчета производных данных (<code>derived data</code>).
        </p>
        <p>
          Допустим есть состояние хранящее информацию о постах и текущую сессию
          пользователя.
        </p>
        <CopyBlock text={code.code1} theme={hybrid} language="jsx" />

        <p>Тогда файл селекторов содержит следующие экспорты.</p>
        <CopyBlock text={code.code2} theme={hybrid} language="jsx" />

        <p>Контейнер всех постов подписывается на изменения.</p>
        <CopyBlock text={code.code3} theme={hybrid} language="jsx" />

        <p>Контейнер выбраного поста подписывается на изменения.</p>
        <CopyBlock text={code.code4} theme={hybrid} language="jsx" />

        <p>
          Таким образом, при изменении структуры состояния, рефакторить
          необходимо будет только селекторы, а не все компоненты.
        </p>
        <p>
          Селекторы могут быть сложными и выполнять вычисления, это помогает
          хранить минимально необходимую информацию в <code>store</code>, не
          захламляя его вычисляемыми данными.
        </p>
        <p>
          Использование селекторов не ограничего функцией{' '}
          <code>mapStateToProps</code>, их можно применять в действиях или в
          прослойках.
        </p>
        <Image filename="abstraction-layers.jpg" />

        <p>Полная архитектура React\Redux приложения.</p>
        <Image filename="react-redux-flow.png" />
        <Link
          link="https://medium.com/mofed/react-redux-architecture-overview-7b3e52004b6e"
          text="React + Redux: Architecture Overview"
        />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>2. Общие принципы мемоизации</h2>
        <p>
          <strong>Мемоизация</strong> — сохранение (кеширование) результатов
          выполнения функций для предотвращения повторных вычислений. Это один
          из способов оптимизации, применяемый для увеличения скорости
          выполнения компьютерных программ.
        </p>
        <p>
          Проще говоря, мемоизация — это запоминание, сохранение чего-либо в
          памяти. Функции, в которых используется мемоизация, обычно работают
          быстрее, так как при их повторных вызовах с одними и теми же
          аргументами, они, вместо выполнения вычислений, просто считывают
          результаты из кэша и возвращают их.
        </p>
        <CopyBlock text={code.code5} theme={hybrid} language="jsx" />

        <ul>
          <li>
            Для того, чтобы функцию можно было подвергнуть мемоизации, она
            должна быть чистой.
          </li>
          <li>
            Мемоизация это компромисс между производительностью и потреблением
            памяти.
          </li>
          <li>
            Применять мемоизацию при обращениях к API не стоит, браузер
            автоматически кэширует HTTP-запросы.
          </li>
          <li>
            Лучше всего функции с мемоизацией показывают себя там, где
            выполняются сложные, ресурсоёмкие вычисления.
          </li>
        </ul>

        <h3>2.1. Дополнительные материалы</h3>
        <ul>
          <li>
            <Link
              link="https://habrahabr.ru/company/ruvds/blog/332384/"
              text="Мемоизация в JS и ускорение функций"
            />
          </li>
          <li>
            <Link
              link="https://www.npmjs.com/package/memoizee"
              text="npm-пакет memoizee"
            />
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>3. Reselect</h2>
        <p>
          Каждый раз когда происходит действие в любом месте приложения, все
          подключенные компоненты вызывают функцию <code>mapStateToProps</code>,
          в результате чего вызываются все селекторы, это может бить по
          производительности при работе с большими структурами данных.
        </p>
        <p>
          <strong>Reselect</strong> — библиотека для создания селекторов с
          встроенной мемоизацией аргументов. Позволяет комбинировать селекторы,
          тем самым отбрасывая необходимость кешировать все состояние, и
          использовать мемоизированные значения функций.
        </p>
        <p>
          Тоесть селектор созданный с помощью <code>Reselect</code> вернет
          закешированный результат, если ничего не изменилось. Это позволяет
          выполнять вычисления только в том случае, если в соответствующей части
          дерева состояний произошли изменения.
        </p>
        <CopyBlock text={code.code6} theme={hybrid} language="jsx" />

        <p>
          <strong>createSelector</strong> - основной метод, позволяет создавать
          селекторы на основе композиции других селекторов, мемоизирует
          аргументы.
        </p>
        <p>
          Не используйте <code>createSelector</code> для селекторов которые
          просто обращаются к полю в <code>state</code> и возвращют его
          значение, это излишне.
        </p>
        <CopyBlock text={code.code7} theme={hybrid} language="jsx" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>4. Материалы</h2>

        <Link link="https://codesandbox.io/s/l8q3rqj6q" text="CodeSandbox" />

        <ul>
          <li>
            <Link
              link="https://github.com/reduxjs/reselect"
              text="Репозиторий reselect"
            />
          </li>
          <li>
            <Link
              link="https://youtu.be/6Xwo5mVxDqI"
              text="Reselect with Redux and React.js"
            />
          </li>
          <li>
            <Link
              link="https://youtu.be/_9BDn1QeL4U?t=16m52s"
              text="Фабрики селекторов"
            />
          </li>
          <li>
            <Link
              link="https://youtu.be/yxbe0yoqL38"
              text="Селекторы - уменьшаем связность кода в React/Redux приложениях"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Lesson14;