(this["webpackJsonpreact-book"]=this["webpackJsonpreact-book"]||[]).push([[70,100],{160:function(e,n,t){"use strict";var a=t(37);function o(e){e.register(a),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")}))}(e)}e.exports=o,o.displayName="handlebars",o.aliases=[]},37:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var s=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,i=s.length;-1!==t.code.indexOf(o=n(a,i));)++i;return s[i]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function s(i){for(var l=0;l<i.length&&!(o>=r.length);l++){var u=i[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=r[o],p=t.tokenStack[c],g="string"===typeof u?u:u.content,f=n(a,c),d=g.indexOf(f);if(d>-1){++o;var k=g.substring(0,d),b=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),h=g.substring(d+f.length),m=[];k&&m.push.apply(m,s([k])),m.push(b),h&&m.push.apply(m,s([h])),"string"===typeof u?i.splice.apply(i,[l,1].concat(m)):u.content=m}}else u.content&&s(u.content)}return i}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.f4364b3c.chunk.js.map