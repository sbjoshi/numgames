(this.webpackJsonpnumgames=this.webpackJsonpnumgames||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/buzzer.bba88b52.mp3"},function(e,t,n){e.exports=n.p+"static/media/cheers1.8059c7c9.mp3"},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(8),i=n.n(r),o=(n(16),n(17),n(18),n(2)),u=n(3),l=n(1),c=n(6),m=n(5),h=n(4),d=n.n(h),b=n(9),f=n.n(b),v=n(10),p=n.n(v),w=new d.a(f.a,{volume:.4,throttleMs:100}),S=new d.a(p.a,{volume:.4,throttleMs:100});function g(e){return s.a.createElement("text",{style:{fontSize:40}}," Your score is : ",s.a.createElement("span",{style:{color:"blue"}},e.score,"/",e.nq)," ")}function y(e){return e.isCorrect?{color:"green"}:{color:"red"},s.a.createElement("text",{style:{fontSize:40}}," ",e.text," ")}function E(e){var t;return t={color:"magenta"},s.a.createElement("text",{style:{fontSize:40}}," What is  ",s.a.createElement("span",{style:t},e.n1," ")," + ",s.a.createElement("span",{style:t}," ",e.n2," "),"?")}function C(e,t){return Math.floor(Math.random()*t+e)}var x=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={num1:C(1,5),num2:C(1,5),answer:"",isCorrect:!1,answerStatusText:"",score:0,numQuestions:1},a.handleAnswerChange=a.handleAnswerChange.bind(Object(l.a)(a)),a.handleAnswerSubmit=a.handleAnswerSubmit.bind(Object(l.a)(a)),a.generateNewQuestion=a.generateNewQuestion.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.nameInput.focus()}},{key:"componentDidUpdate",value:function(){this.nameInput.focus()}},{key:"generateNewQuestion",value:function(){var e=this.state.numQuestions+1,t=C(1,5),n=C(1,5);this.setState({num1:t,num2:n,answerStatusText:"",answer:"",isCorrect:!1,numQuestions:e})}},{key:"handleAnswerSubmit",value:function(){var e=this.state.score;this.state.answer==this.state.num1+this.state.num2?(this.setState({isCorrect:!0,answerStatusText:String.fromCodePoint("0x1F913"),score:e+1}),S.play()):(this.setState({isCorrect:!1,answerStatusText:String.fromCodePoint("0x1F62D")}),w.play())}},{key:"handleAnswerChange",value:function(e){this.setState({answer:e.target.value})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(g,{score:this.state.score,nq:this.state.numQuestions})," ",s.a.createElement("br",null),s.a.createElement(E,{n1:this.state.num1,n2:this.state.num2}),s.a.createElement("input",{autoFocus:!0,style:{fontSize:40},type:"text",maxLength:"2",size:"2",value:this.state.answer,onChange:this.handleAnswerChange,ref:function(t){e.nameInput=t}}),s.a.createElement(y,{isCorrect:this.state.isCorrect,text:this.state.answerStatusText}),s.a.createElement("br",null),s.a.createElement("button",{style:{fontSize:40},onClick:this.handleAnswerSubmit,disabled:this.state.isCorrect},"Submit "),s.a.createElement("button",{style:{fontSize:40},onClick:this.generateNewQuestion}," Play another "))}}]),n}(s.a.Component),k=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={value:"",isInitialized:!1},a.handleChange=a.handleChange.bind(Object(l.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){this.setState({isInitialized:!0}),e.preventDefault()}},{key:"render",value:function(){return this.state.isInitialized?s.a.createElement("div",null,s.a.createElement("h1",null," Hello, ",this.state.value,"!"),s.a.createElement(x,null)):s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",null,"Name:",s.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),s.a.createElement("input",{type:"submit",value:"Submit"}))}}]),n}(s.a.Component);var j=function(){return s.a.createElement(k,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.e7972ae0.chunk.js.map