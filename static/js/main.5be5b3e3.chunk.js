(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),s=(n(17),n(1)),i=n.n(s),l=n(4),u=n(5),d=n(6),p=n(9),m=n(7),f=n(10),h=n(8),k=n.n(h),w=(n(21),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={tankID:null},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.worldoftanks.com/wot/encyclopedia/vehicles/?application_id=".concat("aaa6c3a09846d5577e6377e3e6fa3676","&fields=modules_tree%2Cname%2Cnation%2Ctank_id"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=(n=e.sent).data,console.log(n),Object.keys(n).forEach(function(e){n[e].modules_ids=Object.keys(n[e].modules_tree)}),console.log(n[Object.keys(n)[0]]);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:k.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload. key: ","aaa6c3a09846d5577e6377e3e6fa3676".substring(0,5)),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[11,2,1]]]);
//# sourceMappingURL=main.5be5b3e3.chunk.js.map