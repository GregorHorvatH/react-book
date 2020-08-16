import React from 'react';
import { CopyBlock, hybrid } from 'react-code-blocks';
import Link from '../../components/Link';

import * as code from './code';

const Lesson10 = () => (
  <div className="container lesson-10">
    <div className="row">
      <div className="col">
        <h2>1. Ванильный CSS</h2>
        <p>
          CSS3 переходы и анимации это лучший метод для простой анимации, но
          только в тех случаях, когда над анимируемым элементом не выполняются
          операции удаления и добавления в DOM.
        </p>
        <p>
          Использование CSS для скрытия элементов противоречит идеологии React,
          разметка остается в DOM-дереве, и практически невозможно нормально
          сделать анимацию исчезновения. Анимация добавления и удаления
          элементов коллекции излишне сложная.
        </p>
        <Link
          link="https://codesandbox.io/s/lym153z46z?from-embed"
          text="CodeSandbox"
        />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>2. React Transition Group</h2>
        <p>
          Эта библиотека не анимирует стили самостоятельно. Вместо этого,
          разработчику предоставляется набор простых компонентов, которые
          отслеживают этапы перехода состояния элемента (добавления и удаления в
          DOM) и управляют CSS-стилями, тем самым позволяя применить
          определенный CSS на каждом этапе.
        </p>
        <CopyBlock text={code.code1} theme={hybrid} language="jsx" />
        <Link
          link="http://reactcommunity.org/react-transition-group/"
          text="React Transition Group"
        />

        <h3>2.1. Компонент Transition</h3>
        <p>
          Компонент на базе которого построены остальные. Позволяет описывать
          переход компонента от одного состояния к другому с течением времени.
          По умолчанию компонент{' '}
          <code>
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>Transition
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          не изменяет поведение компонента, который он отображает, а только
          отслеживает состояния <code>enter</code> и <code>exit</code>.
          Разработчик может сделать кастомные эффекты (например, добавляя инлайн
          стили или классы) под эти состояния.
        </p>
        <p>Существует 4 основных состояния, в которых может быть элемент:</p>
        <ul>
          <li>
            <code>entering</code> - элемент появляется в DOM
          </li>
          <li>
            <code>entered</code> - элемент появился в DOM
          </li>
          <li>
            <code>exiting</code> - элемент удаляется из DOM
          </li>
          <li>
            <code>exited</code> - элемент удален из DOM
          </li>
        </ul>

        <p>Пропы:</p>
        <ul>
          <li>
            <code>entering</code> - элемент появляется в DOM
          </li>
          <li>
            <code>entered</code> - элемент появился в DOM
          </li>
          <li>
            <code>exiting</code> - элемент удаляется из DOM
          </li>
          <li>
            <code>exited</code> - элемент удален из DOM
          </li>
        </ul>
        <p>
          Если значение пропа <code>in</code> равно <code>true</code>, компонент
          начинает стадию <code>входа</code>. Он переходит из текущего состояния
          к <code>entering</code> и останавливается в нем на указанное в{' '}
          <code>timeout</code> время, по истечении которого переходит в{' '}
          <code>entered</code>.
        </p>
        <p>
          Если значение пропа <code>in</code> равно <code>false</code>,
          компонент начинает стадию <code>Выхода</code>. Он переходит из
          текущего состояния к <code>exiting</code> и останавливается в нем на
          указанное в <code>timeout</code> время, по истечении которого
          переходит в <code>exited</code>.
        </p>
        <Link
          link="https://codesandbox.io/s/vnjol2wvw0?from-embed"
          text="CodeSandbox"
        />

        <h3>2.2. Компонент CSSTransition</h3>
        <p>
          Компонент{' '}
          <code>
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>CSSTransition
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
          </code>
          , в отличии от{' '}
          <code>
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>Transition
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
          </code>
          , инкапсулирует отслеживание стадии перехода и вызывает перекомпоновку
          (reflow) в браузере, что позволяет без дополнительных усилия
          реализовать анимациюю добавления элемента. Получает те же самые пропы{' '}
          <code>in</code>, <code>timeout</code> и другие, а также проп{' '}
          <code>classNames</code>, в котором можно указать кастомные имена
          классов для каждой фазы перехода.
        </p>
        <p>
          Применяет пару CSS-классов для каждой из стадий <code>appear</code>,{' '}
          <code>enter</code>, <code>exit</code> и<code>done</code> во время
          перехода. На старте каждой фазы применяется базовый класс, после чего
          сразу применяется класс с приставкой <code>active</code>. Разработчику
          достаточно передать имя базового класса и описать классы для каждой из
          стадий.
        </p>
        <p>
          К примеру если базовый класс <code>fade</code>:
        </p>
        <CopyBlock text={code.code2} theme={hybrid} language="jsx" />
        <Link
          link="https://codesandbox.io/s/3vz1689l46?from-embed"
          text="CodeSandbox"
        />

        <p>
          Пропу <code>classNames</code> можно передать объект с кастомными
          именами классов под каждую стадию.
        </p>
        <CopyBlock text={code.code3} theme={hybrid} language="jsx" />

        <p>
          Если используются CSS-модули, то имена классов можно назвать как имена
          ключей на объекте для <code>classNames</code> и передать объект
          классов целиком.
        </p>
        <CopyBlock text={code.code4} theme={hybrid} language="jsx" />
        <Link
          link="https://codesandbox.io/s/mox604444y?from-embed"
          text="CodeSandbox"
        />

        <h3>2.3. Transition events</h3>
        <p>
          Всего 6 штук, происходят в указанном порядке. Используются для
          управления сложными анимациями и выполнения кода на определенной
          стадии.
        </p>
        <CopyBlock text={code.code5} theme={hybrid} language="jsx" />

        <h3>2.4. Компонент TransitionGroup</h3>
        <p>
          Компонент{' '}
          <code>
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>TransitionGroup
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          используется как контейнер для управления коллекцией компонентов{' '}
          <code>
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>Transition
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          или{' '}
          <code>
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>CSSTransition
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
          </code>
          . При удалении и добавлении элементов коллекции,{' '}
          <code>
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>TransitionGroup
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          автоматически указывает значение пропа <code>in</code> добавляемого
          или удаляемого элемента.
        </p>
        <p>
          Принимает проп <code>component</code>, в котором можно указать тип
          HTML-элемента который необходимо отрендерить как контейнер, по
          умолчанию будет <code>div</code>. Для передачи стилей есть проп{' '}
          <code>className</code>, значение которого передается элементу.
        </p>
        <Link
          link="https://codesandbox.io/s/7zn06zzkn1?from-embed"
          text="CodeSandbox"
        />

        <h3>2.5. Анимация маршрутов</h3>
        <ul>
          <li>
            <Link
              link="http://reactcommunity.org/react-transition-group/with-react-router"
              text="RTG With React Router"
            />
          </li>
          <li>
            <Link
              link="http://maisano.github.io/react-router-transition/"
              text="React Router Transition"
            />
          </li>
          <li>
            <Link
              link="https://youtu.be/chAJ61qxrz0"
              text="React Router v4 and animating transitions"
            />
          </li>
        </ul>

        <h3>2.6. Дополнительные материалы</h3>
        <ul>
          <li>
            <Link
              link="https://youtu.be/QalLF-sAmVc"
              text="Animating The Virtual DOM"
            />
          </li>
          <li>
            <Link
              link="https://github.com/chenglou/react-motion"
              text="Репозиторий React Motion"
            />
          </li>
          <li>
            <Link
              link="https://alligator.io/react/react-motion/"
              text="Animations in React Using React Motion"
            />
          </li>
          <li>
            <Link
              link="https://medium.com/@nashvail/a-gentle-introduction-to-react-motion-dc50dd9f2459"
              text="A gentle introduction to React Motion"
            />
          </li>
          <li>
            <Link
              link="https://medium.com/@bjorn.holdt/react-motion-101-springs-336f4f29d95a"
              text="React-motion 101: Springs"
            />
          </li>
          <li>
            <Link
              link="https://github.com/react-tools/react-move"
              text="Репозиторий React Move"
            />
          </li>
          <li>
            <Link
              link="https://github.com/gabiseabra/styled-transition-group"
              text="Репозиторий styled-transition-group"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Lesson10;
