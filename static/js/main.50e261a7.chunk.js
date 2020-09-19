(this["webpackJsonpmorpion-app"]=this["webpackJsonpmorpion-app"]||[]).push([[0],{46:function(e,a,t){e.exports=t(62)},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),u=t.n(r),c=(t(51),t(11)),i=(t(52),t(89)),o=t(41),s=(t(53),t(54),l.a.createContext({currentPlayer:"x",updateTable:function(e,a){},gameEnd:!1}));var m=function(e){var a=e.squareId,t=e.squareContent,r=Object(n.useContext)(s),u=r.currentPlayer,c=r.updateTable,i=r.gameEnd;return l.a.createElement("div",{className:"square"+("o"===t?" blue_text":""),onClick:function(){""!==t||i||c(a,u)}},t)};t(55);var v=function(e){var a=e.squares;return l.a.createElement("div",{className:"table"},a.map((function(e){return l.a.createElement(m,{key:e.id,squareId:e.id,squareContent:e.value})})))},d=t(84),p=t(88),f=t(87),E=t(65),b=l.a.createContext({setShowGame:function(){}}),y=Object(d.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),width:"400px",textAlign:"center"}}}));var h=function(e){var a=e.winner,t=e.resetGame,n=e.setGameEnd,r=y(),u=l.a.useState(!1),o=Object(c.a)(u,2),s=o[0],m=o[1];l.a.useEffect((function(){v()}),[a]);var v=function(){m(!0)},d=function(){n(!1),t(),m(!1)},h=l.a.useContext(b).setShowGame;return l.a.createElement("div",null,l.a.createElement(p.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:r.modal,open:s,onClose:d,closeAfterTransition:!0,BackdropComponent:f.a,BackdropProps:{timeout:500}},l.a.createElement(E.a,{in:s},l.a.createElement("div",{className:r.paper},"xo"===a?l.a.createElement("h2",null,"Game ended in a draw !"):l.a.createElement("h2",null,"Winner is :"," ",l.a.createElement("span",{className:"o"===a?"blue_text":""},a.toUpperCase())),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",marginTop:"15px"},id:"transition-modal-description"},l.a.createElement(i.a,{color:"secondary",variant:"outlined",size:"small",onClick:function(){h(!1),d()}},"Go to Home page"),l.a.createElement(i.a,{variant:"contained",color:"primary",size:"small",onClick:d},"Restart"))))))};var x=function(){var e=Object(n.useState)([{id:0,value:""},{id:1,value:""},{id:2,value:""},{id:3,value:""},{id:4,value:""},{id:5,value:""},{id:6,value:""},{id:7,value:""},{id:8,value:""}]),a=Object(c.a)(e,2),t=a[0],r=a[1],u=Object(n.useState)("x"),i=Object(c.a)(u,2),m=i[0],d=i[1],p=Object(n.useState)(!1),f=Object(c.a)(p,2),E=f[0],b=f[1],y=Object(n.useState)(""),x=Object(c.a)(y,2),g=x[0],j=x[1],O=Object(n.useRef)(!0);Object(n.useEffect)((function(){O.current?O.current=!1:k()}),[t]),Object(n.useEffect)((function(){E||d("x")}),[E]);var k=function(){return""!==t[0].value&&t[0].value===t[1].value&&t[0].value===t[2].value?(j(t[0].value),void b(!0)):""!==t[3].value&&t[3].value===t[4].value&&t[4].value===t[5].value?(j(t[3].value),void b(!0)):""!==t[6].value&&t[6].value===t[7].value&&t[7].value===t[8].value?(j(t[6].value),void b(!0)):""!==t[0].value&&t[0].value===t[3].value&&t[3].value===t[6].value?(j(t[0].value),void b(!0)):""!==t[1].value&&t[1].value===t[4].value&&t[4].value===t[7].value?(j(t[1].value),void b(!0)):""!==t[2].value&&t[2].value===t[5].value&&t[5].value===t[8].value?(j(t[2].value),void b(!0)):""!==t[0].value&&t[0].value===t[4].value&&t[4].value===t[8].value?(j(t[0].value),void b(!0)):""!==t[2].value&&t[2].value===t[4].value&&t[4].value===t[6].value?(j(t[2].value),void b(!0)):(t.every((function(e){return""!==e.value}))&&(j("xo"),b(!0)),void w())},w=function(){"x"===m?d("o"):"o"===m&&d("x")},C={currentPlayer:m,updateTable:function(e,a){var n=Object(o.a)(t),l=n.findIndex((function(a){return a.id===e}));n.splice(l,1,{id:e,value:a}),r(n)},gameEnd:E};return l.a.createElement(s.Provider,{value:C},l.a.createElement("div",{className:"game"},E?l.a.createElement(h,{winner:g,resetGame:function(){d("x"),r([{id:0,value:""},{id:1,value:""},{id:2,value:""},{id:3,value:""},{id:4,value:""},{id:5,value:""},{id:6,value:""},{id:7,value:""},{id:8,value:""}])},setGameEnd:b}):l.a.createElement("h2",null,"Current player :",l.a.createElement("span",{className:"o"===m?"blue_text":""},m.toUpperCase())),l.a.createElement(v,{squares:t})))},g=t(32),j=t.n(g),O=t(40),k=t.n(O),w=t(38),C=t.n(w),N=t(39),S=t.n(N);t(60);var I=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("span",null,"Developped by ",l.a.createElement("span",{className:"name"},"Loucif RAKEM")," in 2020"),l.a.createElement("div",{className:"buttons"},l.a.createElement("a",{href:"https://www.linkedin.com/in/lrakem/"},l.a.createElement(C.a,{fontSize:"large",color:"primary"})),l.a.createElement("a",{href:"https://github.com/Loucif-RAKEM/morpion-app"},l.a.createElement(S.a,{fontSize:"large",color:"action"})),l.a.createElement("a",{href:"mailto:rakem.loucif@gmail.com"},l.a.createElement(k.a,{fontSize:"large",color:"secondary"}))))};var P=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],r=a[1],u=Object(n.useState)(!1),o=Object(c.a)(u,2),s=o[0],m=o[1],v={setShowGame:m};return s?l.a.createElement(b.Provider,{value:v},l.a.createElement(x,null),l.a.createElement(I,null)):l.a.createElement("div",{className:"flex_container"},l.a.createElement("div",{className:"home_text"},l.a.createElement("h1",{className:"title"},l.a.createElement("span",null,"Tic")," ",l.a.createElement("span",{className:"blue_text"},"Tac "),l.a.createElement("span",null,"Toe")),l.a.createElement("p",null,"Press the"," ",l.a.createElement(i.a,{variant:"contained",size:"small",color:"primary",endIcon:l.a.createElement(j.a,null)},"Play")," ","button to start the game. Or simply click the left button for instructions."),t?l.a.createElement("div",{className:"instructions"},l.a.createElement("ul",null,l.a.createElement("li",null,"Play occurs on a 3 by 3 grid of 9 empty squares."),l.a.createElement("li",null,"Two players alternate marking empty squares, the first player marking Xs and the second player marking Os."),l.a.createElement("li",null,"If one player places three of the same marks in a row, that player wins."),l.a.createElement("li",null,"If the spaces are all filled and there is no winner, the game ends in a draw."))):null),l.a.createElement("div",{className:"home_buttons"},l.a.createElement(i.a,{variant:"contained",color:"default",onClick:function(){return r(!t)},size:"large"},t?"hide instructions":"Instructions"),l.a.createElement(i.a,{variant:"contained",color:"primary",id:"playButton",endIcon:l.a.createElement(j.a,null),onClick:function(){return m(!0)},size:"large"},"Play")),l.a.createElement(I,null))};u.a.render(l.a.createElement(P,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.50e261a7.chunk.js.map