import React from 'react';
import Image from '../../components/Image';
import Link from '../../components/Link';

const Home = () => (
  <div className="container home">
    <div className="row">
      <div className="col">
        <h3 className="text-center with-margin">Карманный справочник</h3>

        <Image filename="react-js.png" />
        <p>
          Впервые React использовался в новостной ленте Facebook в 2011 году и
          позже в ленте Instagram в 2012 году. Исходный код React открыт в мае
          2013 года на конференции «JSConf US». React Native анонсирован на
          конференции Facebook «React. js Conf» в феврале 2015 года, а исходный
          код открыт в марте 2015 года.
        </p>
        <p>
          <Link
            link="https://ru.wikipedia.org/wiki/React#:~:text=%D0%92%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B5%20React%20%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BB%D1%81%D1%8F%20%D0%B2%20%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%BD%D0%BE%D0%B9,%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%20%D0%B2%20%D0%BC%D0%B0%D1%80%D1%82%D0%B5%202015%20%D0%B3%D0%BE%D0%B4%D0%B0."
            text="wikipedia"
          />
        </p>
      </div>
    </div>
  </div>
);

export default Home;
