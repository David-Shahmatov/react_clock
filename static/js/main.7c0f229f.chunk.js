(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),o=c(2),i=c(3),r=c(5),s=c(4),l=c(1),u=(c(12),c(0)),m=function(e){Object(r.a)(c,e);var t=Object(s.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={time:new Date},e.timer=0,e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.timer=window.setInterval((function(){e.setState({time:new Date}),console.info(e.state.time.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(e){e.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timer)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:this.state.time.toLocaleTimeString()})]})}}]),c}(l.Component);function k(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(r.a)(c,e);var t=Object(s.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",(function(t){t.preventDefault(),e.setState({hasClock:!1})})),document.addEventListener("click",(function(){e.setState({hasClock:!0})})),window.setInterval((function(){e.setState({clockName:k()})}),3300)}},{key:"render",value:function(){var e=this.state,t=e.clockName,c=e.hasClock;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),c&&Object(u.jsx)(m,{clockName:t})]})}}]),c}(l.Component);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7c0f229f.chunk.js.map