import React from 'react';
import { CopyBlock, hybrid } from 'react-code-blocks';
import Link from '../../components/Link';

import * as code from './code';

const Lesson06 = () => (
  <div className="container lesson-06">
    <div className="row">
      <div className="col">
        <h2>1. Работа с REST API</h2>
        <p>
          Допустим, уже есть дерево компонентов, которое имеет несколько уровней
          иерархии и необходимо получить коллекцию элементов от API. Какой
          именно компонент в иерархии должен отвечать за HTTP-запросы и хранение
          результата ответа? Если не используем библиотеку управления
          состоянием, то это зависит от трех критериев.
        </p>
        <ul>
          <li>Каким компонентам будут необходимы полученные данные?</li>
          <li>
            Где будет рендерится индикатор загрузки пока выполянется
            HTTP-запрос?
          </li>
          <li>Где будет рендерится сообщение в случае ошибки HTTP-запроса?</li>
        </ul>
        <p>
          Методы жизненного цикла <code>componentDidMount</code> и{' '}
          <code>componentDidUpdate</code> идеально подходят для HTTP-запросов.
          Когда вызывается <code>componentDidMount()</code>, компонент уже был
          отрендерен в DOM и готов к последующему обновлению состояния. Когда
          вызывается <code>componentDidUpdate()</code>, пропы или состояние
          компонента изменились, и, возможно, необходимо сделать новый запрос,
          предварительно сравнив их, чтобы не зациклить рендер компонента.
        </p>
        <p>
          Для HTTP-запроса можно использовать что угодно:{' '}
          <code>XMLHTTPRequest</code>, <code>fetch</code>,<code>axios</code>,{' '}
          <code>superagent</code> и т. п. Мы будем использовать библиотеку
          <Link link="https://github.com/axios/axios#axios" text="axios" />.
        </p>
        <CopyBlock text={code.code1} theme={hybrid} language="jsx" />

        <p>
          Запросы будем делать на{' '}
          <Link link="https://hn.algolia.com/api" text="Hacker News API" />. По
          завершению HTTP-запроса сохраняем результат в состоянии компонента. В
          методе
          <code>render</code> используем состояние.
        </p>
        <CopyBlock text={code.code2} theme={hybrid} language="jsx" />

        <p>
          Кроме свойства хранения данных, можно добавить свйоство для хранения
          флага индикатора загрузки и ошибки. Это позволит сделать использование
          интерфейса приятнее для пользователя.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>2. Индикатор загрузки</h2>
        <p>
          Пока ждем ответа на HTTP-запрос, показываем идтикатор загрузки. Как
          только пришел ответ, прячем индикатор. Для этого на старте запроса
          ставим <code>isLoading</code> в<code>true</code>, а при успешном
          ответе или ошибке в <code>false</code>.
        </p>
        <CopyBlock text={code.code3} theme={hybrid} language="jsx" />

        <p>
          В методе <code>render</code> по условию возвращаем разметку. Если
          данные загружаеются, показываем лоадер, в противном случае список с
          результатами.
        </p>
        <CopyBlock text={code.code4} theme={hybrid} language="jsx" />
        <p>
          Индикатор загрузки может быть чем угодно, от простого текста или
          спиннера, до кастомного компонента, например
          <Link
            link="https://github.com/danilowoz/react-content-loader"
            text="react-content-loader"
          />
          .
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>3. Обработка ошибки</h2>]
        <p>
          HTTP-запрос не всегда выполняется без ошибок, поэтому пользователю
          обязательно нужно дать понять если что-то пошло не так. Для этого в
          состояние добавляем свойство хранения ошибки.
        </p>
        <p>
          При использовании промисов, для обработки ошибок используется блок{' '}
          <code>catch()</code>, если он выполнится значит произошла ошибка.
          Установку индикатора загрузки переносим в блок <code>finally()</code>,
          чтобы не дублировать код, который будет выполнен в любом случае.
        </p>
        <CopyBlock text={code.code5} theme={hybrid} language="jsx" />
        <p>
          Осталось дополнить метод <code>render</code>.
        </p>
        <CopyBlock text={code.code6} theme={hybrid} language="jsx" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>4. Разделение отвественности</h2>
        <p>
          Хранить код связанный с HTTP-запросом прямо в компоненте не лучшая
          практика. В приложении будет много разных запросов на API и
          использоваться они будут в разных компонентах. К тому же код
          HTTP-запросов может быть сложным и громоздким. Для удобства
          рефакторинга будем хранить все в одном месте.
        </p>
        <p>
          Создадим дополнительную папку внутри <code>src</code>. Название папки
          произвольное но логичное, например <code>utils</code>,{' '}
          <code>api</code>, <code>services</code> и т. д. В этой папке будем
          хранить файл с функциями для HTTP-запросов.
        </p>
        <CopyBlock text={code.code7} theme={hybrid} language="jsx" />

        <p>Импортируем сервис в файле компонента и вызываем нужный метод.</p>
        <CopyBlock text={code.code8} theme={hybrid} language="jsx" />
      </div>
    </div>
  </div>
);

export default Lesson06;
