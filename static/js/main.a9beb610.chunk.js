(this.webpackJsonpnumgames=this.webpackJsonpnumgames||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/buzzer.bba88b52.mp3"},22:function(e,t,n){e.exports=n.p+"static/media/cheers1.8059c7c9.mp3"},62:function(e,t,n){e.exports=n(73)},67:function(e,t,n){},68:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},69:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),i=n.n(s),o=(n(67),n(68),n(69),n(15)),l=n(16),u=n(10),c=n(18),m=n(17),h=n(109),d=n(14),f=n.n(d),b=n(21),v=n.n(b),g=n(22),S=n.n(g),w=n(111),p=n(112),C=n(107),E=n(113),x=n(110),y=n(106),F=n(108),j=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(E.a,{component:"fieldset"},r.a.createElement(y.a,{component:"legend"},"Game Type"),r.a.createElement(x.a,{id:"standard-basic",label:"Name",onChange:this.props.textChangeHandler}),r.a.createElement(p.a,{"aria-label":"Game Choice",name:"gamechoice",onChange:this.props.choiceChangeHandler},r.a.createElement(C.a,{value:"2",control:r.a.createElement(w.a,null),label:"Addition"}),r.a.createElement(C.a,{value:"3",control:r.a.createElement(w.a,null),label:"BiggerOrSmaller"}),r.a.createElement(C.a,{value:"1",control:r.a.createElement(w.a,null),label:"BeforeAfter"})),r.a.createElement(F.a,{variant:"outlined",color:"primary",href:"#outlined-buttons",onClick:this.props.submitHandler},"Submit"))}}]),n}(r.a.Component),k=n(74),O=["0x1F408","0x1F9AE","0x1F404","0x1F416","0x1F411","0x1F42A","0x1F992","0x1F418","0x1F98F","0x1F400","0x1F407","0x1F43F","0x1F987","0x1F998"],A=new f.a(v.a,{volume:.4,throttleMs:100}),z=new f.a(S.a,{volume:.4,throttleMs:100});function M(e){return r.a.createElement(k.a,{variant:"h4"}," Your score is : ",r.a.createElement("span",{style:{color:"blue"}},e.score,"/",e.nq)," ")}function Q(e){return e.isCorrect?{color:"green"}:{color:"red"},r.a.createElement("text",{style:{fontSize:40}}," ",e.text," ")}function I(e){return r.a.createElement("text",{style:{fontSize:40}}," ",function(e,t,n){var a=String.fromCodePoint(e).repeat(t),r=String.fromCodePoint(e).repeat(n);return a.concat("+",r)}(e.emoji,e.n1,e.n2)," ")}function N(e){var t;return t={color:"magenta"},r.a.createElement(k.a,{variant:"h4"}," What is  ",r.a.createElement("span",{style:t},e.n1," ")," + ",r.a.createElement("span",{style:t}," ",e.n2," "),"? ")}function T(e,t){return Math.floor(Math.random()*t+e)}var P=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={emojiIndex:O[Math.floor(Math.random()*O.length)],num1:T(1,5),num2:T(1,5),answer:"",isCorrect:!1,answerStatusText:"",score:0,numQuestions:1},a.handleAnswerChange=a.handleAnswerChange.bind(Object(u.a)(a)),a.handleAnswerSubmit=a.handleAnswerSubmit.bind(Object(u.a)(a)),a.generateNewQuestion=a.generateNewQuestion.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.nameInput.focus()}},{key:"componentDidUpdate",value:function(){this.nameInput.focus()}},{key:"generateNewQuestion",value:function(){var e=this.state.numQuestions+1,t=T(1,5),n=T(1,5),a=O[Math.floor(Math.random()*O.length)];this.setState({emojiIndex:a,num1:t,num2:n,answerStatusText:"",answer:"",isCorrect:!1,numQuestions:e})}},{key:"handleAnswerSubmit",value:function(){var e=this.state.score;this.state.answer==this.state.num1+this.state.num2?(this.setState({isCorrect:!0,answerStatusText:String.fromCodePoint("0x1F913"),score:e+1}),z.play()):(this.setState({isCorrect:!1,answerStatusText:String.fromCodePoint("0x1F62D")}),A.play())}},{key:"handleAnswerChange",value:function(e){this.setState({answer:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(M,{score:this.state.score,nq:this.state.numQuestions})," ",r.a.createElement("br",null),r.a.createElement(N,{n1:this.state.num1,n2:this.state.num2}),r.a.createElement(x.a,{id:"answer-text",variant:"outlined",autoFocus:!0,inputProps:{style:{fontSize:30}},maxLength:"2",size:"2",value:this.state.answer,onChange:this.handleAnswerChange,ref:function(t){e.nameInput=t}}),r.a.createElement(Q,{isCorrect:this.state.isCorrect,text:this.state.answerStatusText}),r.a.createElement("br",null),r.a.createElement(I,{emoji:this.state.emojiIndex,n1:this.state.num1,n2:this.state.num2})," ",r.a.createElement("br",null),r.a.createElement(F.a,{variant:"outlined",style:{fontSize:40},color:"primary",href:"#outlined-buttons",onClick:this.handleAnswerSubmit,disabled:this.state.isCorrect},"Submit "),r.a.createElement(F.a,{variant:"outlined",style:{fontSize:40},color:"primary",href:"#outlined-buttons",onClick:this.generateNewQuestion},"Play another "))}}]),n}(r.a.Component),B=new f.a(v.a,{volume:.4,throttleMs:100}),D=new f.a(S.a,{volume:.4,throttleMs:100});function H(e){return r.a.createElement("text",{style:{fontSize:40}}," Your score is : ",r.a.createElement("span",{style:{color:"orange"}},e.score,"/",e.nq)," ")}function q(e){return e.isCorrect?{color:"green"}:{color:"red"},r.a.createElement("text",{style:{fontSize:40}}," ",e.text," ")}function W(e){var t;return t=e.order.localeCompare("before")?{color:"magenta"}:{color:"cyan"},r.a.createElement("text",{style:{fontSize:40}}," What comes  ",r.a.createElement("span",{style:t},e.order," ")," ",e.number,"?")}var G=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={isBefore:!0,mynum:2,answer:"",isCorrect:!1,answerStatusText:"",score:0,numQuestions:1},a.handleAnswerChange=a.handleAnswerChange.bind(Object(u.a)(a)),a.handleAnswerSubmit=a.handleAnswerSubmit.bind(Object(u.a)(a)),a.generateNewQuestion=a.generateNewQuestion.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.nameInput.focus()}},{key:"componentDidUpdate",value:function(){this.nameInput.focus()}},{key:"generateNewQuestion",value:function(){var e=this.state.numQuestions+1,t=Math.floor(999*Math.random()+1),n=Math.random()<.5;this.setState({isBefore:n,mynum:t,answerStatusText:"",answer:"",isCorrect:!1,numQuestions:e})}},{key:"handleAnswerSubmit",value:function(){var e=this.state.score;this.state.isBefore&&this.state.answer==this.state.mynum-1||!this.state.isBefore&&this.state.answer==this.state.mynum+1?(this.setState({isCorrect:!0,answerStatusText:String.fromCodePoint("0x1F913"),score:e+1}),D.play()):(this.setState({isCorrect:!1,answerStatusText:String.fromCodePoint("0x1F62D")}),B.play())}},{key:"handleAnswerChange",value:function(e){this.setState({answer:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.isBefore?"before":"after";return r.a.createElement("div",null,r.a.createElement(H,{score:this.state.score,nq:this.state.numQuestions})," ",r.a.createElement("br",null),r.a.createElement(W,{order:t,number:this.state.mynum}),r.a.createElement("input",{autoFocus:!0,style:{fontSize:40},type:"text",maxLength:"4",size:"4",value:this.state.answer,onChange:this.handleAnswerChange,ref:function(t){e.nameInput=t}}),r.a.createElement(q,{isCorrect:this.state.isCorrect,text:this.state.answerStatusText}),r.a.createElement("br",null),r.a.createElement("button",{style:{fontSize:40},onClick:this.handleAnswerSubmit,disabled:this.state.isCorrect},"Submit "),r.a.createElement("button",{style:{fontSize:40},onClick:this.generateNewQuestion}," Play another "))}}]),n}(r.a.Component),Y=new f.a(v.a,{volume:.4,throttleMs:100}),L=new f.a(S.a,{volume:.4,throttleMs:100});function U(e){return r.a.createElement(k.a,{variant:"h4"}," Your score is : ",r.a.createElement("span",{style:{color:"blue"}},e.score,"/",e.nq)," ")}function J(e){return e.isCorrect?{color:"green"}:{color:"red"},r.a.createElement("text",{style:{fontSize:40}}," ",e.text," ")}function R(e){var t,n;t={color:"magenta"};var a=e.isSmaller?"smaller":"BIGGER";return n=e.isSmaller?{color:"green"}:{color:"orange"},r.a.createElement(k.a,{variant:"h4"}," Which number is  ",r.a.createElement("span",{style:n}," ",a," "),"?  ",r.a.createElement("span",{style:t},e.n1," ")," or ",r.a.createElement("span",{style:t}," ",e.n2," "),"? ")}function $(e,t){return Math.floor(Math.random()*t+e)}var K=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={num1:$(0,9999),num2:$(0,9999),answer:"",isCorrect:!1,isSmaller:!0,answerStatusText:"",score:0,numQuestions:1},a.handleAnswerChange=a.handleAnswerChange.bind(Object(u.a)(a)),a.handleAnswerSubmit=a.handleAnswerSubmit.bind(Object(u.a)(a)),a.generateNewQuestion=a.generateNewQuestion.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.nameInput.focus()}},{key:"componentDidUpdate",value:function(){this.nameInput.focus()}},{key:"generateNewQuestion",value:function(){for(var e=this.state.numQuestions+1,t=$(0,9999),n=$(0,9999);t==n;)n=$(0,9999);var a=$(1,10)%2;this.setState({num1:t,num2:n,answerStatusText:"",answer:"",isSmaller:!a,isCorrect:!1,numQuestions:e})}},{key:"handleAnswerSubmit",value:function(){var e=this.state.score,t=this.state.num1<this.state.num2?this.state.num1:this.state.num2,n=this.state.num1+this.state.num2-t;this.state.answer==(this.state.isSmaller?t:n)?(this.setState({isCorrect:!0,answerStatusText:String.fromCodePoint("0x1F913"),score:e+1}),L.play()):(this.setState({isCorrect:!1,answerStatusText:String.fromCodePoint("0x1F62D")}),Y.play())}},{key:"handleAnswerChange",value:function(e){this.setState({answer:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(U,{score:this.state.score,nq:this.state.numQuestions})," ",r.a.createElement("br",null),r.a.createElement(R,{n1:this.state.num1,n2:this.state.num2,isSmaller:this.state.isSmaller}),r.a.createElement(x.a,{id:"answer-text",variant:"outlined",autoFocus:!0,inputProps:{style:{fontSize:30}},maxLength:"4",size:"4",value:this.state.answer,onChange:this.handleAnswerChange,ref:function(t){e.nameInput=t}}),r.a.createElement(J,{isCorrect:this.state.isCorrect,text:this.state.answerStatusText}),r.a.createElement("br",null),r.a.createElement(F.a,{variant:"outlined",style:{fontSize:40},color:"primary",href:"#outlined-buttons",onClick:this.handleAnswerSubmit,disabled:this.state.isCorrect},"Submit "),r.a.createElement(F.a,{variant:"outlined",style:{fontSize:40},color:"primary",href:"#outlined-buttons",onClick:this.generateNewQuestion},"Play another "))}}]),n}(r.a.Component),V=["0x1F408","0x1F9AE","0x1F404","0x1F416","0x1F411","0x1F42A","0x1F992","0x1F418","0x1F98F","0x1F400","0x1F407","0x1F43F","0x1F987","0x1F998"],X=new f.a(v.a,{volume:.4,throttleMs:100}),Z=new f.a(S.a,{volume:.4,throttleMs:100});function _(e){return r.a.createElement("text",{style:{fontSize:40}}," Your score is : ",r.a.createElement("span",{style:{color:"blue"}},e.score,"/",e.nq)," ")}function ee(e){return e.isCorrect?{color:"green"}:{color:"red"},r.a.createElement("text",{style:{fontSize:40}}," ",e.text," ")}function te(e){return r.a.createElement("text",{style:{fontSize:40}}," ",function(e,t,n){var a=String.fromCodePoint(e).repeat(t),r=String.fromCodePoint(e).repeat(n);return a.concat("+",r)}(e.emoji,e.n1,e.n2)," ")}function ne(e){var t;return t={color:"magenta"},r.a.createElement("text",{style:{fontSize:40}}," What is  ",r.a.createElement("span",{style:t},e.n1," ")," + ",r.a.createElement("span",{style:t}," ",e.n2," "),"?")}function ae(e,t){return Math.floor(Math.random()*t+e)}r.a.Component,Object(h.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));var re=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={value:"",isInitialized:!1,gc:""},a.handleNameChange=a.handleNameChange.bind(Object(u.a)(a)),a.gameChoiceChange=a.gameChoiceChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"gameChoiceChange",value:function(e){this.setState({gc:e.target.value})}},{key:"handleNameChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){this.setState({isInitialized:!0}),e.preventDefault()}},{key:"render",value:function(){return this.state.isInitialized&&1==this.state.gc?r.a.createElement("div",null,r.a.createElement("h1",null," Hello, ",this.state.value,"!"),r.a.createElement(G,null)):this.state.isInitialized&&2==this.state.gc?r.a.createElement("div",null,r.a.createElement("h1",null," Hello, ",this.state.value,"! "),r.a.createElement(P,null)," "):this.state.isInitialized&&3==this.state.gc?r.a.createElement("div",null,r.a.createElement("h1",null," Hello, ",this.state.value,"! "),r.a.createElement(K,null)," "):r.a.createElement(j,{textChangeHandler:this.handleNameChange,choiceChangeHandler:this.gameChoiceChange,submitHandler:this.handleSubmit})}}]),n}(r.a.Component);var se=function(){return r.a.createElement(re,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.a9beb610.chunk.js.map