import React from 'react';
import { CopyBlock, hybrid } from 'react-code-blocks';
import Alert from '../../components/Alert';
import Image from '../../components/Image';
import Link from '../../components/Link';

import * as code from './code';

const Lesson01 = () => (
  <div className="container lesson-01">
    <div className="row">
      <div className="col">
        <h2>1. Веб-приложения</h2>
        <p>
          В современной веб-разработке изменились не только техники позволяющие
          веб-сайтам выглядеть лучше, загружаться быстрее и быть приятнее в
          использовании. В первую очередь изменились фундаментальные вещи - то,
          как мы проектируем и создаем веб-приложения.
        </p>
        <p>
          Возьмем произвольный веб-сайт, например для работы с коллекцией
          рецептов, расписанием тренировок и т. п. Всегда есть набор страниц:
          домашняя, профиль, страница коллекции и страница одного элемента
          коллекции.
        </p>
        <Image filename="web-app.png" />

        <h3>1.1. Multiple-page Application</h3>
        <p>
          Несколько лет назад мы бы использовали подход включающий несколько
          отдельных HTML-страниц.
        </p>
        <Image filename="mpa.jpg" />

        <ul>
          <li>Архитектура клиент-сервер</li>
          <li>Вся логика живет на сервере</li>
          <li>На каждый запрос сервер отсылает готовый HTML-документ</li>
          <li>Перезагрузка страницы при каждом запросе</li>
          <li>Плохая интерактивность</li>
          <li>Отличное SEO</li>
        </ul>

        <h3>1.2. Single-page Application</h3>
        <p>
          Современный подход - сайт, на котором пользователь никогда не
          переходит на другие HTML-страницы. Интерфейс, вместо запроса
          HTML-документов с сервера, перерисовывается на клиенте, на одной и той
          же странице, без перезагрузки.
        </p>
        <Image filename="spa.png" />

        <ul>
          <li>Архитектура клиент-сервер</li>
          <li>
            При загрузке сайта сервер всегда отдает стартовую HTML-страницу{' '}
            <code>index.html</code>
          </li>
          <li>
            Каждый последующий запрос на сервер получает только данные в
            JSON-формате
          </li>
          <li>Обновление интерфейса происходит динамически на клиенте</li>
          <li>
            Загрузка первой страницы может быть довольно медленной (лечится)
          </li>
          <li>Логика не связанная с безопасностью живет на клиенте</li>
          <li>Слабое SEO (лечится)</li>
          <li>
            Сложность кода и его поддержки масштабируется с кол-вом функционала
            приложения
          </li>
        </ul>
        <p>
          <Link
            link="https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58"
            text="Single-page application vs. multiple-page application"
          />
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>2. React</h2>
        <p>
          Библиотека для создания элементов интефрейса. В React нет встроенной
          маршрутизации, HTTP-модуля и т. п. Тем не менее есть богатая
          экосистема, которая позволит решить любую задачу.
        </p>
        <p>
          При создании приложения с использованием React, разработчик не
          взаимодействует с DOM-деревом напрямую. Его задача описать интерфейс с
          помощью компонентов (шаблон) и управлять изменением данных (модель).
          React, при изменении данных модели, сам обновит интерфейс по шаблону.
        </p>
        <p>
          React мультиплатформенный, разметку можно рендерить на сервере (
          <Link link="https://nextjs.org" text="Next.js" />
          ), писать нативные (
          <Link
            link="https://facebook.github.io/react-native"
            text="React Native"
          />
          ) или десктопные (
          <Link link="https://www.electronjs.org" text="Electron" />)
          приложения.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>3. Browser DOM и Virtual DOM</h2>
        <p>
          <strong>Browser DOM</strong> - древовидное представление
          HTML-документа, где каждый элемент документа представлен в виде
          DOM-узла. Хранится в браузере и напрямую связан с тем что мы видим на
          странице.
        </p>
        <p>
          При каждом изменении DOM, браузер выполняет несколько трудоемких
          операций. Частые операции обновления такого дерева негативно влияют на
          производительность и отзывчивость интерфейса. Поэтому он медленный и
          обновлять его необходимо эффективно.
        </p>
        <Image filename="browser-rendering-flow.png" />

        <p>
          <strong>Virtual DOM</strong> - абстракция, легковесная копия реального
          DOM-дерева в виде JSON-документа.
        </p>
        <ul>
          <li>Существует только в памяти и не рендерится в браузере</li>
          <li>Не зависит от внутренней имплементации браузера</li>
          <li>Использует лучшие практики обновления реального DOM</li>
          <li>
            Собирает обновления в группы для оптимизации рендера (batching)
          </li>
        </ul>
        <p>
          <Link
            link="https://illustrated.dev/react-vdom"
            text="What the Fork is the React Virtual DOM?"
          />
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>4. Инструменты</h2>
        <p>
          Для создания React-приложения необходимы Node.js, Webpack, Babel,
          React и DevTools. Можно написать свою Webpack-сборку или взять любую
          хорошую с GitHub.
        </p>

        <h3>4.1. Create React App</h3>
        <p>
          Для обучения и маленьких/средних проектов рекомендуется использовать
          утилиту от авторов React.
        </p>
        <ul>
          <li>
            Абстрагирует всю конфигурацию, позволяя сосредоточиться на написании
            кода
          </li>
          <li>
            Включает необходимые инструменты: <code>Webpack</code>,{' '}
            <code>Babel</code>, <code>ESLint</code> и т. п.
          </li>
          <li>Расширяется дополнительными пакетами из экосистемы React</li>
          <li>
            Имеет функцию извлечения, которая удаляет абстракцию и открывает
            конфигурацию
          </li>
        </ul>

        <CopyBlock text={code.code1} theme={hybrid} language="text" />
        <Alert>
          <p>
            Для того чтобы создать приложение в текущей папке, вместо имени
            проекта ставится точка. Например <code>npx create-react-app .</code>{' '}
            Это можно использовать когда был склонирован репозиторий и в его
            локальной версии инициализируется приложение.
          </p>
        </Alert>

        <p>
          <strong>npx</strong> — инструмент, предназначенный для того, чтобы
          помочь стандартизировать использование npm-пакетов. Поставляется с npm
          версии <code>5.2.0</code> и выше. <code>npm</code>
          упрощает установку и управление зависимостями, размещенными в реестре,
          a <code>npx</code>
          упрощает использование CLI-утилит и других исполняемых файлов без
          необходимости их установки в систему или проект.
        </p>
        <p>
          <Link
            link="https://create-react-app.dev"
            text="Документация Create React App"
          />
        </p>

        <h3>4.2. React DevTools</h3>
        <p>
          В инструментах разработчика можно посмотреть на дерево компонентов, их
          состояние и пропсы. Профайлер полезен при оптимизации приложения.
        </p>
        <ul>
          <li>
            <Link
              link="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en"
              text="Devtools в Chrome Web Store"
            />
          </li>
          <li>
            <Link
              link="https://reactjs.org/blog/2019/08/15/new-react-devtools.html"
              text="Introducing the New React DevTools"
            />
          </li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>5. React-элементы</h2>
        <p>
          <strong>React-элементы</strong> - это самые маленькие строительные
          блоки React, элементы Virtual DOM. Элементы это обычные JS-объекты,
          поэтому создавать их очень быстро.
        </p>
        <p>
          Функция <code>React.createElement()</code> это самый главный метод
          предоставляемый React API. Подобно{' '}
          <code>document.createElement()</code> для DOM,{' '}
          <code>React.createElement()</code> это функция для создания
          React-элементов. Возвращает объект, элемент Virtual DOM.
        </p>

        <CopyBlock text={code.code2} theme={hybrid} language="text" />

        <ul>
          <li>
            <code>type</code> - имя встроенного React-элемента который в Virtual
            DOM соответсвует будущему HTML-тегу.
          </li>
          <li>
            <code>props</code> - объект содержащий HTML-атрибуты и кастомные
            свойства. Может быть
            <code>null</code> или пустой объект, если передавать ничего не
            нужно.
          </li>
          <li>
            <code>children</code> - произвольное количество аргументов после
            второго это дети создаваемого элемента. Так создается дерево
            элементов.
          </li>
        </ul>

        <CopyBlock text={code.code3} theme={hybrid} language="javascript" />

        <p>Создадим элемент с детьми, карточку продукта.</p>
        <CopyBlock text={code.code4} theme={hybrid} language="javascript" />

        <p>
          <Link
            link="https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html"
            text="React Components, Elements, and Instances"
          />
        </p>

        <h3>5.1. Рендер элемента в DOM-дерево</h3>
        <p>
          Для того чтобы отрендерить элемент, в пакете <code>react-dom</code>{' '}
          есть метод
          <code>ReactDOM.render()</code>.
        </p>
        <ul>
          <li>
            Первым аргументом принимает ссылку на React-элемент или компонент
            (что рендерить)
          </li>
          <li>
            Вторым, ссылку на уже существующий DOM-элемент (куда рендерить)
          </li>
        </ul>
        <CopyBlock text={code.code5} theme={hybrid} language="javascript" />

        <p>
          React использует модель отношений <code>предок - потомок</code>,
          поэтому достаточно использовать только один вызов{' '}
          <code>ReactDOM.render()</code> в приложении. Рендер самого верхнего
          элемента в иерархии повлечет за собой рендер всего поддерева.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>6. JavaScript Syntax Extension (JSX)</h2>
        <p>
          Код в предыдущем разделе понятен браузеру. Но так описывать разметку
          интерфейса неудобно, нам привычен HTML. Для этого был создан{' '}
          <code>JSX</code>.
        </p>
        <ul>
          <li>
            Позволяет использовать XML-образный синтаксис прямо в JavaScript
          </li>
          <li>Упрощает код, делает его декларативным и читабельным</li>
          <li>Описывает объекты - элементы Virtual DOM</li>
          <li>
            Это не HTML, Babel трансформирует JSX в вызовы{' '}
            <code>React.createElement()</code>
          </li>
          <li>В JSX можно использовать весь потенциал JavaScript</li>
        </ul>
        <p>JSX не обязателен, но давайте сравним следующий код.</p>
        <CopyBlock text={code.code6} theme={hybrid} language="javascript" />

        <p>
          <code>JSX</code> значительно чище и читабельнее. Используя{' '}
          <code>JSX</code>, компоненты становятся похожи на HTML-шаблоны.
          Перепишем карточку продукта.
        </p>
        <CopyBlock text={code.code7} theme={hybrid} language="javascript" />

        <ul>
          <li>
            JSX преобразовывается в вызовы <code>React.createElement()</code>,
            поэтому пакет React должен быть в области видимости модуля.
          </li>
          <li>
            Можно использовать практически любое валидное JavaScript-выражение,
            оборачивая его в фигурные скобки.
          </li>
          <li>
            Значения атрибутов указываются через двойные кавычки, если это
            обычная строка, и через фигурные скобки, если значение вычисляется,
            либо тип отличается от строки.
          </li>
          <li>
            Все атрибуты React-элементов именуются в <code>camelCase</code>{' '}
            нотации.
          </li>
          <li>
            JSX-теги могут быть родителями других JSX-тегов. Если тег пустой или
            самозакрывающийся, его обязательно необходимо закрыть используя{' '}
            <code>/&gt;</code>.
          </li>
        </ul>
        <p>
          <Link
            link="https://illustrated.dev/jsx"
            text="The Glorious Lovechild of JSX"
          />
        </p>

        <h3>6.1. Правило общего родителя</h3>
        <p>Разберем следующий код с не валидной JSX-разметкой.</p>
        <CopyBlock text={code.code8} theme={hybrid} language="javascript" />

        <p>
          Перепишем код используя <code>React.createElement()</code>.
        </p>
        <CopyBlock text={code.code9} theme={hybrid} language="javascript" />

        <p>
          Невалидное выражение справа от оператора присваивания, потому что само
          по себе присваиваемое выражение не имеет смысла. Выражение это одно
          значение, результат неких вычислений, отсюда и правило общего
          родителя.
        </p>
        <CopyBlock text={code.code10} theme={hybrid} language="javascript" />

        <p>В JSX это выглядит так.</p>
        <CopyBlock text={code.code11} theme={hybrid} language="javascript" />

        <p>
          Если в разметке лишний тег-обертка не нужен, используются{' '}
          <code>Фрагменты</code>, похожие на <code>DocumentFragment</code>. Этот
          встроенный компонент при рендере растворяется, подставляя свое
          содержимое.
        </p>
        <CopyBlock text={code.code12} theme={hybrid} language="javascript" />

        <p>
          Синтаксис фрагментов можно сократить и не добавлять импорт{' '}
          <code>Fragment</code>. Babel сделает все необходимые трансформации,
          заменив пустые JSX-теги на
          <code>React.Fragment</code>.
        </p>
        <CopyBlock text={code.code13} theme={hybrid} language="javascript" />

        <h3>6.2. Дополнительные материалы</h3>
        <ul>
          <li>
            <Link
              link="https://ru.reactjs.org/docs/introducing-jsx.html"
              text="Знакомство с JSX"
            />
          </li>
          <li>
            <Link
              link="https://ru.reactjs.org/docs/dom-elements.html#differences-in-attributes"
              text="Различия в атрибутах"
            />
          </li>
          <li>
            <Link
              link="https://ru.reactjs.org/docs/rendering-elements.html"
              text="Рендеринг элементов"
            />
          </li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>7. Компоненты</h2>
        <p>
          <strong>Компоненты</strong> - основные строительные блоки
          React-приложений, при помощи которых интерфейс делится разделить на
          независимые части.
        </p>
        <p>
          Разработчик создает небольшие компоненты, которые можно объединять,
          чтобы сформировать более крупные или использовать их как
          самостоятельные элементы интерфейса. Самое главное в этой концепции
          то, что и большие, и маленькие компоненты можно использовать повторно
          и в текущем и в новом проекте.
        </p>
        <Image filename="components.png" />
        <p>
          React-приложение можно представить как дерево компонентов. На верхнем
          уровне стоит корневой компонент, в котором вложено произвольное
          количество других компонентов. Каждый компонент должен вернуть
          JSX-разметку, тем самым указывая какой HTML мы хотим отрендерить в
          DOM.
        </p>

        <h3>7.1. Компоненты-функции</h3>
        <p>
          В простейшей форме компонент это JavaScript-функция с очень простым
          контрактом: функция получает объект свойств который называется{' '}
          <code>props</code> и возвращает дерево React-элементов.
        </p>
        <Image filename="func-comp.jpg" />
        <Alert>
          <p>
            Имя компонента обязательно должно начинаться с заглавной буквы.
            Названия компонентов с маленькой буквы зарезервированы для
            HTML-элементов. Если вы попробуете назвать компонент{' '}
            <code>card</code>, а не <code>Card</code>, при рендере, React
            проигнорирует его и отрендерит тег{' '}
            <code>&lt;card&gt; &lt;/card&gt;</code>.
          </p>
        </Alert>
        <CopyBlock text={code.code14} theme={hybrid} language="javascript" />

        <p>Компоненты-функции составляют большую часть React-приложения.</p>
        <ul>
          <li>Меньше boilerplate-кода</li>
          <li>Легче воспринимать</li>
          <li>Легче тестировать</li>
          <li>Нет контекста (this)</li>
        </ul>
        <p>Сделаем карточку продукта компонентом-функцией.</p>
        <CopyBlock text={code.code15} theme={hybrid} language="javascript" />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>8. Свойства компонента (props)</h2>
        <p>
          Свойства (пропсы) это одна из основных концепций React. Компоненты
          принимают произвольные свойства и возвращают React-элементы,
          описывающие что должно отрендерится в DOM.
        </p>
        <ul>
          <li>
            Пропсы используются для передачи данных от родителя к ребенку.
          </li>
          <li>
            Пропсы передаются только вниз по дереву от родительского компонента.
          </li>
          <li>
            При изменении пропсов React ре-рендерит компонент и, возможно,
            обновляет DOM.
          </li>
          <li>
            Пропсы доступны только для чтения, изменить их в ребенке нельзя.
          </li>
        </ul>
        <Image filename="props.png" />
        <p>
          Пропсом может быть текст кнопки, картинка, url, любые данные для
          компонента. Пропсы могут быть строками или результатом JS-выражения.
          Если передано только имя пропса - это буль, по умолчанию{' '}
          <code>true</code>.
        </p>
        <CopyBlock text={code.code16} theme={hybrid} language="javascript" />

        <p>
          Компонент{' '}
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>Product
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          объявляет параметр <code>props</code>, это всегда будет объект
          содержащий все переданные пропсы.
        </p>
        <CopyBlock text={code.code17} theme={hybrid} language="javascript" />

        <p>
          Добавим компоненту{' '}
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>Products
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          несколько других свойств.
        </p>
        <CopyBlock text={code.code18} theme={hybrid} language="javascript" />

        <p>
          Сразу будем использовать простой паттерн при работе с{' '}
          <code>props</code>. Так как <code>props</code>
          это объект, мы можем деструктуризировать его в подписи функции. Это
          сделает код чище и читабельнее.
        </p>
        <CopyBlock text={code.code19} theme={hybrid} language="javascript" />

        <p>
          В результате мы создали настраиваемый компонент который можно
          использовать для отображения товара. Мы передаем ему данные как
          пропсы, а в ответ получаем дерево React-элементов с подставленными
          значениями.
        </p>
        <ul>
          <li>
            <Link
              link="https://ru.reactjs.org/docs/components-and-props.html"
              text="Компоненты и пропсы"
            />
          </li>
          <li>
            <Link
              link="https://ru.reactjs.org/docs/jsx-in-depth.html"
              text="JSX в деталях"
            />
          </li>
          <li>
            <Link
              link="https://ru.reactjs.org/docs/jsx-in-depth.html#spread-attributes"
              text="Spread Attributes"
            />
          </li>
        </ul>

        <h3>8.1. Свойство props.children</h3>
        <p>
          Концепция дочерних элементов позволяет очень просто делать композицию
          компонентов. В виде детей можно передавать компоненты, как встроенные
          так и кастомные. Это очень удобно при работе со сложными составными
          компонентами.
        </p>
        <ul>
          <li>
            Свойство <code>children</code> автоматически доступно в каждом
            компоненте, его содержимым является то, что стоит между открывающим
            и закрывающим JSX-тегом.
          </li>
          <li>
            В функциональных компонентах обращаемся как{' '}
            <code>props.children</code>.
          </li>
          <li>
            Значением <code>props.children</code> может быть практически что
            угодно.
          </li>
        </ul>
        <p>
          К примеру у нас есть компонент профиля{' '}
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>Profile
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          и оформительный компонент
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>Panel
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
          , в который мы можем помещать произвольный контент.
        </p>
        <CopyBlock text={code.code20} theme={hybrid} language="javascript" />

        <p>
          В противном случае нам бы пришлось пробросить пропы для{' '}
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>Profile
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          сквозь
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>Panel
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
          , что более тесно связывает компоненты и усложняет повторное
          использование.
        </p>

        <h3>8.2. Свойство defaultProps</h3>
        <p>
          Что если компонент ожидает какое-то значение, а его не передали? - при
          обращении к свойству объекта <code>props</code>, получим{' '}
          <code>undefined</code>.
        </p>
        <p>
          Для того чтобы указать значения свойств по умолчанию, у компонентов
          есть статическое свойство <code>defaultProps</code>, в котором можно
          указать объект с дефолтными значениями пропов (не обязательно всех).
          Этот объект будет слит с пришедшим объектом <code>props</code>.
        </p>
        <CopyBlock text={code.code21} theme={hybrid} language="javascript" />

        <h3>8.3. Свойство propTypes</h3>
        <p>
          Проверка типов получаемых пропсов позволит отловить много ошибок. Это
          экономит время на дебаг, помогает при невнимательности и спасает при
          росте приложения. В будущем будет необходимо выделить время и
          познакомиться с Flow или TypeScript, а для старта хватит небольшой
          библиотеки.
        </p>
        <p>
          Пакет{' '}
          <Link
            link="https://www.npmjs.com/package/prop-types"
            text="prop-types"
          />{' '}
          предоставляет ряд валидаторов для проверки корректности полученных
          типов данных во время исполнения кода, уведомляя о несоответствиях в
          консоли. Все что необходимо сделать это описать типы пропсов
          получаемых компонентом в специальном статическом свойстве{' '}
          <code>propTypes</code>. Проверка пропов с помощью{' '}
          <code>prop-types</code>
          происходит только во время разработки, в продакшене в ней нет
          необходимости.
        </p>
        <CopyBlock text={code.code22} theme={hybrid} language="javascript" />

        <p>
          Используем <code>prop-types</code> и опишем пропсы компонента{' '}
          <code>Product</code>.
        </p>
        <CopyBlock text={code.code23} theme={hybrid} language="javascript" />

        <p>
          Сначала применяются значения по умолчанию, заданные в{' '}
          <code>defaultProps</code>. После запускается проверка типов с помощью{' '}
          <code>propTypes</code>. Так что проверка типов распространяется и на
          значения по умолчанию.
        </p>
        <Link
          link="https://ru.reactjs.org/docs/typechecking-with-proptypes.html"
          text="Проверка типов с помощью PropTypes"
        />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>9. Рендер по условию</h2>
        <p>
          Для рендера разметки по условию используются операторы ветвлений и
          условий. Условия можно проверять перед возвратом разметки, или прямо в
          JSX.
        </p>
        <Alert>
          <p>
            Если по условию ничего не должно быть отрендерено, можно вернуть{' '}
            <code>null</code>, <code>undefined</code> или <code>false</code>,
            они не рендерятся.
          </p>
        </Alert>

        <h3>9.1. if с помощью логического оператора &&</h3>
        <p>
          Читается как: если условие приводится к <code>true</code>, то рендерим
          разметку.
        </p>
        <CopyBlock text={code.code24} theme={hybrid} language="javascript" />

        <h3>9.2. if...else с помощью тернарного оператора</h3>
        <p>
          Читается как: если условие приводится к <code>true</code>, рендерим
          разметку после <code>?</code>, в противном случае рендерим разметку
          после <code>:</code>.
        </p>
        <CopyBlock text={code.code25} theme={hybrid} language="javascript" />

        <p>
          Последний пример можно записать по другому, результат будет
          одинаковый.
        </p>
        <CopyBlock text={code.code26} theme={hybrid} language="javascript" />

        <p>Пусть в компоненте продукта еще есть его доступное количество.</p>
        <CopyBlock text={code.code27} theme={hybrid} language="javascript" />

        <h3>9.3. Дополинтельные материалы</h3>
        <ul>
          <li>
            <Link
              link="https://ru.reactjs.org/docs/conditional-rendering.html"
              text="Условный рендеринг"
            />
          </li>
          <li>
            <Link
              link="https://www.robinwieruch.de/conditional-rendering-react/"
              text="All the Conditional Renderings in React"
            />
          </li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>10. Коллекции</h2>
        <p>
          Для того чтобы отрендерить коллекцию однотипных элементов,
          используется метод
          <code>Array.prototype.map()</code>, callback-функция которого, для
          каждого элемента коллекции, возвращает JSX-разметку. Таким образом
          получаем массив React-элементов который можно рендерить.
        </p>
        <CopyBlock text={code.code28} theme={hybrid} language="javascript" />

        <h3>10.1. Ключи</h3>
        <p>
          При выполнении кода из примера выше, всплывет предупреждение о том,
          что для элементов списка требуется ключ. React не может отличить
          элементы в коллекции, таким образом, перерисовывая всю коллекцию
          целиком при любых изменениях.
        </p>
        <p>
          <strong>Ключ (key)</strong> — это специальный строковый проп, который
          нужно задать при создании элементов коллекции.
        </p>
        <p>
          Элементы внутри коллекции должны быть обеспечены ключами, чтобы иметь
          стабильную идентичность. React использует ключи, чтобы определить,
          какие из элементов в коллекции необходимо создать и отрендерить
          заново, а не использовать элементы из предыдущего рендера. Так мы
          избегаем пересоздания всех элементов коллекции каждый раз, когда
          что-то меняется.
        </p>
        <p>Ключи должны быть:</p>
        <ul>
          <li>
            <strong>Уникальные</strong> - ключ элемента должен быть уникальным
            только среди его соседей. Нет смысла в глобально уникальных ключах.
          </li>
          <li>
            <strong>Стабильные</strong> - ключ элемента не должен меняться со
            временем, изменением порядка элементов или после обновления
            страницы.
          </li>
        </ul>
        <Alert>
          <p>
            Индексы массива уникальны, однако они не стабильны, при перетасовке
            коллекции ключи меняются. Дата и время уникальны, но не стабильны,
            так как постоянно увеличиваются. Таким образом, при каждом рендере
            получаются новые ключи. Использование случайного числа равносильно
            тому, что ключи вообще не используются, поскольку случайные числа не
            являются уникальными или стабильными.
          </p>
        </Alert>
        <p>
          Лучший способ задать ключ — использовать статическую строку, которая
          однозначно идентифицирует элемент списка среди остальных. Чаще всего в
          качестве ключей используются идентификаторы объектов созданных базой
          данных - постоянное, неизменное значение.
        </p>
        <CopyBlock text={code.code29} theme={hybrid} language="javascript" />

        <h3>10.2. Дополнительные материалы</h3>
        <Link
          link="https://ru.reactjs.org/docs/lists-and-keys.html"
          text="Списки и ключи"
        />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>11. Алгоритм обновления DOM</h2>
        <p>
          В React каждый элемент интерфейса это компонент (кастомный или
          встроенный), который зависит от пропсов или состояния, и представлен
          узлами виртуального DOM-дерева. Взаимодействие пользователя с
          интерфейсом изменяет состояние приложения.
        </p>
        <Image filename="vdom-and-dom.png" />

        <p>
          При изменении компонента создается новое виртуальное DOM-дерево.
          Далее, используя <code>breadth-first</code> алгоритм, происходит
          сравнение (дифференцирование, diffing) двух виртуальных деревьев - до
          и после обновления.
        </p>
        <Image filename="breadth-first-algorithm.jpeg" />

        <p>
          Красные узлы представляют элементы, которые изменились. Вычисляется
          разница между предыдущей и новой версией виртуального DOM-дерева.
          Применяется оптимальный вариант внесения изменений в реальный DOM. Это
          гарантирует, что в реальном DOM-дереве производится минимальное
          количество обновлений, тем самым повышая производительность
          интерфейса.
        </p>
        <Image filename="dom-update-chain.png" />

        <h3>11.1. Дополнительные материалы</h3>
        <ul>
          <li>
            <Link
              link="https://ru.reactjs.org/docs/reconciliation.html"
              text="Документация по Reconciliation"
            />
          </li>
          <li>
            <Link
              link="https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e"
              text="How Virtual-DOM and diffing works in React"
            />
          </li>
          <li>
            <Link
              link="https://medium.com/@abraztsov/how-virtual-dom-work-567128ed77e9"
              text="Как работает Virtual DOM?"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Lesson01;
