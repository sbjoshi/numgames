(this.webpackJsonpnumgames=this.webpackJsonpnumgames||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/buzzer.bba88b52.mp3"},function(e,t,n){e.exports=n.p+"static/media/cheers1.8059c7c9.mp3"},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),i=n.n(s),o=(n(16),n(2)),l=n.n(o),u=(n(17),n(18),n(3)),c=n(4),m=n(1),h=n(6),d=n(5),f=n(9),b=n.n(f),v=n(10),p=n.n(v),w=new l.a(b.a,{volume:.4,throttleMs:100}),g=new l.a(p.a,{volume:.4,throttleMs:100});function y(e){return r.a.createElement("text",{style:{fontSize:40}}," Your score is : ",r.a.createElement("span",{style:{color:"orange"}},e.score,"/",e.nq)," ")}function S(e){return e.isCorrect?{color:"green"}:{color:"red"},r.a.createElement("text",{style:{fontSize:40}}," ",e.text," ")}function C(e){var t;return t=e.order.localeCompare("before")?{color:"magenta"}:{color:"cyan"},r.a.createElement("text",{style:{fontSize:40}}," What comes  ",r.a.createElement("span",{style:t},e.order," ")," ",e.number,"?")}var E=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={isBefore:!0,mynum:2,answer:"",isCorrect:!1,answerStatusText:"",score:0,numQuestions:1},a.handleAnswerChange=a.handleAnswerChange.bind(Object(m.a)(a)),a.handleAnswerSubmit=a.handleAnswerSubmit.bind(Object(m.a)(a)),a.generateNewQuestion=a.generateNewQuestion.bind(Object(m.a)(a)),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.nameInput.focus()}},{key:"componentDidUpdate",value:function(){this.nameInput.focus()}},{key:"generateNewQuestion",value:function(){var e=this.state.numQuestions+1,t=Math.floor(99*Math.random()+1),n=Math.random()<.5;this.setState({isBefore:n,mynum:t,answerStatusText:"",answer:"",isCorrect:!1,numQuestions:e})}},{key:"handleAnswerSubmit",value:function(){var e=this.state.score;this.state.isBefore&&this.state.answer==this.state.mynum-1||!this.state.isBefore&&this.state.answer==this.state.mynum+1?(this.setState({isCorrect:!0,answerStatusText:String.fromCodePoint("0x1F913"),score:e+1}),g.play()):(this.setState({isCorrect:!1,answerStatusText:String.fromCodePoint("0x1F62D")}),w.play())}},{key:"handleAnswerChange",value:function(e){this.setState({answer:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.isBefore?"before":"after";return r.a.createElement("div",null,r.a.createElement(y,{score:this.state.score,nq:this.state.numQuestions})," ",r.a.createElement("br",null),r.a.createElement(C,{order:t,number:this.state.mynum}),r.a.createElement("input",{autoFocus:!0,style:{fontSize:40},type:"text",maxLength:"2",size:"2",value:this.state.answer,onChange:this.handleAnswerChange,ref:function(t){e.nameInput=t}}),r.a.createElement(S,{isCorrect:this.state.isCorrect,text:this.state.answerStatusText}),r.a.createElement("br",null),r.a.createElement("button",{style:{fontSize:40},onClick:this.handleAnswerSubmit,disabled:this.state.isCorrect},"Submit "),r.a.createElement("button",{style:{fontSize:40},onClick:this.generateNewQuestion}," Play another "))}}]),n}(r.a.Component),x=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={value:"",isInitialized:!1},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(c.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){this.setState({isInitialized:!0}),e.preventDefault()}},{key:"render",value:function(){return this.state.isInitialized?r.a.createElement("div",null,r.a.createElement("h1",null," Hello, ",this.state.value,"!"),r.a.createElement(E,null)):r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Name:",r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Submit"}))}}]),n}(r.a.Component);var k=function(){return r.a.createElement(x,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.23e4cc94.chunk.js.map