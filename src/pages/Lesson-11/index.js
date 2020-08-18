import React from 'react';
import { CopyBlock, hybrid } from 'react-code-blocks';
import Image from '../../components/Image';
import Link from '../../components/Link';

import * as code from './code';

const Lesson11 = () => (
  <div className="container lesson-12">
    <div className="row">
      <div className="col">
        <h2>1. Введение</h2>
        <p>
          Требования к функционалу приложений постоянно растут, в результате
          растет количество состояний интерфейса: асинхронная загрузка данных,
          лоадеры, фильтры и т. п.
        </p>
        <p>
          За всем этим необходимо следить и обрабатывать, и это не просто. В
          один момент можно просто перестать улавливать связь между изменениями,
          так как контроль над тем, когда, почему и как изменилось состояние
          потерян из-за сложности самого состояния.
        </p>
        <p>
          Идеальный вариант, это когда интерфейс вообще не знает о
          бизнес-логике. В этом нам помогают библиотеки управления состоянием.{' '}
          <code>Redux</code> и <code>Mobx</code> самые популярные, а для
          бекендов основаных на <code>GraphQL</code> есть <code>Apollo</code>.
        </p>
        <Image filename="redux-from-spaghetti-to-reducer.png" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>2. Основные принципы Redux</h2>
        <ul>
          <li>
            <strong>Предсказуемость результата</strong> - существует всегда один
            источник правды, хранилище (<code>store</code>), хранящее в себе
            состояние приложения и методы для работы с ним.
          </li>
          <li>
            <strong>Поддреживаемость</strong> - есть набор правил и лучших
            практик о том, как должен быть структурирован код, что делает его
            более единообразным и понятным.
          </li>
          <li>
            <strong>Инструменты разработчика</strong> - все происходящее можно
            отслеживать в режиме реального времени.
          </li>
          <li>
            <strong>Простота тестирования</strong> - первое правило написания
            тестируемого кода - писать небольшие функции, которые выполняют
            только одну вещь и независимы. Redux - это в основном функции:
            маленькие, чистые и изолированные.
          </li>
        </ul>
        <Image filename="no-redux-vs-redux.png" />

        <h3>2.1. Поток данных</h3>
        <p>
          Без использования библиотеки управления состоянием процесс обновления
          данных выглядит следующим образом: компонент инициализирует изменение
          состояния вызвав метод полученный пропом, после чего измененное
          состояние пробрасывается пропами вниз по дереву.
        </p>
        <Image filename="vanilla-flow.gif" />

        <p>
          Поток данных в Redux всегда однонаправленный, и очень простой. За
          данные отвечает хранилище, компоненты только вызывают методы
          обновления данных и потом получают обновленные данные.
        </p>
        <Image filename="redux-flow.gif" />

        <ul>
          <li>
            Пользователь, работая с интерфейсом, инициализирует отправку
            действий (<code>actions</code>)
          </li>
          <li>
            Хранилище (<code>store</code>) вызывает все объявленные редьюсеры (
            <code>reducers</code>), передавая им текущее состояние (
            <code>state</code>) и действие (<code>action</code>)
          </li>
          <li>
            Хранилище (<code>store</code>) сохраняет обновленное дерево
            состояния (<code>state</code>) возвращенное из редьюсеров (
            <code>reducers</code>)
          </li>
          <li>
            При обновлении состояния (<code>state</code>) вызываются все
            подписчики для обновления интерфейса
          </li>
        </ul>
        <Image filename="flow.png" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>3. Store</h2>
        <p>
          <strong>
            Хранилище (<code>store</code>)
          </strong>{' '}
          - js-объект, который содержит состояние приложения и методы доступа к
          нему, отправки действий и регистрации слушателей.
        </p>
        <ul>
          <li>
            Хранит состояние (<code>state</code>) приложения как один объект
          </li>
          <li>
            Позволяет получить доступ к состоянию через метод{' '}
            <code>getState()</code>
          </li>
          <li>Напрямую состояние доступно только для чтения</li>
          <li>
            Единственный способ изменить состояние - отправить действие (
            <code>action</code>), объект, описывающий, что произошло
          </li>
          <li>
            Для отправки дейсвтий есть метод <code>dispatch(action)</code>
          </li>
          <li>
            Изменения производятся с использованием чистых функций - редюсеров (
            <code>reducers</code>), которые реагируют на действия
          </li>
          <li>
            Регистрирация слушателей делается методом{' '}
            <code>subscribe(listener)</code>
          </li>
        </ul>
        <p>
          Так как все состояние приложения хранится как один объект, стоит
          подумать о форме состояния прежде чем писать какой-либо код.
          Продумайте минимальное представление состояния приложения в виде
          объекта.
        </p>
        <CopyBlock text={code.code1} theme={hybrid} language="jsx" />

        <h3>3.1. Функция createStore</h3>
        <p>
          Для того чтобы создать хранилище, используется функция{' '}
          <code>createStore</code>, которая принимает набор параметров и
          возвращает созданное хранилище.
        </p>
        <CopyBlock text={code.code2} theme={hybrid} language="jsx" />

        <ul>
          <li>
            <code>reducer</code> - функция, которая возвращает следующее дерево
            состояния, учитывая текущее дерево состояния и действие для
            обработки.
          </li>
          <li>
            <code>preloadedState</code> - начальное состояние, к примеру
            сериализаванное состояние последнего пользовательского сеанса. Это
            должен быть объект той же формы, что и, как минимум, часть
            состояния.
          </li>
          <li>
            <code>enhancer</code> - расширяет возможности хранилища при помощи
            прослоек (middleware).
          </li>
        </ul>
        <CopyBlock text={code.code3} theme={hybrid} language="jsx" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>4. Actions</h2>
        <p>
          <strong>
            Действия (<code>actions</code>)
          </strong>{' '}
          - это объекты, которые помогают доставить данные из компонентов в
          хранилище.
        </p>
        <ul>
          <li>Хранят минимально необходимый набор информации.</li>
          <li>
            Должны иметь свойство <code>type</code>, которое указывает тип
            выполняемого действия.
          </li>
          <li>
            Помимо поля <code>type</code>, структура действия может быть
            произвольной.
          </li>
        </ul>
        <CopyBlock text={code.code4} theme={hybrid} language="jsx" />

        <p>
          Действия создаются функциями (<code>action creators</code>), которые
          могут быть асинхронными и иметь побочные эффекты. В базовом варианте
          они просто возвращают объект-дейтсвие.
        </p>
        <CopyBlock text={code.code5} theme={hybrid} language="jsx" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>5. Reducers</h2>
        <p>
          <strong>Редюсеры (reducers)</strong> - это чистые функции, которые
          принимают предыдущее состояние приложения и действие, а затем
          возвращают новое следующее состояние.
        </p>
        <p>
          Они определяют, как изменяется состояние приложения в ответ на
          действия, отправленные в хранилище. Помните, что действия описывают
          только то, что произошло, а не как изменяется состояние приложения.
        </p>
        <CopyBlock text={code.code6} theme={hybrid} language="jsx" />

        <p>Вещи, которые нельзя делать внутри редюсера:</p>
        <ul>
          <li>Мутировать аргументы</li>
          <li>Выполнять побочные эффекты, такие как API-запросы и т. п.</li>
          <li>
            Вызывать нечистые функции, например <code>Date.now()</code>
          </li>
        </ul>
        <p>
          Как выполнять побочные эффекты мы рассмотрим далее, пока что просто
          помните - редюсер должен быть чистым. Получая те же аргументы, он
          должен вычислить следующее состояние и вернуть его. Без сюрпризов.
          Никаких побочных эффектов. Никаких мутаций. Просто рассчет.
        </p>
        <p>
          Вот редьюсер, который принимает текущее состояние и действие как
          аргументы, а затем возвращает следующее состояние.
        </p>
        <CopyBlock text={code.code7} theme={hybrid} language="jsx" />

        <p>Обратите внимание:</p>
        <ul>
          <li>
            Мы создаем копию <code>state</code>, а не мутируем его.
          </li>
          <li>
            Мы возвращаем предыдущее состояние по умолчанию. Важно вернуть
            предыдущее состояние для любого неизвестного действия.
          </li>
        </ul>
        <Link
          link="https://medium.freecodecamp.org/why-redux-needs-reducers-to-be-pure-functions-d438c58ae468"
          text='Why Redux need reducers to be "pure functions"'
        />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>6. React и Redux</h2>
        <p>
          Для того чтобы использовать React и Redux вместе, необходимо добавить
          пакет
          <code>react-redux</code>. Это набор компонентов связывающих
          React-компоненты и Redux-хранилище через контекст Context.
        </p>
        <CopyBlock text={code.code8} theme={hybrid} language="jsx" />
        <Link
          link="https://react-redux.js.org/"
          text="Документация react-redux"
        />

        <h3>6.1. Provider</h3>
        <p>
          Компонент{' '}
          <code>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>Provider
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
          , оборачивает все дерево компонентов приложения и, используя контекст,
          предоставляет <code>store</code> и его методы.
        </p>
        <CopyBlock text={code.code9} theme={hybrid} language="jsx" />
        <Link
          link="https://react-redux.js.org/api/provider"
          text="Документация Provider"
        />

        <h3>6.2. connect()</h3>
        <p>
          Если какой-либо компонент хочет получить доступ к <code>store</code>,
          он должен быть обернут в функцию <code>connect()</code>, которая
          свяжет компонент и <code>store</code>. Предоставляет доступ к{' '}
          <code>state</code> и <code>disaptch()</code>.
        </p>
        <p>
          <code>connect</code> это HOC, он не изменяет переданный ему компонент,
          а возвращает новый компонент связанный с хранилищем.
        </p>
        <CopyBlock text={code.code10} theme={hybrid} language="jsx" />

        <p>
          <code>mapStateToProps(state, [ownProps])</code> - функция соединяющая
          часть состояния с пропами компонента. Таким образом, связанный
          компонент будет иметь доступ к необходимой ему части состояния.
        </p>
        <ul>
          <li>
            Получает <code>state</code> как параметр и позволяет выбрать из
            всего <code>state</code> только необходимые компоненту слайсы
            (части).
          </li>
          <li>
            Возвращает объект, свойства которого дополнят <code>props</code>{' '}
            компонента.
          </li>
          <li>Вызывается каждый раз когда хранилище обновляется.</li>
          <li>
            Если нет необходимости подписываться на обновления, передаем{' '}
            <code>null</code>.
          </li>
          <li>
            Если функция объявлена &#8203;&#8203;как принимающая два параметра,
            первым будет передана ссылка на <code>state</code>, а вторым ссылка
            на пропы самого компонента.
          </li>
        </ul>
        <CopyBlock text={code.code11} theme={hybrid} language="jsx" />

        <p>
          <code>mapDispatchToProps(dispatch, [ownProps])</code>- функция
          соединяющая отправку действий с пропами компонента. Таким образом,
          связанный компонент сможет отправлять действия посредством вызова
          методов указанных в возвращаемом объекте.
        </p>
        <ul>
          <li>
            Получает ссылку на метод <code>dispatch</code> как параметр и
            позволяет объявить методы для отправки действий.
          </li>
          <li>
            Возвращает объект, свойства которого дополнят <code>props</code>{' '}
            компонента.
          </li>
          <li>
            Если функция объявлена &#8203;&#8203;как принимающая два параметра,
            первым будет передана ссылка на <code>dispatch</code>, а вторым
            ссылка на пропы самого компонента.
          </li>
        </ul>
        <CopyBlock text={code.code12} theme={hybrid} language="jsx" />

        <p>
          Если аргументы действия совпадают с параметрами объявляемого метода,
          можно вместо функции передать объект. В таком случае{' '}
          <code>connect</code> пройдет по ключам объекта и обернет их в{' '}
          <code>dispatch</code>.
        </p>
        <CopyBlock text={code.code13} theme={hybrid} language="jsx" />
        <Link
          link="https://react-redux.js.org/api/connect"
          text="Документация connect"
        />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>7. Redux DevTools</h2>
        <p>
          Чтобы упростить работу с Redux существуют Redux DevTools. Они помогают
          отслеживать изменение состояния с течением времени, наблюдать за
          отправкой дейтсвий и т. п. Естеcтвенно, это предназначено только для
          разработки.
        </p>
        <Link
          link="http://extension.remotedev.io/"
          text="Документация redux-devtools-extension"
        />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>8. Организация хранилища</h2>
        <p>
          Необходимо хранить все состояние приложения в Redux? Можно ли
          использовать
          <code>setState()</code>? Как разработчик, ваша задача - определить, из
          какого набора данных состоит приложение, и где их лучше хранить.
        </p>
        <p>
          Некоторые общие правила для определения того, какие данные должны быть
          помещены в Redux. Если ответ да, то есть смысл использовать хранилище,
          а не локальное состояние.
        </p>
        <ul>
          <li>Необходимы ли эти данные другим частям приложения?</li>
          <li>
            Необходимо ли на основе этих данных создавать дополнительные
            производные?
          </li>
          <li>
            Используются ли одни и те же данные для управления несколькими
            компонентами?
          </li>
          <li>Есть ли необходимость в кешировании?</li>
        </ul>

        <h3>8.1. Дополнительные материалы</h3>
        <ul>
          <li>
            <Link
              link="https://medium.freecodecamp.org/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00"
              text="Where to Hold React Component Data: state, store, static, and this"
            />
          </li>
          <li>
            <Link
              link="http://jamesknelson.com/5-types-react-application-state/"
              text="The 5 Types Of React Application State"
            />
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>9. Композиция редюсеров</h2>
        <p>
          Еще одна полезная функция Redux - возможность делать композицию
          редьюсеров, то есть совмещать много в один. Это позволяет удобно
          поддерживать гораздо более сложные состояния в больших приложениях.
          Для этого используется функция
          <code>combineReducers()</code>.
        </p>
        <CopyBlock text={code.code14} theme={hybrid} language="jsx" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>10. Дополнительные материалы</h2>
        <ul>
          <li>
            <Link link="https://redux.js.org/" text="Документация Redux" />
          </li>
          <li>
            <Link
              link="https://rajdee.gitbooks.io/redux-in-russian/content/"
              text="Документация Redux на русском"
            />
          </li>
          <li>
            <Link
              link="https://jaysoo.ca/2016/02/28/organizing-redux-application/"
              text="Three Rules For Structuring (Redux) Applications"
            />
          </li>
          <li>
            <Link
              link="https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6"
              text="A cartoon intro to Redux"
            />
          </li>
          <li>
            <Link
              link="https://egghead.io/courses/getting-started-with-redux"
              text="Getting Started with Redux by Dan Abramov"
            />
          </li>
          <li>
            <Link
              link="https://egghead.io/courses/building-react-applications-with-idiomatic-redux"
              text="Building React Applications with Idiomatic Redux by Dan Abramov"
            />
          </li>
          <li>
            <Link
              link="https://medium.com/devschacht/redux-step-by-step-e6c42a9b00cd"
              text="Redux: шаг за шагом"
            />
          </li>
          <li>
            <Link
              link="https://blog.bitsrc.io/using-redux-actions-why-and-how-fd5834f13e31"
              text="Using Redux-Actions&#8202;—&#8202;Why and How?"
            />
          </li>
          <li>
            <Link
              link="https://trello-attachments.s3.amazonaws.com/59f1a4faa946cdc5b223e904/5b3942f050cf8a07452d6cf4/66ef29154a03d02375d1ffebf6dcb292/react-redux-workflow-graphical-cheat-sheet_v110.png"
              text="React-Redux workflow - graphical cheat sheet"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Lesson11;
