import React from 'react';
import { CopyBlock, hybrid } from 'react-code-blocks';
import Alert from '../../components/Alert';
import Image from '../../components/Image';
import Link from '../../components/Link';

import * as code from './code';

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

        <h3>1.2. История навигации</h3>
        <p>
          <strong>История навигации</strong> - то как мы переходим ссылкам, как
          переходы хранятся и парсятся. От типа истории зависит метод ее
          хранения и изменения.
        </p>
        <p>
          Если вы хотите понять React Router, рекомендуется ознакомиться с{' '}
          <Link
            link="https://medium.com/@pshrmn/a-little-bit-of-history-f245306f48dd"
            text="HTML5 History API"
          />
          . Более конкретно, c пакетом{' '}
          <Link
            link="https://github.com/ReactTraining/history"
            text="history"
          />
          , который предоставляет основные функциональные возможности для React
          Router, позволяя одностраничным приложениям легко добавлять навигацию
          на стороне клиента.
        </p>
        <p>Существует несколько типов истории.</p>
        <ul>
          <li>
            <strong>Browser history</strong> - использует HTML5 History API,
            стандарт управления историей браузера из JavaScript.
          </li>
          <li>
            <strong>Hash history</strong> - в старых браузерах не поддерживается
            HTML5 History API, поэтому для них существует эта реализация.
          </li>
          <li>
            <strong>Memory history</strong> - позволяет использовать историю
            сессии в памяти, вне окна браузера. К примеру для тестирования
            логики без интерфейса и в средах без DOM, к примеру React Native.
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>2. React Router</h2>
        <ul>
          <li>
            <strong>Browser history</strong> - использует HTML5 History API,
            стандарт управления историей браузера из JavaScript.
          </li>
          <li>
            <strong>Hash history</strong> - в старых браузерах не поддерживается
            HTML5 History API, поэтому для них существует эта реализация.
          </li>
          <li>
            <strong>Memory history</strong> - позволяет использовать историю
            сессии в памяти, вне окна браузера. К примеру для тестирования
            логики без интерфейса и в средах без DOM, к примеру React Native.
          </li>
        </ul>
        <CopyBlock text={code.code1} theme={hybrid} language="jsx" />

        <p>
          В React Router есть три типа компонентов: компонент маршрутизатора,
          компоненты согласования маршрутов и компоненты навигации.
        </p>
        <Link
          link="https://reacttraining.com/react-router/web/guides/philosophy"
          text="Документация React Router"
        />

        <h3>2.1. BrowserRouter</h3>
        <p>
          В основе каждого одностраничного приложения стоит маршрутизатор.
          Компонент
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>BrowserRouter
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          создает раутер и объект <code>history</code>, чтобы синхронизировать
          интерфейс с URL-адресом. Используя контекст, передает данные о текущем
          URL всему поддереву компонентов.
        </p>
        <CopyBlock text={code.code2} theme={hybrid} language="jsx" />
        <Link
          link="https://reacttraining.com/react-router/web/api/BrowserRouter"
          text="Документация BrowserRouter"
        />

        <h3>2.2. Route</h3>
        <p>
          Компонент позволяющий связать определенный URL и компонент для
          рендера. Его задача заключается в том, чтобы отобразить некоторый
          интерфес, когда
          <code>location.pathname</code> соответствует значению пропа{' '}
          <code>path</code>. Компонент{' '}
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>Route
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
          можно использовать в любом месте где необходимо рендерить контент на
          основе текущего URL.
        </p>
        <CopyBlock text={code.code3} theme={hybrid} language="jsx" />

        <Alert>
          <p>
            Согласование маршрута выполняется путем сопоставления пропа{' '}
            <code>path</code> и текущего значения <code>location.pathname</code>
            . Если значение
            <code>location.pathname</code> начинается на указанный путь в{' '}
            <code>path</code>,{' '}
            <code>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>Route
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
            </code>{' '}
            отрендерит указанный компонент, в противном случае вернет{' '}
            <code>null</code>.
          </p>
        </Alert>

        <p>
          Когда <code>location.pathname</code> начинается на{' '}
          <code>'/about'</code>, первый и третий рауты отрендерят{' '}
          <code>null</code>, а второй отрендерит компонент{' '}
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>About
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
          .
        </p>
        <ul>
          <li>
            Проп <code>exact</code> указывает на необходимость точного
            совпадения <code>path</code> и<code>location.pathname</code>
          </li>
          <li>
            <code>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>Route
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
            </code>{' '}
            без указанного <code>path</code> всегда рендерит компонент
          </li>
        </ul>

        <h4>2.2.1. Проп component</h4>
        <p>
          Используется когда компонент необходимо отрендерить без передачи
          дополнительных пропсов. Стандартные пропсы <code>match</code>,{' '}
          <code>location</code> и <code>history</code> будут переданы компоненту
          автоматически.
        </p>
        <p>
          Для создания компонента используется{' '}
          <code>React.createElement()</code>, это означает, что если вместо
          ссылки на компонент будет передана анонимная функция, для каждого
          ре-рендера будет создан новый компонент. Это приведет к
          размонтированию существующего компонента, созданию и монтированию
          нового на каждом рендере, вместо обновления существующего компонента.
        </p>
        <CopyBlock text={code.code3} theme={hybrid} language="jsx" />

        <h4>2.2.2. Проп render</h4>
        <p>
          Позволяет использовать инлайн-функцию вместо компонента без
          нежелательного эффекта ре-рендера как в случае с{' '}
          <code>component</code>. Используется тогда, когда компоненту
          необходимо передать дополнительные пропсы, кроме тех что передает
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>Route
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
          .
        </p>
        <CopyBlock text={code.code4} theme={hybrid} language="jsx" />
        <Link
          link="https://reacttraining.com/react-router/web/api/Route"
          text="Документация Route"
        />

        <h3>2.3. Switch</h3>
        <p>
          Группирует и отображает первый дочерний маршрут, <code>path</code>{' '}
          которого соответствует текущему <code>location.pathname</code>,
          игнорруя все последующие.
        </p>
        <CopyBlock text={code.code5} theme={hybrid} language="jsx" />

        <h3>2.4. Redirect</h3>
        <p>
          Позволяет декларативно отрендерить компонент который во время маунта
          перенаправит пользователя по указанному маршруту. Под капотом
          использует императивный интерфейс <code>history</code>.
        </p>
        <CopyBlock text={code.code6} theme={hybrid} language="jsx" />

        <ul>
          <li>
            По умолчанию подменяет текущую запись в истории, для того чтобы
            добавить новую запись на верх стека можно передать проп{' '}
            <code>push</code>.
          </li>
          <li>
            Вместо строки, проп <code>to</code> может принимать полноценный
            объект формата
            <code>location</code>.
          </li>
        </ul>
        <Link
          link="https://reacttraining.com/react-router/web/api/Redirect"
          text="Документация Redirect"
        />

        <h3>2.5. Link и NavLink</h3>
        <p>
          Для создания навигации нельзя использовать обычный HTML-тег{' '}
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>a
              </span>{' '}
              <span className="token attr-name">link</span>
              <span className="token attr-value">
                <span className="token punctuation">=</span>
                <span className="token punctuation">"</span>/about
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
          . При клике, вместо того чтобы изменить URL на текущей странице, и
          позволить раутеру выполнить навигацию на стороне клиента, браузер
          выполнит GET-запрос и обновит страницу, а это не то, что нам нужно.
        </p>
        <p>
          Компоненты{' '}
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>Link
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          и{' '}
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>NavLink
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          используются для создания ссылок. Они рендерят HTML-тег{' '}
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>a
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
          , но с расширенным функционалом клика, используя возможности объекта{' '}
          <code>history</code> по замене URL.
        </p>
        <CopyBlock text={code.code7} theme={hybrid} language="jsx" />

        <p>
          Проп <code>to</code> можно передавать в виде строки описывающей{' '}
          <code>link</code> будущей ссылки, или как объект <code>location</code>{' '}
          со следующими (необязательными) свойствами:
        </p>
        <ul>
          <li>
            <code>pathname</code> - строка, путь для ссылки.
          </li>
          <li>
            <code>search</code> - строковое представление параметров запроса.
          </li>
          <li>
            <code>hash</code> - хэш для добавления в конец URL.
          </li>
          <li>
            <code>state</code> - объект, который будет записан в{' '}
            <code>location.state</code> после перехода по ссылке.
          </li>
        </ul>
        <CopyBlock text={code.code8} theme={hybrid} language="jsx" />

        <p>
          Компонент{' '}
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>NavLink
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          отличается от{' '}
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>Link
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          только тем, что может иметь дополнительные стили, если текущий URL
          совпадает со значением пропа <code>to</code>.
        </p>
        <ul>
          <li>
            <code>activeClassName</code> - строка классов для объеденения с{' '}
            <code>className</code> когда элемент активен.
          </li>
          <li>
            <code>activeStyle</code> - объект инлайн стилей для добавления к
            элементу когда он активен.
          </li>
          <li>
            <code>exact</code> - когда <code>true</code>, активные классы/стили
            будут применяться только в том случае, если местоположение точно
            совпадает со значением пропа <code>to</code>.
          </li>
        </ul>
        <CopyBlock text={code.code9} theme={hybrid} language="jsx" />

        <ul>
          <li>
            <Link
              link="https://reacttraining.com/react-router/web/api/Link"
              text="Документация Link"
            />
          </li>
          <li>
            <Link
              link="https://reacttraining.com/react-router/web/api/NavLink"
              text="Документация NavLink"
            />
          </li>
        </ul>

        <h3>2.6. Route props</h3>
        <p>
          Компоненту отрендеренному через{' '}
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>Route
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          будет передано несколько специальных пропсов хранящих много полезной
          информации.
        </p>
        <ul>
          <li>
            <code>match</code> — объект с информацией о том как совпали{' '}
            <code>path</code> и <code>location.pathname</code>
          </li>
          <li>
            <code>location</code> - объект хранящий информацию о текущем URL
          </li>
          <li>
            <code>history</code> - объект истории, созданный самим раутером
          </li>
        </ul>

        <h4>2.6.1. Проп match</h4>
        <p>
          Объект, хранит информацию о том, как <code>path</code> совпал с{' '}
          <code>location.pathname</code>. Содержит следующие свойства.
        </p>
        <ul>
          <li>
            <code>params</code> - объект пар <code>ключ:значение</code>,
            соответствующих динамическим параметрам URL.
          </li>
          <li>
            <code>isExact</code> - указыват на точное соотвествие{' '}
            <code>path</code> и <code>location.pathname</code>.
          </li>
          <li>
            <code>path</code> - паттерн пути на который замачился{' '}
            <code>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>Route
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
            </code>
            . Используется для создания вложенных маршрутов.
          </li>
          <li>
            <code>url</code> - совпавшая часть URL-адреса. Используется для
            создания вложенной навигации.
          </li>
        </ul>

        <h4>2.6.2. Проп location</h4>
        <p>
          Объект, свойства которого описывают текущее местоположение, путь куда
          будет произведен переход или откуда пришли на текущий маршрут. Можно
          использовать в том числе для проверки в{' '}
          <code>componentDidUpdate</code> изменился ли текущий URL.
        </p>
        <CopyBlock text={code.code10} theme={hybrid} language="jsx" />

        <h4>2.6.3. Проп history</h4>
        <p>
          Объект истории со свойствами и методами для программной навигации.
          Используется для перенаправлений.
        </p>
        <ul>
          <li>
            <code>history.push(path [, state])</code> - добавляет новую запись
            на стек записей истории.
          </li>
          <li>
            <code>history.replace(path [, state])</code> - подменяет текущую
            запись на новую на стеке записей истории.
          </li>
        </ul>
        <Link
          link="https://reacttraining.com/react-router/web/api/Route/route-props"
          text="Документация Route props"
        />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>3. Строка запроса</h2>
        <p>
          В строке запроса можно указывать дополнительную информацию о текущем
          маршруте. Например, если мы просматриваем страницу новостных статей,
          маршрут может выглядеть так.
        </p>
        <CopyBlock text={code.code11} theme={hybrid} language="jsx" />

        <p>
          Если есть категории выбора статей по жанру и времени издания, храним
          выбранные опции в строке запроса.
        </p>
        <CopyBlock text={code.code12} theme={hybrid} language="jsx" />

        <p>
          Строка запроса содержит 2 параметра: название категории и порядок
          сортировки статей. При переходе по такому маршруту, можно сделать
          HTTP-запрос на бэкенд, получив только статьи необходимой категории, и
          отсортировать их по полю даты издания.
        </p>
        <p>
          Текущее значение строки запроса хранится в пропе <code>location</code>
          .
        </p>
        <CopyBlock text={code.code13} theme={hybrid} language="jsx" />
        <Link
          link="https://reacttraining.com/react-router/web/api/location"
          text="Документация location"
        />

        <h3>3.1. Извлечение параметров</h3>
        <p>
          Чтобы получить значения параметров, можно использовать возможности
          нативного класса{' '}
          <Link
            link="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams"
            text="URLSearchParams"
          />
          , а также библиотеки{' '}
          <Link link="https://www.npmjs.com/package/qs" text="qs" /> или{' '}
          <Link
            link="https://www.npmjs.com/package/query-string"
            text="query-string"
          />
          . Любой метод позволит сделать парс строки запроса и получить объект с
          парами <code>ключ:значение</code>.
        </p>
        <CopyBlock text={code.code14} theme={hybrid} language="jsx" />

        <h3>3.2. Изменение параметров</h3>
        <p>
          Допустим, для выбора категории статей используется{' '}
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>select
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
          . При выборе опции необходимо обновлять URL используя метод{' '}
          <code>history.push()</code> для добавления новой записи в журнал
          истории.
        </p>
        <p>
          Берем текущее значение <code>location.pathname</code> и обновляем{' '}
          <code>search</code>.
        </p>
        <CopyBlock text={code.code15} theme={hybrid} language="jsx" />

        <h3>3.3. Отслеживание изменений</h3>
        <p>
          Если меняется строка запроса, компоненту пробрасываются новые пропсы,
          и в методе
          <code>componentDidUpdate()</code> можно проверить изменилась ли
          категория и порядок сортировки. Если изменились, делаем HTTP-запрос
          или сортируем текущие статьи.
        </p>
        <CopyBlock text={code.code16} theme={hybrid} language="jsx" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>4. Редиректы</h2>
        <p>
          Перенаправления это удобный инструмент навигации пользователя между
          маршрутами приложения. Для их реализации используется компонент{' '}
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>Redirect
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>{' '}
          или методы
          <code>history.push()</code> и <code>history.replace()</code>.
        </p>

        <h3>4.1. Проп history</h3>
        <p>
          Важно знать раличие методов <code>push</code> и <code>replace</code>.
        </p>
        <ul>
          <li>
            <code>history.push()</code> - добавит новую запись в журнал истории,
            пользователь может вернуться на тот маршрут с которого пришел.
          </li>
          <li>
            <code>history.replace()</code> - перезапишет текущую запись в
            журнале истории затерев текущую, пользователь не сможет вернутся на
            маршрут с которого пришел.
          </li>
        </ul>
        <p>
          Продолжим работать со статьями. При рендере раута{' '}
          <code>/articles</code> есть категории статей, но при первом рендере
          маршрута еще нет строки запроса с параметром
          <code>category</code>. Именно поэтому необходимо сделать редирект, при
          этом перезаписав текущую страницу истории, чтобы пользователь не мог
          вернуться на страницу без параметров запроса.
        </p>
        <CopyBlock text={code.code17} theme={hybrid} language="jsx" />

        <h3>4.2. Свойство location.state</h3>
        <p>
          Позволяет передавать кастомные данные между маршрутами. Например
          список статей это ссылки, при клике в ссылку переходим на новый
          маршрут - страницу статьи.
        </p>
        <CopyBlock text={code.code18} theme={hybrid} language="jsx" />

        <p>
          Тогда, если пользователь пришел с{' '}
          <code>https://app.com/articles?category=sports</code>, и захочет
          вернуться на сраницу всех статей, нажав стрелку "Обратно", он попадет
          куда надо. Но что если необходимо реализовать кнопку "Обратно к
          статьям" в интерфейсе приложения, как узнать откуда мы пришли?
        </p>
        <p>
          Каждую статью сделаем ссылкой, добавив в свойство <code>state</code>{' '}
          информацию о текущем маршруте.
        </p>
        <CopyBlock text={code.code19} theme={hybrid} language="jsx" />

        <p>
          Тогда в компоненте статьи можем получить эту информацию и при клике на
          кнопку "Обратно к статьям" перенаправить пользователя на предыдущий
          маршрут.
        </p>
        <CopyBlock text={code.code20} theme={hybrid} language="jsx" />

        <p>
          Нужно учитывать ситуацию когда пользователь перешел на страницу статьи
          по сохраненный ссылке, и в текущей сессии не был на странице всех
          статей. В свойстве <code>location.state</code> не будет объекта, и
          попытка доступа к <code>state.from</code>
          приведет к ошибке выполнения скрипта.
        </p>
        <p>
          Поэтому необходимо проверить <code>location.state</code>. Если{' '}
          <code>state</code> есть - перенаправляем пользователя туда, откуда он
          пришел. Если <code>state</code> нет - перенаправляем на{' '}
          <code>/articles</code>, при этом параметр <code>category</code>{' '}
          назначаем по свойству статьи (если в объекте статьи есть такое
          свойство).
        </p>
        <CopyBlock text={code.code21} theme={hybrid} language="jsx" />
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
