(this.webpackJsonpfifteens=this.webpackJsonpfifteens||[]).push([[0],{13:function(e,t,n){e.exports={container:"Fifteens_container__1Pfgo",countersContainer:"Fifteens_countersContainer__2r_os",timer:"Fifteens_timer__3IhtC",movesCounter:"Fifteens_movesCounter__3jqxA",newGameButtonContainer:"Fifteens_newGameButtonContainer__1yAZX"}},15:function(e,t,n){e.exports={container:"Dashboard_container__VZJFm",dashboard:"Dashboard_dashboard__3pmzt",doneMessage:"Dashboard_doneMessage__1V7v9",onDone:"Dashboard_onDone__1R-mN"}},16:function(e,t,n){e.exports={container:"Cell_container__2Hlr7",number:"Cell_number__3PmW_",emplty:"Cell_emplty__34REJ"}},23:function(e,t,n){e.exports={container:"MovesCounter_container__2it--"}},24:function(e,t,n){e.exports={newGameButton:"NewGameButton_newGameButton__Ic5XD"}},25:function(e,t,n){e.exports={container:"Timer_container__2Hvjs"}},26:function(e,t,n){e.exports={container:"App_container__eSJ6i"}},34:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),o=n.n(a),r=n(22),i=n.n(r),c=(n(34),n(4)),l=n(5),u=n(7),d=n(6),h=n(27),m=n(2),p=n(11),j=n(16),b=n.n(j),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t="".concat(b.a.container," ").concat(this.props.number?"":b.a.emplty),n={gridColumn:this.props.y,gridRow:this.props.x};return Object(s.jsx)("div",{className:t,style:n,onMouseDown:function(t){return e.props.onClick(e.props.number)},children:Object(s.jsx)("div",{className:b.a.number,children:this.props.number})})}}]),n}(o.a.Component),f=n(15),O=n.n(f),C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).FINAL_STATE=s.createFinalState(),s.cells=void 0,s.onCellClicked=s.onCellClicked.bind(Object(p.a)(s)),s.state={cellsState:s.createRandomCellsState()},s}return Object(l.a)(n,[{key:"render",value:function(){this.props.shouldStartNewGame&&(this.setState({cellsState:this.createRandomCellsState()}),this.props.onGameStarts()),this.props.isGameProceeds&&this.checkCompleteness()&&this.props.onGameStoped(),this.cells=this.collectCells();var e=null;this.props.isGameProceeds||(e=Object(s.jsx)("div",{className:O.a.doneMessage,children:"Done!"}));var t="\n            ".concat(O.a.dashboard,"\n            ").concat(this.props.isGameProceeds?"":O.a.onDone,"\n        ");return Object(s.jsxs)("div",{className:O.a.container,children:[Object(s.jsx)("div",{className:t,children:this.cells}),e]})}},{key:"collectCells",value:function(){for(var e,t=[],n=0;n<16;n++)e=n+1<16?n+1:null,t.push(Object(s.jsx)(v,{number:e,x:this.state.cellsState[n].x,y:this.state.cellsState[n].y,onClick:this.onCellClicked},n));return t}},{key:"onCellClicked",value:function(e){e&&this.props.isGameProceeds&&this.handleCellsState(e)}},{key:"handleCellsState",value:function(e){var t=e-1,n=this.cells.length-1,s=this.cells[t],a=this.cells[n],o=s.props.x,r=s.props.y,i=a.props.x,c=a.props.y;if(this.isEmptyAround(o,r,i,c)){var l=this.state.cellsState.slice();l[t].x=i,l[t].y=c,l[n].x=o,l[n].y=r,this.setState({cellsState:l}),this.props.onCellMoved()}}},{key:"isEmptyAround",value:function(e,t,n,s){return e===n&&(t-1===s||t+1===s)||t===s&&(e-1===n||e+1===n)}},{key:"checkCompleteness",value:function(){for(var e=0;e<this.FINAL_STATE.length;e++){var t=this.state.cellsState[e].x,n=this.state.cellsState[e].y;if(t!==this.FINAL_STATE[e].x||n!==this.FINAL_STATE[e].y)return!1}return!0}},{key:"createRandomCellsState",value:function(){for(var e=this.createFinalState(),t=[],n=0;n<this.FINAL_STATE.length;n++){var s=Math.floor(Math.random()*e.length);t.push(e[s]),e.splice(s,1)}return t}},{key:"createFinalState",value:function(){for(var e=[],t=1;t<=4;t++)for(var n=1;n<=4;n++)e.push({x:t,y:n});return e}}]),n}(o.a.Component),_=n(13),S=n.n(_),x=n(23),y=n.n(x),G=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:y.a.container,children:["Moves: ",this.props.movesCount]})}}]),n}(o.a.Component),N=n(24),k=n.n(N),w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("button",{className:k.a.newGameButton,onClick:this.props.onNewGame,children:"New game"})}}]),n}(o.a.Component),F=n(25),g=n.n(F),A=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:g.a.container,children:[this.props.seconds,"s"]})}}]),n}(o.a.Component),I=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).timerId=void 0,s.onNewGame=s.onNewGame.bind(Object(p.a)(s)),s.onGameStarted=s.onGameStarted.bind(Object(p.a)(s)),s.onGameStoped=s.onGameStoped.bind(Object(p.a)(s)),s.onCellMoved=s.onCellMoved.bind(Object(p.a)(s)),s.state={shouldStartNewGame:!0,isGameProceeds:!1,seconds:0,movesCount:0},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:S.a.container,children:[Object(s.jsxs)("div",{className:S.a.countersContainer,children:[Object(s.jsx)("div",{className:S.a.movesCounter,children:Object(s.jsx)(G,{movesCount:this.state.movesCount})}),Object(s.jsx)("div",{className:S.a.timer,children:Object(s.jsx)(A,{seconds:this.state.seconds})})]}),Object(s.jsx)(C,{isGameProceeds:this.state.isGameProceeds,shouldStartNewGame:this.state.shouldStartNewGame,onGameStarts:this.onGameStarted,onGameStoped:this.onGameStoped,onCellMoved:this.onCellMoved}),Object(s.jsx)("div",{className:S.a.newGameButtonContainer,children:Object(s.jsx)(w,{onNewGame:this.onNewGame})})]})}},{key:"onNewGame",value:function(){this.setState({shouldStartNewGame:!0})}},{key:"onGameStarted",value:function(){this.setState({isGameProceeds:!0,shouldStartNewGame:!1,seconds:0,movesCount:0})}},{key:"onGameStoped",value:function(){this.setState({isGameProceeds:!1}),clearInterval(this.timerId)}},{key:"onCellMoved",value:function(){var e=this;this.setState({movesCount:this.state.movesCount+1}),this.state.isGameProceeds&&0===this.state.seconds&&!this.timerId&&(this.timerId=window.setInterval((function(){e.setState({seconds:e.state.seconds+1})}),1e3))}}]),n}(o.a.Component),M=n(26),P=n.n(M),T=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:P.a.container,children:Object(s.jsx)(h.a,{children:Object(s.jsxs)(m.d,{children:[Object(s.jsx)(m.b,{path:"/fifteens",children:Object(s.jsx)(I,{})}),Object(s.jsx)(m.a,{from:"*",to:"/fifteens"})]})})})}}]),n}(o.a.Component),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),o(e),r(e)}))};i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(T,{})}),document.getElementById("root")),D()}},[[40,1,2]]]);
//# sourceMappingURL=main.00ebfd51.chunk.js.map