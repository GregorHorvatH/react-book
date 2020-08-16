import React from 'react';
import { CopyBlock, hybrid } from 'react-code-blocks';
import Alert from '../../components/Alert';
import Image from '../../components/Image';
import Link from '../../components/Link';

import * as code from './code';

const Lesson09 = () => (
  <div className="container lesson-09">
    <div className="row">
      <div className="col">
        <h2>1. Паттерны</h2>
        <p>
          В React паттерны различаются по сложности и области применения. От
          простых, повышающих читабельность, чистоту и однородность кода, до
          архитектурных, позволяющих повторно использовать логику, повышая
          поддерживаемость кода. Все библиотеки в экосистеме React используют
          несколько архитектурных паттернов.
        </p>
        <Image filename="patterns.png" />

        <h3>1.1. Higher-Order Component</h3>
        <p>
          <code>HOC</code> &#8202;— функция, которая принимает компонент как
          аргумент и возвращает новый компонент (функцию или класс) с
          расширенным функционалом.
        </p>
        <ul>
          <li>
            Применяется когда нужно использовать повторяющуюся логику,
            применяемую к ряду компонентов, тем самым дополнив их функционал.
          </li>
          <li>HOC должен быть чистой функцией без побочных эффектов.</li>
          <li>
            HOC нельзя использовать в методе <code>render()</code>. Композиция
            должна быть статической, то есть во время экспорта компонента.
          </li>
        </ul>

        <h4>1.1.1. Создание и использование</h4>
        <CopyBlock text={code.code1} theme={hybrid} language="jsx" />

        <p>
          Использование компонента высшего порядка называется{' '}
          <code>статическая композиция</code>, потому что создание обертки
          происходит один раз, при экспорте оборачиваемого компонента.
        </p>
        <CopyBlock text={code.code2} theme={hybrid} language="jsx" />

        <h4>1.1.2. withLog</h4>
        <p>HOC который просто логирует все пропсы полученные компонентом.</p>
        <CopyBlock text={code.code3} theme={hybrid} language="jsx" />

        <h4>1.1.3. withFetch</h4>
        <p>
          Такой HOC можно использовать в компонентах где необходимо получить
          данные от сервера.
        </p>
        <CopyBlock text={code.code4} theme={hybrid} language="jsx" />

        <p>
          Теперь используем с любым компонентом, делая код самого компонента
          чище и убирая потребность в классе.
        </p>
        <CopyBlock text={code.code5} theme={hybrid} language="jsx" />

        <h4>1.1.4. withToggle</h4>
        <p>HOC позволяющий сделать переключаемым любой компонент.</p>
        <CopyBlock text={code.code6} theme={hybrid} language="jsx" />

        <p>
          Получился HOC, который рендерит кнопку для скрытия или отображения
          контента. А что если мы хотим другой элемент управления? Тогда
          придется передать состояние
          <code>isOpen</code> и метод <code>toggle</code> пропсами в{' '}
          <code>WrappedComponent</code>. Это загрязняет его пропсы и приводит к
          проблеме которая называется <code>prop collision</code>. В случае
          когда необходимо рендерить разметку, лучше использовать паттерн{' '}
          <code>Render Prop</code>.
        </p>

        <h4>1.1.5. Дополнительные материалы</h4>
        <ul>
          <li>
            <Link
              link="https://ru.reactjs.org/docs/higher-order-components.html"
              text="Документация по HOC"
            />
          </li>
          <li>
            <Link
              link="https://tylermcginnis.com/react-higher-order-components/"
              text="React Higher-Order Components от Tyler McGinnis"
            />
          </li>
        </ul>

        <h3>1.2. Render Prop</h3>
        <p>
          Как и HOC, позволяет реализовать повторное использование логики. В
          большинстве случаев эти паттерны взаимозаменяемы. Плюс это отсутствие
          сайд-эффектов в обёрнутом компоненте. Минус это{' '}
          <Link
            link="https://medium.com/@ntgard/why-i-dont-use-render-props-in-react-10f18abdff11"
            text="читабельность кода"
          />{' '}
          при использовании нескольких оберток в одном копоненте. Проблема
          читабельности в некоторой степени решается такими библиотеками как{' '}
          <Link
            link="https://github.com/pedronauck/react-adopt"
            text="react-adopt"
          />
          .
        </p>
        <p>
          Идея использования паттерна заключается в передаче управления рендером
          другому компоненту, а сам <code>Render Prop</code> отвечает только за
          состояние и его обновление. Для этого в проп <code>children</code>{' '}
          передается функция.
        </p>

        <h4>1.2.1. Toggler</h4>
        <p>
          Компонент позволяющий сделать переключаемым любой другой компонент.{' '}
          <code>
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>Toggler
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
          </code>
          управляет только изменением состояния, а то как это состояние будет
          использовано его не интересует.
        </p>
        <CopyBlock text={code.code7} theme={hybrid} language="jsx" />

        <p>
          Использование паттерна <code>Render Prop</code> это динамическая
          композиция.{' '}
          <code>
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>Toggler
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
          </code>
          открывает доступ к состоянию и методу для его изменения. Разработчик
          может использовать одинаковую логику для разных элементов интерфейса.
        </p>
        <CopyBlock text={code.code8} theme={hybrid} language="jsx" />

        <h4>1.2.2. Autocomplete и TagList</h4>
        <p>
          Пример повторного использования одной логики фильтрации для создания
          внешне различных компонентов.
        </p>
        <Link
          link="https://codesandbox.io/s/wnvlw82zw8?from-embed"
          text="CodeSandbox"
        />

        <h4>1.2.3. Дополнительные материалы</h4>
        <ul>
          <li>
            <Link
              link="https://youtu.be/BcVAq3YFiuc"
              text="Michael Jackson - Never Write Another HoC"
            />
          </li>
          <li>
            <Link
              link="https://tylermcginnis.com/react-render-props/"
              text="React Render Props от Tyler McGinnis"
            />
          </li>
          <li>
            <Link
              link="https://engineering.dollarshaveclub.com/learn-render-props-by-example-da3e2524dd2e"
              text="Learn Render Props by Example"
            />
          </li>
        </ul>

        <h3>1.3. Дополнительные материалы</h3>
        <ul>
          <li>
            <Link
              link="https://youtu.be/0BNgi9vofaw"
              text="Code Reuse Patterns - Guy Romm"
            />
          </li>
          <li>
            <Link link="https://react-fns.netlify.com/en/" text="react-fns" />
          </li>
          <li>
            <Link
              link="https://github.com/acdlite/recompose"
              text="Репозиторий recompose"
            />
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>2. Context API</h2>
        <p>
          Данные передаются сверху вниз через пропсы, но это может быть неудобно
          для определенных типов данных (глобальных), которые требуются многим
          компонентам на разных уровнях в приложении (локализация, тема
          оформления, состояние авторизации и др.).
        </p>
        <p>
          Контекст обеспечивает способ передачи данных глубоко по дереву
          компонентов без необходимости явно передавать пропсы в промежуточные
          компоненты вручную на каждом уровне.
        </p>
        <Alert type="error">
          <p>
            Не используйте контекст чтобы избежать передачи пропсов на несколько
            уровней вниз.
          </p>
        </Alert>
        <Image filename="props-context.png" />

        <h3>2.1. React.createContext()</h3>
        <CopyBlock text={code.code9} theme={hybrid} language="jsx" />

        <ul>
          <li>
            Создает объект контекста содержащий пару компонентов:{' '}
            <code>
              <span class="token tag">
                <span class="token tag">
                  <span class="token punctuation">&lt;</span>Context.Provider
                </span>
                <span class="token punctuation">&gt;</span>
              </span>
            </code>
            (поставщик) и{' '}
            <code>
              <span class="token tag">
                <span class="token tag">
                  <span class="token punctuation">&lt;</span>Context.Consumer
                </span>
                <span class="token punctuation">&gt;</span>
              </span>
            </code>{' '}
            (потребитель).
          </li>
          <li>
            При рендере, потребитель прочитает текущее значение контекста из
            ближайшего соответствующего поставщика выше в дереве компонентов.
          </li>
          <li>
            Аргумент <code>defaultValue</code> используется потребителем, если у
            него нет соответствующего поставщика над ним в дереве.
          </li>
        </ul>

        <h4>2.1.1. Свойство displayName</h4>
        <p>
          Объекту полученному из функции <code>React.createContext()</code>{' '}
          можно задать строковое свойство <code>displayName</code>. React
          DevTools использует это свойство при отображении контекста.
        </p>
        <p>
          К примеру, следующий компонент будет отображаться под именем{' '}
          <code>ThemeContext</code> в DevTools:
        </p>
        <CopyBlock text={code.code10} theme={hybrid} language="jsx" />

        <h3>2.2. Provider</h3>
        <p>
          Компонент, позволяющий потребителям подписываться на изменения
          контекста. Используется для создания и передачи контекста.
        </p>
        <CopyBlock text={code.code11} theme={hybrid} language="jsx" />

        <ul>
          <li>
            Принимает проп <code>value</code> - значение контекста, которое
            будет передано потомкам-потребителям этого контекста.
          </li>
          <li>
            Позволяет потребителям подписываться на изменения контекста
            независмо от глубины вложености.
          </li>
          <li>Один провайдер может быть связан со многими потребителями.</li>
          <li>Провайдеры могут быть вложены друг в друга.</li>
        </ul>

        <h3>2.3. Consumer</h3>
        <p>
          Компонент, который подписывается на изменения контекста. Получает
          текущий контекст из ближайшего сопоставимого{' '}
          <code>
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>Provider
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          выше в дереве.
        </p>
        <CopyBlock text={code.code12} theme={hybrid} language="jsx" />

        <ul>
          <li>
            Релизован по патерну <code>Render Prop</code>, поэтому ожидает
            функцию в качестве дочернего элемента.
          </li>
          <li>
            Параметр <code>context</code>, будет содержать значение контекста
            ближайшего провайдера для этого контекста выше в дереве.
          </li>
          <li>
            Если для этого контекста нет провайдера, аргумент{' '}
            <code>context</code> будет содержать значение по умолчанию, которое
            было передано в <code>React.createContext()</code>.
          </li>
          <li>
            Все потребители, являющиеся потомками провайдера, будут
            ре-рендериться всякий раз, когда изменяется значение контекста
            (пропа <code>value</code>).
          </li>
          <li>
            Потребитель обновляется даже тогда, когда компонент-предок выше в
            дереве отказался ре-рендериваться используя{' '}
            <code>shouldComponentUpdate()</code>.
          </li>
        </ul>

        <h3>2.4. Контекст темы</h3>
        <CopyBlock text={code.code13} theme={hybrid} language="jsx" />

        <h3>2.5. HOC для подписки на контекст</h3>
        <p>
          Чаще всего контекст потребляется многими компонентами, и явно
          оборачивать каждый компонент с помощью{' '}
          <code>
            <span class="token tag">
              <span class="token tag">
                <span class="token punctuation">&lt;</span>Context.Consumer
              </span>
              <span class="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          не лучший подход. Создадим компонент высшего порядка для подписки на
          контекст.
        </p>
        <CopyBlock text={code.code14} theme={hybrid} language="jsx" />

        <p>
          Теперь любой компонент, который зависит от контекста темы, может легко
          подписаться на него с помощью созданной нами функции{' '}
          <code>withTheme</code>.
        </p>
        <CopyBlock text={code.code15} theme={hybrid} language="jsx" />

        <h3>2.6. Производительность</h3>
        <p>
          Поскольку контекст использует ссылочную идентификацию, чтобы
          определить, когда нужно проводить ре-рендер, существуют некоторые
          подводные камни, которые могут вызвать лишние отрисовки в
          потребителях, когда ре-рендерится родитель провайдера.
        </p>
        <p>
          Например, приведенный ниже код будет повторно отрисовывать всех
          потребителей каждый раз, когда обновляется родитель провайдера, потому
          что для <code>value</code> всегда создается новый объект (новая
          ссылка).
        </p>
        <CopyBlock text={code.code16} theme={hybrid} language="jsx" />

        <p>
          Лучший вариант решения этой проблемы - создать отдельный компонент
          полностью инкапсулирующий всю логику создания и управления контекстом.
          Методы класса так же необходимо поместить в состояние и передавать
          ссылку на него, тогда ре-рендер потребителей будет происходить только
          тогда, когда изменится состояние провайдера.
        </p>
        <CopyBlock text={code.code17} theme={hybrid} language="jsx" />

        <h3>2.7. Пример локализации статьи</h3>
        <p>
          Локализация делается при помощи таких библиотек как{' '}
          <Link
            link="https://github.com/formatjs/react-intl"
            text="react-intl"
          />{' '}
          или{' '}
          <Link
            link="https://github.com/i18next/react-i18next"
            text="react-i18next"
          />
          , которые используют контекст. По примере приведен пример локализации
          статьи с использованием контекста.
        </p>
        <Link
          link="https://codesandbox.io/s/jlk5k0rvow?from-embed"
          text="CodeSandbox"
        />

        <h3>2.8. Дополнительные материалы</h3>
        <ul>
          <li>
            <Link
              link="https://ru.reactjs.org/docs/context.html"
              text="Документация на reactjs.org"
            />
          </li>
          <li>
            <Link
              link="https://itnext.io/understanding-the-react-context-api-through-building-a-shared-snackbar-for-in-app-notifications-6c199446b80c"
              text="Learn the React Context API with a Practical Example You Can Bring to Your Apps"
            />
          </li>
          <li>
            <Link
              link="https://blog.bitsrc.io/why-you-should-consider-the-new-context-api-in-react-a-deep-dive-d588b66c57b5"
              text="Why you should consider the new Context API in
              React?&#8202;—&#8202;A deep dive"
            />
          </li>
          <li>
            <Link
              link="https://medium.com/@rossbulat/react-dark-mode-with-styled-theming-and-context-57557de6400"
              text="React Dark Mode with Styled Theming and Context"
            />
          </li>
          <li>
            <Link
              link="https://medium.com/@jishnu61/6-easy-steps-to-localize-your-react-application-internationalization-with-i18next-8de9cc3a66a1"
              text="6 easy steps to localize your React Application — Internationalization with i18next"
            />
          </li>
          <li>
            <Link
              link="https://www.freecodecamp.org/news/setting-up-internationalization-in-react-from-start-to-finish-6cb94a7af725/"
              text="How to set up Internationalization in React from start to finish"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Lesson09;
