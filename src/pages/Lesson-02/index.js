import React from 'react';
import { CopyBlock, hybrid } from 'react-code-blocks';
import Link from '../../components/Link';

import * as code from './code';

const Lesson02 = () => (
  <div className="container lesson-02">
    <div className="row">
      <div className="col">
        <h3>1. Инлайн CSS</h3>
        <CopyBlock text={code.code1} theme={hybrid} language="jsx" />
        <ul>
          <li>Плохая производительность</li>
          <li>Не масштабируется</li>
          <li>Ограниченные возможности (псевдоэлементы, медиа и т. п.)</li>
          <li>Нет инструментов и сложно дебажить</li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>2. Ванильный CSS или SASS</h2>
        <CopyBlock text={code.code2} theme={hybrid} language="css" />
        <CopyBlock text={code.code3} theme={hybrid} language="jsx" />
        <ul>
          <li>Ванильный CSS не масштабируется</li>
          <li>Глобальное пространство имен</li>
          <li>Приходится использовать BEM-нотацию</li>
          <li>Вложенность селекторов без BEM</li>
          <li>Проблематичное удаление мертвого кода</li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>3. CSS-модули</h2>
        <p>
          Согласно определению из репозитория, CSS-модули — это CSS-файлы, в
          которых все классы по умолчанию находятся в локальной области
          видимости. Этот подход был разработан, что бы решить проблему
          глобальной области видимости в CSS.
        </p>
        <p>
          <strong>CSS-модули</strong> — это не официальная спецификация, они не
          имплементированы в браузеры. Это процесс, запускаемый на стадии сборки
          проекта (например, с помощью Webpack), в результате выполнения
          которого имена классов и селекторы изменяются так, чтобы образовалась
          своего рода локальная область видимости (что-то вроде пространства
          имен).
        </p>
        <p>CSS-модули гарантируют, что все стили одного компонента:</p>
        <ul>
          <li>Находятся в одном месте</li>
          <li>Применяются только к этому компоненту и никакому другому</li>
        </ul>
        <p>
          Create React App поддерживает CSS-модули из коробки, все что
          необходимо сделать это называть файлы стилей согласно конвенции{' '}
          <code>[name].module.css</code>.
        </p>
        <p>
          Использование напоминает обычный CSS, за тем исключением, что все
          имена классов обфусцируются. В результирующем CSS получаем уникальное
          имя класса в формате
        </p>
        <p>
          Использование напоминает обычный CSS, за тем исключением, что все
          имена классов обфусцируются. В результирующем CSS получаем уникальное
          имя класса в формате
          <code>[filename]\_[classname]\_\_[hash]</code>. CSS-модули решают
          проблему глобального пространсва имен с помощью мапинга классов из
          CSS-файла в объект с ключами по имени класса.
        </p>
        <CopyBlock text={code.code4} theme={hybrid} language="css" />
        <CopyBlock text={code.code5} theme={hybrid} language="jsx" />

        <h3>3.1. Композиция</h3>
        <p>
          В CSS-модулях можно делать композицию стилей прямо в CSS-файле с
          помощью свойства <code>composes</code>, как <code>@extends</code> в{' '}
          <code>SASS</code>.
        </p>
        <CopyBlock text={code.code6} theme={hybrid} language="css" />
        <CopyBlock text={code.code7} theme={hybrid} language="jsx" />

        <h3>3.2. Переменные</h3>
        <p>В CSS-модулях также есть возможность использовать переменные.</p>
        <CopyBlock text={code.code8} theme={hybrid} language="css" />

        <h3>3.3. Глобальные стили</h3>
        <p>
          Для того чтобы сделать стиль глобальным, необходимо обернуть селектор
          в конструкцию <code>:global(selector)</code>. Селекторы тегов по
          умолчанию будут в глобальной области видимости, CSS-модули обфусцируют
          только классы.
        </p>
        <CopyBlock text={code.code9} theme={hybrid} language="css" />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>4. CSS-in-JS</h2>
        <ul>
          <li>
            <Link
              link="https://css-live.ru/articles/vsyo-chto-vam-nuzhno-znat-o-css-in-js.html"
              text="Всё, что вам нужно знать о CSS-in-JS"
            />
          </li>
          <li>
            <Link
              link="https://www.styled-components.com/"
              text="Документация Styled Components"
            />
          </li>
          <li>
            <Link link="https://emotion.sh/" text="Документация Emotion" />
          </li>
          <li>
            <Link link="https://cssinjs.org" text="Документация JSS" />
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>5. Библиотеки компонентов</h2>
        <ul>
          <li>
            <Link link="https://material-ui.com/" text="MATERIAL" />
          </li>
          <li>
            <Link link="https://ant.design/" text="Ant Design" />
          </li>
          <li>
            <Link
              link="https://react-bootstrap.github.io/"
              text="React Bootstrap"
            />
          </li>
          <li>
            <Link
              link="https://react.semantic-ui.com/"
              text="Semantic UI React"
            />
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h2>6. Дополнительные материалы</h2>
        <ul>
          <li>
            <Link
              link="https://glenmaddern.com/articles/css-modules"
              text="CSS-Modules: Welcome to the Future"
            />
          </li>
          <li>
            <Link
              link="https://gist.github.com/threepointone/731b0c47e78d8350ae4e105c1a83867d"
              text="&#8236;In what way is JS any more maintainable than CSS?"
            />
          </li>
          <li>
            <Link
              link="https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660"
              text="A Unified Styling Language"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Lesson02;
