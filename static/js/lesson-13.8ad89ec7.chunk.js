(this["webpackJsonpreact-book"]=this["webpackJsonpreact-book"]||[]).push([[14],{262:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(38),r=a(36),o=a(35);t.default=function(){return l.a.createElement("div",{className:"container lesson-13"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h2",null,"1. Redux middleware"),l.a.createElement("p",null,l.a.createElement("strong",null,"Middleware (\u043f\u0440\u043e\u0441\u043b\u043e\u0439\u043a\u0430)")," - \u043e\u0431\u0449\u0430\u044f \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f \u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u043c \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0438, \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430, \u043d\u0430\u0445\u043e\u0434\u044f\u0449\u0438\u0439\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u0445 \u0442\u043e\u0447\u0435\u043a \u0432 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0446\u0435\u043f\u043e\u0447\u043a\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430."),l.a.createElement("p",null,"\u041f\u0440\u043e\u0441\u043b\u043e\u0439\u043a\u0430 \u044d\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043d\u0435\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u043c\u043e\u0436\u0435\u0442 \u0438\u0445 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0438, \u0435\u0441\u043b\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e, \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0434\u0430\u043b\u044c\u0448\u0435 \u043f\u043e \u0446\u0435\u043f\u043e\u0447\u043a\u0435. \u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0441\u043b\u043e\u0435\u043a \u0432 \u043e\u0434\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."),l.a.createElement("p",null,"Redux-\u043f\u0440\u043e\u0441\u043b\u043e\u0439\u043a\u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0442\u043e\u0447\u043a\u0443 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0438 \u043c\u043e\u043c\u0435\u043d\u0442\u043e\u043c, \u043a\u043e\u0433\u0434\u0430 \u044d\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442 \u0440\u0435\u0434\u044e\u0441\u0435\u0440\u0430. \u041f\u0440\u043e\u0441\u043b\u043e\u0439\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0430\u0445, \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 HTTP-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0438 \u0438 \u0442.\u0434."),l.a.createElement(r.a,{filename:"redux-flow-with-middleware.png"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u041f\u0435\u0440\u0435\u0434 \u0442\u0435\u043c \u043a\u0430\u043a \u0434\u0435\u0439\u0441\u0432\u0438\u044f \u043f\u043e\u043f\u0430\u0434\u0430\u044e\u0442 \u0432 \u0440\u0435\u0434\u044e\u0441\u0435\u0440\u044b, \u043e\u043d\u0438 \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0442 \u0447\u0435\u0440\u0435\u0437 \u0446\u0435\u043f\u043e\u0447\u043a\u0443 (\u0441\u0442\u0435\u043a) \u043f\u0440\u043e\u0441\u043b\u043e\u0435\u043a."),l.a.createElement("li",null,"\u041f\u0440\u043e\u0441\u043b\u043e\u0439\u043a\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u044e\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a\u043e \u0432\u0441\u0435\u043c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u043c."),l.a.createElement("li",null,"\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0441\u043b\u043e\u0439\u043a\u0430 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 \u043a\u0430\u043a\u0438\u043c-\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u043c, \u043e\u043d\u0430 \u043c\u043e\u0436\u0435\u0442 \u0435\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c, \u043e\u0442\u043c\u0435\u043d\u044f\u0442\u044c \u0438\u043b\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043a\u0430\u043a\u0438\u0435-\u0442\u043e \u0434\u0440\u0443\u0433\u0438\u0435 \u0434\u0435\u0439\u0442\u0441\u0432\u0438\u044f."),l.a.createElement("li",null,"\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0441\u043b\u043e\u0439\u043a\u0430 \u043d\u0435 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0442\u0438\u043f\u043e\u043c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u043e\u043d\u0430 \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0431\u044f \u0431\u0435\u0437 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439."),l.a.createElement("li",null,"\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u0440\u043e\u0448\u043b\u043e \u0432\u0441\u044e \u0446\u0435\u043f\u043e\u0447\u043a\u0443 \u043f\u0440\u043e\u0441\u043b\u043e\u0435\u043a, \u043e\u043d\u043e \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u0432 \u0440\u0435\u0434\u044e\u0441\u0435\u0440\u044b.")),l.a.createElement(r.a,{filename:"middleware-stack.png"}),l.a.createElement("h3",null,"1.1. C\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0441\u043b\u043e\u0435\u043a"),l.a.createElement("p",null,"Redux \u043d\u0430\u043f\u0438\u0441\u0430\u043d \u0441 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0441\u043b\u043e\u0435\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f",l.a.createElement(o.a,{link:"http://prgssr.ru/development/vvedenie-v-karrirovanie-v-javascript.html",text:"\u043a\u0430\u0440\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f"}),"."),l.a.createElement(c.a,{text:"const middleware = store => next => action => {};",theme:c.b,language:"jsx"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"store")," - \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 Redux-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"),l.a.createElement("li",null,l.a.createElement("code",null,"action")," - \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"),l.a.createElement("li",null,l.a.createElement("code",null,"next")," - \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0437\u0432\u0430\u0442\u044c \u043a\u043e\u0433\u0434\u0430 \u043f\u0440\u043e\u0441\u043b\u043e\u0439\u043a\u0430 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u0434\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0435\u0433\u043e \u0434\u0430\u043b\u044c\u0448\u0435 \u043f\u043e \u0446\u0435\u043f\u043e\u0447\u043a\u0435 \u043f\u0440\u043e\u0441\u043b\u043e\u0435\u043a \u0438\u043b\u0438 \u0432 \u0440\u0435\u0434\u044e\u0441\u0435\u0440\u044b.")),l.a.createElement("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u043b\u043e\u0439\u043a\u0443 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0435 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0443 Redux \u0435\u0441\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044f"," ",l.a.createElement("code",null,"applyMiddleware"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0435\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u043c\u044b \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u043c \u043a\u0430\u043a \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442",l.a.createElement("code",null,"enhancer")," \u0432 ",l.a.createElement("code",null,"createStore()"),"."),l.a.createElement(c.a,{text:"import { createStore, applyMiddleware } from 'redux';\n\nconst reducer = state => state;\n\nconst loggerMiddleware = store => next => action => {\n  console.group(action.type);\n  console.info('dispatching', action);\n  console.groupEnd(action.type);\n\n  return next(action);\n};\n\nconst enhancer = applyMiddleware(loggerMiddleware);\n\nconst store = createStore(reducer, enhancer);",theme:c.b,language:"jsx"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h2",null,"2. \u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c \u0432 Redux"),l.a.createElement("p",null,"\u041d\u0430 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043d\u0438\u0436\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0430 \u043f\u043e\u043b\u043d\u0430\u044f \u0441\u0445\u0435\u043c\u0430 \u0440\u0430\u0431\u043e\u0442\u044b Redux \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u043f\u0440\u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445."),l.a.createElement(r.a,{filename:"redux-flow-2.gif"}),l.a.createElement("h3",null,"2.1. \u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f"),l.a.createElement("p",null,"Redux \u043d\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430 \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u044d\u0442\u0443 \u0437\u0430\u0434\u0430\u0447\u0443 \u0440\u0435\u0448\u0430\u044e\u0442 \u043f\u0440\u043e\u0441\u043b\u043e\u0439\u043a\u0438. \u0415\u0441\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u0433\u043e\u0442\u043e\u0432\u044b\u0445 \u0440\u0435\u0448\u0435\u043d\u0438\u0439: \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u043f\u043e\u0434\u043e\u0439\u0434\u0435\u0442 ",l.a.createElement("code",null,"redux-promise"),", \u0434\u043b\u044f \u0441\u0440\u0435\u0434\u043d\u0435\u0439 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 ",l.a.createElement("code",null,"redux-thunk"),", \u0430 \u0434\u043b\u044f \u043e\u0447\u0435\u043d\u044c \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u0438 \u0437\u0430\u043f\u0443\u0442\u0430\u043d\u043d\u044b\u0445"," ",l.a.createElement("code",null,"redux-saga")," \u0438\u043b\u0438 ",l.a.createElement("code",null,"redux-observable"),"."),l.a.createElement("p",null,"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u043f\u0438\u0441\u0430\u0442\u044c \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435"," ",l.a.createElement("code",null,"action creators"),". \u042d\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u043c\u0435\u0441\u0442\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430-\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u044e. \u0412 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u044b\u0445 \u043d\u0430\u0443\u043a\u0430\u0445 \u044d\u0442\u043e \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",l.a.createElement("code",null,"thunk"),"."),l.a.createElement(c.a,{text:"const asyncActionCreator = args => dispatch => {};",theme:c.b,language:"jsx"}),l.a.createElement("p",null,"\u041a\u043e\u0433\u0434\u0430 ",l.a.createElement("code",null,"action creator")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u044d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u043f\u0440\u043e\u0441\u043b\u043e\u0439\u043a\u043e\u0439. \u0422\u0430\u043a\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u0442\u043e\u0439, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u043d\u0430 \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u043f\u043e\u0431\u043e\u0447\u043d\u044b\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u044b, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 HTTP-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432. \u0412 \u0435\u0435 \u0442\u0435\u043b\u0435 \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0438\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f."),l.a.createElement(c.a,{text:"const asyncActionCreator = args => dispatch => {\n  fetch('some url')\n    .then(r => r.json())\n    .then(data => {\n      dispatch({\n        type: 'FETCH_SUCCESS',\n        payload: data,\n      });\n    });\n};",theme:c.b,language:"jsx"}),l.a.createElement("h3",null,"2.2. thunk middleware"),l.a.createElement("p",null,"\u041d\u0430\u043f\u0438\u0448\u0435\u043c \u043f\u0440\u043e\u0441\u043b\u043e\u0439\u043a\u0443 ",l.a.createElement("code",null,"thunk"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0443\u043c\u0435\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. \u0415\u0441\u043b\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u044d\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u043e\u043d\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u0432\u0430\u043d\u0430 \u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0435\u0439 \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u044b",l.a.createElement("code",null,"dispatch")," \u0438 ",l.a.createElement("code",null,"getState"),", \u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",l.a.createElement("code",null,"dispatch")," \u0432 \u0442\u0435\u043b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. \u0412 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442, \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0434\u0430\u043b\u044c\u0448\u0435 \u043f\u043e \u0446\u0435\u043f\u043e\u0447\u043a\u0435 \u043f\u0440\u043e\u0441\u043b\u043e\u0435\u043a."),l.a.createElement(c.a,{text:"const thunk = ({ dispatch, getState }) => next => action =>\ntypeof action === 'function' ? action(dispatch, getState) : next(action);",theme:c.b,language:"jsx"}),l.a.createElement(o.a,{link:"https://github.com/reduxjs/redux-thunk",text:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 redux-thunk"}),l.a.createElement("h3",null,"2.3. HTTP-\u0437\u0430\u043f\u0440\u043e\u0441\u044b"),l.a.createElement("p",null,"\u041f\u0440\u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0430\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f\u0445 \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043b\u043e\u0430\u0434\u0435\u0440\u044b \u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0438. \u0412 \u0442\u0430\u043a\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0441\u0445\u0435\u043c\u0443 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439."),l.a.createElement("p",null,"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0442\u0430\u043a, \u0441 \u043f\u043e\u043b\u044f\u043c\u0438 \u0444\u043b\u0430\u0433\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043e\u0448\u0438\u0431\u043a\u0438."),l.a.createElement(c.a,{text:"{\n  notes: {\n    items: [],\n    loading: false,\n    error: null\n  }\n}",theme:c.b,language:"jsx"}),l.a.createElement("p",null,"\u0422\u043e\u0433\u0434\u0430 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0442\u0430\u043a."),l.a.createElement("ul",null,l.a.createElement("li",null,"\u041f\u0440\u0438 ",l.a.createElement("code",null,"notes/FETCH_START")," \u0432 \u043f\u043e\u043b\u0435 ",l.a.createElement("code",null,"loading")," ","\u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",l.a.createElement("code",null,"true"),", \u0430 \u043f\u0440\u0438",l.a.createElement("code",null,"notes/FETCH_SUCCESS")," \u0438\u043b\u0438"," ",l.a.createElement("code",null,"notes/FETCH_FAILURE")," \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442 ",l.a.createElement("code",null,"false")),l.a.createElement("li",null,"\u041f\u0440\u0438 ",l.a.createElement("code",null,"notes/FETCH_FAILURE")," \u0432 \u043f\u043e\u043b\u0435 ",l.a.createElement("code",null,"error")," ","\u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0431\u044a\u0435\u043a\u0442 \u043e\u0448\u0438\u0431\u043a\u0438"),l.a.createElement("li",null,"\u041f\u0440\u0438 ",l.a.createElement("code",null,"notes/FETCH_SUCCESS")," \u0432 \u043f\u043e\u043b\u0435 ",l.a.createElement("code",null,"items")," ","\u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0435")),l.a.createElement(c.a,{text:"const fetchStart = () => ({\n  type: 'notes/FETCH_START',\n});\n\nconst fetchSuccess = data => ({\n  type: 'notes/FETCH_SUCCESS',\n  payload: data,\n});\n\nconst fetchFailure = error => ({\n  type: 'notes/FETCH_FAILURE',\n  payload: error,\n});\n\nconst asyncActionCreator = args => dispatch => {\n  dispatch(fetchStart());\n\n  fetch('some url')\n    .then(r => r.json())\n    .then(data => dispatch(fetchSuccess(data)))\n    .catch(err => dispatch(fetchFailure(err)));\n};",theme:c.b,language:"jsx"}),l.a.createElement("h3",null,"2.4. \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.a,{link:"https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60",text:"Thunks in Redux: The Basics"})),l.a.createElement("li",null,l.a.createElement(o.a,{link:"https://youtu.be/xihoZZU0gao",text:"Redux Thunk Tricks"}))))))}},35:function(e,t,a){"use strict";var n=a(1),l=a.n(n);t.a=function(e){var t=e.link,a=e.text;return l.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},a)}},36:function(e,t,a){"use strict";var n=a(1),l=a.n(n);t.a=function(e){var t=e.filename;return l.a.createElement("img",{src:"/react-book/images/"+t,className:"img-fluid mx-auto d-block",alt:"screenshot",loading:"lazy"})}}}]);
//# sourceMappingURL=lesson-13.8ad89ec7.chunk.js.map