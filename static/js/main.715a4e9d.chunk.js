(this.webpackJsonpfifteens=this.webpackJsonpfifteens||[]).push([[0],{14:function(e,t,n){e.exports={container:"Dashboard_container__VZJFm",dashboard:"Dashboard_dashboard__3pmzt",doneMessage:"Dashboard_doneMessage__1V7v9",onDone:"Dashboard_onDone__1R-mN"}},15:function(e,t,n){e.exports={container:"Cell_container__2Hlr7",number:"Cell_number__3PmW_",emplty:"Cell_emplty__34REJ"}},18:function(e,t,n){e.exports={container:"Fifteens_container__1Pfgo",newGameButtonContainer:"Fifteens_newGameButtonContainer__1yAZX"}},23:function(e,t,n){e.exports={newGameButton:"NewGameButton_newGameButton__Ic5XD"}},24:function(e,t,n){e.exports={container:"App_container__eSJ6i"}},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),o=n.n(s),r=n(22),c=n.n(r),i=(n(32),n(7)),l=n(8),u=n(10),h=n(9),d=n(25),m=n(2),p=n(11),b=n(15),j=n.n(b),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t="".concat(j.a.container," ").concat(this.props.number?"":j.a.emplty),n={gridColumn:this.props.y,gridRow:this.props.x};return Object(a.jsx)("div",{className:t,style:n,onMouseDown:function(t){return e.props.onClick(e.props.number)},children:Object(a.jsx)("div",{className:j.a.number,children:this.props.number})})}}]),n}(o.a.Component),S=n(14),v=n.n(S),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).FINAL_STATE=a.createFinalState(),a.cells=void 0,a.onCellClicked=a.onCellClicked.bind(Object(p.a)(a)),a.state={cellsState:a.createRandomCellsState()},a}return Object(l.a)(n,[{key:"render",value:function(){this.props.shouldStartNewGame&&(this.setState({cellsState:this.createRandomCellsState()}),this.props.onGameStarts()),this.props.isGameProceeds&&this.checkCompleteness()&&this.props.onGameStoped(),this.cells=this.collectCells();var e=null;this.props.isGameProceeds||(e=Object(a.jsx)("div",{className:v.a.doneMessage,children:"Done!"}));var t="\n            ".concat(v.a.dashboard,"\n            ").concat(this.props.isGameProceeds?"":v.a.onDone,"\n        ");return Object(a.jsxs)("div",{className:v.a.container,children:[Object(a.jsx)("div",{className:t,children:this.cells}),e]})}},{key:"collectCells",value:function(){for(var e,t=[],n=0;n<16;n++)e=n+1<16?n+1:null,t.push(Object(a.jsx)(f,{number:e,x:this.state.cellsState[n].x,y:this.state.cellsState[n].y,onClick:this.onCellClicked},n));return t}},{key:"onCellClicked",value:function(e){e&&this.props.isGameProceeds&&this.handleCellsState(e)}},{key:"handleCellsState",value:function(e){var t=e-1,n=this.cells.length-1,a=this.cells[t],s=this.cells[n],o=a.props.x,r=a.props.y,c=s.props.x,i=s.props.y;if(this.isEmptyAround(o,r,c,i)){var l=this.state.cellsState.slice();l[t].x=c,l[t].y=i,l[n].x=o,l[n].y=r,this.setState({cellsState:l})}}},{key:"isEmptyAround",value:function(e,t,n,a){return e===n&&(t-1===a||t+1===a)||t===a&&(e-1===n||e+1===n)}},{key:"checkCompleteness",value:function(){for(var e=0;e<this.FINAL_STATE.length;e++){var t=this.state.cellsState[e].x,n=this.state.cellsState[e].y;if(t!==this.FINAL_STATE[e].x||n!==this.FINAL_STATE[e].y)return!1}return!0}},{key:"createRandomCellsState",value:function(){for(var e=this.createFinalState(),t=[],n=0;n<this.FINAL_STATE.length;n++){var a=Math.floor(Math.random()*e.length);t.push(e[a]),e.splice(a,1)}return t}},{key:"createFinalState",value:function(){for(var e=[],t=1;t<=4;t++)for(var n=1;n<=4;n++)e.push({x:t,y:n});return e}}]),n}(o.a.Component),G=n(18),_=n.n(G),y=n(23),C=n.n(y),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("button",{className:C.a.newGameButton,onClick:this.props.onNewGame,children:"New game"})}}]),n}(o.a.Component),N=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onNewGame=a.onNewGame.bind(Object(p.a)(a)),a.onGameStarted=a.onGameStarted.bind(Object(p.a)(a)),a.onGameStoped=a.onGameStoped.bind(Object(p.a)(a)),a.state={shouldStartNewGame:!0,isGameProceeds:!1},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:_.a.container,children:[Object(a.jsx)(O,{isGameProceeds:this.state.isGameProceeds,shouldStartNewGame:this.state.shouldStartNewGame,onGameStarts:this.onGameStarted,onGameStoped:this.onGameStoped}),Object(a.jsx)("div",{className:_.a.newGameButtonContainer,children:Object(a.jsx)(x,{onNewGame:this.onNewGame})})]})}},{key:"onNewGame",value:function(){this.setState({shouldStartNewGame:!0})}},{key:"onGameStarted",value:function(){this.setState({isGameProceeds:!0,shouldStartNewGame:!1})}},{key:"onGameStoped",value:function(){this.setState({isGameProceeds:!1})}}]),n}(o.a.Component),k=n(24),w=n.n(k),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:w.a.container,children:Object(a.jsx)(d.a,{children:Object(a.jsxs)(m.d,{children:[Object(a.jsx)(m.b,{path:"/fifteens",children:Object(a.jsx)(N,{})}),Object(a.jsx)(m.a,{from:"*",to:"/fifteens"})]})})})}}]),n}(o.a.Component),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),o(e),r(e)}))};c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),F()}},[[38,1,2]]]);
//# sourceMappingURL=main.715a4e9d.chunk.js.map