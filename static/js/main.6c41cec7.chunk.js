(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{86:function(e,t,a){e.exports=a(87)},87:function(e,t,a){"use strict";a.r(t);var r=a(85),n=a(38),s=a(39),i=a(41),l=a(40),u=a(42),c=a(0),o=a.n(c),d=a(84),m=a.n(d);a(92),a(93),a(229);function h(e){return o.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();b(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(h,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=b(this.state.squares);return e=t?"Winner: "+t:"Next Player: "+(this.state.xIsNext?"X":"O"),o.a.createElement("div",null,o.a.createElement("div",{className:"status"},e),o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(o.a.Component);function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(r.a)(t[a],3),s=n[0],i=n[1],l=n[2];if(e[s]&&e[s]===e[i]&&e[s]===e[l])return e[s]}return null}var f=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(v,null)),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null),o.a.createElement("ol",null)))}}]),t}(o.a.Component);m.a.render(o.a.createElement(f,null),document.getElementById("root"))},92:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.6c41cec7.chunk.js.map