import React from 'react';
import { CopyBlock, hybrid } from 'react-code-blocks';
import Link from '../../components/Link';
import Image from '../../components/Image';

import * as code from './code';

const Lesson05 = () => (
  <div className="container lesson-05">
    <div className="row">
      <div className="col">
        <h2>1. Жизненный цикл компонента</h2>
        <p>
          Существует несколько стадий жизненного цикла, каждый из которых
          вызывает для компонента методы наследуемые от{' '}
          <code>React.Component</code>. Мы можем переопределить их поведение
          добавив необходимый функционал, в рамках установленных правил.
        </p>
        <Link
          link="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"
          text="Интерактивная диаграмма жизненного цикла"
        />

        <p>Компонент с объявленными методами жизненного цикла.</p>
        <Image filename="lifecycle_code.jpg" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>2. Стадия монтирования</h2>
        <p>
          Следующие методы вызываются когда создается экземпляр компонента и
          добавляется в DOM.
        </p>
        <CopyBlock text={code.code1} theme={hybrid} language="jsx" />

        <p>
          Вызывается в момент создания экземпляра компонента, до того как
          компонент будет помещен в DOM.
        </p>
        <ul>
          <li>Инициализирует начальное состояние компонента</li>
          <li>Привязывает контекст в методах</li>
          <li>
            Нельзя вызывать <code>setState()</code>
          </li>
          <li>В большинстве случаев явное указание конструтора излишне</li>
        </ul>
        <CopyBlock text={code.code2} theme={hybrid} language="jsx" />

        <ul>
          <li>
            Вызывается перед <code>render()</code>, при монтировании и перед
            всеми последующими вызовами <code>render</code>, тоесть после
            обновления <code>state</code> или <code>props</code>.
          </li>
          <li>
            Можно использовать для того чтобы установить <code>state</code> в
            зависимости от <code>props</code>
            при каждом их изменении.
          </li>
          <li>
            Должен вернуть объект, которым будет обновлено состояние, или{' '}
            <code>null</code> если ничего обновлять не нужно.
          </li>
          <li>
            Нут доступа к <code>this</code>
          </li>
        </ul>
        <CopyBlock text={code.code3} theme={hybrid} language="jsx" />

        <ul>
          <li>Позволяет декларативно описать интерфейс</li>
          <li>Возвращает результат JSX-выражений, поддерево Virtual DOM</li>
          <li>
            Нельзя вызывать <code>setState()</code>
          </li>
        </ul>
        <CopyBlock text={code.code4} theme={hybrid} language="jsx" />

        <ul>
          <li>Вызывается сразу после монтирования в DOM</li>
          <li>
            Делаем HTTP-запросы, вешаем кастомные слушатели событий и делаем
            операции с DOM
          </li>
          <li>
            Вызов <code>setState()</code> в этом методе, вызовет ре-рендер - это
            нормально
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>3. Стадия обновления</h2>
        <p>
          Обновление может быть вызвано измением <code>state</code> самого
          компонента или передаваемых ему <code>props</code>. При обновлении
          необходимо перерендерить компонент, что ведет к вызову следующих
          методов.
        </p>
        <CopyBlock text={code.code5} theme={hybrid} language="jsx" />

        <ul>
          <li>Не вызывается при инициализации компонента</li>
          <li>Вызывается перед ре-рендером уже существующего компонента</li>
          <li>Необходим исключительно для оптимизации процесса рендера</li>
          <li>
            По умолчанию <code>render</code> происходит каждый раз при новых{' '}
            <code>props</code> или <code>state</code>
          </li>
          <li>
            Позволяет сравнить текущие и предыдущие <code>state</code> и{' '}
            <code>props</code>, вернув <code>true</code> или
            <code>false</code> указывая React есть ли необходимость обновлять
            компонент
          </li>
          <li>
            Если вернет <code>false</code> то не произойдет{' '}
            <code>render()</code> и <code>componentDidUpdate()</code>
          </li>
          <li>
            Нельзя вызывать <code>setState()</code>
          </li>
          <li>
            Использовать необходимо очень аккуратно, только после замеров
            производительности, в противном случае может привести к обратному
            эффекту
          </li>
          <li>
            Возможно стоит заменить на <code>React.PureComponent</code>, который
            будет делать поверхностное сравнение <code>props</code>. Но только
            после замеров производительности
          </li>
        </ul>
        <CopyBlock text={code.code6} theme={hybrid} language="jsx" />

        <ul>
          <li>
            Вызывается перед тем, как все изменения готовы к добавлению в DOM
          </li>
          <li>
            Можно использовать для получения DOM-значений перед обновлением, к
            примеру текущую позицию скрола
          </li>
          <li>
            То что вернет этот метод, будет передано как третий параметр в
            <code>componentDidUpdate()</code>
          </li>
        </ul>
        <CopyBlock text={code.code7} theme={hybrid} language="jsx" />

        <ul>
          <li>Вызывается сразу после обновления компонента</li>
          <li>Не вызывается при первоначальном рендере компонента</li>
          <li>
            Можно вызывать <code>setState()</code>, обязательно обернув его в
            условие проверки изменения предыдущих и следующих <code>props</code>{' '}
            и <code>state</code>, чтобы не возник бесконечный цикл.
          </li>
          <li>Можно делать HTTP-запросы</li>
          <li>Можно передавать сторонним библиотекам новые данные</li>
          <li>
            Если в компоненте есть <code>getSnapshotBeforeUpdate()</code>, то
            значение возвращаемое им будет передано третим аргументом{' '}
            <code>snapshot</code>, в противном случае его значением будет{' '}
            <code>undefined</code>
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>4. Стадия размонтирования</h2>
        <p>
          В какой-то момент компоненты будут удалены из DOM. При этом вызывается
          следующий метод.
        </p>
        <CopyBlock text={code.code8} theme={hybrid} language="jsx" />

        <ul>
          <li>Вызывается перед размонтированием и удалением элемента из DOM</li>
          <li>
            Отлично подходим для уборки за собой: слушатели, таймеры,
            HTTP-запросы. В противном случае будут утечки памяти
          </li>
          <li>
            Вызывать <code>setState()</code> нет смысла, компонент никогда не
            перерендерится
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>5. Обработка ошибок рендера</h2>
        <p>
          React очень любит класть все приложение при любой ошибке. Метод
          <code>componentDidCatch</code> срабатывает при ошибке в дочернем
          компоненте и позволяет родительским компонентам отлавливать ошибки в
          детях, отображая запасной интерфейс. В результате, при ошибке,
          интерфейс не падает.
        </p>
        <CopyBlock text={code.code9} theme={hybrid} language="jsx" />

        <ul>
          <li>Используется для контроля ошибок</li>
          <li>Ловит ошибки только в детях, но не в самом родителе</li>
          <li>
            <code>error</code> - результат <code>toString()</code> объекта
            ошибки
          </li>
          <li>
            <code>info</code> - объект описывающий stack trace
          </li>
        </ul>
        <CopyBlock text={code.code10} theme={hybrid} language="jsx" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>6. Дополнительные материалы</h2>
        <ul>
          <li>
            <Link
              link="https://ru.reactjs.org/docs/react-component.html#the-component-lifecycle"
              text="Документация - Жизненный цикл компонента"
            />
          </li>
          <li>
            <Link
              link="https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html"
              text="Error Handling in React 16+"
            />
          </li>
          <li>
            <Link
              link="https://cy6eria.ru/posts/5"
              text="Статья о getDerivedStateFromProps"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Lesson05;
