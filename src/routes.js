import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home' /* webpackChunkName: "home" */));
const Lesson01 = lazy(() =>
  import('./pages/Lesson-01' /* webpackChunkName: "lesson-01" */),
);
const Lesson02 = lazy(() =>
  import('./pages/Lesson-02' /* webpackChunkName: "lesson-02" */),
);

export default [
  {
    title: 'Начало',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    title: 'Занятие 1 - Компоненты и коллекции',
    path: '/lesson-01',
    component: Lesson01,
    exact: false,
  },
  {
    title: 'Занятие 2 - Стилизация',
    path: '/lesson-02',
    component: Lesson02,
    exact: false,
  },
];
