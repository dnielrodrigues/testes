(this.webpackJsonphtml=this.webpackJsonphtml||[]).push([[0],{14:function(e,t,r){},8:function(e,t,r){e.exports=r(9)},9:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(2),s=r(3),i=r(4),u=r(7),c=r(0),l=r.n(c),o=r(6),m=r.n(o);r(14);function h(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(u.a)(t[r],3),n=a[0],s=a[1],i=a[2];if(e[n]&&e[n]===e[s]&&e[n]===e[i])return e[n]}return null}function d(e){return l.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var v=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"renderSquare",value:function(e){var t=this;return l.a.createElement(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),l.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),l.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),r}(l.a.Component),p=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},n}return Object(n.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();h(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e=this,t=this.state.history,r=t[this.state.stepNumber],a=h(r.squares),n=t.map((function(t,r){var a=r?"Voltar ao movimento #"+r:"Voltar para o in\xedcio";return l.a.createElement("li",{key:r},l.a.createElement("button",{onClick:function(){return e.jumpTo(r)}},a))})),s=a?"Vencedor: "+a:"Pr\xf3ximo jogador: "+(this.state.xIsNext?"X":"O");return l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game-board"},l.a.createElement(v,{squares:r.squares,onClick:function(t){return e.handleClick(t)}})),l.a.createElement("div",{className:"game-info"},l.a.createElement("div",null,s),l.a.createElement("ol",null,n)))}}]),r}(l.a.Component);m.a.render(l.a.createElement(p,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.82cc06b6.chunk.js.map