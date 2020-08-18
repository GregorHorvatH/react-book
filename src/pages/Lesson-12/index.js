import React from 'react';
import { CopyBlock, hybrid } from 'react-code-blocks';
import Link from '../../components/Link';

import * as code from './code';

const Lesson12 = () => (
  <div className="container lesson-12">
    <div className="row">
      <div className="col">
        <h2>1. Redux Toolkit</h2>
        <p>При использовании библиотеки Redux есть три основные проблемы.</p>
        <ul>
          <li>Сложный процесс настройки Redux-хранилища</li>
          <li>
            Необходимость добавлять стандартный набор дополнительных пакетов
          </li>
          <li>Большой объем бойлерплейт кода</li>
        </ul>
        <p>
          <Link link="https://redux-toolkit.js.org/" text="Redux Toolkit" /> это
          официальная библиотека для эффективной разработки с использованием
          Redux, которая предназначена для стандартизации написания
          Redux-логики.
        </p>
        <ul>
          <li>
            Позволяет сосредоточиться на написании основной логики приложения,
            не тратя время на настройку.
          </li>
          <li>
            Включает в себя утилиты для упрощения основных задач. Таких как
            настройка хранилища, создание редюсеров, иммутабельное обновление
            данных и многое другое.
          </li>
          <li>
            Предоставляет стандартный набор настроек для хранилища и включает в
            себя наиболее часто используемые дополнения из Redux-экосистемы.
          </li>
        </ul>
        <p>
          Библиотека не предназначена для решения всех возможных проблем и
          намеренно ограничена в объеме. Такие решения как HTTP-запросы,
          структура папок и файлов, управление связями сущностей в хранилище и
          т. д. ложаться на плечи разработчика. Тем не менее, Redux Toolkit
          будет полезен для всех стандартных задач, поможет упростить и улучшить
          Redux-код.
        </p>
        <Link
          link="https://redux-toolkit.js.org/"
          text="Документация Redux Toolkit"
        />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>2. Использование Redux Toolkit</h2>
        <p>
          Возьмем готовую Redux-логику таймера и провередм рефакторинг используя
          Redux Toolkit.
        </p>
        <CopyBlock text={code.code1} theme={hybrid} language="jsx" />

        <h3>2.1. Установка</h3>
        <p>Библиотека доступна как стандартный NPM-пакет.</p>
        <CopyBlock text={code.code2} theme={hybrid} language="jsx" />

        <h3>2.2. Функия configureStore()</h3>
        <p>
          Обычно хранилище создается вызовом <code>createStore()</code>, в
          который передается корневой редюсер. Redux Toolkit содержит функцию{' '}
          <code>configureStore()</code>, которая оборачивает оригинальный{' '}
          <code>createStore()</code>, и настраивает некоторые полезные
          инструменты разработки как часть процесса создания хранилища.
        </p>
        <Link
          link="https://redux-toolkit.js.org/api/configureStore"
          text="Документация configureStore()"
        />
        <p>
          Заменим вызов <code>createStore()</code> на{' '}
          <code>configureStore()</code>, который ожидает один аргумент - объект
          с набором строго именованных свойств.
        </p>
        <CopyBlock text={code.code3} theme={hybrid} language="jsx" />

        <p>
          На первый вгляд практически одно и тоже, тем не менее, после
          рефакторинга, под капотом сразу были настроены инструменты
          разработчика (Redux DevTools) и некоторые другие полезные функции.
        </p>
        <p>
          Можно передать больше одного редюсера, и <code>configureStore()</code>{' '}
          сам создаст корневой редюсер. Для этого в свойство{' '}
          <code>reducer</code> передается объект.
        </p>
        <CopyBlock text={code.code4} theme={hybrid} language="jsx" />

        <p>Теперь Redux-код таймера выглядит следующим образом.</p>
        <CopyBlock text={code.code5} theme={hybrid} language="jsx" />

        <h3>2.3. Функция createAction()</h3>
        <p>
          Функция createAction() в качестве аргумента принимает строку
          описывающую тип действия и возвращает action creator.
        </p>
        <Link
          link="https://redux-toolkit.js.org/api/createAction"
          text="Документация createAction()"
        />
        <CopyBlock text={code.code6} theme={hybrid} language="jsx" />

        <p>
          А где взять тип действия, например для использования внутри редюсера?
          Есть два способа.
        </p>
        <ul>
          <li>
            Метод <code>toString()</code> функции <code>increment</code> был
            переопределен и возвращает строку типа действия.
          </li>
          <li>
            Значение типа действия можно получить обратившись к свойству{' '}
            <code>type</code> функции
            <code>increment</code>
          </li>
        </ul>
        <CopyBlock text={code.code7} theme={hybrid} language="jsx" />

        <p>
          Продолжим рефакторить Redux-код таймера. Использование{' '}
          <code>createAction()</code> избавит нас от нескольких строк кода.
        </p>
        <CopyBlock text={code.code8} theme={hybrid} language="jsx" />

        <h3>2.4. Функция createReducer()</h3>
        <p>
          Наиболее распространенным подходом создания редюсера является проверка
          свойства
          <code>action.type</code> внутри <code>switch</code> и выполнение
          определенной логики для каждого типа действия. К тому же редюсер
          определяет начальное значение состояния и возвращает полученное
          состояние, если он не должен обрабатывать дейтсвие такого типа.
        </p>
        <Link
          link="https://redux-toolkit.js.org/api/createReducer"
          text="Документация createReducer()"
        />
        <p>
          Используя функцию <code>createReducer()</code> можно создавать
          редюсеры передав объект свойств специального формата, где каждый ключ
          это тип действия, а значение - это редюсер для этого типа.
        </p>
        <CopyBlock text={code.code9} theme={hybrid} language="jsx" />

        <p>
          Так как синтаксис вычисляемых свойств объекта вызывает метод{' '}
          <code>toString()</code>
          указанной переменной, можно просто использовать имя функции без
          указания свойства <code>type</code>, ведь метод{' '}
          <code>toString()</code> наших action creators был переопределен так,
          чтобы возвращать тип дейсвтвия.
        </p>
        <CopyBlock text={code.code10} theme={hybrid} language="jsx" />

        <p>Применим этот синтаксис к коду таймера.</p>
        <CopyBlock text={code.code11} theme={hybrid} language="jsx" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>3. Пример</h2>
        <p>
          В интерактивном редакторе можно посмотреть код и живую версию таймера.
        </p>
        <CopyBlock text={code.code12} theme={hybrid} language="jsx" />
        <Link
          link="https://codesandbox.io/s/timer-with-redux-toolkit-sze3f?from-embed"
          text="CodeSandBox"
        />
      </div>
    </div>
  </div>
);

export default Lesson12;
