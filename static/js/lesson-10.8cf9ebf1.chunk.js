(this["webpackJsonpreact-book"]=this["webpackJsonpreact-book"]||[]).push([[11],{261:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(39),r=a(35);t.default=function(){return l.a.createElement("div",{className:"container lesson-10"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h2",null,"1. \u0412\u0430\u043d\u0438\u043b\u044c\u043d\u044b\u0439 CSS"),l.a.createElement("p",null,"CSS3 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u044b \u0438 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0438 \u044d\u0442\u043e \u043b\u0443\u0447\u0448\u0438\u0439 \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0438, \u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u0435\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445, \u043a\u043e\u0433\u0434\u0430 \u043d\u0430\u0434 \u0430\u043d\u0438\u043c\u0438\u0440\u0443\u0435\u043c\u044b\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0432 DOM."),l.a.createElement("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 CSS \u0434\u043b\u044f \u0441\u043a\u0440\u044b\u0442\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u0440\u0435\u0447\u0438\u0442 \u0438\u0434\u0435\u043e\u043b\u043e\u0433\u0438\u0438 React, \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0432 DOM-\u0434\u0435\u0440\u0435\u0432\u0435, \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044e \u0438\u0441\u0447\u0435\u0437\u043d\u043e\u0432\u0435\u043d\u0438\u044f. \u0410\u043d\u0438\u043c\u0430\u0446\u0438\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438 \u0438\u0437\u043b\u0438\u0448\u043d\u0435 \u0441\u043b\u043e\u0436\u043d\u0430\u044f."),l.a.createElement(r.a,{link:"https://codesandbox.io/s/lym153z46z?from-embed",text:"CodeSandbox"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h2",null,"2. React Transition Group"),l.a.createElement("p",null,"\u042d\u0442\u0430 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u043d\u0435 \u0430\u043d\u0438\u043c\u0438\u0440\u0443\u0435\u0442 \u0441\u0442\u0438\u043b\u0438 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e. \u0412\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0430\u0431\u043e\u0440 \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u044e\u0442 \u044d\u0442\u0430\u043f\u044b \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 (\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0432 DOM) \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442 CSS-\u0441\u0442\u0438\u043b\u044f\u043c\u0438, \u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 CSS \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u044d\u0442\u0430\u043f\u0435."),l.a.createElement(c.a,{text:"npm install react-transition-group",theme:c.b,language:"jsx"}),l.a.createElement(r.a,{link:"http://reactcommunity.org/react-transition-group/",text:"React Transition Group"}),l.a.createElement("h3",null,"2.1. \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 Transition"),l.a.createElement("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043d\u0430 \u0431\u0430\u0437\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u044b \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435. \u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u043e\u0442 \u043e\u0434\u043d\u043e\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043a \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u0441 \u0442\u0435\u0447\u0435\u043d\u0438\u0435\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442"," ",l.a.createElement("code",null,l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"Transition"),l.a.createElement("span",{className:"token punctuation"},">")))," ","\u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u043d \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442, \u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f ",l.a.createElement("code",null,"enter")," \u0438 ",l.a.createElement("code",null,"exit"),". \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043c\u043e\u0436\u0435\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044f \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u0438 \u0438\u043b\u0438 \u043a\u043b\u0430\u0441\u0441\u044b) \u043f\u043e\u0434 \u044d\u0442\u0438 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f."),l.a.createElement("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 4 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"entering")," - \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043f\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 DOM"),l.a.createElement("li",null,l.a.createElement("code",null,"entered")," - \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043f\u043e\u044f\u0432\u0438\u043b\u0441\u044f \u0432 DOM"),l.a.createElement("li",null,l.a.createElement("code",null,"exiting")," - \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0443\u0434\u0430\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0437 DOM"),l.a.createElement("li",null,l.a.createElement("code",null,"exited")," - \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0443\u0434\u0430\u043b\u0435\u043d \u0438\u0437 DOM")),l.a.createElement("p",null,"\u041f\u0440\u043e\u043f\u044b:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"entering")," - \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043f\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 DOM"),l.a.createElement("li",null,l.a.createElement("code",null,"entered")," - \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043f\u043e\u044f\u0432\u0438\u043b\u0441\u044f \u0432 DOM"),l.a.createElement("li",null,l.a.createElement("code",null,"exiting")," - \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0443\u0434\u0430\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0437 DOM"),l.a.createElement("li",null,l.a.createElement("code",null,"exited")," - \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0443\u0434\u0430\u043b\u0435\u043d \u0438\u0437 DOM")),l.a.createElement("p",null,"\u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0430 ",l.a.createElement("code",null,"in")," \u0440\u0430\u0432\u043d\u043e ",l.a.createElement("code",null,"true"),", \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442 \u0441\u0442\u0430\u0434\u0438\u044e ",l.a.createElement("code",null,"\u0432\u0445\u043e\u0434\u0430"),". \u041e\u043d \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442 \u0438\u0437 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043a ",l.a.createElement("code",null,"entering")," \u0438 \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043d\u0435\u043c \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0435 \u0432"," ",l.a.createElement("code",null,"timeout")," \u0432\u0440\u0435\u043c\u044f, \u043f\u043e \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442 \u0432"," ",l.a.createElement("code",null,"entered"),"."),l.a.createElement("p",null,"\u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0430 ",l.a.createElement("code",null,"in")," \u0440\u0430\u0432\u043d\u043e ",l.a.createElement("code",null,"false"),", \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442 \u0441\u0442\u0430\u0434\u0438\u044e ",l.a.createElement("code",null,"\u0412\u044b\u0445\u043e\u0434\u0430"),". \u041e\u043d \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442 \u0438\u0437 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043a ",l.a.createElement("code",null,"exiting")," \u0438 \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043d\u0435\u043c \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0435 \u0432 ",l.a.createElement("code",null,"timeout")," \u0432\u0440\u0435\u043c\u044f, \u043f\u043e \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442 \u0432 ",l.a.createElement("code",null,"exited"),"."),l.a.createElement(r.a,{link:"https://codesandbox.io/s/vnjol2wvw0?from-embed",text:"CodeSandbox"}),l.a.createElement("h3",null,"2.2. \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 CSSTransition"),l.a.createElement("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442"," ",l.a.createElement("code",null,l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"CSSTransition"),l.a.createElement("span",{className:"token punctuation"},">"))),", \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0438 \u043e\u0442"," ",l.a.createElement("code",null,l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"Transition"),l.a.createElement("span",{className:"token punctuation"},">"))),", \u0438\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u0438\u0440\u0443\u0435\u0442 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u0434\u0438\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u0438 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u0435\u0440\u0435\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0443 (reflow) \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u0435\u0437 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0438\u043b\u0438\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044e\u044e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430. \u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0442\u0435 \u0436\u0435 \u0441\u0430\u043c\u044b\u0435 \u043f\u0440\u043e\u043f\u044b"," ",l.a.createElement("code",null,"in"),", ",l.a.createElement("code",null,"timeout")," \u0438 \u0434\u0440\u0443\u0433\u0438\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u043e\u043f"," ",l.a.createElement("code",null,"classNames"),", \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u0438\u043c\u0435\u043d\u0430 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0444\u0430\u0437\u044b \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430."),l.a.createElement("p",null,"\u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442 \u043f\u0430\u0440\u0443 CSS-\u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0437 \u0441\u0442\u0430\u0434\u0438\u0439 ",l.a.createElement("code",null,"appear"),","," ",l.a.createElement("code",null,"enter"),", ",l.a.createElement("code",null,"exit")," \u0438",l.a.createElement("code",null,"done")," \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430. \u041d\u0430 \u0441\u0442\u0430\u0440\u0442\u0435 \u043a\u0430\u0436\u0434\u043e\u0439 \u0444\u0430\u0437\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043b\u0430\u0441\u0441, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u0441\u0440\u0430\u0437\u0443 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043a\u043b\u0430\u0441\u0441 \u0441 \u043f\u0440\u0438\u0441\u0442\u0430\u0432\u043a\u043e\u0439 ",l.a.createElement("code",null,"active"),". \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0438\u043c\u044f \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 \u0438 \u043e\u043f\u0438\u0441\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0441\u044b \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0437 \u0441\u0442\u0430\u0434\u0438\u0439."),l.a.createElement("p",null,"\u041a \u043f\u0440\u0438\u043c\u0435\u0440\u0443 \u0435\u0441\u043b\u0438 \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 ",l.a.createElement("code",null,"fade"),":"),l.a.createElement(c.a,{text:"/* \u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u0441\u044f \u043a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 DOM */\n.fade-enter {\n}\n\n/*\n* \u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u0441\u044f \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0442\u0438\u043a \u043f\u043e\u0441\u043b\u0435 fade-enter\n* \u0421\u044e\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e transition\n*/\n.fade-enter-active {\n}\n\n/* \u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u0441\u044f \u043a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u043f in \u043f\u043e\u043b\u0443\u0447\u0438\u0442 false */\n.fade-exit {\n}\n\n/*\n* \u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u0441\u044f \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0442\u0438\u043a \u043f\u043e\u0441\u043b\u0435 fade-exit\n* \u0421\u044e\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e transition\n*/\n.fade-exit-active {\n}",theme:c.b,language:"jsx"}),l.a.createElement(r.a,{link:"https://codesandbox.io/s/3vz1689l46?from-embed",text:"CodeSandbox"}),l.a.createElement("p",null,"\u041f\u0440\u043e\u043f\u0443 ",l.a.createElement("code",null,"classNames")," \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442 \u0441 \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u043c\u0438 \u0438\u043c\u0435\u043d\u0430\u043c\u0438 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u043f\u043e\u0434 \u043a\u0430\u0436\u0434\u0443\u044e \u0441\u0442\u0430\u0434\u0438\u044e."),l.a.createElement(c.a,{text:"classNames={{\n  appear: 'my-appear',\n  appearActive: 'my-active-appear',\n  appearDone: 'my-done-appear',\n  enter: 'my-enter',\n  enterActive: 'my-active-enter',\n  enterDone: 'my-done-enter',\n  exit: 'my-exit',\n  exitActive: 'my-active-exit',\n  exitDone: 'my-done-exit',\n }}",theme:c.b,language:"jsx"}),l.a.createElement("p",null,"\u0415\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f CSS-\u043c\u043e\u0434\u0443\u043b\u0438, \u0442\u043e \u0438\u043c\u0435\u043d\u0430 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0437\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0438\u043c\u0435\u043d\u0430 \u043a\u043b\u044e\u0447\u0435\u0439 \u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0435 \u0434\u043b\u044f ",l.a.createElement("code",null,"classNames")," \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u0446\u0435\u043b\u0438\u043a\u043e\u043c."),l.a.createElement(c.a,{text:"import styles from './styles.module.css';\n\n<CSSTransition classNames={styles}>\n",theme:c.b,language:"jsx"}),l.a.createElement(r.a,{link:"https://codesandbox.io/s/mox604444y?from-embed",text:"CodeSandbox"}),l.a.createElement("h3",null,"2.3. Transition events"),l.a.createElement("p",null,"\u0412\u0441\u0435\u0433\u043e 6 \u0448\u0442\u0443\u043a, \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0442 \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043b\u043e\u0436\u043d\u044b\u043c\u0438 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f\u043c\u0438 \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0441\u0442\u0430\u0434\u0438\u0438."),l.a.createElement(c.a,{text:"<CSSTransition\nonEnter={() => console.log('onEnter event')}\nonEntering={() => console.log('onEntering event')}\nonEntered={() => console.log('onEntered event')}\nonExit={() => console.log('onExit event')}\nonExiting={() => console.log('onExiting event')}\nonExited={() => console.log('onExited event')}\n/>",theme:c.b,language:"jsx"}),l.a.createElement("h3",null,"2.4. \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 TransitionGroup"),l.a.createElement("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442"," ",l.a.createElement("code",null,l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"TransitionGroup"),l.a.createElement("span",{className:"token punctuation"},">")))," ","\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0435\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"," ",l.a.createElement("code",null,l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"Transition"),l.a.createElement("span",{className:"token punctuation"},">")))," ","\u0438\u043b\u0438"," ",l.a.createElement("code",null,l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"CSSTransition"),l.a.createElement("span",{className:"token punctuation"},">"))),". \u041f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438,"," ",l.a.createElement("code",null,l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token tag"},l.a.createElement("span",{className:"token punctuation"},"<"),"TransitionGroup"),l.a.createElement("span",{className:"token punctuation"},">")))," ","\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0430 ",l.a.createElement("code",null,"in")," \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0433\u043e \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u044f\u0435\u043c\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430."),l.a.createElement("p",null,"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043f\u0440\u043e\u043f ",l.a.createElement("code",null,"component"),", \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u0438\u043f HTML-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u0440\u0435\u043d\u0434\u0435\u0440\u0438\u0442\u044c \u043a\u0430\u043a \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0431\u0443\u0434\u0435\u0442 ",l.a.createElement("code",null,"div"),". \u0414\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0441\u0442\u0438\u043b\u0435\u0439 \u0435\u0441\u0442\u044c \u043f\u0440\u043e\u043f"," ",l.a.createElement("code",null,"className"),", \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443."),l.a.createElement(r.a,{link:"https://codesandbox.io/s/7zn06zzkn1?from-embed",text:"CodeSandbox"}),l.a.createElement("h3",null,"2.5. \u0410\u043d\u0438\u043c\u0430\u0446\u0438\u044f \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.a,{link:"http://reactcommunity.org/react-transition-group/with-react-router",text:"RTG With React Router"})),l.a.createElement("li",null,l.a.createElement(r.a,{link:"http://maisano.github.io/react-router-transition/",text:"React Router Transition"})),l.a.createElement("li",null,l.a.createElement(r.a,{link:"https://youtu.be/chAJ61qxrz0",text:"React Router v4 and animating transitions"}))),l.a.createElement("h3",null,"2.6. \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.a,{link:"https://youtu.be/QalLF-sAmVc",text:"Animating The Virtual DOM"})),l.a.createElement("li",null,l.a.createElement(r.a,{link:"https://github.com/chenglou/react-motion",text:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 React Motion"})),l.a.createElement("li",null,l.a.createElement(r.a,{link:"https://alligator.io/react/react-motion/",text:"Animations in React Using React Motion"})),l.a.createElement("li",null,l.a.createElement(r.a,{link:"https://medium.com/@nashvail/a-gentle-introduction-to-react-motion-dc50dd9f2459",text:"A gentle introduction to React Motion"})),l.a.createElement("li",null,l.a.createElement(r.a,{link:"https://medium.com/@bjorn.holdt/react-motion-101-springs-336f4f29d95a",text:"React-motion 101: Springs"})),l.a.createElement("li",null,l.a.createElement(r.a,{link:"https://github.com/react-tools/react-move",text:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 React Move"})),l.a.createElement("li",null,l.a.createElement(r.a,{link:"https://github.com/gabiseabra/styled-transition-group",text:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 styled-transition-group"}))))))}},35:function(e,t,a){"use strict";var n=a(1),l=a.n(n);t.a=function(e){var t=e.link,a=e.text;return l.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},a)}}}]);
//# sourceMappingURL=lesson-10.8cf9ebf1.chunk.js.map