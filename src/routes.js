import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home' /* webpackChunkName: "home" */));
const Lesson01 = lazy(() =>
  import('./pages/Lesson-01' /* webpackChunkName: "lesson-01" */),
);
const Lesson02 = lazy(() =>
  import('./pages/Lesson-02' /* webpackChunkName: "lesson-02" */),
);
const Lesson03 = lazy(() =>
  import('./pages/Lesson-03' /* webpackChunkName: "lesson-03" */),
);
const Lesson04 = lazy(() =>
  import('./pages/Lesson-04' /* webpackChunkName: "lesson-04" */),
);
const Lesson05 = lazy(() =>
  import('./pages/Lesson-05' /* webpackChunkName: "lesson-05" */),
);
const Lesson06 = lazy(() =>
  import('./pages/Lesson-06' /* webpackChunkName: "lesson-06" */),
);
const Lesson07 = lazy(() =>
  import('./pages/Lesson-07' /* webpackChunkName: "lesson-07" */),
);
const Lesson08 = lazy(() =>
  import('./pages/Lesson-08' /* webpackChunkName: "lesson-08" */),
);
const Lesson09 = lazy(() =>
  import('./pages/Lesson-09' /* webpackChunkName: "lesson-09" */),
);
const Lesson10 = lazy(() =>
  import('./pages/Lesson-10' /* webpackChunkName: "lesson-10" */),
);
const Lesson11 = lazy(() =>
  import('./pages/Lesson-11' /* webpackChunkName: "lesson-11" */),
);
const Lesson12 = lazy(() =>
  import('./pages/Lesson-12' /* webpackChunkName: "lesson-12" */),
);
const Lesson13 = lazy(() =>
  import('./pages/Lesson-13' /* webpackChunkName: "lesson-13" */),
);
const Lesson14 = lazy(() =>
  import('./pages/Lesson-14' /* webpackChunkName: "lesson-14" */),
);
const Lesson15 = lazy(() =>
  import('./pages/Lesson-15' /* webpackChunkName: "lesson-15" */),
);
const Login = lazy(() =>
  import('./pages/Login' /* webpackChunkName: "login" */),
);
const Logout = lazy(() =>
  import('./pages/Logout' /* webpackChunkName: "logout" */),
);

export default [
  {
    title: 'Начало',
    path: '/',
    component: Home,
    exact: true,
    isSecure: false,
  },
  {
    title: 'Занятие 1 - Компоненты и коллекции',
    path: '/lesson-01',
    component: Lesson01,
    exact: false,
    isSecure: true,
  },
  {
    title: 'Занятие 2 - Стилизация',
    path: '/lesson-02',
    component: Lesson02,
    exact: false,
    isSecure: true,
  },
  {
    title: 'Занятие 3 - События и состояние',
    path: '/lesson-03',
    component: Lesson03,
    exact: false,
    isSecure: true,
  },
  {
    title: 'Занятие 4 - Формы',
    path: '/lesson-04',
    component: Lesson04,
    exact: false,
    isSecure: true,
  },
  {
    title: 'Занятие 5 - Жизненный цикл',
    path: '/lesson-05',
    component: Lesson05,
    exact: false,
    isSecure: true,
  },
  {
    title: 'Занятие 6 - Работа с REST API',
    path: '/lesson-06',
    component: Lesson06,
    exact: false,
    isSecure: true,
  },
  {
    title: 'Занятие 7 - React Router',
    path: '/lesson-07',
    component: Lesson07,
    exact: false,
    isSecure: true,
  },
  {
    title: 'Занятие 8 - Code splitting',
    path: '/lesson-08',
    component: Lesson08,
    exact: false,
    isSecure: true,
  },
  {
    title: 'Занятие 9 - Паттерны и контекст',
    path: '/lesson-09',
    component: Lesson09,
    exact: false,
    isSecure: true,
  },
  {
    title: 'Занятие 10 - Анимация',
    path: '/lesson-10',
    component: Lesson10,
    exact: false,
    isSecure: true,
  },
  {
    title: 'Занятие 11 - Основы Redux',
    path: '/lesson-11',
    component: Lesson11,
    exact: false,
    isSecure: true,
  },
  {
    title: 'Занятие 12 - Redux Toolkit',
    path: '/lesson-12',
    component: Lesson12,
    exact: false,
    isSecure: true,
  },
  {
    title: 'Занятие 13 - Асинхронный Redux',
    path: '/lesson-13',
    component: Lesson13,
    exact: false,
    isSecure: true,
  },
  {
    title: 'Занятие 14 - Селекторы',
    path: '/lesson-14',
    component: Lesson14,
    exact: false,
    isSecure: true,
  },
  {
    title: 'Занятие 15-16 - Регистрация и логин пользователя',
    path: '/lesson-15',
    component: Lesson15,
    exact: false,
    isSecure: true,
  },
  {
    title: 'Вход',
    path: '/login',
    component: Login,
    exact: false,
    isSecure: false,
    hideWhenAuthorized: true,
  },
  {
    title: 'Выход',
    path: '/logout',
    component: Logout,
    exact: false,
    isSecure: true,
  },
];
