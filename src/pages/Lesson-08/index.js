import React from 'react';
import { CopyBlock, hybrid } from 'react-code-blocks';
import Image from '../../components/Image';
import Link from '../../components/Link';

import * as code from './code';

const Lesson08 = () => (
  <div className="container lesson-08">
    <div className="row">
      <div className="col">
        <h2>1. Code splitting</h2>
        <p>
          Когда приложение становится достаточно большим, монолитный бандл со
          всем исходным кодом загружается, парсится и исполняется, долго
          (секунды, особенно на мобильных). Но если пользователь заходит на
          страницу логина, не имеет смысла загружать остальную часть приложения.
        </p>
        <p>
          Секция приложения может импортировать большое количество компонентов,
          которые не нужны при первой загрузке. Необходимо разбивать бандл на
          отдельные файлы (chunks, чанки) и загружать их динамически, только
          когда это необходимо.
        </p>
        <Image filename="split-bundle.png" />

        <h3>1.1. Динамический импорт в ESM</h3>
        <CopyBlock text={code.code1} theme={hybrid} language="jsx" />

        <p>
          Create React App поддерживает разделение кода и позволяет динамически
          импортировать части приложения используя <code>import()</code>.
        </p>
        <ul>
          <li>
            <Link
              link="https://developers.google.com/web/updates/2017/11/dynamic-import"
              text="Dynamic import()"
            />
          </li>
          <li>
            <Link
              link="https://github.com/tc39/proposal-dynamic-import#import"
              text="proposal-dynamic-import"
            />
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>2. Route-based и Component-based splitting</h2>
        <p>
          Первый подход состоит в разбиении приложения на отдельные маршруты и
          загрузке каждого маршрута асинхронно. Этого вполне достаточно для
          большинства приложений, переходим на новый раут - загружается
          необходимый код для его обслуживания.
        </p>
        <p>
          Но есть еще один вариант. Раут это просто компонент. Поэтому можно
          разделять код на уровне компонентов, а не маршрутов. Какая в этом
          выгода?
        </p>
        <p>
          В действительно большом приложении - огромная. Интерфейсы могут быть
          очень громоздкими, и в тех местах, где модальные окна, вкладки,
          скрытые формы и т. п., не нужны до определенного действия
          пользователя, разделение кода помогает ускорить рендер страницы.
        </p>
        <Image filename="route-vs-component-split.png" />

        <p>
          Это не значит что необходимо использовать один или другой подход,
          используйте оба. Делите и маршруты, и части страницы, это все просто
          компоненты. Как, что и где разделять это целиком ваше решение,
          зависящее от сложившейся ситуации.
        </p>
        <p>
          Чрезмерный сплитинг, кстати, тоже не лучшая идея. HTTP-запрос за
          файлом может быть дольше чем добавленный вес к первой загрузке.
        </p>

        <h3>2.1. asyncComponent HOC</h3>
        <ul>
          <li>
            Функция <code>asyncComponent</code> принимает объект настроек из
            двух свойств: <code>loader</code> - функция, которая при вызове
            будет динамически импортировать компонент,
            <code>loading</code> - компонент который будем показывать пока идет
            HTTP-запрос.
          </li>
          <li>
            В <code>componentDidMount</code> мы просто вызываем функцию{' '}
            <code>loader</code>, и сохраняем динамически загруженный компонент в
            состояние.
          </li>
          <li>
            После чего делаем рендер по условию, где рендерим загруженный
            компонент, если он уже загрузился. В противном случае рендерим
            компонент <code>Loading</code>.
          </li>
        </ul>
        <CopyBlock text={code.code2} theme={hybrid} language="jsx" />

        <p>Теперь используем эту функцию для динамической загрузки страниц.</p>
        <CopyBlock text={code.code3} theme={hybrid} language="jsx" />

        <p>
          Важно понимать, что здесь не происходит импорта компонента. Мы
          передаем функцию которая будет использована для динамического импорта,
          когда будет создан компонент <code>AsyncHome</code>.
        </p>
        <p>
          Может показаться странным, что мы передаем функцию. Почему бы просто
          не передать строку <code>'./pages/Home'</code>, а затем выполнить
          динамический импорт внутри
          <code>asyncComponent</code>?
        </p>
        <p>
          Это связано с тем, что мы хотим явно указать компонент, который мы
          динамически импортируем. Основываясь на этом, Webpack разбивает наше
          приложение. Он смотрит на эти импорты и генерирует необходимые чанки
          (куски, chunks).
        </p>
        <p>
          После создания <code>AsyncHome</code> мы можем использовать его в
          маршрутах. При совпадении маршрута, React Router создаст экземпляр
          компонента <code>AsyncHome</code>, который, в свою очередь,
          динамически импортирует компонент <code>Home</code> и отрендерит его.
        </p>
        <CopyBlock text={code.code4} theme={hybrid} language="jsx" />
        <Image filename="split.png" />

        <p>
          Каждый из файлов <code>.chunk.js</code> - это вызовы{' '}
          <code>import()</code>, асинхронно загружаемые компоненты.
        </p>

        <h3>2.2. Имена чанков</h3>
        <p>Если необходимо дать чанкам вменяемые имена, делается это так:</p>
        <CopyBlock text={code.code5} theme={hybrid} language="jsx" />
        <Link
          link="https://github.com/webpack/webpack/tree/master/examples/code-splitting-specify-chunk-name"
          text="ode-splitting-specify-chunk-name"
        />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>3. React Loadable</h2>
        <p>
          Что произойдет, если запрос на импорт нового компонента займет слишком
          много времени или HTTP-запрос не удастся. Или, возможно, необходимо
          предварительно загрузить определенные компоненты. Например,
          пользователь находится странице логина, и необходимо предварительно
          загрузить домашнюю страницу.
        </p>
        <p>
          <code>React Loadable</code> - небольшая библиотека, которая упрощает
          разделение компонентно-ориентированного кода.
        </p>
        <p>
          <code>Loadable</code> - компонент высшего порядка, который позволяет
          легко разделить код на уровне компонентов.
        </p>
        <Link
          link="https://github.com/jamiebuilds/react-loadable"
          text="Репозиторий react-loadable"
        />
        <p>Добавим пакет в проект.</p>
        <CopyBlock text={code.code6} theme={hybrid} language="jsx" />

        <p>
          Достаточно заменить <code>asyncComponent</code> на{' '}
          <code>Loadable</code> и все продолжит работать как и раньше.
        </p>
        <p>
          Одно но, можно улучшить компонент <code>Loading</code>, потому что{' '}
          <code>react-loadable</code>
          прокидывает ему несколько очень полезных свойств.
        </p>
        <CopyBlock text={code.code7} theme={hybrid} language="jsx" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>4. React.lazy версии 16.6+</h2>
        <p>
          Официальный API который позволяет рендерить динамически загружаемый
          компонент. Заменит <code>react-loadable</code>.
        </p>
        <CopyBlock text={code.code8} theme={hybrid} language="jsx" />

        <p>
          Принимает функцию-згарузчик которая возвращает результат динамического
          импорта - промис, значение которого будет дефолтный экспорт модуля,
          реакт компонент.
        </p>
        <CopyBlock text={code.code9} theme={hybrid} language="jsx" />

        <p>
          Если во время ренедера <code>MyComponent</code>, компонент{' '}
          <code>AsyncComponent</code> еще не загружен, необходимо показать
          фолбек. Для этого используется компонент
          <code>Suspense</code>. Проп <code>fallback</code> принимает любой
          React-элемент. <code>Susupense</code> можно поместить в любом месте
          над асинхронным компонентом, даже оборачивая целую группу.
        </p>
        <Link
          link="https://reactjs.org/docs/code-splitting.html#reactlazy"
          text="Документация React.lazy"
        />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>5. Дополнительные материалы</h2>
        <ul>
          <li>
            <Link
              link="https://alligator.io/react/react-loadable/"
              text="Code Splitting in React Using React Loadable"
            />
          </li>
          <li>
            <Link
              link="https://youtu.be/bb6RCrDaxhw"
              text="Neehar Venugopal - A Beginner's Guide to Code Splitting Your React
              App - React Conf 2017"
            />
          </li>
          <li>
            <Link
              link="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/"
              text="JavaScript Start-up Optimization"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Lesson08;
