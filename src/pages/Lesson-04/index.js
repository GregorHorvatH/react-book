import React from 'react';
import { CopyBlock, hybrid } from 'react-code-blocks';
import Image from '../../components/Image';
import Link from '../../components/Link';

import * as code from './code';

const Lesson04 = () => (
  <div className="container lesson-04">
    <div className="row">
      <div className="col">
        <h2>1. Контролируемый элемент</h2>
        <p>
          Основная цель любой формы - получить данные пользователя. Элементы
          формы это контроллируемые компоненты, значения всех полей должны быть
          в <code>state</code>.
        </p>
        <p>Паттерн работы с элементами форм очень простой.</p>
        <ul>
          <li>
            Поле в <code>state</code> определяет значение атрибута{' '}
            <code>value</code> инпута
          </li>
          <li>
            Событию <code>onChange</code> передается метод изменяющий поле в
            состоянии
          </li>
        </ul>
        <p>Получаем замкнутый круг.</p>
        <ul>
          <li>
            При событии <code>onChange</code>, метод класса обновляет поле в
            состоянии
          </li>
          <li>При изменении состояния происходит ре-рендер</li>
          <li>Инпут отображается с обновленными данными</li>
        </ul>
        <Image filename="controlled_input.jpg" />
        <CopyBlock text={code.code1} theme={hybrid} language="jsx" />

        <p>
          Получается что не интерфейс определяет какие у нас данные, а наоборот,
          данные определяют то, что видит пользователь, обновляя DOM при
          изменении состояния компонента.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>2. Формы</h2>
        <p>Создадим форму регистрации.</p>
        <CopyBlock text={code.code2} theme={hybrid} language="jsx" />

        <p>
          Добавим поля для <code>email</code> и <code>password</code>, а заодно
          используем очень полезный паттерн для callback-функции передаваемой в{' '}
          <code>onChange</code>.
        </p>
        <CopyBlock text={code.code3} theme={hybrid} language="jsx" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>3. Генерация Id элементов формы</h2>
        <p>
          <strong>Доступность (accessibility, a11y)</strong> - очень важная тема
          в современном вебе. HTML-атрибут <code>for</code> тега{' '}
          <code>label</code> помогает читалкам и другим вспомогательным
          инструментам. В React он представлен jsx-атрибутом{' '}
          <code>htmlFor</code>.
        </p>
        <p>
          Для генерации уникальных идентификаторов элементов форм используется
          следующий подход: для каждого экземляра компонента, при его
          инициализации, создается набор уникальных идентификаторов, ханящихся
          на экземпляре. Таким образом, между разными формами получаем
          уникальные id.
        </p>
        <CopyBlock text={code.code4} theme={hybrid} language="jsx" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>4. Чекбоксы</h2>
        <p>
          Работа с чекбоксами проста и понятна. Чекбокс может быть всего в 2-х
          состояниях:
          <code>true</code> или <code>false</code>.
        </p>
        <p>Особенности чекбоксов:</p>
        <ul>
          <li>
            Имя атрибута которому передается текущее значение из{' '}
            <code>state</code>. Для чекбоксов это <code>checked</code>, и
            передаем туда буль
          </li>
          <li>
            При обработке события <code>onChange</code>, для получения значения,
            в объекте события обращаемся к свойству{' '}
            <code>event.text.checked</code>
          </li>
          <li>
            Если чекбокс должен хранить значение, его так же можно повесить на
            атрибут
            <code>value</code> и прочитать из объекта события
          </li>
        </ul>
        <p>
          Добавим к нашей форме регистрации чекбокс для подтвержения
          пользовательского соглашения, и сделаем кнопку сабмита неактивной пока
          неактивен чекбокс.
        </p>
        <CopyBlock text={code.code5} theme={hybrid} language="jsx" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>5. Радиокнопки</h2>
        <p>
          В отличии от привычной группировки по значению атрибута{' '}
          <code>name</code>, в React радиокнопка это всего лишь элемент
          интерфейса, который:
        </p>
        <ul>
          <li>Знает выбран ли он</li>
          <li>Может попросить форму изменить выделение</li>
        </ul>
        <p>
          Обычно у радиокнопок есть и атрибут <code>checked</code> и{' '}
          <code>value</code>. К примеру радио кнопка отвечающая за выбор пола
          пользователя.
        </p>
        <CopyBlock text={code.code6} theme={hybrid} language="jsx" />
        <p>Добавим группу радиокнопок в нашу форму.</p>
        <CopyBlock text={code.code7} theme={hybrid} language="jsx" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>6. Селект</h2>
        <p>
          Все просто - есть селект, есть опции, у селекта есть{' '}
          <code>value</code> и <code>onChange</code>. Добавляем выбор возрастной
          категории.
        </p>
        <CopyBlock text={code.code8} theme={hybrid} language="jsx" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>7. Дополнительные материалы</h2>
        <ul>
          <li>
            <Link
              link="https://ru.reactjs.org/docs/forms.html"
              text="Документация - формы"
            />
          </li>
          <li>
            <Link
              link="https://lorenstewart.me/2016/10/31/react-js-forms-controlled-components/"
              text="Controlled Components"
            />
          </li>
          <li>
            <Link link="https://jaredpalmer.com/formik" text="Formik" />
          </li>
          <li>
            <Link link="https://final-form.org/react" text="React Final Form" />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Lesson04;
